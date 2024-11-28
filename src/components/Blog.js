import React, { useState, useEffect } from "react";
import "../styles/Blog.css";

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation when the component is mounted
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`blog-container ${isVisible ? "visible" : ""}`}>
      {/* Section: Blog posts for the first quarter */}
      <h2>
        Blog posts I find useful/interesting ..........................(
        <span>first quarter 2024</span>)
      </h2>
      <ul className="myList">
        <li>
          <a href="https://css-tricks.com/different-ways-towrite-css-in-react/">
            Different Ways to Write CSS in React
          </a>
        </li>
        <li>
          <a href="https://css-tricks.com/more-real-world-uses-for-has/">
            More Real-World Uses for :has()
          </a>
        </li>
        <li>
          <a href="https://github.blog/2024-01-08-github-certifications-are-generally-available/">
            Github Certifications are generally available
          </a>
        </li>
      </ul>

      {/* Section: Blog posts for the second quarter */}
      <h2>
        Blog posts ................................................................
        <span>(second quarter 2024)</span>
      </h2>
      <ul className="myList">
        <li>
          <a href="https://martinfowler.com/articles/exploring-gen-ai.html#memo-08/">
            How to tackle unreliability of coding assistance
          </a>
        </li>
        <li>
          <a href="https://hackernoon.com/intelligent-devops-8-lessons-learned-from-nature/">
            Intelligent DevOps: 8 Lessons Learned from Nature
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.blog/2023/11/08/the-product-approach-to-open-sourse-communities/">
            The product approach to open source communities
          </a>
        </li>
      </ul>

      {/* Section: Upcoming blog posts */}
      <h2>Upcoming Blog posts</h2>
      <ul className="myList">
        <li>
          <a href="/">You Can Work in Tech Without Working in Big Tech</a>
        </li>
      </ul>
    </div>
  );
};

export default Blog;
