import Home from '../pages/Home';
import About from '../pages/About';
import Business from '../pages/Business';
import Individual from '../pages/Individual';
import Learn from '../pages/Learn';
import Contact  from '../pages/Contact';
import Register from '../auth/Register';

const ROUTES = [{

  path: "/",
  element: <Home/>,
  Children:[{

    path: "/about",
    element: <About/>
  }, 

  {
    path: "/business",
    element: <Business/>
  },

  {
    path: "/individual",
    element: <Individual/>
  },

  {
    path: "/learn",
    element: <Learn/>
  },

  {
    path: "/contact",
    element: <Contact/>
  },

  {
    path: "/register",
    element: <Register/>
  }
]
}
]

export default ROUTES;