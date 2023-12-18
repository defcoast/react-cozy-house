import ImagePreview1 from '../../../assets/images/examples/previews/expw_1.webp';
import ImagePreview2 from '../../../assets/images/examples/previews/expw_2.webp';
import ImagePreview3 from '../../../assets/images/examples/previews/expw_3.webp';
import ImagePreview4 from '../../../assets/images/examples/previews/expw_4.webp';
import ImagePreview5 from '../../../assets/images/examples/previews/expw_5.webp';
import ImagePreview6 from '../../../assets/images/examples/previews/expw_6.webp';

/** Интерфейс данных изображений. */
export interface IExampleImagesData {
    /** Ссылка на превью. */
    preview:  string,

    /** Ссылка на оригинальное изображение. */
    original: string,
}

/** Список изображений. */
export const exampleImages: IExampleImagesData[] = [
    {
        preview:  ImagePreview1,
        original: '/images/ex_1.jpg',
    },

    {
        preview:  ImagePreview2,
        original: '/images/ex_2.jpg',
    },

    {
        preview:  ImagePreview3,
        original: '/images/ex_3.jpg',
    },

    {
        preview:  ImagePreview4,
        original: '/images/ex_4.jpg',
    },

    {
        preview:  ImagePreview5,
        original: '/images/ex_5.jpg',
    },

    {
        preview:  ImagePreview6,
        original: '/images/ex_6.jpg',
    },
];
