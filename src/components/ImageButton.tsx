interface ImageButtonProps {
    href: string;
    icon: string;
}

const ImageButton = ({ href, icon }: ImageButtonProps) => {
    return <a href={href} target="_blank" rel="noreferrer">
        <img src={"/icons/" + icon + ".png"} className="icon" alt={icon} />
    </a>;
}

export default ImageButton;
