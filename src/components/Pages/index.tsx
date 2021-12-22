import Languages from "../Languages";

import Routing from "../Routing";

import "./style.scss";

const Pages: React.FC = () => {

    return (
        <div className="pages-container">
            <Languages />
            <Routing />
        </div>
    );
};

export default Pages;
