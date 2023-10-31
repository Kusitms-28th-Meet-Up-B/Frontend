import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/main/Main';
import Map from './pages/map/Map';
import { GlobalStyle } from './style/GlobalStyle';
import Login from './pages/login/Login';
import KakaoRedir from './pages/login/KakaoRedir';
import Layout from './components/Header/Layout';
import Search from './pages/Search';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'map',
        element: <Map />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'kakao/login',
        element: <KakaoRedir />,
      },
      { path: 'search', element: <Search /> },
    ],
  },
]);

const App = () => (
  <>
    <GlobalStyle />
    <RouterProvider router={route} />
  </>
);

export default App;
