import { Link } from "react-router-dom";
import Button from "../../commons/Button/Button";

interface Props {
    to: string;
    text: string;
    activeButton: string;
    setActiveButton: React.Dispatch<React.SetStateAction<string>>;
}

const ButtonLink: React.FC<Props> = ({ to, text, activeButton, setActiveButton }) => {
    const className = to === activeButton ? "active-button" : "";
    const activateStyle = () => {
        setActiveButton(to);
    };

    return (
        <Link to={to}>
            <Button innerText={text} onClick={activateStyle} className={className} />
        </Link>
    );
};

export default ButtonLink;
