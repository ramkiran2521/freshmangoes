import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-cont">
      <h1>Contact</h1>
      <form>
        <div className="contact-f">
          <div>
            <label htmlFor="firstname">
              First Name <span>*</span>
            </label>
            <input
              id="firstname"
              name="firstname"
              type="text"
              required
            />
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label>
            <input id="lastname" name="lastname" type="text" />
          </div>
          <div>
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input id="email" name="email" type="email" required />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" type="text" />
          </div>
        </div>
        <div className="text-area-sec">
          <label htmlFor="message">
            Type your message here...<span>*</span>
          </label>
          <textarea id="message" name="message" required></textarea>
        </div>

        <div className="con-sub-btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
