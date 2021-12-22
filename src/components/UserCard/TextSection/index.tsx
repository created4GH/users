interface Props {
    text: string;
}

const TextSection: React.FC<Props> = ({ text }) => {
    return (
        <p className="user-item">{text}</p>
    )
}

export default TextSection;