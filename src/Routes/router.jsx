import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';

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
    ],
  },
]);

export default router;
