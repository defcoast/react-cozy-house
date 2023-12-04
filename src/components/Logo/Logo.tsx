import {FC, JSX} from 'react';

import imageLogo from '../../assets/images/logo.svg'

/** Интерфейс пропсов компонента. */
interface IProps {
    /** Класс корневого блока. */
    className: string;
}

/** Логотип сайта. */
const Logo: FC<IProps> = ({className}): JSX.Element => {
    return (
        <a href="/">
            <img
            src={imageLogo}
            alt="Логотип компании Уютный Дом"
            className={className}
            />
        </a>
    );
}

export default Logo;
