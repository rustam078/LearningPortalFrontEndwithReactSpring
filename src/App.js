import { createContext, useState} from 'react';
import {  createBrowserRouter,RouterProvider } from 'react-router-dom';
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignForm from "./components/SignForm";
import Footer from './pages/Footer';
import PrivateRoutes from './store/PrivateRoutes';
import UserProfile from './components/UserProfile';
import Skill from './components/Addtask/Skill';
import Contacts from './pages/Contacts';
import Qualification from './pages/Qualification';
import Services from './pages/Services';
import Register from './components/Register';
import RootHeader from './components/RootHeader';
import LandingPage from './pages/LandingPage';
import AddContentForm from './components/Addtask/AddContentForm';
import { loader as videoLoader } from './components/Addtask/Skill';
import { QueryClientProvider,QueryClient } from '@tanstack/react-query';
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/login",
    element: <SignForm/>,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <PrivateRoutes />,
    children: [
      {
        path: "/",
        element: <RootHeader />,
        children: [
          {
            path: "dashboard",
            element: <UserProfile />,
          },
          {
            path: "dashboard/mediamix",
            element: <Skill/>,
            loader:videoLoader,
  
          },
          {
            path: "dashboard/videos",
            element: <Skill/>,
            loader:videoLoader,
  
          },
          {
            path: "dashboard/articles",
            element: <Skill/>,
            loader:videoLoader,
  
          },
          {
            path: "dashboard/categories/view/:id",
            element: <Skill />,
            loader:videoLoader,

          },
          {
            path: "dashboard/addTask",
            element: <AddContentForm />,
          },
          {
            path: "dashboard/editTask",
            element: <Services />,
          },
          {
            path: "dashboard/deleteTask",
            element: <Contacts />,
          },
          {
            path: "/*",
            element: <SignForm />,
          },
        ],
      },
    ],
  },
]);



  const queryClient=new QueryClient();
function App() {

  return (
    <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <RouterProvider router={router} />
    </QueryClientProvider>
  );
}


export default App;
