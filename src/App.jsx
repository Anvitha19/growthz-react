import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './growthzfolder/pages/MainPage';
import AboutUs from './growthzfolder/pages/AboutUs';
import Services from './growthzfolder/pages/Services';
import CaseStudies from './growthzfolder/pages/CaseStudies';

export default function App  () {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />}/>
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/CaseStudies" element={<CaseStudies />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
