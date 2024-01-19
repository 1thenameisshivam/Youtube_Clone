import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './component/App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RegisterPage from './component/RegisterPage.jsx';
import { Provider } from 'react-redux';
import appStore from './utils/AppStore.js';
import Watch from './component/Watch.jsx';
import Browse from './component/Browse.jsx';
import Seach from './component/Seach.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <RegisterPage/>,
  },
  {
    path:"/app",
    element:<App/>,
    children:[
     {
      path:"/app",
      element:<Browse/>
     },
     {
      path:"/app/watch/:watchid",
      element:<Watch/>
    },
    {
      path:"/app/search",
      element:<Seach/>
    }
    ]
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={appStore} >
     <RouterProvider router={router} />
     </Provider>
     
  </React.StrictMode>,
)
