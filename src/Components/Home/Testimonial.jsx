import { useEffect, useState } from "react";
import { TestCard } from "./TestCard";

export default function Testimonial() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("data.json");
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1 className="text-center text-5xl font-bold mb-5 mt-20">Testimonial</h1>
      <p className="text-center text-base sm:text-lg md:text:xl mb-10">
        What are customars says about us
      </p>
      <div className="mx-5">
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5  xl:max-w-screen-xl justify-center xl:mx-auto mb-20">
        {data?.map((singleData) => (
          <TestCard key={singleData.id} singleData={singleData}></TestCard>
        ))}
      </div>
      </div>
    </>
  );
}
