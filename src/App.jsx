import { useState } from 'react'
import { photos } from './data/photos'
import './App.css'

const names = ['All', 'Andrie', 'Edgar', 'Avelino']

export default function App() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)  

  const filtered = active === 'All'
    ? photos
    : photos.filter(p => p.owner === active.toLowerCase())

  return (
    <div className="app">
      <header className="header">
        <h1>Gallery Showcase</h1>
        <div className="screen-mode">
         
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