import './Contact.css';
import ImageButton from '../components/ImageButton';

const Contact = () => {
    return <div className="page-content">
        <h1>Contact</h1>
        <table width="100%" className="social">
            <tr>
                <td className="tile">
                    <ImageButton href="https://calendly.com/dhatwalia" icon="appointment" />
                    <br />
                    Book an appointment
                </td>
                <td className="tile">
                    <ImageButton href="mailto:dh.prajwal@gmail.com" icon="email" />
                    <br />
                    Email
                </td>
                <td className="tile">
                    <ImageButton href="https://www.facebook.com/dh.prajwal" icon="facebook" />
                    <br />
                    Facebook
                </td>
            </tr>
            <tr>
                <td className="tile">
                    <ImageButton href="http://github.com/dhatwalia" icon="github" />
                    <br />
                    Github
                </td>
                <td className="tile">
                    <ImageButton href="https://www.linkedin.com/in/prajwal-dhatwalia/" icon="linkedin" />
                    <br />
                    LinkedIn
                </td>
                <td className="tile">
                    <ImageButton href="http://twitter.com/dhatwalia97" icon="twitter" />
                    <br />
                    X (Twitter)
                </td>
            </tr>
        </table>
    </div>;
};

export default Contact;
