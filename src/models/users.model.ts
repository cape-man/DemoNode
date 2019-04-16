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
    required: true,
  })
  name?: string;

  @property.array(String)
  browser?: string[];

  @property.array(String)
  os?: string[];

  @property.array(String)
  country?: string[];

  @property.array(String)
  city?: string[];

  @property.array(String)
  region?: string[];

  @property({
    type: 'number',
  })
  stepCount?: number;

  @property({
    type: 'number',
  })
  gameCount?: number;

  @property({
    type: 'number',
  })
  mobileCount?: number;

  constructor(data?: Partial<Users>) {
    super(data);
  }
}
