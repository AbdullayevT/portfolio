import React, { useRef } from "react";
import About from "./About";
import AboutDetail from "./AboutDetail";
import Work from "./Work";
import ContactForm from "./ContactForm";

export default function Main() {
  return (
    <div className="w-full max-w-[75rem] min-[1920px]:max-w-[85rem] flex flex-col justify-between items-center mx-auto py-4 text-white">
      <About />
      <AboutDetail />
      <Work />
      <ContactForm />
    </div>
  );
}
