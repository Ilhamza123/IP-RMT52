import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../assets/pages/HomePage';
import RegisterUser from '../assets/formregister/RegisterUser';
import LoginUser from '../assets/formregister/LoginUser';
// import Navbar from '../assets/component/Navbar';
import LandingPage from '../assets/pages/LandingPage';
// import NavbarBack from '../assets/component/NavbarBack';
import Sejarah from '../assets/pages/Sejarah';
// import NavbarFooter from '../assets/component/NavbarFooter';
import TeknikDasar from '../assets/pages/TeknikDasar';
import Sabuk from '../assets/pages/Sabuk';
import PoomSae from '../assets/pages/PoomSae';
import NavbarBot from '../assets/component/NavbarBot';
import TopRankPage from '../assets/pages/TopRankPage';
import AddFormSabuk from '../assets/pages/AddFormSabuk';
import EditFormSabuk from '../assets/component/EditFormSabuk';
import MainLayout from '../assets/component/MainLayout';
import { Navigate,redirect } from 'react-router-dom';
import UpdateImageForm from '../assets/pages/UpdateImageForm';





// import ButtonLogOut from '../assets/component/ButtonLogOut';
const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <LandingPage />,
        loader: () => {
          if(!localStorage.access_token) {
            return redirect('/login')
          }
          return null
        }
      },
      {
        path: 'addFormSabuk',
        element: <AddFormSabuk />,
        loader: () => {
          if (!localStorage.access_token) {
            return redirect('/login');
          }
          return null;
        }
      },
      {
        path: 'editFormSabuk/:id',
        element: <EditFormSabuk />,
        loader: () => {
          if (!localStorage.access_token) {
            return redirect('/login');
          }
          return null;
        }
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
    path: 'updateImageForm/:id',
    element: <UpdateImageForm />,
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