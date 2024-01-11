import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const ServiceDetails = () => {
    const { id } =useParams()
    const [service,setService] =useState({})
 
    useEffect(() =>{
     fetch('/services.json')
     .then(res => res.json())
     .then(data =>{
         const findService=data.find(service => service.id == id)
         setService(findService)
     })
    },[id])

    return (
        <div className="card md:w-3/4 lg:w-2/4 mx-auto">
        <figure><img className="h-[300px] w-full lg:h-[500px]" src={service.image} alt="card"/></figure>
        <div className="card-body">
          <h2 className="card-title text-blue-600 font-bold">{service.name}</h2>
          <p>{service.description}</p>
        </div>
      </div>
    );
};

export default ServiceDetails;