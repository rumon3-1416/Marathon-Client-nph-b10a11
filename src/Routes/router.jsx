import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import AllMarathons from '../Pages/AllMarathons/AllMarathons';
import SignIn from '../Pages/Authentication/SignIn';
import SignUp from '../Pages/Authentication/SignUp';
import PrivateNavigator from './PrivateNavigator';
import Dashboard from '../Pages/Dashboard/Dashboard';

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
      },
    ],
  },
]);

export default router;
