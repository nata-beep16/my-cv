/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
  return (
    <div>
      {/* ======= Contact Me Section ======= */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <span>Contact Me</span>
            <h2>Contact Me</h2>
            <p>
              Let's Connect
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-12">
                  <div className="info-box">
                    <i className="bx bx-share-alt" />
                    <h3>Social Profiles</h3>
                    <div className="social-links">
                      <a href="https://twitter.com/home?lang=en" target="_blank" className="twitter" rel="noreferrer">
                        <i className="bi bi-twitter" />
                      </a>
                      <a href="https://www.facebook.com/nhata.iyaa?mibextid=ZbWKwL" target="_blank" className="facebook" rel="noreferrer">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="https://instagram.com/nhatlee__?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" className="instagram" rel="noreferrer">
                        <i className="bi bi-instagram" />
                      </a>
                      <a href="https://www.linkedin.com/in/natalia-ines-hendrik-makatipu-579bb4256/" target="_blank" className="linkedin" rel="noreferrer">
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <i className="bx bx-envelope" />
                    <h3>Email Me</h3>
                    <p>nmakatipu@gmail.com</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <i className="bx bx-phone-call" />
                    <h3>Call Me</h3>
                    <p>+628 2248 3701 54</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={6}
                    placeholder="Message"
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Me Section */}
    </div>
  );
};
export default Contact;