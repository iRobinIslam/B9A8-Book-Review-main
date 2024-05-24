// import { Link, useLoaderData, useParams } from "react-router-dom";

import {  useLoaderData, useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBookApplication } from "../LocalStorage/LocalStorage";




const BookDetails = () => {
   const jobs = useLoaderData();
   const {book_id}=useParams();
   const idInt = parseInt(book_id);
   const job = jobs.find(job=> job.book_id === idInt);
   //console.log(job);

const handleApplyRead = () =>{
  saveBookApplication(idInt);
toast('Added to the read list !!')
  
}
const handleApplyWishlist = () =>{
  saveBookApplication(idInt)
  toast('Added to the wishlist !!');
}

    return (
        <div>
           <NavBar></NavBar>
           <div>
           <div className="grid md:grid-cols-2 gap-0 ml-10 mt-40 w-full  h-auto">
                  <div className="border bg-slate-100 justify-center md:grid-span-2">
                  <img className=" w-full rounded-md" src={job.image_id} alt="" />
                  </div>
                  <div className=" ml-10 w-full">
                    <h1 className=" text-4xl  mt-20 font-bold">{job.book_name}</h1>
                    <p className=" font-medium mt-5 ml-2 text-gray-500">By: {job.author_name}</p>
                    <hr/>
                    <br/>
                    <p className="ml-2 font-semibold ">{job.category}</p>
                    <hr/>
                    <p className="mt-10 font-semibold font-2xl">{job.review}</p>
                    <p className="mt-10 font-semibold mb-5">Tag <div className="badge badge-accent badge-outline">#{job.tags}</div></p>
                    <hr/>
                    <div className="py-10 pt-10 font-semibold space-y-7">
                    <p>Number:  {job.total_pages} </p>
                    <p className="font-semibold">Publisher:  {job.publisher}</p>
                    <p>Year of Publishing:  {job.year_of_publishing}</p>
                    <p>Rating:  {job.rating}</p>
                    <br/>
                    <div className="flex space-x-10">
                      
                     <button onClick={handleApplyRead} className="btn btn-outline">Read Books</button>
                     
                    <br/>
                   
                    <button onClick={handleApplyWishlist} className="btn btn-primary">Wishlist Books</button>
                    
                    </div>
                    </div>
                  </div>

               </div>
           </div>
           <ToastContainer />
        </div>
    );
};

export default BookDetails;