import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Main from './pages/main/Main';
import Map from './pages/map/Map';
import { GlobalStyle } from './style/GlobalStyle';
import Login from './pages/login/Login';
import KakaoRedir from './pages/login/redir/KakaoRedir';
import Layout from './components/Header/Layout';
import Search from './pages/Search';
import Board from './pages/board/Board';
import DetailProgram from './pages/DetailProgram';
import RegisterProgram from './pages/RegisterProgram';
import SignUp from './pages/signup';
import DetailPosting from './pages/DetailPosting';
import MyPosting from './pages/user/MyPosting';
import Write from './pages/write';
import Mileage from './pages/mileage';

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
      {
        path: 'review',
        children: [
          {
            index: true,
            element: (
              <Board
                title="지원후기"
                description="여행 지원사업/대외활동/공모전의 지원후기를 볼 수 있는 페이지입니다."
                imageSrc=""
              />
            ),
          },
          {
            path: ':id',
            element: <DetailPosting title="지원 후기" />,
          },
          {
            path: 'write',
            element: <Write />,
          },
          {
            path: 'edit/:id',
            element: <Write />,
          },
        ],
      },
      {
        path: 'archive',
        children: [
          {
            index: true,
            element: (
              <Board
                title="자료실"
                description="지원서 예시자료, 보고서 예시자료, 전문가의 꿀팁 등을 볼 수 있는 페이지입니다."
                imageSrc=""
              />
            ),
          },
          {
            path: ':id',
            element: <DetailPosting title="자료실" />,
          },
          {
            path: 'write',
            element: <Write />,
          },
        ],
      },
      {
        path: 'detailProgram/:_programName/:_programId',
        element: <DetailProgram />,
      },
      { path: 'register', element: <RegisterProgram /> },
      {
        path: 'signup',
        element: <SignUp />,
      },

      {
        path: 'detailProgram/:_programName/:_programId',
        element: <DetailProgram />,
      },
      {
        path: 'user',
        element: <Outlet />,
        children: [
          {
            path: 'posting',
            element: <MyPosting />,
          },
        ],
      },
      {
        path: 'mileage',
        element: <Mileage />,
      },
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
