import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import AddBill from "./components/AddBill";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ContextProvider from "./context";
import AddChallan from "./components/AddChallan";
import Quotation from "./components/Quotation";
import Customer from "./components/Customer";
import Admin from "./components/Admin";


const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: '/addBill',
        element: <AddBill />,
      },
      {
        path: '/addChallan',
        element: <AddChallan />,
      },
      {
        path: '/quotation',
        element: <Quotation />,
      },
      {
        path: '/customer',
        element: <Customer />,
      },
      {
        path: '/admin',
        element: <Admin />,
      },
    ]
  },
]);



function App() {

  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
