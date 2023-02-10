import { Module } from '@nestjs/common';
import { HouseKeepingService } from './house-keeping.service';
import { HouseKeepingController } from './house-keeping.controller';
import { HouseKeeping } from './entities/house-keeping.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [HouseKeepingController],
  providers: [HouseKeepingService],
  imports: [TypeOrmModule.forFeature([HouseKeeping])],
  exports: [HouseKeepingService],

})
export class HouseKeepingModule {}
