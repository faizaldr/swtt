import React from 'react';

export default function Footer() {
  return (
    <footer className="eduparx-footer">
      <div className="footer-container">
        <div className="footer-col brand-info">
          <div className="footer-logo">
            <span className="brand-primary">INIXINDO</span>
            <span className="brand-divider">|</span>
            <span className="brand-secondary">Eduparx</span>
          </div>
          <p className="footer-desc">
            Pusat pelatihan teknologi informasi, akselerasi kompetensi AI Engineer, dan transformasi digital kepegawaian terkemuka di Indonesia.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Program Training</h4>
          <ul className="footer-links">
            <li>Artificial Intelligence & ML</li>
            <li>Software QA & Test Automation</li>
            <li>Cloud & DevOps Architecture</li>
            <li>Cyber Security Defense</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Kantor Resmi</h4>
          <p className="footer-address">
            <strong>Yogyakarta:</strong> Jl. Kenari No. 69, Muja Muju, Umbulharjo<br />
            <strong>Jakarta:</strong> Gedung Permata Kuningan Lt. 6, Jl. Kuningan Mulia Kav. 9C<br />
            <strong>Email:</strong> support@eduparx.id | training@inixindo.co.id
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 PT Inixindo (Eduparx). Seluruh Hak Cipta Dilindungi. Sistem Pelatihan & Kepegawaian Internal.</p>
      </div>
    </footer>
  );
}
