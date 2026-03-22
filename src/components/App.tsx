import { useState } from "react";
import css from "./App.module.css";
import CafeInfo from "./Cafeinfo.tsx";
import VoteOptions from "./VoteOptions";
import VoteStats from "./VoteStats";
import Notification from "./Notification";

type VoteType = "good" | "neutral" | "bad";

type Votes = {
  good: number;
  neutral: number;
  bad: number;
};

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function handleVote(type: VoteType) {
    setVotes(prev => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  }

  function handleReset() {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  const totalVotes = votes.good + votes.neutral + votes.bad;

  return (
    <div className={css.app}>
      <CafeInfo />

      <VoteOptions
        onVote={handleVote}
        onReset={handleReset}
        canReset={totalVotes > 0}
      />

      {totalVotes > 0 ? (
        <VoteStats
          good={votes.good}
          neutral={votes.neutral}
          bad={votes.bad}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}