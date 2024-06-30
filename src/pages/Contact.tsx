import '../styles/Contact.css';
import ContactButton from '../components/ContactButton';

const Contact = () => {
    return <div className="page-content">
        <h1>Contact</h1>
        <table width="100%" className="social">
            <tr>
                <td className="tile">
                    <ContactButton href="https://calendly.com/dhatwalia" icon="appointment" />
                    <br />
                    Book an appointment
                </td>
                <td className="tile">
                    <ContactButton href="mailto:dh.prajwal@gmail.com" icon="email" />
                    <br />
                    Email
                </td>
                <td className="tile">
                    <ContactButton href="http://github.com/dhatwalia" icon="github" />
                    <br />
                    Github
                </td>
            </tr>
            <tr>
                <td className="tile">
                    <ContactButton href="https://www.linkedin.com/in/prajwal-dhatwalia/" icon="linkedin" />
                    <br />
                    LinkedIn
                </td>
                <td className="tile">
                    <ContactButton href="https://stackoverflow.com/users/8865811/prajwal" icon="stackoverflow" />
                    <br />
                    Stackoverflow
                </td>
                <td className="tile">
                    <ContactButton href="http://twitter.com/dhatwalia97" icon="twitter" />
                    <br />
                    X (Twitter)
                </td>
            </tr>
        </table>
    </div>;
};

export default Contact;
