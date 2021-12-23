import "./style.scss";

const Loader: React.FC = () => {
    return (
        <div className="loader-container">
            <div className="lds-default">
                <div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div>
            </div>
        </div>
    )
}

export default Loader;