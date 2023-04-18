import { storageService } from '../services/storage.service'

export const userService = {
  getUser,
  getEmptyUser,
  createNewUser,
}
const KEY = 'user'
const user = {
  name: 'Ochoa Hyde',
  coins: 100,
  moves: [],
}

function createNewUser(user) {
  storageService.store(KEY, user)
}

function getEmptyUser() {
  return {
    name: '',
    coins: 100,
    moves: [],
  }
}

function getUser() {
  return user
}
