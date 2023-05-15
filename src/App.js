import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layouts/Main';
import Orders from './components/Orders/Orders';
import Home from './components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:()=>fetch('tshirts.json'),
          element:<Home></Home>
        },
        {
          path:'/orders',
          element:<Orders></Orders>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
