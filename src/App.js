import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Contact from './pages/Contact'
import OurActivites from './pages/OurActivities'
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';
import Footer from './component/Footer';
import Nav from './component/Nav';


  const router = createBrowserRouter([ 

    
    { 
      element:(

        <div>
          <Nav/>
          <main>
            <Outlet/>
          </main>
          <Footer/>

        </div>
      ),

      children:[
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
        }, 
        {    path:'*', 
            element:<NotFound/>
          }
    
      ],
    

    },
        
  ])


function App() {
  return (
   <>
    <RouterProvider router = {router}/>
   </>
  );
}

export default App;
