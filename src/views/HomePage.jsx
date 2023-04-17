import '../assets/scss/global.scss'
import React, { Component } from 'react'
import { userService } from '../services/user.service'
import { contactService } from '../services/contact.service'
import { bitcoinService } from '../services/bitcoin.service'

export class HomePage extends Component {
  state = {
    user: null,
  }

  componentDidMount() {
    this.loadUser()
  }

  loadUser = async () => {
    try {
      // const user = await userService.getUser()
      const user = userService.getUser()
      user['btc'] = await bitcoinService.getRate(user.coins)
      this.setState({ user })
    } catch (error) {
      console.log('error:', error)
    }
  }

  render() {
    const user = this.state.user
    if (!user) return <div>Loading...</div>
    return (
      <section className="home-page">
        <h1 className="home-title">Mister Bitcoin</h1>
        <div className="user-details">
          <h1>Hello {user.name}!</h1>
          <h3>🪙Coins: {user.coins}</h3>
          <h3>BTC: {user.btc}</h3>
        </div>
      </section>
    )
  }
}
