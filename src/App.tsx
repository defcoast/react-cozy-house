import {FC, JSX} from 'react';

import Header from './components/common/Header/Header';
import SectionOffer from './components/sections/SectionOffer/SectionOffer';

/** Корневой компонент приложения. */
const App: FC = (): JSX.Element => {
    return (
        <>
            <Header />
            <SectionOffer />
        </>
    );
}

export default App;
