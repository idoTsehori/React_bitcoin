import React, { Component } from 'react'
import { contactService } from '../services/contact.service'
import '../assets/scss/global.scss'
import { Link } from 'react-router-dom'

export class ContactDetailsPage extends Component {
  state = {
    contact: null,
  }

  componentDidMount() {
    this.loadContact()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadContact()
    }
  }

  loadContact = async () => {
    try {
      const contact = await contactService.getContactById(this.props.match.params.id)
      this.setState({ contact })
    } catch (error) {
      console.log('error:', error)
    }
  }
  onBack = () => {
    console.log('hey')
    this.props.history.push('/contacts')
  }

  render() {
    const { contact } = this.state
    if (!contact) return <div>Loading...</div>
    return (
      <section className="contact-details">
        <section className="actions-btns">
          <button title="back to contacts" onClick={this.onBack}>
            Back
          </button>
          <div className="flex">
            <Link title="edit contact" to={`/contact/edit/${contact._id}`}>
              ✏️
            </Link>

            <button
              title="delete contact"
              // onClick={() => onRemoveContact(contact._id)}
            >
              ✖️
            </button>
          </div>
        </section>
        <img src={contact.img} alt="img" />
        <h3>Name: {contact.name}</h3>
        <h4>Phone: {contact.phone}</h4>
        <h4>Email: {contact.email}</h4>
        {/* <button onClick={this.onBack}>Back</button> */}
      </section>
    )
  }
}
