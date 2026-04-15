import React, { useState } from 'react';
import { Download, School, BookOpen, Heart, PlayCircle, Video, Headphones, ExternalLink } from 'lucide-react';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  const books = [
    {
      title: "The Diary of a Young Girl (Definitive Edition)",
      desc: "Complete PDF version with restored passages.",
      file: "/books/anne-frank-definitive.pdf", 
    },
    {
      title: "The Diary of a Young Girl (Original Version)",
      desc: "Classic PDF version of the diary.",
      file: "/books/anne-frank-original.pdf",
    }
  ];

  return (
    <div className="app-container">
      <div className="tongan-overlay"></div>
      
      <header className="header">
        <div className="logo-circle"><School size={48} color="#002147" /></div>
        <h1>Ocean of Light International School</h1>
        <p className="sub-header">Senior 1 Support Gateway — 2026</p>
      </header>

      <div className="flip-card-container" onClick={() => setIsFlipped(!isFlipped)}>
        <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
          <div className="flip-card-front">
            <Heart size={32} color="#C5A059" fill="#C5A059" />
            <h2>Message for the Students</h2>
            <p className="tap-hint">Tap to read</p>
          </div>
          <div className="flip-card-back">
            <h3>Mālō e lelei!</h3>
            <p className="personal-message">
              "I created this for my daughter and her schoolmates to easily access their resources. 
          "There are two videos included: one is the full audio version of the diary, and the other is a movie adaptation. 
            </p>
            <p className="signature">— Sandra Lasike</p>
          </div>
        </div>
      </div>

      {/* READING SECTION */}
      <section className="resource-section">
        <div className="section-title">
          <BookOpen size={24} />
          <h2>Reading Materials (PDF)</h2>
        </div>
        <div className="book-grid">
          {books.map((book, index) => (
            <div key={index} className="book-card">
              <div className="book-info">
                <Video className="gold-icon" size={24} />
                <div>
                  <h3>{book.title}</h3>
                  <p>{book.desc}</p>
                </div>
              </div>
              <a href={book.file} download className="download-btn">
                <Download size={18} /> Download PDF
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO RESOURCES HEADER */}
      <div className="tongan-video-header">
        <h3>'Oatu pe ae ongo video (blended approach for Senior 1) na'a tokoni ke toe mahino ange kihe fanau</h3>
      </div>

      {/* LISTENING SECTION */}
      <section className="resource-section">
        <div className="section-title">
          <Headphones size={24} />
          <h2>Listening (Audiobook)</h2>
        </div>
        <div className="video-card">
          <div className="video-preview-wrapper">
            <iframe 
              width="100%" 
              height="220" 
              src="https://www.youtube.com/embed/3uWqQO1ECcQ" 
              title="Anne Frank Audiobook"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-info">
            <h3>Full Audiobook (9 Hours)</h3>
            <p>Listen to the complete diary read aloud.</p>
            <a href="https://www.youtube.com/watch?v=3uWqQO1ECcQ" target="_blank" rel="noopener noreferrer" className="watch-btn-link">
              Open in YouTube <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* WATCHING SECTION */}
      <section className="resource-section">
        <div className="section-title">
          <PlayCircle size={24} />
          <h2>Watching (Movie)</h2>
        </div>
        <div className="video-card">
          <div className="video-preview-wrapper">
            <iframe 
              width="100%" 
              height="220" 
              src="https://www.youtube.com/embed/ROFvkh8cZZo" 
              title="Anne Frank Movie"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-info">
            <h3>The Diary of Anne Frank (2009)</h3>
            <p>Full BBC Mini-Series - English Version</p>
            <a href="https://www.youtube.com/watch?v=ROFvkh8cZZo" target="_blank" rel="noopener noreferrer" className="watch-btn-link">
              Open in YouTube <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

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