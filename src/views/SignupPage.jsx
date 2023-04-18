import { Component } from 'react'
import '../assets/scss/global.scss'
import { userService } from '../services/user.service'
import { logDOM } from '@testing-library/react'

export class SignupPage extends Component {
  state = {
    user: userService.getEmptyUser(),
  }

  handleChange = ({ target }) => {
    const field = target.name
    let value = target.value

    switch (target.type) {
      case 'number':
      case 'range':
        value = +value
        break
      case 'checkbox':
        value = target.checked
        break
    }
    this.setState(({ user }) => ({ user: { ...user, [field]: value } }))
  }

  createNewUser(ev) {
    ev.preventDefault()
    userService.createNewUser(this.state.user)
  }

  render() {
    const { name } = this.state.user
    return (
      <form onSubmit={this.createNewUser} className="signup-modal">
        <h1>🪙</h1>
        <p>Please enter your name:</p>
        <input
          onChange={this.handleChange}
          name={name}
          id={name}
          value={name}
          type="text"
          placeholder="your name here..."
        />
        <button>Sign Up</button>
      </form>
    )
  }
}
