export class ClientAlreadyExistsError extends Error {
  constructor() {
    super('E-mail already exists')
  }
}
