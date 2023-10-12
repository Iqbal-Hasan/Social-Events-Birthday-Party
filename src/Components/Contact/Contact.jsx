const Contact = () => {
  return (
    <div className="my-20">
      <h1 className="text-center text-5xl font-bold mb-10">Contact Us</h1>

      <div className="flex flex-col max-w-[700px] md:mx-auto mx-5 gap-5">
        <input className="border-2 border-gray-500 py-5 px-3 rounded-md focus:outline-none" type="text" placeholder="Enter your name" />
        <input className="border-2 border-gray-500 py-5 px-3 rounded-md focus:outline-none" type="email" placeholder="Enter your email" />
        <textarea className="border-2 border-gray-500 py-5 px-3 rounded-md focus:outline-none"
          name="textarea"
          id="textarea"
          rows="4"
          cols="50"
          placeholder="Enter you message"
        ></textarea>
        <button className="py-5 px-3 rounded-md bg-blue-400 text-white" type="submit">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
