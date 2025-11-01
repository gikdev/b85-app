import { ApiProperty } from "@nestjs/swagger"
import { Expose } from "class-transformer"

export class DropletResDto {
  @ApiProperty()
  @Expose()
  id!: number

  @ApiProperty()
  @Expose()
  content!: string

  @ApiProperty()
  @Expose()
  createdAt!: Date
}
