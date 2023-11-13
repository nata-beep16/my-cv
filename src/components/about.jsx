/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <div>
      {/* ======= About Me Section ======= */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <span>About Me</span>
            <h2>About Me</h2>
            <p>
            I'm a Professional Customer Service In Social VPS
            </p>
          </div>
          <div className="row">
            <div className="image col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start" />
            <div className="col-lg-8 d-flex flex-column align-items-stretch">
              <div className="content ps-lg-4 d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Name:</strong> <span>Natalia Ines H Makatipu</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Website:</strong> <span>socialvps.net</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>City:</strong> <span>Airmadidi, Sulawesi Utara</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Age:</strong> <span>2*</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Degree:</strong> <span>Otw S.Kom</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Freelance:</strong> <span>Social Hosting</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row mt-n4">
                  <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i
                        className="bi bi-emoji-smile"
                        style={{ color: "#20b38e" }}
                      />
                      <span
                        data-purecounter-start={0}
                        data-purecounter-end={232}
                        data-purecounter-duration={1}
                        className="purecounter"
                      />
                      <p>
                        <strong>Happy Clients</strong> The users we handle typically provide positive feedback to us; they are satisfied with the assistance given.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i
                        className="bi bi-journal-richtextr"
                        style={{ color: "#8a1ac2" }}
                      />
                      <span
                        data-purecounter-start={0}
                        data-purecounter-end={521}
                        data-purecounter-duration={1}
                        className="purecounter"
                      />
                      <p>
                        <strong>Projects</strong> 
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-clock" style={{ color: "#2cbdee" }} />
                      <span
                        data-purecounter-start={0}
                        data-purecounter-end={18}
                        data-purecounter-duration={1}
                        className="purecounter"
                      />
                      <p>
                        <strong>Years of experience</strong> The years of experience I have gone through have been exceptionally transformative, shaping me into who I am today.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-award" style={{ color: "#ffb459" }} />
                      <span
                        data-purecounter-start={0}
                        data-purecounter-end={16}
                        data-purecounter-duration={1}
                        className="purecounter"
                      />
                      <p>
                        <strong>Awards</strong> 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End .content*/}
              <div className="skills-content ps-lg-4">
                <div className="progress">
                  <span className="skill">
                    CS <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{width: '90%'}} 
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    Dubber <i className="val">85%%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{width: '85%'}} 
                      aria-valuenow={85}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    Coding <i className="val">50%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{width: '50%'}} 
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Me Section */}
    </div>
  );
};
export default About;