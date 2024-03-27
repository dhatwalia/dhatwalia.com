import { ReactNode } from "react";

interface ButtonProps {
    href: string;
    children: ReactNode;
}

const Button = ({ href, children }: ButtonProps) => {
    return <a className="button" href={href} target="_blank" rel="noreferrer">{children}</a>;
}

export default Button;
