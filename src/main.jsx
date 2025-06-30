import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Layout/Home';
import AllCampaign from './Layout/AllCampaign';
import AddCampaign from './Layout/AddCampaign';

import MyDonation from './Layout/MyDonation';
import Login from './Component/Login';
import Register from './Component/Register';
import AuthProvider from './Auth/AuthProvider';
import { ThemeProvider } from './Auth/ThemeProvider';
import MyCampaigns from './Layout/MyCampaigns';
import CampaignDetails from './Layout/CampaignDetails';
import UpdateCampaign from './Layout/UpdateCampaign';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:'/campaigns',
        element:<AllCampaign></AllCampaign>,
        
        
      },
      {
        path:'/add-campaign',
        element:<AddCampaign></AddCampaign>
      },
      {
        path:'/my-campaigns',
        element:<MyCampaigns></MyCampaigns>
      },
      {
        path:'my-donations',
        element:<MyDonation></MyDonation>
      },{
        path:'/login',
        element:<Login></Login>
      },{
        path:'/register',
        element:<Register></Register>
      },{
        path:"/campaign/:id",
        element:<CampaignDetails></CampaignDetails>
      },{
        path:"/update-campaign/:id",
        element:<UpdateCampaign></UpdateCampaign>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <ThemeProvider>
  <AuthProvider>
    <RouterProvider router={router} />
 </AuthProvider>
 </ThemeProvider>
  </StrictMode>,
)
