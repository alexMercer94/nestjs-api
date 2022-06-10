import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { DonationsResolver } from './donations.resolver';
import { DonationsService } from './donations.service';

@Module({
  providers: [DonationsResolver, DonationsService, PrismaService],
})
export class DonationsModule {}
