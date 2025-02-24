export class SuccessResponse<T> {
  constructor(
    public message: string,
    public data: T
  ) {}
}
