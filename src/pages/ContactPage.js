import React from 'react';
import './Contact.css';

const ContactPage = () => (
    <>
        <h1>Contact</h1>
        <table width="100%" class="social">
            <tr>
                <td class="tile">
                    <a href="https://calendly.com/dhatwalia">
                        <img src={process.env.PUBLIC_URL + "/icons/calendar.png"} class="icon" alt="calendly" />
                    </a>
                    <br />
                    Book an appointment
                </td>
                <td class="tile">
                    <a href="mailto:dh.prajwal@gmail.com">
                        <img src={process.env.PUBLIC_URL + "/icons/email.png"} class="icon" alt="email" />
                    </a>
                    <br />
                    Email
                </td>
                <td class="tile">
                    <a href="https://www.facebook.com/dh.prajwal">
                        <img src={process.env.PUBLIC_URL + "/icons/facebook.png"} class="icon" alt="facebook" />
                    </a>
                    <br />
                    Facebook
                </td>
            </tr>
            <tr>
                <td class="tile">
                    <a href="http://github.com/dhatwalia">
                        <img src={process.env.PUBLIC_URL + "/icons/github.png"} class="icon" alt="github" />
                    </a>
                    <br />
                    Github
                </td>
                <td class="tile">
                    <a href="https://www.linkedin.com/in/prajwal-dhatwalia/">
                        <img src={process.env.PUBLIC_URL + "/icons/linkedin.png"} class="icon" alt="linkedin" />
                    </a>
                    <br />
                    LinkedIn
                </td>
                <td class="tile">
                    <a href="http://twitter.com/dhatwalia97">
                        <img src={process.env.PUBLIC_URL + "/icons/twitter.png"} class="icon" alt="twitter" />
                    </a>
                    <br />
                    X (Twitter)
                </td>
            </tr>
        </table>
    </>
);

export default ContactPage;
