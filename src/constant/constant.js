// service svg's
import svg1 from "/src/assets/SVG/horizontal distribute right.svg";
import svg2 from "/src/assets/SVG/line spacing.svg";
import svg3 from "/src/assets/SVG/minus path.svg";
import svg4 from "/src/assets/SVG/object group.svg";
import svg5 from "/src/assets/SVG/object ungroup.svg";
import svg6 from "/src/assets/SVG/transform tool.svg";
// portfolio images import
import PortfolioImg1 from "../assets/Portfolio-images/Rectangle 12.png";
import PortfolioImg2 from "../assets/Portfolio-images/Rectangle 13.png";
import PortfolioImg3 from "../assets/Portfolio-images/Rectangle 14.png";
import PortfolioImg4 from "../assets/Portfolio-images/Rectangle 15.png";
import PortfolioImg5 from "../assets/Portfolio-images/Rectangle 16.png";
import PortfolioImg6 from "../assets/Portfolio-images/Rectangle 17.png";
import PortfolioImg7 from "../assets/Portfolio-images/Rectangle 18.png";
import PortfolioImg8 from "../assets/Portfolio-images/Rectangle 19.png";
// team img

import teamimg1 from "../assets/Team-img/Rectangle 20 (1).png";
import teamimg2 from "../assets/Team-img/Rectangle 20 (2).png";
import teamimg3 from "../assets/Team-img/Rectangle 20.png";
// src/assets/Team-img/Rectangle 20 (2).png

// logo img
import logo from "../assets/Logo (2).png";
// banner img
import bannerImg from "../assets/Banner Illustration.png";

// navber data
export const navbarData = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Service", link: "/services" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/contact" },
];

// service part data
const services = [
  {
    img: svg1,
    title: "UI/UX Design",
    detail:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    img: svg2,
    title: "Web Development",
    detail:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. ",
  },
  {
    img: svg3,
    title: "Digital Marketing",
    detail:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    img: svg4,
    title: "Web Design",
    detail:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    img: svg5,
    title: "Motion Design",
    detail:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    img: svg6,
    title: "Graphic Design",
    detail:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
];

// portfolio part data
const portfolioItems = [
  {
    id: 1,
    image: PortfolioImg1,
    title: "Graphic Design",
    link: "#",
    alt: "Rainbow graphic design",
  },
  {
    id: 2,
    image: PortfolioImg2,
    title: "Graphic Design",
    link: "#",
    alt: "Colored pencils",
  },
  {
    id: 3,
    image: PortfolioImg3,
    title: "Graphic Design",
    link: "#",
    alt: "Think outside the box",
  },
  {
    id: 4,
    image: PortfolioImg4,
    title: "Graphic Design",
    link: "#",
    alt: "Work setup",
  },
  {
    id: 5,
    image: PortfolioImg5,
    title: "Graphic Design",
    link: "#",
    alt: "Painting",
  },
  {
    id: 6,
    image: PortfolioImg6,
    title: "Graphic Design",
    link: "#",
    alt: "Graphic design tools",
  },
  {
    id: 7,
    image: PortfolioImg7,
    title: "Graphic Design",
    link: "#",
    alt: "Rainbow pencils",
  },
  {
    id: 8,
    image: PortfolioImg8,
    title: "Graphic Design",
    link: "#",
    alt: "Colored pencils",
  },
];

// team data
const teamMembers = [
  { id: 1, image: teamimg1, name: "Mahid Ahmed", position: "UX Designer" },
  { id: 2, image: teamimg2, name: "Hasan Imam", position: "UI Designer" },
  {
    id: 3,
    image: teamimg3,
    name: "Kazi Afia",
    position: "Digital Marketer",
  },
];

export { bannerImg, services, logo, portfolioItems, teamMembers };
