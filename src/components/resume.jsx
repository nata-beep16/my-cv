const Resume = () => {
  return (
    <div>
      {/* ======= My Resume Section ======= */}
      <section id="resume" className="resume">
        <div className="container">
          <div className="section-title">
            <span>My Resume</span>
            <h2>My Resume</h2>
            
          </div>
          <div className="row">
            <div className="col-lg-6">

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Senior High School</h4>
                <h5>2015 - 2018</h5>
                <p>
                  <em>SMA Advent Nabire</em>
                </p>
                <p>
                SMA Advent Nabire is one of the educational institutions with a high school level in Nabarua, District of Nabire, Nabire Regency, Papua.
                </p>
              </div>
              <div className="resume-item">
                <h4>Computer Science | Informatics</h4>
                <h5>2021 - Present</h5>
                <p>
                  <em>Universitas Klabat</em>
                </p>
                <p>
                Universitas Klabat is a Christian institution of higher learning.
                It was established on 7 October 1965 by Gereja Masehi Advent Hari Ketujuh.
                At present, the university is run by Yayasan Universitas Klabat under the care of Uni Konfrens Indonesia Kawasan Timur or the East Indonesia Union Conference of the SDA.
                </p>
              </div>
            </div>
            
            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Customer Services</h4>
                <h5>2019 - Present</h5>
                <p>
                  <em>Social Hosting</em>
                </p>
                <p></p>
                <ul>
                  <li>
                    Specialized in Customer service
                  </li>
                  <li>
                    Helping clients understand the problems they face
                  </li>
                  <li>
                    Work using an updated and professional system in processing user orders
                  </li>

                </ul>
                <p />
              </div>
            
              <div className="resume-item">
                <h4>Dubber</h4>
                <h5>2019 - Present</h5>
                <p>
                  <em>Social Hosting</em>
                </p>
                <p></p>
                <ul>
                  <li>
                    Recording Morning Reflection
                  </li>
                  <li>
                    Recording Sabbath School Audio
                  </li>
                </ul>
                <p />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End My Resume Section */}
    </div>
  );
};
export default Resume;