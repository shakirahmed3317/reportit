import React from "react";
import {
  MdLocationOn,
  MdPhotoCamera,
  MdDescription,
  MdConstruction,
  MdLightbulb,
  MdDelete,
  MdWaterDrop,
  MdPark,
  MdTraffic,
  MdSmartphone,
  MdRoute,
  MdTrackChanges,
  MdPriorityHigh,
  MdChat,
  MdAnalytics,
} from "react-icons/md";

const HomePage = ({ onNavigate }) => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h2>Making Your City Better, One Report at a Time</h2>
            <p>
              Connect with your city officials to report, track, and resolve
              community issues. From potholes to streetlight outages, we make
              civic engagement simple and effective.
            </p>
            <div className="hero-buttons">
              <button
                className="cta-btn primary"
                onClick={() => onNavigate("resident-signup")}
              >
                Get Started as Resident
              </button>
              <button
                className="cta-btn secondary"
                onClick={() => onNavigate("city-signup")}
              >
                Register Your City
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="feature-preview">
              <div className="preview-card">
                <div className="card-header">
                  <div className="issue-status">
                    <span className="status-badge in-progress">
                      In Progress
                    </span>
                    <span className="issue-id">#2847</span>
                  </div>
                  <h3 className="issue-title">Pothole on Main Street</h3>
                </div>
                <div className="card-content">
                  <div className="issue-field">
                    <MdLocationOn className="field-icon" />
                    <div className="field-content">
                      <span className="field-label">Location</span>
                      <span className="field-value">Main St & 5th Ave</span>
                    </div>
                  </div>
                  <div className="issue-field">
                    <MdPhotoCamera className="field-icon" />
                    <div className="field-content">
                      <span className="field-label">Photo</span>
                      <span className="field-value">pothole_image.jpg</span>
                    </div>
                  </div>
                  <div className="issue-field">
                    <MdDescription className="field-icon" />
                    <div className="field-content">
                      <span className="field-label">Description</span>
                      <span className="field-value">
                        Large pothole causing damage to vehicles
                      </span>
                    </div>
                  </div>
                  <div className="issue-meta">
                    <div className="meta-item">
                      <span className="meta-label">Department:</span>
                      <span className="meta-value">Road Maintenance</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Priority:</span>
                      <span className="priority-badge high">High</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <div className="section-header">
            <h3>Everything You Need for Better Cities</h3>
            <p>Streamlined tools for residents and city officials</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <MdSmartphone className="feature-icon" />
              <h4>Easy Reporting</h4>
              <p>
                Report issues with photos, location, and detailed descriptions
                in seconds
              </p>
            </div>

            <div className="feature-card">
              <MdRoute className="feature-icon" />
              <h4>Smart Routing</h4>
              <p>
                Issues automatically routed to the right department for faster
                resolution
              </p>
            </div>

            <div className="feature-card">
              <MdTrackChanges className="feature-icon" />
              <h4>Real-time Tracking</h4>
              <p>
                Track progress from report to resolution with live status
                updates
              </p>
            </div>

            <div className="feature-card">
              <MdPriorityHigh className="feature-icon" />
              <h4>Priority Management</h4>
              <p>
                Smart prioritization ensures urgent issues get immediate
                attention
              </p>
            </div>

            <div className="feature-card">
              <MdChat className="feature-icon" />
              <h4>Direct Communication</h4>
              <p>
                Chat directly with city officials for updates and clarifications
              </p>
            </div>

            <div className="feature-card">
              <MdAnalytics className="feature-icon" />
              <h4>Analytics Dashboard</h4>
              <p>
                Comprehensive insights into city-wide issue trends and
                performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="how-it-works-container">
          <div className="section-header">
            <h3>How It Works</h3>
            <p>Simple steps to make your city better</p>
          </div>

          <div className="steps-container">
            <div className="step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h4>Report Issue</h4>
                <p>Snap a photo, add location, and describe the problem</p>
              </div>
            </div>

            <div className="step-connector"></div>

            <div className="step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h4>Auto-Route</h4>
                <p>System routes to appropriate department automatically</p>
              </div>
            </div>

            <div className="step-connector"></div>

            <div className="step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h4>Track Progress</h4>
                <p>Get real-time updates as officials work on resolution</p>
              </div>
            </div>

            <div className="step-connector"></div>

            <div className="step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h4>Issue Resolved</h4>
                <p>Receive confirmation when the issue is fixed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Issue Types Section */}
      <section className="issue-types-section">
        <div className="issue-types-container">
          <div className="section-header">
            <h3>Common Issues We Handle</h3>
            <p>Report any city infrastructure or service problem</p>
          </div>

          <div className="issue-types-grid">
            <div className="issue-type">
              <MdConstruction className="issue-icon" />
              <span>Road Issues</span>
            </div>
            <div className="issue-type">
              <MdLightbulb className="issue-icon" />
              <span>Street Lighting</span>
            </div>
            <div className="issue-type">
              <MdDelete className="issue-icon" />
              <span>Waste Management</span>
            </div>
            <div className="issue-type">
              <MdWaterDrop className="issue-icon" />
              <span>Water & Utilities</span>
            </div>
            <div className="issue-type">
              <MdPark className="issue-icon" />
              <span>Parks & Recreation</span>
            </div>
            <div className="issue-type">
              <MdTraffic className="issue-icon" />
              <span>Traffic & Safety</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h3>Ready to Transform Your City?</h3>
            <p>
              Join thousands of engaged citizens making their communities better
            </p>
            <div className="cta-buttons">
              <button
                className="cta-btn primary large"
                onClick={() => onNavigate("resident-signup")}
              >
                Get Started Now
              </button>
              <button
                className="cta-btn secondary large"
                onClick={() => onNavigate("city-signup")}
              >
                Register Your City
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
