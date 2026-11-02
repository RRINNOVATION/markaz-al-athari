"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function MadrassaSurvey() {
  const [previewMessage, setPreviewMessage] = useState(false);

  return (
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
        <div className={styles.surveyTag}>
          <span>✳</span> SHARE YOUR INTEREST
        </div>
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
  );
}
