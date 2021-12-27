import "./style.scss";

interface Props {
  className?: string;
  onClick?: () => void;
  innerText?: string;
}

const Button: React.FC<Props> = ({ className, onClick, innerText }) => {
  const currentClass: string = "default-button " + (className ? className : "");

  return (
    <button className={currentClass} onClick={onClick}>
      {innerText}
    </button>
  );
};

export default Button;
