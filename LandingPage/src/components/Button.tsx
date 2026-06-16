import "../styles/buttons.css"

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    secondary?: boolean;
}

export default function Button({ text, secondary, ...props }: IButtonProps) {
    return (
        <button className={secondary ? "btn-secondary" : "btn-primary"} {...props}>
            {text}
        </button>
    )
}