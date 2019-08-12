import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <div className="descriptionBox">
        <h2>O nas</h2>
        <img
          className="descriptionBox__ornament"
          src="/images/ornament.png"
          alt="ornament"
        />
        <p>
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parnsnip
        </p>
        <div className="descriptionBox__signature">
          <img src="/images/signature.png" alt="podpis" />
        </div>
      </div>
      <div className="imageBox">
        <img src="/images/about.png" alt="" />
      </div>
    </section>
  );
};

export default About;
