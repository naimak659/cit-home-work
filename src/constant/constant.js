import svg1 from "/src/assets/SVG/horizontal distribute right.svg";
import svg2 from "/src/assets/SVG/line spacing.svg";
import svg3 from "/src/assets/SVG/minus path.svg";
import svg4 from "/src/assets/SVG/object group.svg";
import svg5 from "/src/assets/SVG/object ungroup.svg";
import svg6 from "/src/assets/SVG/transform tool.svg";
import logo from "../assets/Logo (2).png";
import bannerImg from "../assets/Banner Illustration.png";

export const navbarData = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Service", link: "/services" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/contact" },
];

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

export { bannerImg, services, logo };
