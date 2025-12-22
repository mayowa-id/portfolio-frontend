import React, { useState, useEffect } from 'react'
import ArticleView from './ArticleView'
import { ClickableImage, GalleryImageGroup } from './ClickableImage'

export default function ProjectSection({
  title = '',
  description = '',
  image = null,
  images = null,
  github = null,
  liveDemo = null,
  className = ''
}) {
  // Force remount of gallery when project changes
  const [galleryKey, setGalleryKey] = useState(0)

  const gallery = Array.isArray(images) && images.length > 0
    ? images
    : (image ? [{ src: image, alt: title, caption: title }] : [])

  // Reset gallery when project changes (detected by title or description change)
  useEffect(() => {
    setGalleryKey(prev => prev + 1)
  }, [title, description])

  return (
    <div className={`project-section ${className}`} style={{ padding: 6 }}>
      <h2 style={{ marginTop: 0, marginBottom: 8 }}>{title}</h2>

      {description ? (
        <ArticleView title="" body={description} />
      ) : null}

      {/* Buttons: outlined, solid, glass variants */}
      {(liveDemo || github) && (
        <div className="proj-links" aria-label="project links">
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-live"
              title="Open live demo (opens in new tab)"
            >
              <span className="btn-ico" aria-hidden>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M14 3h7v7h-2V6.4l-9.3 9.3-1.4-1.4L17.6 5H14V3z"/>
                  <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"/>
                </svg>
              </span>
              <span className="btn-text">Live Demo</span>
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid btn-github"
              title="Open GitHub repository (opens in new tab)"
            >
              <span className="btn-ico" aria-hidden>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 2.6 3.2 1.8.1-.7.4-1.2.7-1.5-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.7 5 18.7 5.3 18.7 5.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z"/>
                </svg>
              </span>
              <span className="btn-text">View on GitHub</span>
            </a>
          )}
        </div>
      )}

      {/* Image gallery with forced remount on project change */}
      {gallery.length > 0 && (
        <div className="frame-image-wrap" style={{ marginTop: 12 }} key={galleryKey}>
          {gallery.length === 1 ? (
            <ClickableImage
              src={gallery[0].src}
              alt={gallery[0].alt || title}
              caption={gallery[0].caption || title}
              className="frame-image"
              fit="contain"
            />
          ) : (
            <GalleryImageGroup images={gallery} thumbClassName="frame-image" />
          )}
        </div>
      )}
    </div>
  )
}