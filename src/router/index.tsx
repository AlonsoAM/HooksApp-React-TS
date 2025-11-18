import { createBrowserRouter, Navigate } from 'react-router';
import { DashboardLayout } from '../components/layouts/DashboardLayout';
import { Dashboard } from '../pages/Dashboard';
import { TrafficLight } from '../01-useState/TrafficLight';
import { PokemonPage } from '../03-examples/PokemonPage';
import { FocusScreen } from '../04-useRef/FocusScreen';
import { TasksApp } from '../05-useReducer/TaskApp';
import { MemoHook } from '../06-memos/MemoHook';
import { ProfessionalApp } from '../09-useContext/ProfessionalApp';
import { AboutPage } from '../09-useContext/pages/about/AboutPage';
import { ProfilePage } from '../09-useContext/pages/profile/ProfilePage';
import { LoginPage } from '../09-useContext/pages/auth/LoginPage';
import { PrivateRoute } from '../09-useContext/router/PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'traffic-light',
        element: <TrafficLight />,
      },
      {
        path: 'pokemon',
        element: <PokemonPage />,
      },
      {
        path: 'focus',
        element: <FocusScreen />,
      },
      {
        path: 'tasks',
        element: <TasksApp />,
      },
      {
        path: 'memo',
        element: <MemoHook />,
      },
      {
        path: 'context',
        element: <ProfessionalApp />,
        children: [
          {
            index: true,
            element: <AboutPage />,
          },
          {
            path: 'profile',
            element: <PrivateRoute element={<ProfilePage />} />,
          },
          {
            path: 'login',
            element: <LoginPage />,
          },
          {
            path: '*',
            element: <Navigate to="." />,
          }
        ]
      },
    ],
  },
]);
