import React from "react";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4"> {CONTACT.phoneNo}</p>
        <a
          href={`mailto:${CONTACT.email}?subject=Contact%20Us&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20reach%20out%20regarding...`}
          className="text-blue-500">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
