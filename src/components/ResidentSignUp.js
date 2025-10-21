import React, { useState } from "react";

const ResidentSignUp = ({ onNavigate }) => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="signup-page">
      <div className="signup-page-container">
        <button className="back-btn" onClick={() => onNavigate("home")}>
          ← Back to Home
        </button>
        <div className="signup-container">
          <div className="signup-header">
            <h2>{isSignUp ? "Join Your Community" : "Resident Sign In"}</h2>
            <p>
              {isSignUp
                ? "Start reporting issues and making your city better"
                : "Access your ReportIt resident account"}
            </p>
          </div>

          <form className="signup-form">
            {isSignUp ? (
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      placeholder="Enter first name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" placeholder="Enter last name" required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="(555) 123-4567" />
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <select required>
                      <option value="">Select your city</option>
                      <option value="demo-city">Demo City</option>
                      <option value="sample-town">Sample Town</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Street Address</label>
                  <input type="text" placeholder="123 Main Street" required />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>ZIP Code</label>
                    <input type="text" placeholder="12345" required />
                  </div>
                  <div className="form-group">
                    <label>State</label>
                    <input type="text" placeholder="State" required />
                  </div>
                </div>

                <div className="checkbox-group">
                  <input type="checkbox" id="notifications" />
                  <label htmlFor="notifications">
                    Send me email notifications about issue updates
                  </label>
                </div>

                <button type="submit" className="submit-btn">
                  Create Account
                </button>
              </>
            ) : (
              <>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
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
                  <input type="checkbox" id="remember-resident" />
                  <label htmlFor="remember-resident">Keep me signed in</label>
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
                {isSignUp ? "Sign In" : "Create Account"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentSignUp;
