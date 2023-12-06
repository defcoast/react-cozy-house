import {FC, JSX} from 'react';

import Header from './components/common/Header/Header';
import SectionOffer from './components/sections/SectionOffer/SectionOffer';
import SectionBenefits from './components/sections/SectionBenefits/SectionBenefits';
import SectionAbout from './components/sections/SectionAbout/SectionAbout';

/** Корневой компонент приложения. */
const App: FC = (): JSX.Element => {
    return (
        <>
            <Header />
            <main>
                <SectionOffer />
                <SectionBenefits />
                <SectionAbout />
            </main>
        </>
    );
}

export default App;
