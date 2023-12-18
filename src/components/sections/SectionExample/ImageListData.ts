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
        original: '/images/ex-1.webp',
    },

    {
        preview:  ImagePreview2,
        original: '/images/ex-2.webp',
    },

    {
        preview:  ImagePreview3,
        original: '/images/ex-3.webp',
    },

    {
        preview:  ImagePreview4,
        original: '/images/ex-4.webp',
    },

    {
        preview:  ImagePreview5,
        original: '/images/ex-5.webp',
    },

    {
        preview:  ImagePreview6,
        original: '/images/ex-6.webp',
    },
];
