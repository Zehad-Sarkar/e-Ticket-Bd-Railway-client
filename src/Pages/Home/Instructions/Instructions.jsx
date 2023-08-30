import instructionImage from "../../../assets/images/instruction.jpg";
import { FaArrowRight } from "react-icons/fa";

const Instructions = () => {
  return (
    <div className="grid items-center gap-2 mt-24 md:grid-cols-2">
      <div>
        <img src={instructionImage} alt="image" className="w-full rounded-md" />
      </div>
      <div>
        <h4 className="mb-4 text-4xl font-medium ">
          Instructions to Purchase Tickets
        </h4>
        <div className="flex gap-2">
          <div>
            <FaArrowRight className="p-1 text-3xl text-white bg-green-800 rounded-full " />
          </div>
          <span>Tickets can be bought online ten days in advance. </span>
        </div>
        <div className="flex gap-2 mt-2">
          <div>
            <FaArrowRight className="p-1 text-3xl text-white bg-green-800 rounded-full " />
          </div>
          <div>
            <p>
              You can pay for the tickets using mobile financial services:
              bKash, Nagad, Rocket or debit/credit cards: Mastercard, Visa, DBBL
              Nexus. Other payment options will be available soon.
            </p>
          </div>
        </div>
        <div className="flex gap-2 mt-2">
          <div>
            <FaArrowRight className="p-1 text-3xl text-white bg-green-800 rounded-full " />
          </div>
          <span>
            In case of payment or transaction failure, the deducted amount would
            be refunded by your bank or MFS provider within 8 business days.
          </span>
        </div>
        <div className="flex gap-2 mt-2">
          <div>
            <FaArrowRight className="p-1 text-3xl text-white bg-green-800 rounded-full " />
          </div>
          <span>
            In case money has been deducted from your card / mobile wallet but
            you have not received a ticket confirmation, the deducted amount
            would be refunded by your bank or MFS provider within 8 business
            days.
          </span>
        </div>
        <div className="flex gap-2 mt-2">
          <div>
            <FaArrowRight className="p-1 text-3xl text-white bg-green-800 rounded-full " />
          </div>
          <span>
            If you have not received your ticket copy in email, kindly check
            your Spam / Junk folder. You can also download your ticket copy from
            the purchase history of your account after you login.
          </span>
        </div>
        <div className="flex gap-2 mt-2">
          <div>
            <FaArrowRight className="p-1 text-3xl text-white bg-green-800 rounded-full " />
          </div>
          <span>
            Download the official Rail Sheba app published by Bangladesh Railway
            from <a href="https://play.google.com">Google Play..</a>
          </span>
        </div>
        <div className="flex gap-2 mt-2">
          <div>
            <FaArrowRight className="p-1 text-3xl text-white bg-green-800 rounded-full " />
          </div>
          <span>
            In case of passengers downloading fake apps or any other app from
            Google Play which claim to sell train tickets of Bangladesh Railway,
            the authorities will not take any liability.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
