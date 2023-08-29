import { useForm } from "react-hook-form";

const SearchTrain = () => {
  const { register } = useForm();
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-4">
        <div className="form-control">
          <label htmlFor="from">From</label>
          <input
            type="text"
            {...register("from")}
            className="px-3 py-2 border rounded-md"
            placeholder="From Station"
          />
        </div>
        <div className="form-control">
          <label htmlFor="to">To</label>
          <input
            type="text"
            {...register("to")}
            className="px-3 py-2 border rounded-md"
            placeholder="To Station"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="form-control">
          <label htmlFor="date">Pick a Date</label>
          <input
            type="date"
            {...register("date")}
            className="px-3 py-2 border rounded-md"
            placeholder="Pick a date"
          />
        </div>
        <div className="form-control">
          <label htmlFor="choose">Choose a Class</label>
          <select
            {...register("choose_seat")}
            className="px-3 py-2 text-sm border rounded-md"
          >
            <option value="Choose a class" hidden>
              Choose a class
            </option>
            <option value="AC_B">AC_B</option>
            <option value="AC_S">AC_S</option>
            <option value="SHINGDHA">SHINGDHA</option>
            <option value="F_BERTH">F_BERTH</option>
            <option value="F_SEAT">F_SEAT</option>
            <option value="F_CHAIR">F_CHAIR</option>
            <option value="S_CHAIR">S_CHAIR</option>
            <option value="SHOVON">SHOVON</option>
            <option value="SHULOV">SHULOV</option>
            <option value="AC_CHAIR">AC_CHAIR</option>
          </select>
        </div>
      </div>
      <button className="w-full mt-3 btn btn-primary">Search Train</button>
    </div>
  );
};

export default SearchTrain;
