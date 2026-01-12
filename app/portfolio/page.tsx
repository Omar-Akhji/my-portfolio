"use client";

import { useState } from "react";
import Image from "next/image";
import { IoEyeOutline, IoChevronDown } from "react-icons/io5";

interface Project {
  title: string;
  category: string;
  image: string;
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const projects: Project[] = [
    {
      title: "Finance",
      category: "Web development",
      image: "/assets/images/project-1.jpg",
    },
    {
      title: "Orizon",
      category: "Web development",
      image: "/assets/images/project-2.png",
    },
    {
      title: "Fundo",
      category: "Web design",
      image: "/assets/images/project-3.jpg",
    },
    {
      title: "Brawlhalla",
      category: "Applications",
      image: "/assets/images/project-4.png",
    },
    {
      title: "DSM",
      category: "Web design",
      image: "/assets/images/project-5.png",
    },
    {
      title: "Metaspark",
      category: "Web design",
      image: "/assets/images/project-6.png",
    },
    {
      title: "Summary",
      category: "Web development",
      image: "/assets/images/project-7.png",
    },
    {
      title: "Task Manager",
      category: "Web development",
      image: "/assets/images/project-8.jpg",
    },
    {
      title: "Arrival",
      category: "Web development",
      image: "/assets/images/project-9.png",
    },
  ];

  const categories = ["All", "Web design", "Applications", "Web development"];

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setIsSelectOpen(false);
  };

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {categories.map((category) => (
            <li className="filter-item" key={category}>
              <button
                className={activeCategory === category ? "active" : ""}
                onClick={() => handleCategoryClick(category)}
                data-filter-btn>
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button
            className={`filter-select ${isSelectOpen ? "active" : ""}`}
            onClick={() => setIsSelectOpen(!isSelectOpen)}
            data-select>
            <div className="select-value" data-selecct-value>
              {activeCategory === "All" ? "Select category" : activeCategory}
            </div>

            <div className="select-icon">
              <IoChevronDown />
            </div>
          </button>

          <ul className="select-list">
            {categories.map((category) => (
              <li className="select-item" key={category}>
                <button
                  onClick={() => handleCategoryClick(category)}
                  data-select-item>
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {projects.map((project) => (
            <li
              className={`project-item ${
                activeCategory === "All" || project.category === activeCategory
                  ? "active"
                  : ""
              }`}
              data-filter-item
              data-category={project.category.toLowerCase()}
              key={project.title}>
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IoEyeOutline />
                  </div>

                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    loading="lazy"
                    unoptimized
                  />
                </figure>

                <h3 className="project-title">{project.title}</h3>

                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
