const ContactForm = () => {
  return (
    <form className="m-auto  w-full lg:w-2/3">
      <div className="formControl">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="John Doe"
          autoFocus
          className="placeholder:text-gray-700"
        />
      </div>
      <div className="formControl">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="example@example.com"
          className="placeholder:text-gray-700"
        />
      </div>
      <div className="formControl">
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          placeholder="123-456-7890"
          className="placeholder:text-gray-700"
        />
      </div>
      <div className="formControl">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Enter Message"
          className="formControl placeholder:text-gray-700"
        />
      </div>
    </form>
  );
};
export default ContactForm;
