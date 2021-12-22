import "./style.scss";

const Loader : React.FC = () => {
    return (
        <div className="lds-default">
            <div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div>
        </div>
    )
}

export default Loader;