import { createContext, useState} from 'react';
import {  createBrowserRouter,RouterProvider } from 'react-router-dom';
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignForm from "./components/user/SignForm";
import ContentRenderOutLet from './components/user/ContentRenderOutLet';
import UserProfile from './components/user/UserProfile';
import ContentRenderPage from './components/Addtask/ContentRenderPage';
import Register from './components/user/Register';
import YouTubeView from './components/YouTubeView';
import PrivateRoutes from './service/PrivateRoutes';
import LandingPage from './static homepages/LandingPage';
import AddContentForm from './components/Addtask/AddContentForm';
import { loader as videoLoader } from './components/Addtask/ContentRenderPage';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './components/TanStackQueryHttp/http';
import ViewDetailsPage,{loader as viewDetailsvideoLoader} from './components/Addtask/ViewDetailsPage';
import ForgetPassword from './components/user/ForgetPassword';

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
    path: "/forgetPassword",
    element: <ForgetPassword />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <ContentRenderOutLet/>,
    children: [
      {
        path: "/",
        element: <PrivateRoutes />,
        children: [
          {
            path: "dashboard",
            element: <UserProfile />,
          },
          {
            path: "dashboard/youtube",
            element: <ContentRenderPage />,
            loader:videoLoader,
          },
          {
            path: "dashboard/mediamix",
            element: <ContentRenderPage/>,
            loader:videoLoader,
  
          },
          {
            path: "dashboard/videos",
            element: <ContentRenderPage/>,
            loader:videoLoader,
  
          },
          {
            path: "dashboard/viewdetails/:id",
            element: <ViewDetailsPage/>,
            loader:viewDetailsvideoLoader,
  
          },
          {
            path: "dashboard/articles",
            element: <ContentRenderPage/>,
            loader:videoLoader,
  
          },
          {
            path: "dashboard/categories/view/:id",
            element: <ContentRenderPage />,
            loader:videoLoader,

          },
          {
            path: "dashboard/addTask",
            element: <AddContentForm />,
          },
          {
            path: "/*",
            element: <SignForm />,
          },
        ],
      },
    ],
  },
]
// ,{
//   basename: "/app",
// }

);




function App() {

  return (
    <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <RouterProvider router={router} />
    </QueryClientProvider>
  );
}


export default App;
