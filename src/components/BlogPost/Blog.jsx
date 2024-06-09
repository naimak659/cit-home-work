// src/BlogCard.js
import React from "react";
import "./blog.css";
import { blogPosts } from "../../constant/constant";
import Heading from "../utiles/Heading";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";

const BlogCard = () => {
  return (
    <div className="container">
      <Heading
        title={"Our Letest News"}
        details={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        }
        css={"heading-part"}
      />
      <div className="blog-container">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-info">
              <div className="blog-meta">
                <span>
                  <IoPersonOutline /> {post.author}
                </span>
                <span>
                  <MdOutlineDateRange />
                  {post.date}
                </span>
              </div>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-description">{post.description}</p>
              <a href={post.link} className="blog-link">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
