import { Controller, Req, Get, Post, Body } from '@nestjs/common'
import { CreateItemDto } from '../../dto/create-item.dto'
import { ItemsService } from '../../services/items/items.service'
import { Item } from '../../entities/items.interface'

@Controller('items')
export class ItemsController {

  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body() data: CreateItemDto): Object {
    return this.itemsService.create(data)
  }

  @Get()
  findAll(): Array<Item> {
    return this.itemsService.findAll()
  }
}