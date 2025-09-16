import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className='contactsection'>
        <h1>Contact Us</h1>
        <p>we are here to help! Reach out to us with any questions or to schedule your next appointment.</p>
        <form action="#" method="post">
            <div>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required />
            </div>
            <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
            </div>
            <div>
            <label for="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
            </div>
            <div>
            <label for="message">Message</label>
            <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
            </form>
    </div>
  )
}

export default Contact