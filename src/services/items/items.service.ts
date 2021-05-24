import { Injectable } from '@nestjs/common'
import { Item } from '../../entities/items.interface'

@Injectable()
export class ItemsService {

  private items: Array<Item> = []

  create(item: Item): Object {

    this.items.push(item)
    return { id: this.items.length.toString() }
  }

  findAll(): Array<Item> {

    return this.items;
  }
}