import "./style.scss";

const Loader: React.FC = () => {
    return (
        <div className="horizontal-loader-wrapper">
            <div className="lds-ellipsis" ><div></div>
                <div></div>
                <div> </div>
                <div></div>
            </div >
        </div>
    )
}

export default Loader;