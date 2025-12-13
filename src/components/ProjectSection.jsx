import React from 'react'
import ArticleView from './ArticleView'
import { ClickableImage, GalleryImageGroup } from './ClickableImage'
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

export default function ProjectSection({
  title = '',
  description = '',
  image = null,
  images = null,
  github = null,
  liveDemo = null,
  className = ''
}) {
  const gallery = Array.isArray(images) && images.length > 0
    ? images
    : (image ? [{ src: image, alt: title, caption: title }] : [])

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
<span className="btn-ico"><FiExternalLink /></span>
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
<span className="btn-ico"><FaGithub /></span>
              <span className="btn-text">View on GitHub</span>
            </a>
          )}





          {/* Example glass button for optional extra (uses liveDemo if provided) */}
          {/* You can show it conditionally or use it for a second demo link */}
          {/* <a className="btn btn-glass" href="#" /> */}
        </div>
      )}

      {/* Image gallery comes after links (keeps UI order you requested) */}
      {gallery.length > 0 && (
        <div className="frame-image-wrap" style={{ marginTop: 12 }}>
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
