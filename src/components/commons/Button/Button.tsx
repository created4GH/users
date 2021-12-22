import "./style.scss";

interface Props {
  className?: string;
  onClick?: () => void;
  innerText?: string;
}

const Button: React.FC<Props> = ({ className, onClick, innerText }) => {
  const currentClass = "button_default" + className ? className : "";

  return (
    <button className={currentClass} onClick={onClick}>
      {innerText}
    </button>
  );
};

export default Button;
