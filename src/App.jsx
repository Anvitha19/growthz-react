import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './growthzfolder/pages/MainPage'

export default function App  () {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />}/>
          <Route path="/MainPage" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
