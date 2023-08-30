import bKash from "../../../assets/images/bkash.png";
import nagad from "../../../assets/images/nagad.png";
import rocket from "../../../assets/images/rocket.svg";
import mastercard from "../../../assets/images/mastercard.png";
import visa from "../../../assets/images/visa.png";
import nexus from "../../../assets/images/nexus.svg";

const PayImageSection = () => {
  return (
    <div>
      <div className="items-center justify-center gap-6 py-6 mt-24 border-t-2 border-b-2 md:flex">
        <img src={bKash} alt="bkash" className="h-16 " />
        <img src={nagad} alt="nagad" className="h-16 " />
        <img src={rocket} alt="rocket" className="h-16 " />
        <img src={mastercard} alt="mastercard" className="h-16 " />
        <img src={visa} alt="visa" className="h-16 " />
        <img src={nexus} alt="dbbl nexus" className="h-16 " />
      </div>
      <p className="px-4 mt-10 mb-4 font-semibold">
        * The Tickets are issued by Bangladesh Railway's Centrally Computerized
        Seat Reservation & Ticketing System (CCSRTS) and Shohoz-Synesis-Vincen
        JV is responsible for designing, development, implementation, technical
        operation & maintenance of the system.
      </p>
    </div>
  );
};

export default PayImageSection;
