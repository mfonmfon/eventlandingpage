import {createBrowserRouter, RouterProvider} from 'react-router-dom' 
import ROUTES from './router/Router'
const router = createBrowserRouter([
  ...ROUTES,
])

function App() {
  return (
    <div>
      <RouterProvider router={router}>
        
      </RouterProvider>
    </div>
  );
}

export default App;
