interface Props {
    text: string;
}

const TextSection: React.FC<Props> = ({ text }) => {
    return (
        <div className="user-item">{text}</div>
    )
}

export default TextSection;