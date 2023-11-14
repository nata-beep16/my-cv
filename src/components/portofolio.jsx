const Portfolio = () => {
  return (
    <div>
      {/* ======= My Portfolio Section ======= */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <span>My Portfolio</span>
            <h2>My Portfolio</h2>
            <p>
              My Journey so Far
            </p>
          </div>

          <div className="row portfolio-container">
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-img">
                <img
                  src="public/portfolio/4.jpg"
                  className="img-fluid"
                  alt
                />
              </div>

            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-img">
                <img
                  src="public/portfolio/1.jpeg"
                  className="img-fluid"
                  alt
                />
              </div>

            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-img">
                <img
                  src="public/portfolio/3.jpg"
                  className="img-fluid"
                  alt
                />
              </div>

            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-img">
                <img
                  src="public/portfolio/uk.jpg"
                  className="img-fluid"
                  alt
                />
              </div>

            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-img">
                <img
                  src="public/portfolio/mic.jpg"
                  className="img-fluid"
                  alt
                />
              </div>

            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-img">
                <img
                  src="public/portfolio/trd.jpg"
                  className="img-fluid"
                  alt
                />
              </div>

            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-img">
                <img
                  src="public/portfolio/S22.jpg"
                  className="img-fluid"
                  alt
                />
              </div>

            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-img">
                <img
                  src="public/portfolio/S23.jpg"
                  className="img-fluid"
                  alt
                />
              </div>

            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-img">
                <img
                  src="public/portfolio/HR.jpg"
                  className="img-fluid"
                  alt
                />
              </div>
              
            </div>
          </div>
        </div>
      </section>
      {/* End My Portfolio Section */}
    </div>
  );
};
export default Portfolio;