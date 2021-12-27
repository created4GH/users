import { Link, useLocation } from "react-router-dom";

import Button from "../../commons/Button/Button";

interface Props {
    to: string;
    text: string;
}

interface Location {
    hash: string;
    key: string;
    pathname: string;
    search: string;
}

const ButtonLink: React.FC<Props> = ({ to, text }) => {
    const location: Location = useLocation();

    const className: string = to === location.pathname ? "button_active" : "";

    return (
        <Link to={to}>
            <Button innerText={text} className={className} />
        </Link>
    );
};

export default ButtonLink;
