import React from 'react';
import './Contact.scss';
import ImageButton from '../components/ImageButton';

const ContactPage = () => (
    <>
        <div class="page-content">
            <h1>Contact</h1>
            <table width="100%" class="social">
                <tr>
                    <td class="tile">
                        <ImageButton href="https://calendly.com/dhatwalia" icon="appointment" />
                        <br />
                        Book an appointment
                    </td>
                    <td class="tile">
                        <ImageButton href="mailto:dh.prajwal@gmail.com" icon="email" />
                        <br />
                        Email
                    </td>
                    <td class="tile">
                        <ImageButton href="https://www.facebook.com/dh.prajwal" icon="facebook" />
                        <br />
                        Facebook
                    </td>
                </tr>
                <tr>
                    <td class="tile">
                        <ImageButton href="http://github.com/dhatwalia" icon="github" />
                        <br />
                        Github
                    </td>
                    <td class="tile">
                        <ImageButton href="https://www.linkedin.com/in/prajwal-dhatwalia/" icon="linkedin" />
                        <br />
                        LinkedIn
                    </td>
                    <td class="tile">
                        <ImageButton href="http://twitter.com/dhatwalia97" icon="twitter" />
                        <br />
                        X (Twitter)
                    </td>
                </tr>
            </table>
        </div>
    </>
);

export default ContactPage;
