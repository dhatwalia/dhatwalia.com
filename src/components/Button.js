function Button({ href, children }) {
    return <a class="button" href={href} target="_blank" rel="noreferrer">{children}</a>;
}

export default Button;
