import clsx from 'clsx';
import css from "./Alert.module.css";
// передаю цей обєкт стилів базовий файл jsx чоб змінювати стилі при різних варіантах запитів Алерт
// const alertStyles = { };


export const Alert = ({ variant, outlined, elevated, children }) => {
    return (
        <p
            className={clsx(
                css[variant],
                outlined && css.isOutlined,
                elevated && css.isElevated
            )}
        >
            {children}
        </p>
    );
};

