import { storageService } from '../services/storage.service'

export const userService = {
  getUser,
}
const KEY = 'user'
const user = {
  name: 'Ochoa Hyde',
  coins: 100,
  moves: [],
}
// storageService.store(KEY, user)

function getUser() {
  return user
}
