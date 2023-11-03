import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import Main from './pages/main/Main';
import Map from './pages/map/Map';
import { GlobalStyle } from './style/GlobalStyle';
import Login from './pages/login/Login';
import KakaoRedir from './pages/login/KakaoRedir';
import Layout from './components/Header/Layout';
import Board from './pages/board/Board';

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
      {
        path: 'review',
        element: (
          <Board
            title="지원후기"
            description="여행 지원사업/대외활동/공모전의 지원후기를 볼 수 있는 페이지입니다."
            imageSrc=""
          />
        ),
      },
    ],
  },
]);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <GlobalStyle />
    <RouterProvider router={route} />
  </QueryClientProvider>
);

export default App;
