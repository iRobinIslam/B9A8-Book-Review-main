import { HiOutlineMapPin } from "react-icons/hi2";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdOutlineRestorePage } from "react-icons/md";
import { getStoredBookApplication } from "../LocalStorage/LocalStorage";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import BookList from "../BookList/BookList";



const Wishlist = () => {
    const book = useLoaderData();
    
    useEffect (() => {
        const storedBookIds = getStoredBookApplication();
        if(book.length > 0){
         const bookApplication = book.filter(book => storedBookIds.includes(book.book_id))
            console.log(Wishlist,book,storedBookIds,bookApplication);
        }
    },[book])
    return (
        <div>
            <div>
                <BookList></BookList>
            </div>

<ul>
                {
                    book.map(job =><li key={book.book_id}>
                        

                <div className="rounded-lg md:grid-cols-1 flex gap-0 ml-10 mt-40">
                  <div className="justify-center">
                  <img className=" w-56 h-72 mt-20 rounded-md" src={job.image_id} alt="" />
                  </div>
                  <div className=" ml-10">
                    <h1 className=" text-4xl  mt-10 font-bold">{job.book_name}</h1>
                    <p className=" font-medium mt-5 ml-2 text-gray-500">By: {job.author_name}</p>
                    <p className=" mt-4">Tag <div className="badge badge-accent badge-outline">#{job.tags}</div></p>
                    
                    <div className="py-10 pt-10 font-semibold justify-between">
                     <p className="flex gap-2"><HiOutlineMapPin />Year of Publishing: {job.year_of_publishing}</p>
                     <div className="flex space-x-6 ">
                     <p className="flex gap-2"> <MdOutlineManageAccounts /> Publisher:  {job.publisher}</p>
                     <p className="flex gap-2 mb-10"> <MdOutlineRestorePage/>Number:  {job.total_pages} </p>
                    </div>
                    <hr/>
                      <div className="flex space-x-6 mt-10 ">
                    <p className=" btn ml-2 badge bg-lime-500 font-bold ">{job.category}</p>
                    <p className="btn badge  bg-lime-500  font-bold">Rating:  {job.rating}</p>
                    <li>
                        <Link to={`../BookDetails/${job.book_id}`}>
                        <button className="btn bg-blue-300 ">View Details</button>
                        </Link>
                        </li>
                    </div>
                    </div>
                  </div>
                  </div>
                    
                    </li>)
                }
            </ul>



               </div>
    );
};

export default Wishlist;