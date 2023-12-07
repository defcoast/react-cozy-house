import { FC, JSX } from 'react';
import styles from './SectionExample.module.scss';
import Wrapper from '../../common/Wrapper/Wrapper';
import AnimationTitle from '../../common/AnimationTitle/AnimationTitle';
import PaintedText from '../../common/PaintedText/PaintedText';
import { SiteColorsEnum } from '../../../enums/SiteColorsEnum';
import 'react-photo-view/dist/react-photo-view.css';
import {PhotoProvider, PhotoView} from 'react-photo-view';
import ImageExample1 from '../../../assets/images/examples/ex_1.jpg'
import ImageExample2 from '../../../assets/images/examples/ex_2.jpg'
import ImageExample3 from '../../../assets/images/examples/ex_3.jpg'
import ImageExample4 from '../../../assets/images/examples/q1.jpg'
import ImageExample5 from '../../../assets/images/examples/q2.jpg'
import ImageExample6 from '../../../assets/images/examples/q3.jpg'

/** Секция "Примеры наших работ". */
const SectionExample: FC = (): JSX.Element => {

/** Список изображений. */
const images: string[] = [
    ImageExample1,
    ImageExample2,
    ImageExample3,
    ImageExample4,
    ImageExample5,
    ImageExample6,
];

    return (
    <section className={styles.examples}>
        <Wrapper>
            <AnimationTitle className={styles.title}>
                <PaintedText color={SiteColorsEnum.BLACK}>Примеры</PaintedText>
                наших работ
            </AnimationTitle>

            <PhotoProvider>
                <div className={styles.images}>
                    {images.map((item: string, index: number) => (
                    <PhotoView key={index} src={item}>
                        <img src={item} alt="" className={styles.img} />
                    </PhotoView>
                    ))}
                </div>
            </PhotoProvider>
        </Wrapper>
    </section>
    );
};

export default SectionExample;
