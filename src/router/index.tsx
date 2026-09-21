import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import Drawer from '../pages/navigation/drawer'
import HomePage from '../pages/home/home'
import Style from '../pages/groom/groomStyle'
import Service from '../pages/service/groomService'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Drawer />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'style',
        element: <Style />,
      },
      {
        path : 'service',
        element : <Service/>
      }
    ],
  },
];

export const router = createBrowserRouter(routes);