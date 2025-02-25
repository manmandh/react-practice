import { IPagination } from '../interfaces/IPagination'

export class SuccessResponseWithPagination<T> {
  constructor(
    public message: string,
    public data: T,
    public pagination: IPagination
  ) {}
}
