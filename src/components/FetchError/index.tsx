import error from "../../assets/img/svg/error.svg";
import "./style.scss";

const FetchError: React.FC = () => {
    return (
        <div className="error-container">
            <img src={error} alt="error" className="error-icon" />
            <p className="error-text">Unfortunately, we failed to download data. Please try again later.</p>
        </div>
    )
}

export default FetchError;