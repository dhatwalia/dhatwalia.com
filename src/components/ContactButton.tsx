interface ContactButtonProps {
    href: string;
    icon: string;
}

const ContactButton = ({ href, icon }: ContactButtonProps) => {
    return <a href={href} target="_blank" rel="noreferrer">
        <img src={"/contact/" + icon + ".png"} className="icon" alt={icon} />
    </a>;
}

export default ContactButton;
