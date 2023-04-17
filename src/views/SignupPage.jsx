import { Component } from 'react'
import '../assets/scss/global.scss'

export class SignupPage extends Component {
  render() {
    return (
      <section className="signup-modal">
        <h1>🪙</h1>
        <p>Please enter your name:</p>
        <input type="text" placeholder="your name here..." />
        <button>Sign Up</button>
      </section>
    )
  }
}
