import {FC, JSX, ReactNode} from 'react';
import styles from './PrimaryBtn.module.scss';
import classNames from 'classnames';

/** Интерфейс пропсов компонента. */
interface IProps {
    /** Ссылка. */
    href?:      string;

    /** Вложенная нода. */
    children?:  ReactNode;

    /** Корневой класс компонента. */
    className?: string;
}

/** Основная кнопка. */
const PrimaryBtn: FC<IProps> = (
{
    href,
    children,
    className
}): JSX.Element => {
    return (
        <a
        href={href}
        className={classNames(styles.btn, className)}
        >
            {children}
        </a>
    );
}

export default PrimaryBtn;
