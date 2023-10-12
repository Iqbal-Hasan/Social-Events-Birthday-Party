const GetInvolved = () => {
  return (
    <div>
      <div className="my-10 xl:max-w-screen-xl xl:mx-auto mx-5">
        <h1 className="text-center font-blod text-3xl my-10">Upcoming Events</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div>
            <div>
              <img
              className="w-full rounded-lg"
                src="https://i.ibb.co/gdGKVx5/Letters-to-Santa-7.png"
                alt=""
              />
            </div>
            <div>
              <p className="text-lg">Letter To Santa</p>
            </div>
          </div>

          <div>
            <div>
              <img
              className="w-full rounded-lg"
                src="https://i.ibb.co/cJPqjTf/IMG-8708.jpg"
                alt=""
              />
            </div>
            <div>
              <p className="text-lg">School Donation</p>
            </div>
          </div>

          <div>
            <div>
              <img
              className="w-full rounded-lg"
                src="https://i.ibb.co/YBH5nGw/Unknown-2.jpg"
                alt=""
              />
            </div>
            <div>
              <p className="text-lg">Spring Photo Shoot</p>
            </div>
          </div>

          <div>
            <div>
              <img
              className="w-full rounded-lg"
                src="https://i.ibb.co/S02JHXH/Ho-LIDAY-SPECTACULAR-3.png"
                alt=""
              />
            </div>
            <div>
              <p className="text-lg">Holiday Event</p>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
