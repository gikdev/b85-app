import { Module } from "@nestjs/common"
import { DropletsController } from "./droplets.controller"
import { DropletsService } from "./droplets.service"

@Module({
  controllers: [DropletsController],
  providers: [DropletsService],
})
export class DropletsModule {}
