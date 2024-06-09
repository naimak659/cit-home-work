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

// testimonial img
import testimonialProfileImg from "../assets/Exprience/profile.png";
import testimonialStarImg from "../assets/Exprience/stars.png";
import testimonialCommaImg from "../assets/Exprience/testimonial.png";

// blog images
import Blog1 from "../assets/Blog/blog1.png";

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

// customer exprince data

const testimonials = [
  {
    id: 1,
    image: testimonialProfileImg,
    star: testimonialStarImg,
    comma: testimonialCommaImg,
    name: "Mahid Ahmed",
    position: "UX Designer",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    id: 3,
    image: testimonialProfileImg,
    star: testimonialStarImg,
    comma: testimonialCommaImg,
    name: "Mahid Ahmed",
    position: "UX Designer",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    id: 2,
    image: testimonialProfileImg,
    star: testimonialStarImg,
    comma: testimonialCommaImg,
    name: "Mahid Ahmed",
    position: "UX Designer",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
];

const blogPosts = [
  {
    id: 1,
    image: Blog1,
    author: "Admin",
    date: "07/11/2021",
    title: "Business Plans That Fit Your Best Blog",
    description:
      "There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form.",
    link: "#",
  },
  {
    id: 2,
    image: Blog1,
    author: "Admin",
    date: "07/11/2021",
    title: "Business Plans That Fit Your Best Blog",
    description:
      "There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form.",
    link: "#",
  },
  {
    id: 3,
    image: Blog1,
    author: "Admin",
    date: "07/11/2021",
    title: "Business Plans That Fit Your Best Blog",
    description:
      "There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form.",
    link: "Learn More",
  },
];

// footer items

const FooterContent = ["About us", "Work", "Latest News", "Careers"];

export {
  bannerImg,
  services,
  logo,
  portfolioItems,
  teamMembers,
  testimonials,
  blogPosts,
  FooterContent,
};
