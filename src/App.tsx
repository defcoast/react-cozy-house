import {FC, JSX} from 'react';

import Header from './components/common/Header/Header';
import SectionOffer from './components/sections/SectionOffer/SectionOffer';
import SectionBenefits from './components/sections/SectionBenefits/SectionBenefits';
import SectionAbout from './components/sections/SectionAbout/SectionAbout';
import SectionSteps from './components/sections/SectionSteps/SectionSteps';

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
            </main>
        </>
    );
}

export default App;
