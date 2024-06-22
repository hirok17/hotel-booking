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
import HostRoute from './HostRoute'
import AdminRoute from './AdminRoute'
import ManageUsers from '../pages/admin/ManageUsers'
import Profile from '../pages/common/Profile'
import MyBooking from '../components/dashboard/Guest/MyBooking'
import ManageBookings from '../layouts/Host/ManageBookings'
import Statistics from '../pages/common/Statistics'

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
        index:true,
        element:(<PrivetRoute><Statistics></Statistics></PrivetRoute>)
      },
      {
        path:'add-room',
        element:<PrivetRoute><HostRoute><AddRoom></AddRoom></HostRoute></PrivetRoute>
      },
      {
        path:'my-listing',
        element:<PrivetRoute><HostRoute><MyListing></MyListing></HostRoute></PrivetRoute>
      },
      {
        path:'manage-users',
        element:<PrivetRoute><AdminRoute><ManageUsers></ManageUsers></AdminRoute></PrivetRoute>
      },
      {
        path:'profile',
        element:<PrivetRoute><Profile></Profile></PrivetRoute>
      },
      {
        path:'my-booking',
        element:<PrivetRoute><MyBooking></MyBooking></PrivetRoute>
      },
      {
        path:'manage-bookings',
        element:<PrivetRoute><HostRoute><ManageBookings></ManageBookings></HostRoute></PrivetRoute>
      }
    ]
  }
])
