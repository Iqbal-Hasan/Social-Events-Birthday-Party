const Bannar = () => {
  return (
    <>
      <div>
        <div className="relative flex justify-center">
          <img
            className="w-full h-[500px] md:h-[700px] object-cover object-center imageClass"
            src="https://i.ibb.co/2gJvSs4/jacob-schwartz-en-Vg-Vtsw1c-unsplash.jpg"
            alt=""
          />

          <div className="absolute top-[40%] text-white z-10">
            <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 lg:mb-10">
              Make Your Day Special
            </h1>
            <button className="mx-auto py-2 px-3 md:py-4 md:px-8 md:text-xl md:font-bold block rounded-md bg-blue-500">
              Hire Now
            </button>
          </div>
          <div className="absolute bg-black w-full h-[500px] md:h-[700px] opacity-50"></div>
        </div>
      </div>
    </>
  );
};

export default Bannar;
