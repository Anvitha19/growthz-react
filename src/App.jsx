import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './growthzfolder/pages/MainPage';
import AboutUs from './growthzfolder/pages/AboutUs';
import Footer from './growthzfolder/components/MainPage/Footer';
import Header from './growthzfolder/components/MainPage/Header';
import Services from './growthzfolder/pages/Services';

export default function App  () {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />}/>
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}
