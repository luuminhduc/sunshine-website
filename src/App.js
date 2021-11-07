import React from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Photos from './components/Photos';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <div>
      <Header/>
      <Gallery/>
      <Banner/>
      <Testimonials/>
      <Photos/>
      <Footer/>
    </div>
  );
}
 
export default App;