import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RegisterUser from '../formUser/RegisterUser';
import LoginUser from '../formUser/LoginUser';
// import Navbar from '../assets/component/Navbar';
import LandingPage from '../pages/LandingPage';
// import NavbarBack from '../assets/component/NavbarBack';
import Sejarah from '../pages/Sejarah';
// import NavbarFooter from '../assets/component/NavbarFooter';
import TeknikDasar from '../pages/TeknikDasar';
import Sabuk from '../pages/Sabuk';
import PoomSae from '../pages/PoomSae';
import NavbarBot from '../assets/component/NavbarBot';
import TopRankPage from '../pages/TopRankPage';
import AddFormSabuk from '../pages/AddFormSabuk';
import EditFormSabuk from '../assets/component/EditFormSabuk';
import MainLayout from '../assets/component/MainLayout';
import { Navigate,redirect } from 'react-router-dom';
import UpdateImageForm from '../pages/UpdateImageForm';





// import ButtonLogOut from '../assets/component/ButtonLogOut';
const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <LandingPage />,
        
      },
      
      
      {
        path: 'TopRanking',
        element: <TopRankPage />,
        loader: () => {
          if (!localStorage.access_token) {
            return redirect('/login');
          }
          return null;
        }
      },
      {
        path: 'history',
        element: <Sejarah />,
        loader: () => {
          if (!localStorage.access_token) {
            return redirect('/login');
          }
          return null;
        }
      },
      {
        path: 'basic',
        element: <TeknikDasar />,
        loader: () => {
          if (!localStorage.access_token) {
            return redirect('/login');
          }
          return null;
        }
      },
      {
        path: 'belt',
        element: <Sabuk />,
        loader: () => {
          if (!localStorage.access_token) {
            return redirect('/login');
          }
          return null;
        }
      },
      {
        path: 'poomsae',
        element: <PoomSae />,
        loader: () => {
          if (!localStorage.access_token) {
            return redirect('/login');
          }
          return null;
        }
      },
      {
        path: 'homepage',
        element: <>
        <HomePage /> ,
        <NavbarBot/>
        </>,
        loader: () => {
          if (!localStorage.access_token) {
            return redirect('/login');
          }
          return null;
        }
      },
      {
        path: 'register',
        element: <RegisterUser />,
        loader: () => {
          if (localStorage.access_token) {
            return redirect('/');
          }
          return null;
        }
      },
    ]
  },
  {
    path: '/updateImageForm/:id',
    element: <UpdateImageForm />,
    loader: () => {
      if (!localStorage.access_token) {
        return redirect('/login');
      }
      return null;
    }
  },
  {
    path: '/editFormSabuk/:id',
    element: <EditFormSabuk />,
    loader: () => {
      if (!localStorage.access_token) {
        return redirect('/login');
      }
      return null;
    }
  },
  {
    path: '/addFormSabuk',
    element: <AddFormSabuk />,
    loader: () => {
      if (!localStorage.access_token) {
        return redirect('/login');
      }
      return null;
    }
  },
  {
    path: '/login',
    element: <LoginUser />,
    loader: () => {
      if (localStorage.access_token) {
        return redirect('/');
      }
      return null;
    }
  }
]);

export default Router;