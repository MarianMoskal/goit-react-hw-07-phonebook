export default function makeFilteredContacts(contacts, lowCaseFilter) {
  let filteredContacts = [];
  for (const contact of contacts) {
    if (contact.name.toLowerCase().includes(lowCaseFilter)) {
      filteredContacts.push(contact);
    }
  }
  return filteredContacts;
}
