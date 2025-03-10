import styles from "../style";
import { arrowUp } from "../assets";
const GetSatrt = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row `}>
          <p className="font-poppins font-medium text-[18px]  laeding-[23px]">
            <span className="text-gradient mr-2">Get </span>
          </p>{" "}
          <img
            src={arrowUp}
            alt=""
            className="w-[23px] h-[23px] object-contain mt-[2px]"
          />
        </div>
        <p className="font-poppins font-medium text-[18px]  laeding-[23px]">
          <span className="text-gradient ">Started </span>
        </p>{" "}
      </div>
    </div>
  );
};

export default GetSatrt;
