import {FC, JSX} from 'react';

import Header from './components/common/Header/Header';
import SectionOffer from './components/sections/SectionOffer/SectionOffer';
import SectionBenefits from './components/sections/SectionBenefits/SectionBenefits';
import SectionAbout from './components/sections/SectionAbout/SectionAbout';
import SectionSteps from './components/sections/SectionSteps/SectionSteps';
import SectionEquipment from './components/sections/SectionEquipment/SectionEquipment';
import SectionExample from './components/sections/SectionExample/SectionExample';
import SectionNumbers from './components/sections/SectionNumbers/SectionNumbers';
import SectionAdditional from './components/sections/SectionAdditional/SectionAdditional';

/** Корневой компонент приложения. */
const App: FC = (): JSX.Element => {
    return (
        <>
            <Header />
            <main>
                <SectionOffer />
                <SectionBenefits />
                <SectionAbout />
                <SectionSteps />
                <SectionEquipment />
                <SectionExample />
                <SectionNumbers />
                <SectionAdditional />
            </main>
        </>
    );
}

export default App;
