function ImageButton({ href, icon }) {
    return <a href={href} target="_blank" rel="noreferrer">
        <img src={process.env.PUBLIC_URL + "/icons/" + icon + ".png"} class="icon" alt={icon} />
    </a>;
}

export default ImageButton;
