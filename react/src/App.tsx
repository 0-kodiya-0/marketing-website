import {FunctionComponent} from 'react';

import "./global.scss";

import {MainLayout} from '@components/layout/main-layout';
import {Footer} from "@components/layout/footer";
import {Navbar} from "@components/layout/navbar";

const App: FunctionComponent = () => {
    return (
        <>
            <Navbar/>
            <MainLayout/>
            <Footer/>
        </>
    );
};

export default App;