import {Entity, model, property} from '@loopback/repository';

@model()
export class Users extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  mid: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  browser?: string;

  @property({
    type: 'string',
  })
  os?: string;

  @property({
    type: 'string',
  })
  country?: string;

  @property({
    type: 'string',
  })
  city?: string;

  @property({
    type: 'number',
  })
  pincode?: number;


  constructor(data?: Partial<Users>) {
    super(data);
  }
}
