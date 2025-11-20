import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="App">
      <div className="container-fluid" id="mainbg">
        <div className="row text-white">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <div className="container-fluid">
                {/* ✅ Changed to React Router Link */}
                <Link className="navbar-brand" to="/">SMARTHEAD</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/features">About</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/find">Find a tutor</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/bat">Become a tutor</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/contacts">Contacts</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/blogs">Blogs</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <Outlet />

      <footer className="container-fluid">
        <div className="row text-white" id="catbg">
          <div className="col-lg-4">
            <h5>Smarthead</h5>
            <p>Our commitment is to nurture intellects and foster innovation. Experience education redefined at Smarthead Institute, where every student's potential is realized.</p>
          </div>
          <div className="col-lg-4">
            <h5>Quick links</h5>
            <Link to="/features" id="about">About Us</Link><br />
            <Link to="/blogs" id="about">Our News</Link><br />
            <Link to="/contacts" id="about">Contact Us</Link><br />
            <Link to="/bat" id="about">Become a tutor</Link><br />
            <Link to="/portfolio" id="about">Portfolio</Link> {/* Make sure this route exists */}
          </div>
          <div className="col-lg-4">
            <h5>Our contacts</h5>
            <p><i className="fa-solid fa-location-dot p-2"></i>Bengaluru, Karnataka - 560001, India</p>
            <p><i className="fa-solid fa-message p-2"></i>PrivateTutors@gmail.com</p>
            <p><i className="fa-solid fa-phone p-2"></i>9464158200</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
