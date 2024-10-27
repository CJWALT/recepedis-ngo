import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Contact from './pages/Contact'
import OurActivites from './pages/OurActivities'
import AboutUs from './pages/AboutUs';


  const router = createBrowserRouter([ 

    { 
      path: '/', 
      element:<Homepage/>
    }, 
    { path:"/contact",
      element:<Contact/>
    },
    {
      path:'/ouractivities',
      element:<OurActivites/>
    },
    {
      path:'/about-us',
      element:<AboutUs/>
    }
    
  ])


function App() {
  return (
   <>
    <RouterProvider router = {router}/>
   </>
  );
}

export default App;
