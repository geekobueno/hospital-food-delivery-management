import { Injectable } from '@nestjs/common';
import { CreateAlertDto } from './dto/create-alert.dto';
import { UpdateAlertDto } from './dto/update-alert.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AlertsService {
  constructor(private prisma: PrismaService) {}

  create(createAlertDto: CreateAlertDto) {
    return this.prisma.alert.createMany({ data: createAlertDto });
  }

  findAll() {
    return this.prisma.alert.findMany();
  }

  findOne(id: string) {
    return this.prisma.alert.findUnique({ where: { id } });
  }

  update(id: string, updateAlertDto: UpdateAlertDto) {
    return this.prisma.alert.update({
      where: { id },
      data: updateAlertDto,
    });
  }

  remove(id: string) {
    return this.prisma.alert.delete({ where: { id } });
  }
}
