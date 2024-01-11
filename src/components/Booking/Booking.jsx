/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const Booking = ({booking}) => {
    const { id, name, image, section, description } = booking;

    return (
        <div className="mt-6">
      <div className="card w-full h-[400px] bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl w-full h-[300px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{section}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
    );
};

export default Booking;