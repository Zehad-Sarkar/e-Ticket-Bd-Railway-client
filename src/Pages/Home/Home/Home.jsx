import SearchTrain from "../../../components/SearchTrain/SearchTrain";
import Bannar from "../../../components/Bannar/Bannar";

const Home = () => {
  return (
    <div className="mx-2">
      <div className="grid gap-4 md:grid-cols-2">
        <SearchTrain />
        <Bannar />
      </div>
    </div>
  );
};

export default Home;
