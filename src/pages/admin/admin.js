import React from "react";

import Contacts from './components/contacts';
import Quotes from './components/quotes';
import Login from './components/login';
import Testimonials from './components/testimonials';

const Admin = (props) => {

  return (
    <div className="mt-20 rounded-lg bg-white overflow-hidden shadow">
      <Contacts/>
      <Quotes/>
      <Login/>
      <Testimonials/>
    </div>
  )
}

export default Admin;