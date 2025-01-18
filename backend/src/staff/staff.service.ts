import { Injectable } from '@nestjs/common';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StaffService {
  constructor(private prisma: PrismaService) {}

  create(createStaffDto: CreateStaffDto) {
    return this.prisma.staff.createMany({ data: createStaffDto });
  }

  findAll() {
    return this.prisma.staff.findMany();
  }

  findOne(id: string) {
    return this.prisma.staff.findUnique({ where: { id } });
  }

  update(id: string, updateStaffDto: UpdateStaffDto) {
    return this.prisma.staff.update({ where: { id }, data: updateStaffDto });
  }

  remove(id: string) {
    return this.prisma.staff.delete({ where: { id } });
  }
}
