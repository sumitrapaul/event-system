/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const Service = ({service}) => {
    const {id,name,image,price,description} = service
    return (
        <div className="card card-compact bg-base-100 border border-blue-600 shadow-xl">
        <figure><img className="pt-4 p-2 w-full h-[300px] md:h-[200px]" src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p className="text-2xl text-red-800">{price}</p>
          <div className="card-actions justify-end">
           <Link to={`/details/${id}`}>
           <button className="btn bg-red-800 text-white">Details</button>
           </Link>
          </div>
        </div>
      </div>
    );
};

export default Service;