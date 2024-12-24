import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Contact from './pages/Contact'
import OurActivites from './pages/OurActivities'
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';
import Footer from './component/Footer';
import Nav from './component/Nav';
import Privacy from './pages/Privacy';
import TermsAndCondition from './pages/TermsAndCondition';


  const router = createBrowserRouter([ 

    
    { 
      element:(

        <div>
          <div className='bg-white'>
            <Nav/>
        </div>

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
        {
          path:'/privacy',
          element:<Privacy/>
        }, 
        {
          path:'/tnc',
          element:<TermsAndCondition/>
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
