
import { BsCameraFill } from 'react-icons/bs';
import { FaPeopleLine } from 'react-icons/fa6';
import { GoGoal } from 'react-icons/go';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init({
    duration:1000,
    offset:200,
})

const Goal = () => {
    return (
        <div className='mt-10'>
        <h1 className="text-3xl font-bold text-center underline decoration-blue-600 mb-12">About Us <span className='text-blue-800'>for event</span></h1>
        <div className="flex-col md:flex-row lg:flex">
            <div className="flex-1">
                <img data-aos="fade-up" className="w-[400px] md:w-[500px] mx-auto h-[260px] mb-4" src="https://i.ibb.co/dDp7SRk/photo-1519167758481-83f550bb49b3.jpg" alt="" />
            </div>
           <div data-aos="fade-up" className="flex-1 flex flex-col justify-center items-center">
           <div className="mb-8">
            <div className="flex justify-center items-center gap-2 mb-4 border-2 border-indigo-600 w-[300px] mx-auto md:w-[500px] py-4">
               <FaPeopleLine className="text-2xl text-red-700"></FaPeopleLine>
                <h1 className="text-2xl font-bold">Value Clients</h1>
            </div>
            <div className="flex justify-center items-center gap-2 mb-4 border-2 border-indigo-600 py-4">
               <BsCameraFill className="text-2xl text-red-700"></BsCameraFill>
                <h1 className="text-2xl font-bold">Photography</h1>
            </div>
            <div className="flex justify-center items-center gap-2 mb-4 border-2 border-indigo-600 py-5">
               <GoGoal className="text-2xl text-red-700"></GoGoal>
                <h1 className="text-2xl font-bold">Event Goals</h1>
            </div>
            </div>
           </div>
        </div>
      </div>
    );
};

export default Goal;