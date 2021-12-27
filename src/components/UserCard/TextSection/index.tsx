interface Props {
    text: string;
}

const TextSection: React.FC<Props> = ({ text }) => {
    return (
        <p className="user-card__text">{text}</p>
    )
}

export default TextSection;