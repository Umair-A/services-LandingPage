import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Newsletter from './components/Newsletter';
import RecomendService from './components/RecomendService';
import Register from './components/Register';
import Services from './components/Services';
import {RegisterData, RecomendServiceData, FooterContent} from './data/Common';


function App() {
  return (
    <div className='container-fluid'>
      <div className='header-section'>
        <Header />
        <Main />
        <Services />
        <Register Data={RegisterData}/>
        <RecomendService Data={RecomendServiceData} />
        <Newsletter />
        <Footer  Data={FooterContent}/>
      </div>
    </div>
  );
}

export default App;
