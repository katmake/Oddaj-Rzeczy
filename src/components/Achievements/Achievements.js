import React from "react";
import accomplishments from "./accomplishments";
import Achievement from "../Achievement";
import "./Achievements.scss";

const Achievements = () => {
  return (
    <section id="achievements" className="achievements">
      <div className="achievementsBox">
        {Object.keys(accomplishments).map(key => (
          <Achievement key={key} accomplishment={accomplishments[key]} />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
