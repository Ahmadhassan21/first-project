export const Contact = () => {
  return (
    <>
      <div className="contactcontainer">
        <div className="contactheading mb-5">
          <h1>Contact Us</h1>
        </div>
        <div className="contactform">
          <form>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="formcontrol"
              name="username"
              required
              autoComplete="off"
            ></input>
            <input
              type="email"
              placeholder="Enter Your Mail"
              className="formcontrol"
              name="email"
              required
              autoComplete="false"
            ></input>
            <textarea
              className="formcontrol"
              placeholder="Enter Your Message"
              required
              autoComplete="off"
              rows={6}
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
};
