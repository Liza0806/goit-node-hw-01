
const { on } = require('nodemon');
const contacts = require('./contacts')
const argv = require('yargs').argv;

async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
      case 'list':
        const allContacts = await contacts.listContacts()
        console.log(allContacts)
        break;
  
      case 'get':
        const oneContact = await contacts.getContactById(id)
        console.log(oneContact)
        break;
  
      case 'add':
     const newContact = await contacts.addContact({name, email, phone })
     console.log(newContact)
        break;
  
      case 'remove':
        const result = await contacts.removeContact(id)
        console.log(result)
        break;
  
      default:
        console.warn('\x1B[31m Unknown action type!');
    }
  }
  
  invokeAction(argv);