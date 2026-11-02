"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [previewMessage, setPreviewMessage] = useState(false);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="#home" aria-label="Markaz Al Athari home">
          <span className={styles.brandMark}>م</span>
          <span className={styles.brandText}>
            <strong>MARKAZ AL ATHARI</strong>
            <small>Vadanappally, Kerala</small>
          </span>
        </a>

        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#daura">Daura 2026</a>
          <a href="#madrassa">Online Madrassa</a>
        </nav>

        <a className={styles.headerButton} href="#daura">
          Explore Daura <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className={styles.hero} id="home">
        <div className={styles.heroPattern} aria-hidden="true" />
        <div className={styles.heroContent}>
          <div className={styles.eyebrow}>
            <span className={styles.statusDot} />
            MARKAZ AL ATHARI · VADANAPPALLY
          </div>

          <h1>
            A place for
            <br />
            <span>knowledge.</span>
            <br />
            A journey of purpose.
          </h1>

          <p className={styles.heroDescription}>
            Discover the institution, explore upcoming gatherings, and help
            shape the future of accessible Islamic learning for the next generation.
          </p>

          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#about">
              Discover the Institution <span aria-hidden="true">→</span>
            </a>
            <a className={styles.textButton} href="#madrassa">
              Share your learning interest
            </a>
          </div>

          <div className={styles.heroFootnote}>
            <span className={styles.footnoteLine} />
            Institutional information and programme announcements
          </div>
        </div>

        <div className={styles.heroVisual} aria-hidden="true">
          <div className={`${styles.orbit} ${styles.orbitOuter}`} />
          <div className={`${styles.orbit} ${styles.orbitInner}`} />
          <div className={styles.emblem}>
            <span className={styles.emblemTop}>مركز الأثري</span>
            <span className={styles.emblemRule} />
            <span className={styles.emblemTitle}>KNOWLEDGE</span>
            <span className={styles.emblemSub}>FAITH · LEARNING · COMMUNITY</span>
          </div>
          <div className={`${styles.floatingNote} ${styles.noteTop}`}>
            <span className={styles.noteIcon}>01</span>
            <span><strong>Learn</strong><small>Knowledge & understanding</small></span>
          </div>
          <div className={`${styles.floatingNote} ${styles.noteBottom}`}>
            <span className={styles.noteIcon}>02</span>
            <span><strong>Connect</strong><small>Community & gatherings</small></span>
          </div>
          <span className={styles.decorativeStar}>✳</span>
        </div>

        <div className={styles.heroBottom}>
          <span>01 / INSTITUTION</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      <section className={styles.introStrip}>
        <p>
          An institutional home for learning, community connection, and
          educational initiatives.
        </p>
        <span>VADANAPPALLY · KERALA</span>
      </section>

      <section className={styles.section} id="about">
        <div className={styles.sectionHeading}>
          <span className={styles.sectionLabel}>01 — ABOUT THE INSTITUTION</span>
          <h2>
            Get to know
            <br />
            <span>Markaz Al Athari.</span>
          </h2>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutLead}>
            <span className={styles.largeQuote} aria-hidden="true">“</span>
            <p>
              A meaningful introduction begins with understanding the
              institution, its educational purpose, and the programmes it offers.
            </p>
          </div>

          <div className={styles.aboutDetails}>
            <p>
              This website will serve as a central information point for
              students, families, visitors, and the wider community.
              Verified information about the institution&apos;s history,
              mission, teachers, and educational offerings will be published
              here as it is confirmed.
            </p>
            <a href="#madrassa" className={styles.inlineLink}>
              Explore learning initiatives <span aria-hidden="true">↗</span>
            </a>
            <div className={styles.detailDivider} />
            <div className={styles.infoRows}>
              <div><span>LOCATION</span><strong>Vadanappally, Kerala</strong></div>
              <div><span>ON THIS WEBSITE</span><strong>Institution · Events · Learning</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.eventSection} id="daura">
        <div className={styles.eventTop}>
          <span className={styles.sectionLabel}>02 — UPCOMING GATHERING</span>
          <span className={styles.eventStatus}><span /> DETAILS TO BE ANNOUNCED</span>
        </div>

        <div className={styles.eventGrid}>
          <div>
            <div className={styles.eventDate}>DECEMBER <span>2026</span></div>
            <h2>Daura 2026</h2>
            <p className={styles.eventDescription}>
              Visit this section for official event announcements, programme
              information, visitor registration, and updates as they become available.
            </p>
            <div className={styles.eventMeta}>
              <div><span className={styles.metaIcon}>⌖</span><span><small>LOCATION</small><strong>Markaz Al Athari, Vadanappally</strong></span></div>
              <div><span className={styles.metaIcon}>◷</span><span><small>EXACT DATE</small><strong>To be announced</strong></span></div>
            </div>
            <a className={styles.lightButton} href="#visitor-info">
              Visitor information <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className={styles.eventArtwork} aria-label="Daura event announcement panel">
            <div className={styles.artworkCircle} />
            <div className={styles.artworkContent}>
              <span>MARKAZ AL ATHARI PRESENTS</span>
              <div className={styles.artworkArabic} lang="ar" dir="rtl">الدورة العلمية</div>
              <div className={styles.artworkRule} />
              <strong>DAURA <span>2026</span></strong>
              <small>DECEMBER · VADANAPPALLY</small>
              <div className={styles.artworkBadge}>OFFICIAL DETAILS<br />COMING SOON</div>
            </div>
            <span className={styles.artworkCorner}>M · A</span>
          </div>
        </div>
      </section>

      <section className={styles.section} id="madrassa">
        <div className={styles.sectionHeading}>
          <span className={styles.sectionLabel}>03 — HELP US UNDERSTAND THE NEED</span>
          <h2>
            Learning that fits
            <br />
            <span>your life.</span>
          </h2>
        </div>

        <div className={styles.surveyIntro}>
          <p>
            We are exploring interest in online Islamic learning for children
            and youngsters. Your preferences can help inform future programme
            planning. This is an early-stage interest survey preview, not an
            enrolment form.
          </p>
          <div className={styles.surveyTag}><span>✳</span> SHARE YOUR INTEREST</div>
        </div>

        <form
          className={styles.surveyForm}
          onSubmit={(event) => {
            event.preventDefault();
            setPreviewMessage(true);
          }}
        >
          <div className={styles.formHeading}>
            <span>YOUR LEARNING PREFERENCES</span>
            <span>OPTIONAL PREVIEW</span>
          </div>

          <div className={styles.formGrid}>
            <label className={styles.field}>
              <span>01. Which programme interests you?</span>
              <select defaultValue="both">
                <option value="children">Online Madrassa for children</option>
                <option value="youngsters">Structured learning for youngsters</option>
                <option value="both">Both programmes</option>
                <option value="unsure">I would like to know more</option>
              </select>
            </label>

            <label className={styles.field}>
              <span>02. Who is the learning for?</span>
              <select defaultValue="both">
                <option value="children">Children</option>
                <option value="youngsters">Youngsters</option>
                <option value="both">Both</option>
              </select>
            </label>

            <label className={styles.field}>
              <span>03. Preferred learning format</span>
              <select defaultValue="live">
                <option value="live">Live online classes</option>
                <option value="recorded">Recorded lessons</option>
                <option value="both">A combination of both</option>
                <option value="unsure">Not sure yet</option>
              </select>
            </label>

            <label className={styles.field}>
              <span>04. Preferred time</span>
              <select defaultValue="evening">
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
                <option value="weekend">Weekends</option>
                <option value="flexible">Flexible</option>
              </select>
            </label>

            <label className={styles.field}>
              <span>05. Preferred language</span>
              <select defaultValue="malayalam">
                <option value="malayalam">Malayalam</option>
                <option value="arabic">Arabic</option>
                <option value="english">English</option>
                <option value="other">Other / more than one language</option>
              </select>
            </label>

            <label className={styles.field}>
              <span>06. Current learning situation</span>
              <select defaultValue="current">
                <option value="current">Currently attending classes</option>
                <option value="looking">Looking for a programme</option>
                <option value="supplement">Want additional learning</option>
                <option value="exploring">Just exploring options</option>
              </select>
            </label>
          </div>

          <div className={styles.surveyFooter}>
            <p>
              No name or phone number is requested in this preview.
              Responses are not stored or transmitted.
            </p>
            <button className={styles.primaryButton} type="submit">
              Preview confirmation <span aria-hidden="true">→</span>
            </button>
          </div>

          {previewMessage && (
            <div className={styles.previewNotice} role="status">
              <strong>Preview only — nothing has been submitted.</strong>
              <span>
                This form is not connected to a database yet. Your selections
                have not been saved. Online survey submission will be enabled
                after secure storage is implemented.
              </span>
              <button type="button" onClick={() => setPreviewMessage(false)}>
                Dismiss
              </button>
            </div>
          )}
        </form>
      </section>

      <section className={styles.visitorSection} id="visitor-info">
        <div>
          <span className={styles.sectionLabel}>04 — VISITORS & COMMUNITY</span>
          <h2>Stay connected<br />with the institution.</h2>
          <p>
            Event registration, visitor guidance, official announcements,
            and verified social media links will be made available here as
            those services are prepared.
          </p>
        </div>
        <div className={styles.visitorCard}>
          <span className={styles.visitorCardIcon}>↗</span>
          <span className={styles.visitorCardLabel}>COMING IN A FUTURE UPDATE</span>
          <h3>Daura visitor registration</h3>
          <p>
            Registration details, visitor confirmations, and event information
            will be published once the official process is ready.
          </p>
          <span className={styles.comingSoon}>NOT YET OPEN</span>
        </div>
      </section>

      <footer className={styles.footer}>
        <a className={styles.brand} href="#home">
          <span className={styles.brandMark}>م</span>
          <span className={styles.brandText}>
            <strong>MARKAZ AL ATHARI</strong>
            <small>Vadanappally, Kerala</small>
          </span>
        </a>
        <p>Institutional information · Educational initiatives · Community</p>
        <a href="#home" className={styles.backTop}>BACK TO TOP ↑</a>
        <div className={styles.footerBottom}>
          <span>© 2026 Markaz Al Athari</span>
          <span>Official details will be published as confirmed.</span>
        </div>
      </footer>
    </main>
  );
}