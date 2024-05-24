import { useLoaderData, useParams } from "react-router-dom";


const ReadBook = () => {
    const jobs = useLoaderData();
    const {book_id} = useParams( );
    const idInt = parseInt(book_id)
    const  job = jobs.find(job => job.book_id === idInt)
    console.log(jobs,book_id,job);
    return (

        <div>hfsdjkgfkjerdo</div>
        
   
  
       
    );
};

export default ReadBook;