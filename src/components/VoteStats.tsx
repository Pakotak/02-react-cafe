import styles from "./VoteStats.module.css";

type VoteStatsProps = {
  good: number;
  neutral: number;
  bad: number;
};

export default function VoteStats({ good, neutral, bad }: VoteStatsProps) {
  const total = good + neutral + bad;

  const positive =
    total > 0 ? Math.round((good / total) * 100) : 0;

  return (
    <div className={styles.container}>
      <p className={styles.stat}>
        Good: <strong>{good}</strong>
      </p>

      <p className={styles.stat}>
        Neutral: <strong>{neutral}</strong>
      </p>

      <p className={styles.stat}>
        Bad: <strong>{bad}</strong>
      </p>

      <p className={styles.stat}>
        Total: <strong>{total}</strong>
      </p>

      <p className={styles.stat}>
        Positive: <strong>{positive}%</strong>
      </p>
    </div>
  );
}