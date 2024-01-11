import Banner from "../../components/Banner/Banner";
import Bookings from "../../components/Bookings/Bookings";
import Goal from "../../components/Goal/Goal";
import Planning from "../../components/Planning/Planning";
import Services from "../../components/Services/Services";
import Team from "../../components/team/Team";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Bookings></Bookings>
      <Planning></Planning>
      <Team></Team>
      <Goal></Goal>
    </div>
  );
};

export default Home;
