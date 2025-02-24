export class ErrorResponse<T = string> {
  constructor(public error: T) {}
}
