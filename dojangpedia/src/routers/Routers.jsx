import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../assets/pages/HomePage';
import RegisterUser from '../assets/formregister/RegisterUser';
import LoginUser from '../assets/formregister/LoginUser';
import Navbar from '../assets/component/Navbar';
import LandingPage from '../assets/pages/LandingPage';
import NavbarBack from '../assets/component/NavbarBack';
import Sejarah from '../assets/pages/Sejarah';
import NavbarFooter from '../assets/component/NavbarFooter';
import TeknikDasar from '../assets/pages/TeknikDasar';
import Sabuk from '../assets/pages/Sabuk';
import PoomSae from '../assets/pages/PoomSae';
import NavbarBot from '../assets/component/NavbarBot';
import TopRankPage from '../assets/pages/TopRankPage';
import AddFormSabuk from '../assets/pages/AddFormSabuk';
import EditFormSabuk from '../assets/component/EditFormSabuk';





// import ButtonLogOut from '../assets/component/ButtonLogOut';

const Router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
      <Navbar />
    <LandingPage />,
    
    </>
    )
  },
  {
    path: '/addFormSabuk',
    element: (
      <>
      <Navbar />
    <AddFormSabuk />,
    
    </>
    )
  },
  {
    path: '/editFormSabuk/:id',
    element: (
      <>
      <Navbar />
    <EditFormSabuk />,
    
    </>
    )
  },
  {
    path: '/TopRanking',
    element:(
      <>
      <Navbar />
    <TopRankPage />
    <NavbarFooter />
    </>
    )
  },
  {
    path: '/history',
    element: (
      <>
      <Navbar />
    <Sejarah />
    <NavbarFooter />
    </>
    )
  },
  {
    path: '/basic',
    element:(
      <>
      <Navbar />
    <TeknikDasar />
    <NavbarFooter />
    </>
    )
  },
  {
    path: '/belt',
    element:(
      <>
      <Navbar />
    <Sabuk />
    <NavbarFooter />
    </>
    )
  },
  {
    path: '/poomsae',
    element:(
      <>
      <Navbar />
    <PoomSae />
    <NavbarFooter />
    </>
    )
  },
  {
    path: '/homepage',
    element: (
      <>
      <Navbar />
    <HomePage />
    <NavbarBot />
    
    <NavbarFooter />
    
    </>
    )
  },
  {
    path: '/register',
    element: (
      <>
      <NavbarBack />
      
        <RegisterUser />
      </>
    )
  },
  {
    path: '/login',
    element: <LoginUser />
  }
]);

export default Router;