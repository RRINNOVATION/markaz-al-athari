"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import MadrassaSurvey from "./MadrassaSurvey";

const EVENT_DATE = new Date("2026-12-20T08:00:00+05:30").getTime();

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const updateCountdown = () => {
      const distance = EVENT_DATE - Date.now();

      if (distance <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      setTimeLeft({
        days: String(Math.floor(distance / 86400000)).padStart(2, "0"),
        hours: String(Math.floor((distance % 86400000) / 3600000)).padStart(2, "0"),
        minutes: String(Math.floor((distance % 3600000) / 60000)).padStart(2, "0"),
        seconds: String(Math.floor((distance % 60000) / 1000)).padStart(2, "0"),
      });
    };

    updateCountdown();
    const timer = window.setInterval(updateCountdown, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className={styles.page} id="home">
      <div className={styles.topbar}>
        <div className={styles.topbarInner}>
          <span>✉ info@markazathari.org</span>
          <span className={styles.topbarRight}>
            <a href="https://www.youtube.com/@almadrasathulathariyyah6398/streams" target="_blank" rel="noreferrer">YouTube ↗</a>
            <span className={styles.topbarDivider}>|</span>
            <span>Vadanappally, Kerala</span>
          </span>
        </div>
      </div>

      <header className={styles.header}>
        <a className={styles.brand} href="#home" aria-label="Markaz Al Athari home">
          <img src="/images/markaz-logo.png" alt="Markaz Al Athari logo" />
          <span className={styles.brandText}>
            <strong>MARKAZ AL ATHARI</strong>
            <small>Vadanappally, Kerala</small>
          </span>
        </a>

        <nav className={styles.nav}>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#daura">One-Day Daura</a>
          <a href="#programmes">Programmes</a>
          <a href="#madrassa">Online Madrassa</a>
        </nav>

        <a className={styles.headerCta} href="#daura">Register for Daura <span>↗</span></a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroEyebrow}><span /> MARKAZ AL ATHARI · VADANAPPALLY</div>
          <h1>ഒരു ദിന <span>ദൗറ</span></h1>
          <p className={styles.heroMalayalam}>ഒരു ദിന ദൗറ</p>
          <p className={styles.heroDescription}>
            A day of beneficial knowledge, spiritual enrichment, and gathering
            with scholars. Join us at Markaz Al Athari, Vadanappally.
          </p>

          <div className={styles.eventDetails}>
            <div><span className={styles.detailIcon}>▦</span><span><small>തീയതി</small><strong>ഞായർ, 20 ഡിസംബർ 2026</strong></span></div>
            <div><span className={styles.detailIcon}>◷</span><span><small>സമയം</small><strong>രാവിലെ 8 – രാത്രി 8</strong></span></div>
            <div><span className={styles.detailIcon}>⌖</span><span><small>വേദി</small><strong>വാടാനപ്പള്ളി, കേരളം</strong></span></div>
          </div>

          <div className={styles.heroActions}>
            <a href="#daura" className={styles.primaryButton}>ദൗറ വിവരങ്ങൾ <span>→</span></a>
            <a href="#about" className={styles.secondaryButton}>Explore Markaz <span>↓</span></a>
          </div>
        </div>

        <div className={styles.countdown}>
          <span className={styles.countdownLabel}>ദൗറയിലേക്കുള്ള കൗണ്ട്ഡൗൺ</span>
          <div className={styles.countdownNumbers}>
            <div><strong>{timeLeft.days}</strong><small>DAYS</small></div>
            <i>:</i>
            <div><strong>{timeLeft.hours}</strong><small>HOURS</small></div>
            <i>:</i>
            <div><strong>{timeLeft.minutes}</strong><small>MINUTES</small></div>
            <i>:</i>
            <div><strong>{timeLeft.seconds}</strong><small>SECONDS</small></div>
          </div>
        </div>
        <div className={styles.heroBottom}><span>KNOWLEDGE · FAITH · COMMUNITY</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className={styles.quickLinks}>
        <a href="#daura"><span className={styles.quickIcon}>✦</span><span><strong>One-Day Daura 2026</strong><small>Event details & updates</small></span><b>↗</b></a>
        <a href="#about"><span className={styles.quickIcon}>◈</span><span><strong>About Markaz</strong><small>Our institution & mission</small></span><b>↗</b></a>
        <a href="#programmes"><span className={styles.quickIcon}>▤</span><span><strong>Educational Programmes</strong><small>Explore learning initiatives</small></span><b>↗</b></a>
        <a href="#madrassa"><span className={styles.quickIcon}>◇</span><span><strong>Online Madrassa</strong><small>Share your learning interest</small></span><b>↗</b></a>
      </section>

      <section className={styles.aboutSection} id="about">
        <div className={styles.aboutImageWrap}>
          <img src="/images/markaz-building-banner.jpg" alt="Markaz Al Athari institution building and campus" />
          <div className={styles.imageCaption}><span>OUR INSTITUTION</span><strong>Markaz Al Athari</strong><small>Vadanappally, Kerala</small></div>
        <div className={styles.imageGoldCorner} />
      </div>

        <div className={styles.aboutContent}>
          <span className={styles.sectionEyebrow}>WELCOME TO MARKAZ AL ATHARI</span>
          <h2>A foundation of knowledge.<br/><span>A legacy of faith.</span></h2>
          <p>
            Markaz Al Athari is an institution rooted in Islamic knowledge,
            learning, and community. We strive to nurture beneficial education
            and provide opportunities for people to deepen their understanding
            and strengthen their connection with faith.
          </p>
          <a href="#programmes" className={styles.inlineLink}>Discover our institution <span>→</span></a>
          <div className={styles.aboutFeatures}>
            <div><span>01</span><strong>Authentic Knowledge</strong><small>Learning rooted in tradition</small></div>
            <div><span>02</span><strong>Spiritual Growth</strong><small>Faith and personal development</small></div>
            <div><span>03</span><strong>Community</strong><small>Growing together through learning</small></div>
          </div>
        </div>
      </section>

      <section className={styles.programmes} id="programmes">
        <div className={styles.programmesHeading}>
          <div><span className={styles.sectionEyebrow}>LEARN · GROW · BENEFIT</span><h2>What We <span>Offer</span></h2></div>
          <p>Explore educational gatherings and learning initiatives at Markaz Al Athari.</p>
        </div>
        <div className={styles.programmeCards}>
          <a href="#daura" className={styles.programmeCard}><span className={styles.cardNumber}>01</span><span className={styles.programmeIcon}>✧</span><h3>One-Day Daura</h3><p>A gathering dedicated to beneficial knowledge and spiritual enrichment.</p><span className={styles.cardLink}>Explore event <b>↗</b></span></a>
          <a href="#madrassa" className={styles.programmeCard}><span className={styles.cardNumber}>02</span><span className={styles.programmeIcon}>◈</span><h3>Online Madrassa</h3><p>Accessible Islamic learning for children and youngsters.</p><span className={styles.cardLink}>Share your interest <b>↗</b></span></a>
          <a href="#visitor-info" className={styles.programmeCard}><span className={styles.cardNumber}>03</span><span className={styles.programmeIcon}>▤</span><h3>Educational Initiatives</h3><p>Discover upcoming programmes and institutional activities.</p><span className={styles.cardLink}>Learn more <b>↗</b></span></a>
        </div>
      </section>

      <section className={styles.dauraBanner} id="daura">
        <div>
          <span className={styles.sectionEyebrow}>തീയതി കുറിച്ചുവെക്കൂ · 2026 ഡിസംബർ 20</span>
          <h2>ഒരു ദിന ദൗറ<br/><span>അറിവിന്റെ അനുഗ്രഹീത സംഗമം</span></h2>
          <p>ഞായറാഴ്ച · രാവിലെ 8 മുതൽ രാത്രി 8 വരെ · വാടാനപ്പള്ളി, കേരളം</p>
        </div>
        <a href="#visitor-info" className={styles.primaryButton}>ദൗറാ അറിയിപ്പുകൾ <span>→</span></a>
      </section>

      <MadrassaSurvey />

      <section className={styles.visitorSection} id="visitor-info">
        <div><span className={styles.sectionEyebrow}>STAY CONNECTED</span><h2>Be part of our<br/><span>learning community.</span></h2><p>Follow Markaz Al Athari for institutional announcements, Daura updates, and future educational initiatives.</p></div>
        <div className={styles.socialCard}>
          <span className={styles.socialCardLabel}>FOLLOW OUR OFFICIAL CHANNEL</span>
          <h3>Markaz Al Athari</h3>
          <a href="https://www.youtube.com/@almadrasathulathariyyah6398/streams" target="_blank" rel="noreferrer" className={styles.youtubeLink}><span>▶</span> Subscribe on YouTube <b>↗</b></a>
          <p>Instagram · Facebook · Telegram links will be added soon.</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <a className={styles.brand} href="#home"><img src="/images/markaz-logo.png" alt="Markaz Al Athari"/><span className={styles.brandText}><strong>MARKAZ AL ATHARI</strong><small>Vadanappally, Kerala</small></span></a>
        <p>Knowledge · Faith · Community</p>
        <div className={styles.footerSocial}><a href="https://www.youtube.com/@almadrasathulathariyyah6398/streams" target="_blank" rel="noreferrer">YouTube ↗</a><span>Instagram</span><span>Facebook</span><span>Telegram</span></div>
        <div className={styles.footerBottom}><span>© 2026 Markaz Al Athari</span><a href="#home">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}



