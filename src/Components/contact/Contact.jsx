import React from 'react'
import './Contact.css'
import gitHub from '../../Assets/github.png'
import LinkedIn from '../../Assets/linkedIn.png'
const Contact = () => {
  return (
    <section id='contact'>



      <div>
      <h1>Contact Me</h1>
        <p>Hello! Feel free to reach out to me using the following contact information:</p>

        <ul>
            <li><strong>Name:</strong> Ashish V. Armarkar</li>
            <li><strong>Location:</strong> Nagpur, India</li>
            <li><strong>Phone:</strong> +91 7709931178</li>
            <li><strong>Email:</strong> <a href="mailto:ashisharmarkar1999@gmail.com">ashisharmarkar1999@gmail.com</a></li>
            <li> <span><a href="https://www.linkedin.com/in/ashish-armarkar-09b054246/" target="_blank"><img src={LinkedIn} alt="Linkedin" /></a>
            <a href="https://github.com/Ashish-Armarkar" target="_blank"><img src={gitHub} alt="gitHub" /></a></span></li>
        </ul>
    </div>
    </section>
  )
}

export default Contact
