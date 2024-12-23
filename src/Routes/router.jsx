import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import AllMarathons from '../Pages/AllMarathons/AllMarathons';

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
    ],
  },
]);

export default router;
