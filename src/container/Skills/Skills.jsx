import "./Skills.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client, urlFor } from "../../client";

import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
function Skills() {
  const [skills, setSiklls] = useState([]); // data copy
  const [experiences, setExperiences] = useState([]); // data copy
  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    const expQuery = '*[_type == "experiences"]';
    client
      .fetch(skillsQuery)
      .then((data) => {
        // Handle the fetched data
        setSiklls(data);
      })
      .catch((error) => {
        // Handle any errors
        console.log(error);
      });
    client
      .fetch(expQuery)
      .then((data) => {
        // Handle the fetched data
        setExperiences(data);
      })
      .catch((error) => {
        // Handle any errors
        console.log(error);
      });
  }, []);
  return (
    <>
      <h2 className="head-text">Skills and Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill, index) => (
            <motion.div
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: [0, 1] }}
              className="app__skills-item app__flex"
              key={skill.name + index}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon).url()} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {experiences?.map((exp, index) => (
            <motion.div className="app__skills-exp-item" key={exp.year + index}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{exp.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {exp?.works?.map((work, index) => (
                  <div key={work.name + index}>
                    <motion.div
                      transition={{ duration: 0.5 }}
                      whileInView={{ opacity: [0, 1] }}
                      className="app__skills-exp-work"
                      data-tooltip-id={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <Tooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </Tooltip>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Skills, "app__skills app__skills__flex"),
  "skills",
  "app__whitebg"
);
