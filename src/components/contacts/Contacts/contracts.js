import React, {useState, useEffect} from "react";
import Contact from "/Users/ekaterinavlasenko/Desktop/vjgv/cursor-homework/CURSOR_ADVANCED/19/19-hw/19/src/components/contacts/Contact/contact.js";
import "./contacts.css";

const contacts = [
  {
    id: 0,
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
  },
  {
    id: 1,
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
  },
  {
    id: 2,
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
  },
  {
    id: 3,
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
  },
  {
    id: 4,
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
  },
  {
    id: 5,
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
  },
];


export default function Contacts() {
  const [search, setSearch] = useState("")
  const [contactsArr, setContactsArr] = useState(contacts)

  
useEffect(() => {
  const filteredContacts = contacts.filter((contact) => {
    return (
      contact.lastName.toLowerCase().includes(search.toLowerCase()) ||
      contact.firstName.toLowerCase().includes(search.toLowerCase()) ||
      contact.phone.includes(search)
    );
  });
  setContactsArr(filteredContacts);
}, [search]);

  return (
    <div className="wrapper_contacts">
      <div className="top">
        <p className="header">Контакты</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="contact_header_icon"
          viewBox="0 0 16 16"
        >
          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
        </svg>
      </div>
      <div className="search">
        <input onChange={(e)=> setSearch(e.target.value)} type="search" className="input" placeholder="Search" value={search}></input>
      </div>

      {contactsArr.map((contact) => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </div>
  );
}
