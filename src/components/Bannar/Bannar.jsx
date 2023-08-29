import trainImage from "../../assets/images/train.jpg";

const Bannar = () => {
  return (
    <div className="relative">
      <img src={trainImage} alt="" className="w-full h-[300px] rounded-md" />
      <div className="absolute top-8 right-4">
        <p className="text-lg font-medium">
          Easy purchase of tickets using <br />
          <span className="ml-12">online payment method</span>
        </p>
        <div className="flex gap-2 mt-4 font-bold">
          <p>Bkash</p>
          <p>Nagad</p>
          <p>Rocket</p>
          <p>Mastercard</p>
          <p>Visa</p>
          <p>DBBL Nexus</p>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
