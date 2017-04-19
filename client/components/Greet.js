import React from 'react';
import NavigationBar from './NavigationBar';
class Greet extends React.Component {
  render() {
    return (
      <div>
        <div className="bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12" style={{ display: "flex", "alignItems": "center", "justifyContent": "center" }}>
                <div className="col-md-4" style={{ padding: "10px", position: "relative", "top": "10%", display: "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column" }}>
                  <p className="header" style={{ textAlign: "center" }}>    Register, Update your profile, we get you an interview</p>
                  <form className="font" style={{ width: "300px", marginTop: "40px", fontFamily: "Open Sans Condensed, sans-serif" }}>
                    <div className="form-group">
                      <input type="email" className="form-control" id="inputEmail3" placeholder="Username" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Password" />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-custom">Sign Up to get started</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row margintop">
            <div className="left">
              <i className="material-icons md-48">people</i>
              <p>Are you a good writer or seller? Are you exceptional at editing resumes ? Let us know how you can better support the development
            and be a part of what we do team. We are open to knowing how to make this much better than it currently is.
            </p>
              <button type="submit" className="btn btn-primary outline">Join our team</button>
            </div>
            <div className="right">
              <i className="material-icons md-48">question_answer</i>
              <p>Learn more about our affordable pricing system and our partners.
              Also, learn more about us ranging from our core services to additional services. You can recommend and give feedback too! We would be more than willing to act on them </p>
              <button type="submit" className="btn btn-primary outline">Learn more</button>
            </div>
            <hr />
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="footer-block">
                  <ul className="list-inline footer-menu">
                    <li><a href="">Term of Use</a></li>
                    <li><a href="">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="footer-block text-center">
                  <p className="copyright">
                    © 2016 YOKE. All rights reserved.
					</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="footer-block">
                  <ul className="list-inline pull-right social-icon">
                    <li><a href=""><i className="fa fa-facebook"></i></a></li>
                    <li><a href=""><i className="fa fa-twitter"></i></a></li>
                    <li><a href=""><i className="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Greet;
