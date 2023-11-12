import "./About.scss";
import { motion } from "framer-motion";
import { Images } from "../../constants";
import { client, urlFor } from "../../client";
import { useEffect, useState } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";

// const abouts = [
//   {
//     title: "Front-End Development",
//     descriptions:
//       "I am proficient in using modern front-end frameworks such as React, and Vue.js to build dynamic and interactive user interfaces.",
//     imgUrl: Images.about01,
//   },
//   {
//     title: "UX/UI Design",
//     descriptions:
//       "I am skilled in using design tools such as Figma and Adobe XD to create wireframes, mockups, and prototypes that effectively communicate the design vision.",
//     imgUrl: Images.about02,
//   },
//   {
//     title: "Responsive Frameworks",
//     descriptions:
//       "I am proficient in popular front-end frameworks such as Tailwind, and Bootstrap. Which helps create consistent and visually appealing websites.",
//     imgUrl: Images.about03,
//   },
//   {
//     title: "Version Control",
//     descriptions:
//       "I am proficient in using GitHub to manage code repositories and collaborate with other developers. This allows for efficient code management.",
//     imgUrl: Images.about04,
//   },
// ];
function About() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client
      .fetch(query)
      .then((data) => {
        // Handle the fetched data
        setAbouts(data);
      })
      .catch((error) => {
        // Handle any errors
        console.log(error);
      });
  }, []);

  return (
    <div className="app__about">
      <h2 className="head-text">
        I Know that <span> Good Development</span> <br />
        means <span>Good Business </span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            key={about.title + index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
          >
            {/* <img src={about.imgUrl} alt={about.title} /> */}
            <img src={urlFor(about.imgUrl).url()} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
