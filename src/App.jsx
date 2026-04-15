import React, { useState } from 'react';
import { Download, School, BookOpen, Heart } from 'lucide-react';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  
  // Gets today's date formatted for Tonga/International standards
  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const books = [
    {
      title: "The Diary of a Young Girl (Definitive Edition)",
      desc: "The most complete version containing restored passages (300+ pages).",
      file: "/books/anne-frank-definitive.pdf"
    },
    {
      title: "The Diary of a Young Girl (Original Version)",
      desc: "The first published version of Anne's diary.",
      file: "/books/anne-frank-original.pdf"
    }
  ];

  return (
    <div className="app-container">
      <div className="tongan-overlay"></div>

      <header className="header">
        <div className="logo-circle">
          <School size={48} color="#002147" />
        </div>
        <h1>Ocean of Light International School</h1>
        <p className="sub-header">Senior 1 Parents GC — 2026</p>
      </header>

      <div className="flip-card-container" onClick={() => setIsFlipped(!isFlipped)}>
        <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
          <div className="flip-card-front">
            <Heart size={32} color="#C5A059" fill="#C5A059" />
            <h2>A Message from Sandra Lasike</h2>
            <p className="tap-hint">Tap to read my note</p>
          </div>
          <div className="flip-card-back">
            <h3>Mālō e lelei Parents,</h3>
            <p className="personal-message">
              "I created this app to help you easily download these novels for our children. 
              Our role as parents is the foundation of their success. I hope this helps, 
              and I wish the very best of luck to all our children!"
            </p>
            <p className="signature">— Sandra Lasike</p>
          </div>
        </div>
      </div>

      <section className="intro-text">
        <p>
          Welcome to this digital gateway for <strong>Bernadine's English Students</strong>. 
          To support our children's literacy, please download the required editions of 
          <em> The Diary of Anne Frank</em> below directly to their devices.
        </p>
      </section>

      <main className="book-grid">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <div className="book-info">
              <BookOpen className="gold-icon" size={28} />
              <div>
                <h3>{book.title}</h3>
                <p>{book.desc}</p>
              </div>
            </div>
            <a href={book.file} download className="download-btn">
              <Download size={20} /> Download
            </a>
          </div>
        ))}
      </main>

      <footer className="footer">
        <div className="footer-credits">
          <p><strong>Developed by Sandra F. Lasike</strong></p>
          <p>{today}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;