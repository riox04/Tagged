import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Top Navigation Bar */}
      <nav className="top-nav">
        <div className="logo">Package Tracker</div>
        <div className="search-container">
          <input type="text" placeholder="Search package ID..." />
        </div>
        <div className="user-profile">
          <img src="https://via.placeholder.com/40" alt="User" />
        </div>
      </nav>

      {/* Main Container (Sidebar + Content) */}
      <div className="main-container">
        {/* Sidebar Navigation */}
        <aside className="sidebar">
          <ul>
            <li>Dashboard</li>
            <li>Live Tracking</li>
            <li>Package History</li>
            <li>Alerts</li>
            <li>Settings</li>
          </ul>
        </aside>

        {/* Main Content */}
        <section className="content">
          <h2 className="page-title">Package Tracking Dashboard</h2>

          {/* Map Section */}
          <div className="map-section">
            <h3>Package Location</h3>
            <div className="map-placeholder">Map Placeholder</div>
          </div>

          {/* Bottom Info Section */}
          <div className="info-section">
            <div className="info-box">
              <h3>Temperature</h3>
              <p>24°C</p>
            </div>
            <div className="info-box">
              <h3>Location</h3>
              <p>New York, USA</p>
            </div>
            <div className="info-box">
              <h3>Moisture</h3>
              <p>45%</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
