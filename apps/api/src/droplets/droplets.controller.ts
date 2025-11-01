import { Controller, Get } from "@nestjs/common"
import { plainToInstance } from "class-transformer"
import { ApiSummary } from "src/common/decorators/api-summary.decorator"
import { ParamId } from "src/common/decorators/param-id.decorator"
import { DropletResDto } from "./dtos/droplet.res.dto"

@Controller("droplets")
export class DropletsController {
  @Get(":id")
  @ApiSummary("Get a droplet")
  get(@ParamId() id: number) {
    return plainToInstance(
      DropletResDto,
      { id, content: "nothing...", createdAt: new Date() },
      { excludeExtraneousValues: true },
    )
  }
}
