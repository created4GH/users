import "./style.scss";

const CircleLoader = () => {
    return (
        <div className="lds-default">
            <div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div>
        </div>
    )
}

export default CircleLoader;