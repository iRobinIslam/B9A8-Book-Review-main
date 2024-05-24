import { Link } from "react-router-dom";



const Error = () => {
    return (

        
        <div className="container text-center m-auto mt-52">
            <h1 className="text-7xl font-extrabold">404</h1>
            <h2 className=" font-extrabold text-4xl">
                <span className=" text-yellow-500 text-2xl"> Server Not Found</span></h2>
                <p className=" font-light mt-5">Network connection issues are a common cause of DNS server errors. 
                    <br/>One easy way to fix this kind of problem is by restarting your internet router. 
                    <br/>Switch it off and unplug the power cable for around 30 seconds.</p>
            <Link className="btn mt-10 border-solid border-2 bg-red-500 text-white btn-wide">Let go back home!</Link>
        </div>
    );
};

export default Error;