import React from "react";
import "./contact.css";
import undefinedGender from "/Users/ekaterinavlasenko/Desktop/vjgv/cursor-homework/CURSOR_ADVANCED/19/19-hw/19/src/assets/transgender.png";
import man from "/Users/ekaterinavlasenko/Desktop/vjgv/cursor-homework/CURSOR_ADVANCED/19/19-hw/19/src/assets/standing-up-man-.png";
import woman from "/Users/ekaterinavlasenko/Desktop/vjgv/cursor-homework/CURSOR_ADVANCED/19/19-hw/19/src/assets/girl.png";
import icon from "/Users/ekaterinavlasenko/Desktop/vjgv/cursor-homework/CURSOR_ADVANCED/19/19-hw/19/src/assets/google-contacts.svg"

export default function Contact({ contact }) {
  function showGender() {
    if (!contact.gender) {
      return undefinedGender;
    } else if (contact.gender === "male") {
      return man;
    } else if (contact.gender === "female") {
      return woman;
    }
  }
  return (
    <div className="contact_container">
        <img className="contact_icon" src={icon} alt="" /> 
      <div className="contact">
        <div className="contact_name">
          {contact.firstName} {contact.lastName}
          <img className="gender_icon" src={showGender()} alt="icon" />
        </div>
        <div className="phone_number">{contact.phone}</div>
      </div>
    </div>
  );
}
