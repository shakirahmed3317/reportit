import React, { useState } from "react";

const CitySignUp = ({ onNavigate }) => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="signup-page">
      <div className="signup-page-container">
        <button className="back-btn" onClick={() => onNavigate("home")}>
          ← Back to Home
        </button>
        <div className="signup-container">
          <div className="signup-header">
            <h2>{isSignUp ? "City Registration" : "City Sign In"}</h2>
            <p>
              {isSignUp
                ? "Connect your city with residents through ReportIt"
                : "Access your city's ReportIt dashboard"}
            </p>
          </div>

          <form className="signup-form">
            {isSignUp ? (
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label>City Name</label>
                    <input type="text" placeholder="Enter city name" required />
                  </div>
                  <div className="form-group">
                    <label>State/Province</label>
                    <input
                      type="text"
                      placeholder="Enter state or province"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Administrator Name</label>
                  <input
                    type="text"
                    placeholder="Full name of city administrator"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Official Email</label>
                    <input
                      type="email"
                      placeholder="admin@cityname.gov"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="(555) 123-4567" required />
                  </div>
                </div>

                <div className="form-group">
                  <label>City Population</label>
                  <select required>
                    <option value="">Select population range</option>
                    <option value="small">Under 10,000</option>
                    <option value="medium">10,000 - 100,000</option>
                    <option value="large">100,000 - 500,000</option>
                    <option value="major">Over 500,000</option>
                  </select>
                </div>

                <button type="submit" className="submit-btn">
                  Register City
                </button>
              </>
            ) : (
              <>
                <div className="form-group">
                  <label>Official Email</label>
                  <input
                    type="email"
                    placeholder="admin@cityname.gov"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div className="checkbox-group">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Keep me signed in</label>
                </div>

                <button type="submit" className="submit-btn">
                  Sign In
                </button>

                <div className="forgot-password">
                  <a href="#" className="forgot-link">
                    Forgot your password?
                  </a>
                </div>
              </>
            )}
          </form>

          <div className="auth-toggle">
            <p>
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                type="button"
                className="toggle-btn"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? "Sign In" : "Register City"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitySignUp;
