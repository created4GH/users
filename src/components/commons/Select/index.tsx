import "./style.scss";

interface Props {
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    children?: React.ReactNode;
    defaultValue?: string;
}

const Select: React.FC<Props> = ({ className, onChange, children, defaultValue }) => {
    const currentClass: string = "default-select " + (className ? className : "");

    return (
        <select
            className={currentClass}
            onChange={onChange}
            defaultValue={defaultValue}
        >
            {children}
        </select>
    )
}

export default Select;