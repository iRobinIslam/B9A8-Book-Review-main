import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 

const Book = ({book}) => {
    const {image_id,book_name,author_name,rating,category,book_id} =  book||{}
    console.log(book)
    return (
        <div>
            <Link to={`/BookDetails/${book_id}`}>
            <div className="card w-96 bg-base-100 border-2 mt-9 shadow-xl justify-between">
  <figure className="px-10 pt-10 bg-slate-100 rounded-xl">
    <img src={image_id} alt="cover" />
    
  </figure>

  <div className="card-body px-10 pt-10">
    <h2 className="card-title text-2xl">{book_name}</h2>
    <p className=" font-semibold  text-gray-600">By : {author_name}</p>
    <hr/>
    <div className="card-actions flex grid-cols-2 justify-between">
      <button className=" font-semibold">{category}</button>
      <button className=" flex gap-2 font-semibold">{rating}<FaStarHalfAlt></FaStarHalfAlt></button>
    </div>
  </div>
</div>
</Link>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.shape({
        image_id: PropTypes.string,
        book_name: PropTypes.string,
        author_name: PropTypes.string,
        rating: PropTypes.number,
        category: PropTypes.string,
        book_id: PropTypes.string
    })
};

export default Book;