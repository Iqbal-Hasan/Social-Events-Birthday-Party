const Blog = () => {
  return (
    <div className="mx-5 my-20">
      <div className="lg:w-[700px] w-full lg:mx-auto">
        <div className="">
          <img
            className="rounded-lg w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1592&q=80"
            alt=""
          />
        </div>
        <div className="mb-10">
          <h1 className="text-xl font-bold my-5">
            How to Bake the Perfect Cake for Your Child
          </h1>
          <p>
            As parents, there are few things more rewarding than seeing the joy
            on our children&apos;s faces. One way to create unforgettable
            moments is by baking a special cake for their birthday or any other
            celebratory occasion. In this guide, we&apos;ll walk you through the
            steps to bake a cake that not only tastes delicious but also looks
            spectacular. Let&apos;s get started!
          </p>
          <button className="py-2 px-4 rounded-lg bg-blue-500 text-white font-blod mt-5">
            Read more
          </button>
        </div>
      </div>

      <div className="lg:w-[700px] w-full lg:mx-auto">
        <div>
          <img
            className="rounded-lg w-full"
            alt=""
            src="https://images.unsplash.com/photo-1657248319222-1a29eeea2fd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1519&q=80"
          />
        </div>
        <div className="mb-10">
          <h1 className="text-xl font-bold my-5">
            A Guide to Decorating Your Room
          </h1>
          <p>
            Your room is a sanctuary, a place where you can relax, rejuvenate,
            and express your personality. Whether you&apos;re starting from scratch
            or looking to refresh your space, this guide will walk you through
            the steps to decorate your room in a way that reflects your style
            and creates a comfortable environment. Let&apos;s dive in!
          </p>
          <button className="py-2 px-4 rounded-lg bg-blue-500 text-white font-blod mt-5">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
