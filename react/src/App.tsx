import {FunctionComponent} from 'react';

import "./global.scss";

import {MainLayout} from '@components/layout/main-layout/MainLayout';
import {Footer} from "@components/layout/footer/Footer";
import {Navbar} from "@components/layout/navbar/Navbar";

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