import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import ErrorComponent from './components/ErrorComponent';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Cart from './components/Cart';
import RestaurantInfo from './components/RestaurantInfo';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import NorthIndianPage from './components/NorthIndianPage';
import { useEffect, useState } from 'react';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

const App= () => {

  const [userName, setUserName]=useState();
  
  
  useEffect(()=>{
    const data={
      name:"alex",
    }
    setUserName(data.name);
  },[])
  
  
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser:userName, setUserName}}>
      <div>
        <Header/>
        <Outlet/>
      </div>
      </UserContext.Provider>
    </Provider>
  );
}

export const appRouter=createBrowserRouter([   //list of objects
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/",
        element: <Body />,
      },
      {
        path:"contact",
        element: <ContactUs />,
      },
    
      {
        path:"about",
        element: <About />,
      },
    
      {
        path:"cart",
        element: <Cart />,
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurantInfo />,
      },
      {
        path:"NorthIndianPage",
        element: <NorthIndianPage />,
      },
    ],
    errorElement:<ErrorComponent/>,
  },
  
])

export default App;
