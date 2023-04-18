import React from 'react'

export function TransferFund({ contact }) {
  console.log('contact:', contact)
  return (
    <section>
      <h3>Transfer coins to {contact.name}</h3>
      <label htmlFor="amount">Amount:</label>
      <input type="number" name="amount" id="amount" />
      <button>Transfer</button>
    </section>
  )
}
