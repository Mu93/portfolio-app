import "./Work.scss";
import { useEffect, useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client, urlFor } from "../../client";

function Work() {
  const [works, setWorks] = useState([]); // data copy
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';
    client
      .fetch(query)
      .then((data) => {
        // Handle the fetched data
        setWorks(data);
        setFilterWork(data);
      })
      .catch((error) => {
        // Handle any errors
        console.log(error);
      });
  }, []);
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <>
      <h2 className="head-text">
        My Creative <span> Portfolio</span> Section
      </h2>
      <div className="app__work-filter">
        {["All", "UI/UX", "Web App", "JavaScript", "React.js"].map(
          (item, index) => (
            <div
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
              key={index + item}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork?.map((work, index) => (
          <div key={index} className="app__work-item app__flex">
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl).url()} alt={work.title} />
              <motion.div
                className="app__work-hover app__flex"
                transition={{
                  duration: 0.25,
                  staggerChildren: 0.5,
                  ease: "easeInOut",
                }}
                whileHover={{ opacity: [0, 1] }}
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    transition={{
                      duration: 0.25,
                    }}
                    whileHover={{ scale: [1, 0.9] }}
                    whileInView={{ scale: [0, 1] }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    transition={{
                      duration: 0.25,
                    }}
                    whileHover={{ scale: [1, 0.9] }}
                    whileInView={{ scale: [0, 1] }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work?.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work?.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
}
export default AppWrap(MotionWrap(Work, "app__work"), "work", "app_primarybg");
