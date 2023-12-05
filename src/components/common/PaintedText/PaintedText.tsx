import {FC, JSX, ReactNode} from 'react';
import {SiteColorsEnum} from '../../../enums/SiteColorsEnum';

/** Интерфейс пропсов компонента. */
interface IProps {
    /** Цвет текста. */
    color:    SiteColorsEnum;

    /** Вложенная нода. */
    children: ReactNode;
}

/** Цветной текст. */
const PaintedText: FC<IProps> = (
{
    color,
    children,
}): JSX.Element => {
    return (
        <span style={{color: color}}>
            &nbsp;{children}&nbsp;
        </span>
    );
}

export default PaintedText
