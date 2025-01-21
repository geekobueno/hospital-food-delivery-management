import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto,
      include: {
        staff: true,
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      include: {
        staff: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: { staff: true },
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
      include: {
        staff: true,
      },
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
      include: {
        staff: true,
      },
    });
  }
}
