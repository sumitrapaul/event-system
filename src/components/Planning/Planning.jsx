

const Planning = () => {
    return (
        <div className="mt-10">
          <h1 className="text-3xl font-bold text-center underline decoration-blue-600 mb-12">
        Easy <span className="text-blue-800">Planning</span>
      </h1> 
      <div className="stats shadow flex flex-col lg:flex-row justify-center items-center mb-16 border-2 border-blue-600">
  
  <div className="stat mr-4">
    <div className="stat-title text-black">Local Event</div>
    <div className="stat-value text-2xl">Total Count : 31K</div>
    <div className="stat-desc text-black text-lg">Date Range : Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-title text-black">Standard Event</div>
    <div className="stat-value text-2xl">Total Count : 4,200K</div>
    <div className="stat-desc text-black text-lg">Increase : 22%</div>
  </div>
  
  <div className="stat">
    <div className="stat-title text-black">International Event</div>
    <div className="stat-value text-2xl">Total Count : 1,200K</div>
    <div className="stat-desc text-black text-lg">Decrease : 14%</div>
  </div>
  
</div> 
        </div>
    );
};

export default Planning;