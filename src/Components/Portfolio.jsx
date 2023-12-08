/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Resume builder",
    description:
      "Developed a resume builder with HTML, CSS, Javascript, and Bootstrap framework to give users a user-friendly way to build effective resumes using preloaded templates.",
    url: "https://github.com/Ayushi3023/resume-builder",
  },
  {
    title: "Portfolio",
    description:
      "Built a portfolio website using HTML5, CSS3, JavaScript, and Bootstrap to showcase projects and skills.",
    url: "https://ayushi3023.github.io/Portfolio/",
  },
  {
    title: "Face mask detector",
    description:
      "Implemented a computer vision model to identify faces in a given video frame using OpenCV, and then provide recognition of the face using the pre-trained model in TensorFlow to analyze the facial features.",
    url: "https://github.com/Ayushi3023/Face-mask-detection",
  },
  {
    title: "Content writing at GeeksforGeeks",
    description:
      "Have written many insightful articles on GeeksforGeeks on topics like Data Structures, Algorithms, and Machine Learning.",
    url: "https://auth.geeksforgeeks.org/user/ayushi_awasthi_/articles",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
