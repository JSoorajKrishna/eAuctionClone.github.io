import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-info shadow pb-0">
        <div class="container-fluid ps-3 ms-0">
          <div className="row align-items-center">
              <div className="col-1">
              <img className='img-fluid' src="emblem.png" alt="emblem" />
              </div>
              <div className="col-1 bg-white py-2 rounded">
              <a class="navbar-brand me-0" href="#">
                <img src="logo.a77331c.png" alt="logo" className="img-fluid" />
              </a>
              </div>
            <div className="col-6">
            <p className='fs-6 lh-1 text-white'>
            <span className='fw-bolder fs-4'>eAuction India</span><br/>
            A secure, transparent platform for conducting Electronic Auctions by Government</p>
            </div>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div>
            <div>
              <p className='text-white'><i class="bi bi-telephone-fill text-warning"></i> 0120-4001 002 / ... | <i class="bi bi-chat-square-fill text-warning"></i> support-eauction[at]nic[dot]in / support-eproc[at]nic[dot]in</p>
            </div>
            <div class="collapse navbar-collapse  bg-white p-2 rounded" id="navbarNav">
              <ul class="btn-group rounded-pill bg-secondary navbar-nav">
                <li class="btn rounded-pill fs-6 lh-1 text-white btn-outline-danger py-0 border-0 nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Auction Status</a>
                </li>
                <li class="btn rounded-pill btn-outline-danger py-0 border-0 nav-item">
                  <a class="nav-link fs-6 lh-1 text-black" href="#">Auction Search</a>
                </li>
                <li class="btn rounded-pill btn-outline-danger py-0 border-0 nav-item">
                  <a class="nav-link fs-6 lh-1 text-black" href="#">Department Onboarding</a>
                </li>
                <li class="btn rounded-pill btn-outline-danger py-0 border-0 nav-item">
                  <a class="nav-link fs-6 lh-1 text-black" href="#">Bidder Enrollment</a>
                </li>
              </ul>
              <button className="btn btn ms-1 shadow btn-danger rounded"><i class="bi bi-person"></i>Login</button>
            </div>
          </div>
        </div>
      </nav>
      <section id="banner">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="banner_1.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="banner_2.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="banner_3.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="banner_4.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="banner_5.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="banner_6.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="banner_7.jpg" class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </section>
      <section id="buttons">
        <div className="container-fluid">
          <div className="row shadow">
              <a href="#" className="btn pt-3 pb-0 col-2 border-0 btn-outline-primary fw-bold"><i class="bi bi-hammer pe-2"></i>Active Auctions</a>
              <a href="#" className="btn pt-3 pb-0 col-2 border-0 btn-outline-primary fw-bold"><i class="bi bi-arrow-left-right pe-2"></i>Corrigendum</a>
              <a href="#" className="btn pt-3 pb-0 col-2 border-0 btn-outline-primary fw-bold"><i class="bi bi-hand-thumbs-up-fill pe-2"></i>Results of Auction</a>
              <a href="#" className="btn pt-3 pb-0 col-2 border-0 btn-outline-primary fw-bold"><i class="bi bi-currency-dollar pe-2"></i>Auctions By value</a>
              <a href="#" className="btn pt-3 pb-0 col-2 border-0 btn-outline-primary fw-bold"><i class="bi bi-calculator-fill pe-2"></i>Auctions By Org</a>
              <a href="#" className="btn pt-3 pb-0 col-2 border-0 btn-outline-primary fw-bold"><i class="bi bi-cart-fill pe-2"></i>Auctions By Prod Category</a>
          </div>
        </div>
      </section>
      <section id="card">
        <div className="container-lg mt-5">
          <div className="row justify-content-center">
            <div className="col-6">
              <div class="card p-5 border-white border-5 shadow bg-primary rounded-circle w-75">
                <div class="card-body p-5">
                  <div id="carouselExampleIndicators1" class="carousel slide p-3" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                      Commodity Auction  facilitates Forward/Reverse , Multi/Single Lot Auction for  Sale/Lease / Purchase of Commodities.
                      </div>
                      <div class="carousel-item">
                      Specialized Auction is a limited auction floated with specific eligibility criteria, empanelled vendors satisfying the eligibility criteria can only participate.
                      </div>
                      <div class="carousel-item">
                      In open auction general public can participate, favourite items are dynamically determined based on hits/trends, it facilitates auction of items in bulk also.
                      </div>
                      <div class="carousel-item">
                      NIC is conducting web-learning sessions on every Wednesday 2.30 to 5.30. Please visit the link https://eprocure.gov.in/cppp/trainingdisp/ to join the sessions.
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="sidenav">
        <div className="container-fluid position-absolute">
          
              <div className="input-group mt-1">
                <i class="bi bi-film bg-danger py-1 px-2"></i>
                <span className='px-2 pe-5 bg-info'>eAuction Movie</span>
              </div>
              <div className="input-group mt-1">
                <i class="bi bi-film bg-danger py-1 px-2"></i>
                <span className='px-2 pe-5 bg-info'>eAuction Movie</span>
              </div>
            
        </div>
      </section>
      <section id="links" className="my-5">
        <div className="container-ly bg-light p-4">
          <div className="row justify-content-around">
            <div className="col-2">
            <button className="btn shadow py-4 rounded-0 border-0 bg-white">
              <div className="row">
              <div className="col-6">
              
              <i class="bi bi-hammer me-1 p-4 rounded-2 bg-primary"></i>
                
              
              </div>
              <div className="col-6">
                Auctions Starting Today
              </div>
              </div>
              </button>
            </div>
            <div className="col-2">
              <button className="btn shadow py-4 rounded-0 border-0 bg-white">
                <i class="bi bi-hammer me-1 p-4 rounded-2 bg-primary"></i>
                Auctions Closing Today
              </button>
            </div>
            <div className="col-2">
              <button className="btn shadow py-4 rounded-0 border-0 bg-white">
                <i class="bi bi-file-earmark-fill me-1 p-4 rounded-2 bg-primary"></i>
                Bid Submission Starting Today
              </button>
            </div>
            <div className="col-2">
              <button className="btn shadow py-4 rounded-0 border-0 bg-white">
                <i class="bi bi-file-earmark-fill me-1 p-4 rounded-2 bg-primary"></i>
                Bid Submission Closing Today
              </button>
            </div>
            <div className="col-2">
              <button className="btn shadow py-4 rounded-0 border-0 bg-white">
                <i class="bi bi-upload me-1 p-4 rounded-2 bg-primary"></i>
                Auctions Published
              </button>
            </div>
            <div className="col-2">
              <button className="btn shadow pb-5 py-4 rounded-0 border-0 bg-white">
                <i class="bi bi-award-fill me-1 p-4 rounded-2 bg-primary"></i>
                Auctions Awards
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-light'>
        <footer>
          <div className="container-fluid">
            <div className="row bg-primary p-2 justify-content-center">
              <div className="col-1 border-end border-3 border-white">
                <img src="footer1.png" alt="Digital India" className="img-fluid" />
              </div>
              <div className="col-1 border-end border-3 border-white">
                <img src="footer2.png" alt="Digital India" className="img-fluid" />
              </div>
              <div className="col-1 border-end border-3 border-white">
                <img src="footer3.png" alt="Digital India" className="img-fluid" />
              </div>
              <div className="col-1">
                <img src="footer4.png" alt="Digital India" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row bg-info justify-content-center">
              <div className="col-2">
                <img src="footer5.png" alt="barcode" className="img-fluid" />
              </div>
              <div className="col-2 border-end border-3">
                <img src="footer6.png" alt="barcode" className="img-fluid" />
                <p>© Contents maintained and owned by respective Auction Inviting Authorities.
                  eAuction platform is designed, developed and hosted by National Informatics Centre,
                   Ministry of Electronics & Information Technology, Government of India.</p>
              </div>
              <div className="col-2 border-end border-3">
                <p className='fw-bold text-white'>Certifying Agency</p>
                <img src="footer7.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default App;
