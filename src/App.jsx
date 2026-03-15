import { useState } from 'react'
import { photos } from './data/photos'
import './App.css'

//icons

import moonIcon from './assets/moon.png'
import sunIcon from './assets/sun.png'

const names = ['All', 'Andrie', 'Edgar', 'Avelino']

export default function App() {

  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  const filtered = active === 'All'
    ? photos
    : photos.filter(p => p.owner === active.toLowerCase())

  return (
     <div className={`app ${darkMode ? 'dark' : ''}`}>  {/*dark mode class */}
     
      <header className="header">
        <div className="header-top">
        <h1>Gallery Showcase</h1>

         <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
            <img src={darkMode ? sunIcon : moonIcon} alt="toggle theme" />
          </button>
        </div>

        <div className="filter-bar">
          {names.map(name => (
            <button
              key={name}
              className={`filter-btn ${active === name ? 'active' : ''}`}
              onClick={() => setActive(name)}

            >
              {name}
            </button>
          ))}
        </div>
      </header>
      <p className="count">{filtered.length} photos</p>


      <div className="gallery">
        {filtered.map(photo => (
          <div
            className="photo-card"
            key={photo.id}
            onClick={() => photo.src && setSelected(photo)}  // click to open
          >
            {photo.src ? (
              <img src={photo.src} alt={photo.caption} />
            ) : (
              <div className="placeholder">
                <span>Coming soon</span>
              </div>
            )}
            <div className="photo-meta">
              <p className="owner">{photo.owner}</p>
              <p className="caption">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/*only shows when an image is selected */}
      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <img src={selected.src} alt={selected.caption} />
          <p className="lightbox-caption">{selected.caption}</p>
        </div>
      )}
    </div>
  )
}