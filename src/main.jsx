import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import BookList from './Components/BookList/BookList';
import PageReadChart from './Components/pageReadChart/pageReadChart';
import BookDetails from './Components/BookDetails/BookDetails';
import ReadBook from './Components/ReadBook/ReadBook';
import Wishlist from './Components/WishList/Wishlist';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/BookDetails/:book_id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../jobs.json'),
      },
      {
        path: '/Listed Books',
        element: <BookList></BookList>,
        loader: () => fetch('../jobs.json'),
      },
      {
        path: '/ReadBook/:book_id',
        element: <ReadBook></ReadBook>,
        loader: () => fetch('../jobs.json'),
      },
      {
        path: '/Wishlist/:book_id',
        element: <Wishlist></Wishlist>,
      },
      {
        path: '/Pages to Read',
        element: <PageReadChart></PageReadChart>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
