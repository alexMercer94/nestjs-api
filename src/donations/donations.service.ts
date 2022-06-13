import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class DonationsService {
  constructor(private prisma: PrismaService) {}

  create(createDonationInput: Prisma.DonationCreateInput) {
    return this.prisma.donation.create({
      data: createDonationInput,
    });
  }

  /**
   * Return everything about Donations Table
   * @returns
   */
  async findAll(orderBy?: { field?: string; direction?: string }) {
    const { field = 'cretedAt', direction = 'desc' } = orderBy || {};

    return this.prisma.donation.findMany({
      orderBy: { [field]: direction },
    });
  }

  /**
   * Return specific donation
   * @param donationWhereUniqueInput ID
   */
  findOne(donationWhereUniqueInput: Prisma.DonationWhereUniqueInput) {
    return this.prisma.donation.findUnique({
      where: donationWhereUniqueInput,
    });
  }

  /**
   * Get total amount of donations
   * @returns
   */
  async getTotal() {
    const response = await this.prisma.donation.aggregate({
      _sum: {
        count: true,
      },
    });

    return response._sum.count;
  }
}
