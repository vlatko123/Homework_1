import React, { Component } from "react";
import "./GetInTouchForm.css";
import Input from '../Input/Input';

class GetInTouchForm extends Component {
  render() {
    return (
      <div className="form">
        <div>
          <h2>Get in Touch</h2>
        </div>
        
          <form id="contact-form">
             <Input type="text" placeholder="Name" />
             <Input type="text" placeholder="Subject" />
             <Input type="email" placeholder="Email" />
             <Input id="textarea" type="textarea" placeholder="Message"/>
             <Input type="submit" placholder="Submit"/>

          </form>
       
      </div>
    );
  }
}

export default GetInTouchForm;
