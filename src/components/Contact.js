const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-lg p-4 m-4">contact us page</h1>
      <form className="">
        <input type="text" className="border border-black p-2 m-2" placeholder="Name"/>
        <input type="text" className="border border-black p-2 m-2" placeholder="Phone number"/>
        <button className="border border-black p-2 bg-green-300 text-black">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
