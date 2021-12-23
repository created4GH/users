interface Props {
    text: string;
}

const TextSection: React.FC<Props> = ({ text }) => {
    return (
        <p className="user-card">{text}</p>
    )
}

export default TextSection;