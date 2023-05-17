import React from 'react';
import './App.css';
import { BrowserRouter,Link ,Route, Routes } from 'react-router-dom';
import { Home,CreatePost } from './page';
import Header from './page/Header/Header';
import Footer from './page/Footer/footer';

function App() {
  return (

<BrowserRouter>

<main className=' sm:p-8 px-4 py-8 w-full bg-white min-h-[cal(100vh-73px)]'>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/create-post' element={<CreatePost/>}/>

  </Routes>
</main>
<Footer/>

</BrowserRouter>

  );
}

export default App;
