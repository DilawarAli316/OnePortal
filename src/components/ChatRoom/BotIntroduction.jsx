/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./BotIntroduction.module.css";

function BotIntroduction() {
  return (
    <div className={styles.botIntroduction}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0953a0ca8556fc35f5b4f0540f25c29762a1a4e70587d572ef8d26bac7d09c1e?placeholderIfAbsent=true&apiKey=041020761c824046b3f5b318a397a746"
        alt=""
        className={styles.backgroundImage}
      />
      <div className={styles.introContent}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6388f30ded0ca039845d6d37bfc646e69b5f7762482ea60d9e043438d205aedb?placeholderIfAbsent=true&apiKey=041020761c824046b3f5b318a397a746"
          alt=""
          className={styles.contentBackground}
        />
        <div className={styles.botInfo}>
          <div className={styles.avatarContainer}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f6cdf2b1009807acf3791e7c1749e9833df0e949ba0cfaea5744d409345ce53?placeholderIfAbsent=true&apiKey=041020761c824046b3f5b318a397a746"
              alt=""
              className={styles.avatarBackground}
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/262717a17d65b212bb2ac1f8f4a20a64c5064a1eb53465dce99dcacea2d9b3d2?placeholderIfAbsent=true&apiKey=041020761c824046b3f5b318a397a746"
              alt="Bot avatar"
              className={styles.avatarImage}
            />
          </div>
          <div className={styles.botDescription}>
            <h2 className={styles.botName}>Hello!</h2>
            <p className={styles.botRole}>
              I am Ahmed, want to help you with managing all of your tasks
            </p>
          </div>
        </div>
        <p className={styles.introText}>
          Here are some of the things I can do:
        </p>
        <ul className={styles.featureList}>
          <li>Alert you when tasks are due soon</li>
          <li>Alert you when tasks have been marked as 'at risk'</li>
          <li>Help you view all tasks assigned to your project</li>
          <li>
            Provide regular reports on task status and completion rate (i.e.
            burndown charts)
          </li>
        </ul>
        <p className={styles.callToAction}>
          Ready to get started? Sign in! Want to learn more about this
          application? Take a quick tour.
        </p>
      </div>
    </div>
  );
}

export default BotIntroduction;
