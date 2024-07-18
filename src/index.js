import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import VideoSection from './Components/VideoSection';
import MainContainer from './Components/MainContainer';
import History from './Components/History';
import LikedVideos from './Components/LikedVideos';
import YoutubeLoader from './Shimmer/YoutubeLoader';
const App = lazy(() => import('../src/App'))

const AppLayout = () => {


  return (
    <>
      <Suspense fallback={<YoutubeLoader />}>
        <App />
      </Suspense>
    </>
  )
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "/watch",
        element: <VideoSection />
      },
      {
        path: "/history",
        element: <History />
      },
      {
        path: "/like",
        element: <LikedVideos />
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);



export default AppLayout;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
