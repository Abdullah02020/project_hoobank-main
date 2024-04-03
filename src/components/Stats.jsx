import { stats } from "../constants";
import styles from "../style";
const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} sm:flex-row flex-col flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stats) => (
        <div
          key={stats.id}
          className={` sm:flex-row flex-1 flex justify-start items-center flex-col m-3 `}
        >
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43p]  text-white">
            {stats.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[25px] leading-[21px]  text-gradient uppercase ml-3">
            {stats.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
