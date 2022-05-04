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
                    <a href="https://www.facebook.com/dh.prajwal">
                        <img src={process.env.PUBLIC_URL + "/icons/facebook.png"} class="icon" alt="facebook" />
                    </a>
                    <br />
                    Facebook
                </td>
                <td class="tile">
                    <a href="http://github.com/dhatwalia">
                        <img src={process.env.PUBLIC_URL + "/icons/github.png"} class="icon" alt="github" />
                    </a>
                    <br />
                    Github
                </td>
            </tr>
            <tr>
                <td class="tile">
                    <a href="https://www.instagram.com/prajwal_dhatwalia/">
                        <img src={process.env.PUBLIC_URL + "/icons/instagram.png"} class="icon" alt="instagram" />
                    </a>
                    <br />
                    Instagram
                </td>
                <td class="tile">
                    <a href="https://www.linkedin.com/in/prajwal-dhatwalia/">
                        <img src={process.env.PUBLIC_URL + "/icons/linkedin.png"} class="icon" alt="linkedin" />
                    </a>
                    <br />
                    LinkedIn
                </td>
                <td class="tile">
                    <a href="https://paypal.me/PrajwalDhatwalia">
                        <img src={process.env.PUBLIC_URL + "/icons/paypal.png"} class="icon" alt="paypal" />
                    </a>
                    <br />
                    Paypal
                </td>
            </tr>
            <tr>
                <td class="tile">
                    <a href="https://www.pinterest.ca/dhatwalia97/">
                        <img src={process.env.PUBLIC_URL + "/icons/pinterest.png"} class="icon" alt="pinterest" />
                    </a>
                    <br />
                    Pinterest
                </td>
                <td class="tile">
                    <a href="https://join.skype.com/invite/pxUtL6DHmbVv">
                        <img src={process.env.PUBLIC_URL + "/icons/skype.png"} class="icon" alt="skype" />
                    </a>
                    <br />
                    Skype
                </td>
                <td class="tile">
                    <a href="http://twitter.com/dhatwalia97">
                        <img src={process.env.PUBLIC_URL + "/icons/twitter.png"} class="icon" alt="twitter" />
                    </a>
                    <br />
                    Twitter
                </td>
            </tr>
            <tr>
                <td class="tile">
                    <a href="http://immortalpoems.yolasite.com">
                        <img src={process.env.PUBLIC_URL + "/icons/website.png"} class="icon" alt="Prajwal's Poems" />
                    </a>
                    <br />
                    Prajwal's Poems
                </td>
                <td class="tile">
                    <a href="https://www.youtube.com/channel/UCNk7YbcX-pKr4Gocddaapag">
                        <img src={process.env.PUBLIC_URL + "/icons/youtube.png"} class="icon" alt="youtube" />
                    </a>
                    <br />
                    Youtube
                </td>
            </tr>
        </table>
    </>
);

export default ContactPage;
