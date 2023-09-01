import contactsService from "./contacts.js";
import { program } from "commander";

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);
const argv = program.opts();
const invokeAction = async (options) => {
  const { action, id, email, name, phone } = options;
  switch (action) {
    case "list":
      const allContacts = await contactsService.listContacts();
      console.log(allContacts);
      break;
    case "get":
      const contact = await contactsService.getContactById(id);
      console.log(contact);
      break;
    case "add":
      const newContact = await contactsService.addContact(name, email, phone);
      console.log(newContact);
      break;
    case "remove":
      const removeContact = await contactsService.removeContact(id);
      console.log(removeContact);
      break;
    default:
      console.log("Unknown Action");
  }
};

invokeAction(argv);
