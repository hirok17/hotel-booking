import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDetails from '../pages/roomdDetails/RoomDetails'
import PrivetRoute from './PrivetRoute'
import { getRoomInfo } from '../api/rooms'
import DashboardLayout from '../layouts/Dashboard'
import AddRoom from '../layouts/Host/AddRoom'
import MyListing from '../layouts/Host/MyListing'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path:"/room/:id",
        element:<PrivetRoute><RoomDetails></RoomDetails></PrivetRoute>,
        loader:({params})=>getRoomInfo(params.id)
      }
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path:'/dashboard',
    element:<PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>,
    children:[
      {
        path:'add-room',
        element:<PrivetRoute><AddRoom></AddRoom></PrivetRoute>
      },
      {
        path:'my-listing',
        element:<PrivetRoute><MyListing></MyListing></PrivetRoute>
      }
    ]
  }
])
