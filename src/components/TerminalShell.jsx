import React, { useState, useEffect } from 'react'
import TopHeader from './TopHeader'
import TabsBar from './TabsBar'
import ContentList from './ContentList'
import ArticleView from './ArticleView'
import CommandPrompt from './CommandPrompt'
import StatusBar from './StatusBar'
import ModalContact from './ModalContact'
import FrameCarousel from './FrameCarousel'
import ContactForm from './ContactForm'
import { SEED } from '../data/seed'
import ProjectSection from './ProjectSection'


export default function TerminalShell(){
  const [section, setSection] = useState('about')
  const [selected, setSelected] = useState(null)
  const [showContact, setShowContact] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  const content = SEED || {}

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  },[theme])

  function changeTheme(t){
    if(!t) return
    const normalized = t.toLowerCase()
    if(['light','dark','night'].includes(normalized)){
      setTheme(normalized)
    }
  }

  function handleCommand(cmd){
    const raw = (cmd||'').trim()
    const s = raw.toLowerCase()
    if(!s) return

    // theme commands
    if(s === 'light' || s === 'dark' || s === 'night' ||
       s === 'light mode' || s === 'dark mode' || s === 'night mode' ||
       s.startsWith('set theme ') || s.startsWith('theme ')){
      const parts = s.split(/\s+/)
      const candidate = parts.slice(-1)[0]
      if(['light','dark','night'].includes(candidate)){
        changeTheme(candidate)
        setSection('')
        setTimeout(()=> setSection('about'), 200)
        return
      }
    }
    if(s === "help" || s === "type 'help'" || s === "type help"){
      setSection('help'); return
    }
    if(s.startsWith('show ')){
      const key = s.replace(/^show\s+/, '')
      if(key === 'about' || key === 'about me'){ setSection('about'); return }
      if(key.includes('project')){ setSection('projects'); return }
      if(key.includes('experience') || key === 'experience'){ setSection('experience'); return }
      if(key.includes('skills')){ setSection('skills'); return }
      if(key.includes('cert') || key.includes('certificate')){ setSection('certifications'); return }
      if(key.includes('contacts') || key.includes('contact')){ setSection('contacts'); return }
      if(key.includes('help')){ setSection('help'); return }
      if(content[key]){ setSection(key); return }
      setSection(key)
      return
    }

    if(s.startsWith('open ')){
      const parts = s.split(/\s+/)
      if(parts[1] === 'project' && parts[2]){
        const idx = parseInt(parts[2],10) - 1
        const p = content.projects?.[idx]
        if(p) setSelected({type:'project', item:p})
        return
      }
      if((parts[1] === 'experience' || parts[1] === 'exp') && parts[2]){
        const idx = parseInt(parts[2],10) - 1
        const e = content.experience?.[idx]
        if(e) setSelected({type:'experience', item:e})
        return
      }
      if(parts[1] === 'article' && parts[2]){ // backward compat
        const idx = parseInt(parts[2],10) - 1
        const a = content.articles?.[idx]
        if(a) setSelected({type:'article', item:a})
        return
      }
    }

    if(s === 'contact' || s === 'email me' || s === 'contacts'){ setSection('contacts'); return }

    setSection(s)
  }

  const skillsIsArray = Array.isArray(content.skills)
  const projectsIsArray = Array.isArray(content.projects)
  const experienceIsArray = Array.isArray(content.experience)

  return (
    <div className="shell" role="main" aria-label="Portfolio terminal">
      <div className="avatar" aria-hidden>
        <img src={content.profile?.avatar || '/profile.jpg'} alt="avatar" />
      </div>

      <TopHeader profile={content.profile} theme={theme} onChangeTheme={changeTheme} />
      <TabsBar section={section} onChange={setSection} />

      <div className="terminal-grid">
        <div className="left">
          {/* initial prompt area when section is empty */}
          {section === '' && (
            <div className="welcome-only">
              <div className="welcome-text">type 'help' to see available commands</div>
              <div className="welcome-sub">try: <code>show about</code> <code>show projects</code> <code>show skills</code></div>
            </div>
          )}

          {/* Experience (typewriter via ArticleView or FrameCarousel if array) */}
          {section === 'experience' && (
            experienceIsArray ? (
              <FrameCarousel
                frames={content.experience}
                renderFrame={(item) => (
                  <div>
                    <h4 style={{marginTop:0}}>{item.role || item.title}</h4>
                    {item.company && <div className="frame-meta">{item.company} • {item.period || item.date}</div>}
                    {/* use ArticleView for typed description; wrap description string */}
                    <ArticleView title="" body={item.description || item.summary || ''} />
                    {item.image && <div className="frame-image-wrap"><img src={item.image} alt={item.role || item.title} className="frame-image" /></div>}
                  </div>
                )}
              />
            ) : (
              // fallback: if you kept older articles array
              <ContentList items={content.articles || []} onOpen={(i)=> setSelected({type:'article', item:i})} />
            )
          )}

          {/* Projects */}
{section === 'projects' && (
  projectsIsArray ? (
    <FrameCarousel
      frames={content.projects}
      renderFrame={(p) => (
        <ProjectSection
          title={p.title}
          description={p.description}
           github={p.github}
          liveDemo={p.liveDemo}
          image={p.image}
          images={p.images}

        />
      )}
    />
  ) : (
    <ContentList items={content.projects || []} onOpen={(i)=> setSelected({type:'project', item:i})} />
  )
)}


          {/* About (default) */}
          {section === 'about' && <ArticleView title="About" body={content.about || ''} />}

          {/* Skills */}
 
{section === 'skills' && (
  skillsIsArray ? (
    <FrameCarousel
      frames={content.skills}
      renderFrame={(frame) => (
        <div>
          <h4 style={{marginTop:0}}>{frame.title}</h4>
          {frame.body ? <ArticleView title="" body={frame.body} /> : null}
          {frame.image && (
            <div className="frame-image-wrap" style={{marginTop:12}}>
              <img 
                src={frame.image} 
                alt={frame.title} 
                className="frame-image clickable-thumb"
                onClick={() => window.dispatchEvent(new CustomEvent('openLightbox', {detail: {src: frame.image, alt: frame.title}}))}
                onError={(e)=> e.currentTarget.style.display='none'} 
                style={{cursor: 'pointer'}}
              />
            </div>
          )}
        </div>
      )}
    />
  ) : (
    <ArticleView title="Skills" body={content.skills || ''} imageSrc={content.skillsImage} />
  )
)}

          /* {/* Certifications */}
          {section === 'certifications' && (
            // if certifications is an array of objects show list, else a simple article
            Array.isArray(content.certifications) ? (
              <div style={{padding:12}}>
                <h3>Certifications</h3>
                <ul>
                  {content.certifications.map((c, i) => <li key={i}>{c.title || c}</li>)}
                </ul>
              </div>
            ) : (
              <ArticleView title="Certifications" body={content.certifications || ''} />
            )
          )} */

          {/* Contacts */}
          {section === 'contacts' && (
            <div className="contacts" style={{padding:12}}>
              <h3>Contact</h3>
              {content.contacts?.email && (
                <p>Email: <a href={`mailto:${content.contacts.email}`}>{content.contacts.email}</a></p>
              )}
              {content.contacts?.phone && <p>Phone: {content.contacts.phone}</p>}
              {content.contacts?.github && (
                <p>GitHub: <a href={content.contacts.github} target="_blank" rel="noopener noreferrer">{content.contacts.github}</a></p>
              )}
              {content.contacts?.linkedin && (
                <p>LinkedIn: <a href={content.contacts.linkedin} target="_blank" rel="noopener noreferrer">{content.contacts.linkedin}</a></p>
              )}
            </div>
          )}

          {/* Help */}
          {section === 'help' && <ArticleView title="Help" body={content.help || "Available: show about, show projects, show skills, show experience, show certifications, show contacts, help"} />}

        </div>

        <div className="right">
           <ContactForm apiBase={import.meta.env.VITE_API_BASE || '/api'} />
        </div>
      </div>

      <CommandPrompt onCommand={handleCommand} />
      <StatusBar section={section} />

      {showContact && <ModalContact onClose={()=> setShowContact(false)} />}
    </div>
  )
}








