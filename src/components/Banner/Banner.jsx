

const Banner = () => {
    return (
        <div className="mt-12">
        <div className="carousel w-full">
         <div id="slide1" className="carousel-item relative w-full">
           <div  
             className="hero min-h-screen"
             style={{
               backgroundImage: "url(https://i.ibb.co/30ZpVYW/wedding.png)",
               backgroundAttachment:'fixed'
   
             }}
           >
             <div className="hero-overlay bg-opacity-60"></div>
             <div className="hero-content text-center text-neutral-content">
               <div className="max-w-md">
                 <h1 className="mb-5 text-2xl lg:text-4xl font-bold">Wedding</h1>
                 <button className="btn bg-red-800 text-white">Get Started</button>
               </div>
             </div>
           </div>
           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
             <a href="#slide6" className="btn btn-circle">
               ❮
             </a>
             <a href="#slide2" className="btn btn-circle">
               ❯
             </a>
           </div>
         </div>
         <div id="slide2" className="carousel-item relative w-full">
           <div
             className="hero min-h-screen"
             style={{
               backgroundImage: "url(https://i.ibb.co/Fhvf4K0/birthday.jpg)",
             }}
           >
             <div className="hero-overlay bg-opacity-60"></div>
             <div className="hero-content text-center text-neutral-content">
               <div className="max-w-md">
                 <h1 className="mb-5 text-2xl lg:text-4xl font-bold">Birthday</h1>
                 <button className="btn bg-red-800 text-white">Get Started</button>
               </div>
             </div>
           </div>
   
           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
             <a href="#slide1" className="btn btn-circle">
               ❮
             </a>
             <a href="#slide3" className="btn btn-circle">
               ❯
             </a>
           </div>
         </div>
         <div id="slide3" className="carousel-item relative w-full">
           <div
             className="hero min-h-screen"
             style={{
               backgroundImage: "url(https://i.ibb.co/236rryq/anniversary.jpg)",
             }}
           >
             <div className="hero-overlay bg-opacity-60"></div>
             <div className="hero-content text-center text-neutral-content">
               <div className="max-w-md">
                 <h1 className="mb-5 text-2xl lg:text-4xl font-bold">Anniversary</h1>
                 <button className="btn bg-red-800 text-white">Get Started</button>
               </div>
             </div>
           </div>
   
           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
             <a href="#slide2" className="btn btn-circle">
               ❮
             </a>
             <a href="#slide4" className="btn btn-circle">
               ❯
             </a>
           </div>
         </div>
         <div id="slide4" className="carousel-item relative w-full">
           <div
             className="hero min-h-screen"
             style={{
               backgroundImage: "url(https://i.ibb.co/8XQQrmy/engagement.jpg)",
             }}
           >
             <div className="hero-overlay bg-opacity-60"></div>
             <div className="hero-content text-center text-neutral-content">
               <div className="max-w-md">
                 <h1 className="mb-5 tex-2xl lg:text-4xl font-bold">Engagement</h1>
                 <button className="btn bg-red-800 text-white">Get Started</button>
               </div>
             </div>
           </div>
   
           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
             <a href="#slide3" className="btn btn-circle">
               ❮
             </a>
             <a href="#slide5" className="btn btn-circle">
               ❯
             </a>
           </div>
         </div>
         <div id="slide5" className="carousel-item relative w-full">
           <div
             className="hero min-h-screen"
             style={{
               backgroundImage: "url(https://i.ibb.co/DpBggw0/retirement.jpg)",
             }}
           >
             <div className="hero-overlay bg-opacity-60"></div>
             <div className="hero-content text-center text-neutral-content">
               <div className="max-w-md">
                 <h1 className="mb-5 text-2xl lg:text-4xl font-bold">Retirement</h1>
                 <button className="btn bg-red-800 text-white">Get Started</button>
               </div>
             </div>
           </div>
   
           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
             <a href="#slide4" className="btn btn-circle">
               ❮
             </a>
             <a href="#slide6" className="btn btn-circle">
               ❯
             </a>
           </div>
         </div>
         <div id="slide6" className="carousel-item relative w-full">
           <div
             className="hero min-h-screen"
             style={{
               backgroundImage:
                 "url(https://i.ibb.co/7SGxn2F/istockphoto-540117814-612x612.jpg)",
             }}
           >
             <div className="hero-overlay bg-opacity-60"></div>
             <div className="hero-content text-center text-neutral-content">
               <div className="max-w-md">
                 <h1 className="mb-5 text-5xl font-bold">Baby Shower</h1>
                 <button className="btn bg-red-800 text-white">Get Started</button>
               </div>
             </div>
           </div>
   
           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
             <a href="#slide5" className="btn btn-circle">
               ❮
             </a>
             <a href="#slide1" className="btn btn-circle">
               ❯
             </a>
           </div>
         </div>
       </div>
      </div>
    );
};

export default Banner;