import { createBrowserRouter } from 'react-router-dom';

import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import AllMarathons from '../Pages/AllMarathons/AllMarathons';
import SignIn from '../Pages/Authentication/SignIn';
import SignUp from '../Pages/Authentication/SignUp';
import PrivateNavigator from './PrivateNavigator';
import Dashboard from '../Pages/Dashboard/Dashboard';
import AddMarathon from '../Pages/Dashboard/Pages/AddMarathon/AddMarathon';
import MyMarathons from '../Pages/Dashboard/Pages/MyMarathons/MyMarathons';
import MyApply from '../Pages/Dashboard/Pages/MyApply/MyApply';
import MarathonDetails from '../Pages/MarathonDetails/MarathonDetails';
import RegisterMarathon from '../Pages/RegisterMarathon/RegisterMarathon';
import MainLayout from '../Layouts/MainLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/all_marathons',
        element: (
          <PrivateNavigator>
            <AllMarathons />
          </PrivateNavigator>
        ),
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/dashboard',
        element: (
          <PrivateNavigator>
            <Dashboard />
          </PrivateNavigator>
        ),
        children: [
          {
            index: true,
            element: <AddMarathon />,
          },
          {
            path: 'my_marathons',
            element: <MyMarathons />,
          },
          {
            path: 'my_apply',
            element: <MyApply />,
          },
        ],
      },
      {
        path: '/marathon_details/:id',
        element: (
          <PrivateNavigator>
            <MarathonDetails />
          </PrivateNavigator>
        ),
      },
      {
        path: '/register_marathon/:id',
        element: (
          <PrivateNavigator>
            <RegisterMarathon />
          </PrivateNavigator>
        ),
      },
    ],
  },
]);

export default router;
