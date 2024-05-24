import { Link } from "react-router-dom";


const Banner = () => {
    return (
      <div className="hero max-w-6xl mx-auto mt-10 bg-base-200 rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/NS0Sq9X/713be2009ed5e0a38a726ba628d93944-removebg-preview.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Books to freshen up
              <br />
              your bookshelf
            </h1>
            <Link to={`../BookList`}>
              <button className="btn border-solid border-2 bg-lime-500 mt-10">
                View The List
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;