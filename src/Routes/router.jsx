import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
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

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/all_marathons',
        element: <AllMarathons />,
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
    ],
  },
]);

export default router;
