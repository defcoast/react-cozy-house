import {FC, JSX}           from 'react';
import {SiteColorsEnum}    from '../../../enums/SiteColorsEnum';

import {tel, whatsAppLink} from '../../../globalParams';

import Wrapper             from '../../common/Wrapper/Wrapper';
import PaintedText         from '../../common/PaintedText/PaintedText';
import classNames          from 'classnames';
import PrimaryBtn          from '../../UI/buttons/PrimaryBtn/PrimaryBtn';

import styles              from './SectionOffer.module.scss';
import ImageStation        from '../../../assets/images/offer/station_1.jpeg';

/** Секция "Оффер". */
const SectionOffer: FC = (): JSX.Element => {
    return (
        <section className={styles.offer}>
            <Wrapper>
                <div className={styles.tagline}>
                    <span className={styles.taglineText}>
                        Геометрия пространства
                    </span>
                </div>

                <h1 className={styles.title}>
                    Механизированная штукатурка стен
                </h1>

                <p className={styles.description}>
                    При заказе механизированной штукатурки у нас —
                    Вы получаете материал
                    <PaintedText color={SiteColorsEnum.PRIMARY}>
                        по оптовой цене
                    </PaintedText>
                </p>

                <ul className={styles.list}>
                    <li className={styles.item}>
                        <span className={classNames(styles.item, styles.iconTypeCity)}>
                            Владивосток и Приморский край
                        </span>
                    </li>
                    <li className={styles.item}>
                        <span className={classNames(styles.item, styles.iconTypePrice)}>
                            Цена от 299р за квадрат
                        </span>

                    </li>
                    <li className={styles.item}>
                        <span className={classNames(styles.item, styles.iconTypeGuaranty)}>
                            Гарантия 3 года
                        </span>
                    </li>
                </ul>

                <div className={styles.buttons}>
                    <PrimaryBtn
                    href={whatsAppLink + '?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%8F%20%D1%85%D0%BE%D1%87%D1%83%20%D1%80%D0%B0%D1%81%D1%81%D1%87%D0%B8%D1%82%D0%B0%D1%82%D1%8C%20%D1%81%D1%82%D0%BE%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82.'}
                    target="_blank"
                    >
                        Рассчитать стоимость работ
                    </PrimaryBtn>

                    <PrimaryBtn href={'tel:' + tel}>
                        Позвонить
                    </PrimaryBtn>
                </div>
            </Wrapper>

            <div className={styles.stationBox}>
                <img
                src={ImageStation}
                alt="Механизированная штукатурная станция"
                className={styles.img}
                />
            </div>

            <div className={styles.bottomEffect} />
        </section>
    );
}

export default SectionOffer;
