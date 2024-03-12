import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter ,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantsMenu from "./components/RestaurantsMenu";
// import Grocery from "./components/Grocery";
// const heading = React.createElement("h1" ,{id:"heading"} , "this is react element")


const Grocery = lazy(()=>import("./components/Grocery"))

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([

  {
    path:'/',
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element: <Body />,
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantsMenu/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loding...</h1>} ><Grocery/></Suspense> 
      }
    ],
    errorElement:<Error/>
  },
]) 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
