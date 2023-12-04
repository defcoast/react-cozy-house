import {FC, JSX} from 'react';

import Header from './components/Header/Header';

/** Корневой компонент приложения. */
const App: FC = (): JSX.Element => {
    return (
        <>
            <Header />
        </>
    );
}

export default App;
