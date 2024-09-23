import './styles/App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// ? IMPORT COMPONENTS
import Index from './components';
import Quiz from './components/Quiz';
import Result from './components/Result';

// ? REACT ROUTERS
const router = createBrowserRouter([
  {
    path: '/',
    element: <Index></Index>,
  },
  {
    path: '/quiz',
    element: <Quiz></Quiz>,
  },
  {
    path: '/result',
    element: <Result></Result>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
