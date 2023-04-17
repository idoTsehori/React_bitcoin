import { Component } from 'react'
import { contactService } from '../services/contact.service'
import { ContactList } from '../cmps/ContactList.jsx'
import { ContactFilter } from '../cmps/ContactFilter'
import { ContactDetailsPage } from '../views/ContactDetailsPage'
import '../assets/scss/global.scss'
import { Link } from 'react-router-dom'

export class ContactPage extends Component {
  state = {
    contacts: null,
    selectedContactId: null,
    filterBy: {
      name: '',
    },
  }

  onRemoveContact = async (contactId) => {
    try {
      await contactService.deleteContact(contactId)
      this.setState(({ contacts }) => ({
        contacts: contacts.filter((contact) => contact._id !== contactId),
      }))
    } catch (error) {
      console.log('error:', error)
    }
  }

  componentDidMount = async () => {
    this.loadContacts()
  }

  loadContacts = async () => {
    const contacts = await contactService.getContacts(this.state.filterBy)
    this.setState({ contacts })
  }

  onSelectContact = (contactId) => {
    this.setState({ selectedContactId: contactId })
  }
  onChangeFilter = (filterBy) => {
    this.setState({ filterBy: { ...filterBy } }, this.loadContacts)
  }

  render() {
    const { contacts, selectedContactId, filterBy } = this.state
    if (!contacts) return <div>Loading...</div>
    return (
      <section className="contact-page-container">
        <section className="contact-page-btns">
          <ContactFilter filterBy={filterBy} onChangeFilter={this.onChangeFilter} />
          <Link to={`/contact/edit`}>New Contact</Link>
        </section>
        <ContactList
          contacts={contacts}
          onRemoveContact={this.onRemoveContact}
          onSelectContact={this.onSelectContact}
        />
      </section>
    )
  }
}
