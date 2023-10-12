const About = () => {
  return (
    <div className="xl:max-w-screen-xl xl:mx-auto mx-5 my-20">
      <h1 className="text-center text-5xl font-bold mb-10">About Us</h1>
      <div className="flex flex-col gap-5 md:flex-row">
        <img
          className="h-[400px] w-full object-cover object-center rounded-lg"
          src="https://i.ibb.co/MM9QCCV/IMG-9041-copy.jpg"
          alt=""
        />
        <div>
          <h2 className="text-center sm:text-left sm:text-xl sm:font-bold text-lg mb-5">
            Working towards a more compassionate Chicago.
          </h2>
          <p>
            We are a for profit business. Yet we also recognize that to whom
            much is given, much is expected. To that end, every thing WE do has
            a giving back component. We are proud to offer financial
            contributions, supply donations, and publicity to Chicago based not
            for profit organizations each month.
          </p>
        </div>
      </div>

      <h1 className="text-center text-5xl font-bold mt-10 mb-5">Our Team</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-center">
        <div className="">
          <img
          className="mb-5 rounded-lg"
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
          <p>JESSIE, FOUNDER & EVENT DIRECTOR</p>
        </div>
        <div>
          <img
          className="mb-5 rounded-lg"
            src="https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
            alt=""
          />
          <p >JASON, MASTER BUILDER</p>
        </div>
        <div>
          <img
          className="mb-5 rounded-lg"
            src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
          <p>CARA, ACTIVITIES INSTRUCTOR</p>
        </div>
      </div>
    </div>
  );
};

export default About;
