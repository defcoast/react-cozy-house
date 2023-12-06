import {IEquipmentData} from './IEquipmentData';
import ImageStation1 from '../../../assets/images/equipment/station_1.jpeg'
import ImageStation2 from '../../../assets/images/equipment/station_3.png'


/** Данные для оборудования. */
export const EquipmentData: IEquipmentData[] = [
    {
        id:                1,
        title:             'Штукатурная станция Kaleta 5',
        image:             ImageStation1,
        descriptionPoints: [
            'Надежный привод подачи сухой смеси.',
            'Производительность штукатурной смеси - 28 литров в минуту.',
        ],
    },

    {
        id:                2,
        title:             'Штукатурная станция Serta Master XL',
        image:             ImageStation2,
        descriptionPoints: [
            'С 4 ступенями мощности, компактная и удобная.',
            'Производительность штукатурной смеси - 26 литров в минуту.',
        ],
    },
];
