import React from 'react';
import { Navbar } from '../component/layout/navbar';
import "./global.scss";
import { Footer } from '../component/layout/footer';
import { MainLayout } from '../component/layout/main-layout';

// Example file to test if the code is running

const App: React.FC = () => {
  return (
    <div>
      <Navbar></Navbar>
      <MainLayout></MainLayout>
      <Footer></Footer>
    </div>
  );
};

export default App;