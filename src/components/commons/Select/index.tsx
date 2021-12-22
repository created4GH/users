import "./style.scss";

interface Props {
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    children?: React.ReactNode;
    defaultValue?: string;
}

const Select: React.FC<Props> = ({ className, onChange, children, defaultValue }) => {
    return (
        <select
            className={className}
            onChange={onChange}
            defaultValue={defaultValue}
        >
            {children}
        </select>
    )
}

export default Select;