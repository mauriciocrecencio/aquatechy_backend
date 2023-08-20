export class OwnerNotFound extends Error {
  constructor() {
    super('Owner not found with this ID')
  }
}
