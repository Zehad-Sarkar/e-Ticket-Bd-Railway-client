import search from "../../../assets/images/search.jpg";

const TSection = () => {
  return (
    <div className="flex justify-between mt-24">
      <div className="">
        <img src={search} alt="image" className="w-32 mb-3" />
        <div className="space-y-3">
          <h3 className="text-3xl font-medium">Search</h3>
          <p>
            Choose your origin, destination, <br /> journey dates and search for
            trains
          </p>
        </div>
      </div>
      <div className="">
        <img src={search} alt="image" className="w-32 mb-3" />
        <div className="space-y-3">
          <h3 className="text-3xl font-medium">Select</h3>
          <p>
            Select your desired trip and choose <br /> your seats
          </p>
        </div>
      </div>
      <div className="">
        <img src={search} alt="image" className="w-32 mb-3" />
        <div className="space-y-3">
          <h3 className="text-3xl font-medium">Pay</h3>
          <p>Pay for the tickets via Debit / Credit <br /> Cards or MFS</p>
        </div>
      </div>
    </div>
  );
};

export default TSection;
