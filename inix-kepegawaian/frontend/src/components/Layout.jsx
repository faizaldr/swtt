import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, heroTitle, heroSubtitle, breadcrumbs, highlightPills }) {
  return (
    <div className="eduparx-page-wrapper">
      <Navbar />

      {/* Hero Banner Eduparx (opsional jika diberikan) */}
      {heroTitle && (
        <section className="training-page-header">
          <div className="header-container">
            {breadcrumbs && (
              <nav aria-label="Breadcrumb" className="breadcrumbs">
                {breadcrumbs.map((crumb, idx) => (
                  <span key={idx} className="breadcrumb-item">
                    {crumb}
                    {idx < breadcrumbs.length - 1 && <span className="breadcrumb-sep"> / </span>}
                  </span>
                ))}
              </nav>
            )}

            <h1 className="hero-title">{heroTitle}</h1>
            {heroSubtitle && <p className="hero-subtitle">{heroSubtitle}</p>}

            {highlightPills && highlightPills.length > 0 && (
              <div className="hero-meta-pills">
                {highlightPills.map((pill, idx) => (
                  <span key={idx} className="meta-pill">{pill}</span>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Main Content Area */}
      <main className="eduparx-main-container">
        {children}
      </main>

      <Footer />
    </div>
  );
}
