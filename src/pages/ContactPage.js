import React from 'react';
import './Contact.css';

const ContactPage = () => (
    <>
        <h1>Contact</h1>
        <table width="100%" class="social">
            <tr>
                <td class="tile">
                    <a href="mailto:dh.prajwal@gmail.com">
                        <img src={process.env.PUBLIC_URL + "/icons/email.png"} class="icon" alt="email" />
                    </a>
                    <br />
                    Email
                </td>
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
            </tr>
        </table>
    </>
);

export default ContactPage;
