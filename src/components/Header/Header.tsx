import {FC, JSX, useState} from 'react';

import Logo       from '../Logo/Logo';
import Tel        from '../Tel/Tel';
import Navigation from '../Navigation/Navigation';
import Wrapper    from '../Wrapper/Wrapper';
import SocialList from '../SocialList/SocialList';
import MobileMenu from '../MobileMenu/MobileMenu';

import {navigationData} from '../Navigation/NavigationData';
import {socialListData} from '../SocialList/SocialListData';

import styles from './Header.module.scss';

/** Шапка сайта. */
const Header: FC = (): JSX.Element => {
    /** Нужно ли отображать мобильное меню. */
    const [needShowMobileMenu, setNeedShowMobileMenu] = useState(false);

    /** Обработчик клика на бургер-меню. */
    const handleBurgerMenuClick = (): void => {
        setNeedShowMobileMenu(!needShowMobileMenu);
    }

    return (
        <header className={styles.header}>
            <Wrapper className={styles.wrapper}>
                {/** Логотип */}
                <Logo className={styles.logo} />

                {/** Список социальных сетей. */}
                <SocialList socialListData={socialListData} />

                {/** Номер телефона. */}
                <div className={styles.numberBox}>
                    <Tel className={styles.number} />
                    <span className={styles.available}>
                        Сейчас на связи
                    </span>
                </div>

                {/** Мобильное меню (триггер). */}
                <span
                className={styles.burger}
                onClick={handleBurgerMenuClick}
                />
            </Wrapper>

            {/** Меню сайта. */}
           <Navigation navigationData={navigationData} />

            {/** Мобильное меню. */}
            <MobileMenu needShowMobileMenu={needShowMobileMenu}/>
        </header>
    );
}

export default Header;
