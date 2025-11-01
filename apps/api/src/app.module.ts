import { Module } from "@nestjs/common"
import { DropletsModule } from "./droplets/droplets.module"

@Module({
  imports: [DropletsModule],
})
export class AppModule {}
