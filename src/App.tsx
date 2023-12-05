import {FC, JSX} from 'react';

import Header from './components/common/Header/Header';
import SectionOffer from './components/sections/SectionOffer/SectionOffer';
import SectionBenefits from './components/sections/SectionBenefits/SectionBenefits';

/** Корневой компонент приложения. */
const App: FC = (): JSX.Element => {
    return (
        <>
            <Header />
            <main>
                <SectionOffer />
                <SectionBenefits />
            </main>
        </>
    );
}

export default App;
