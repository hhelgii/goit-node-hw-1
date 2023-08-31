import contactsService from "./contacts.js";
// import yargs from "yargs";
// const invokeAction = async ({ action, id, email, name, phone }) => {
//   switch (action) {
//     case "list":
//       const allContacts = await contactsService.listContacts();
//       return console.log(allContacts);
//     case "get":
//       const contact = await contactsService.getContactById(id);
//       return console.log(contact);
//     case "add":
//       const newContact = await contactsService.addContact(name, email,phone);
//       return console.log(newContact);
//     case "remove":
//       const removeContact = await contactsService.removeContact(id);
//       return console.log(removeContact);
//     default:
//       console.log("Unknown Action");
//   }
// };

// const {argv} = yargs(process.argv.slice(2));
// invokeAction(argv);
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
