import {FC, JSX} from 'react';
import styles from './SectionBenefits.module.scss';
import Wrapper from '../../common/Wrapper/Wrapper';
import PaintedText from '../../common/PaintedText/PaintedText';
import {SiteColorsEnum} from '../../../enums/SiteColorsEnum';
import classNames from 'classnames';
import {benefitsData, IBenefitsData} from './BenefitsData';

/** Секция "Преимущества". */
const SectionBenefits: FC = (): JSX.Element => {
    return (
        <section className={styles.benefits} id="benefits">
            <Wrapper>
                <h2 className={styles.title}>
                    Механизированная штукатурка стен подходит для тех кто ценит
                    <PaintedText color={SiteColorsEnum.WHITE}>
                        качество, своё время и деньги
                    </PaintedText>
                </h2>

                <ul className={styles.list}>
                    {benefitsData.map((benefit: IBenefitsData, index: number) => (
                        <li
                        className={styles.item}
                        key={benefit.id}
                        >
                        <span className={styles.number}>
                            {index + 1}
                        </span>

                            <p className={styles.description}>
                                {benefit.text}
                                {benefit.specialText &&
	                                <PaintedText color={SiteColorsEnum.NEON_GREEN}>
                                        {benefit.specialText}
	                                </PaintedText>
                                }
                            </p>

                            <div className={classNames(styles.icon, benefit.icon)} />
                        </li>
                    ))}
                </ul>
            </Wrapper>
        </section>
    );
}

export default SectionBenefits;
