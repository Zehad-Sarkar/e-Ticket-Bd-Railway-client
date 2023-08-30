import SearchTrain from "../../../components/SearchTrain/SearchTrain";
import Bannar from "../../../components/Bannar/Bannar";
import TSection from "../TSection/TSection";
import Instructions from "../Instructions/Instructions";
import PayImageSection from "../PayImageSection/PayImageSection";

const Home = () => {
  return (
    <div className="mx-2">
      <div className="grid gap-4 md:grid-cols-2">
        <SearchTrain />
        <Bannar />
      </div>
      <TSection />
      <Instructions />
      <PayImageSection />
    </div>
  );
};

export default Home;
