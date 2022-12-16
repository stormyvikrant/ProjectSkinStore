
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../AuthPages/Login';
import Signup from '../AuthPages/Signup';
import BathBeauty from '../Pages/All_Products_Pages/Bath&Beauty';
import Blog from '../Pages/All_Products_Pages/Blog';
import Brands from '../Pages/All_Products_Pages/Brands';
import BuildingRoute from '../Pages/All_Products_Pages/BuildingRoute';
import Checkout from '../Pages/All_Products_Pages/Checkout';
import Fragrence from '../Pages/All_Products_Pages/Fragrence';
import Hair from '../Pages/All_Products_Pages/Hair';
import HairPage from '../Pages/All_Products_Pages/HairPages';
import Holiday from '../Pages/All_Products_Pages/Holiday';
import Makeup from '../Pages/All_Products_Pages/Makeup';
import NewsTrending from '../Pages/All_Products_Pages/NewsTrending';
import Sale from '../Pages/All_Products_Pages/Sale';
import SelfCare from '../Pages/All_Products_Pages/Self-Care';
import SkinCare from '../Pages/All_Products_Pages/SkinCare';
import SkinPage from '../Pages/All_Products_Pages/SkinPage';
import Tools from '../Pages/All_Products_Pages/Tools';

import Home from '../Pages/Home';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/skin' element={<SkinCare/>}/>
        <Route path='/bathbeauty' element={<BathBeauty/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/brands' element={<Brands/>}/>
        <Route path='/building' element={<BuildingRoute/>}/>
        <Route path='/fragrence' element={<Fragrence/>}/>
        <Route path='/hair' element={<Hair/>}/>
        <Route path='/holiday' element={<Holiday/>}/>
        <Route path='/makeup' element={<Makeup/>}/>
        <Route path='/news' element={<NewsTrending/>}/>
        <Route path='/sale' element={<Sale/>}/>
        <Route path='/selfcare' element={<SelfCare/>}/>
        <Route path='/tools' element={<Tools/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='/skincare' element={<SkinPage/>}/>
        <Route path='/haircare' element={<HairPage/>}/>
      </Routes>
    </div>
  );
}

export default AllRoutes;
