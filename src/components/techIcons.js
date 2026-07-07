/**
 * Registry of technology badges. Each entry uses the REAL brand icon
 * (from react-icons/si — Simple Icons) plus that brand's official color.
 * To add a new technology: import its icon from "react-icons/si" and add
 * an entry here. Then reference the key anywhere in portfolioData.js.
 */
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiFigma,
  SiRedux,
  SiNextdotjs,
  SiBootstrap,
  SiSass,
  SiPython,
  SiDocker,
  SiPostman,
  SiVuedotjs,
  SiAngular,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiVite,
  SiRedis,
  SiKubernetes,
  SiLinux,
  SiFramer,
} from "react-icons/si";

const TECH_REGISTRY = {
  react: { label: "React", color: "#61DAFB", Icon: SiReact },
  javascript: { label: "JavaScript", color: "#F7DF1E", Icon: SiJavascript },
  typescript: { label: "TypeScript", color: "#3178C6", Icon: SiTypescript },
  html5: { label: "HTML5", color: "#E34F26", Icon: SiHtml5 },
  css3: { label: "CSS3", color: "#1572B6", Icon: SiCss },
  tailwind: { label: "Tailwind CSS", color: "#06B6D4", Icon: SiTailwindcss },
  nodejs: { label: "Node.js", color: "#5FA04E", Icon: SiNodedotjs },
  express: { label: "Express", color: "#8f8f8f", Icon: SiExpress },
  mongodb: { label: "MongoDB", color: "#47A248", Icon: SiMongodb },
  mysql: { label: "MySQL", color: "#4479A1", Icon: SiMysql },
  postgresql: { label: "PostgreSQL", color: "#4169E1", Icon: SiPostgresql },
  firebase: { label: "Firebase", color: "#FFCA28", Icon: SiFirebase },
  git: { label: "Git", color: "#F05032", Icon: SiGit },
  github: { label: "GitHub", color: "#8f8f8f", Icon: SiGithub },
  figma: { label: "Figma", color: "#A259FF", Icon: SiFigma },
  redux: { label: "Redux", color: "#764ABC", Icon: SiRedux },
  nextjs: { label: "Next.js", color: "#8f8f8f", Icon: SiNextdotjs },
  bootstrap: { label: "Bootstrap", color: "#7952B3", Icon: SiBootstrap },
  sass: { label: "Sass", color: "#CC6699", Icon: SiSass },
  python: { label: "Python", color: "#3776AB", Icon: SiPython },
  docker: { label: "Docker", color: "#2496ED", Icon: SiDocker },
  postman: { label: "Postman", color: "#FF6C37", Icon: SiPostman },
  vscode: { label: "VS Code", color: "#007ACC", Icon: null },
  vue: { label: "Vue.js", color: "#4FC08D", Icon: SiVuedotjs },
  angular: { label: "Angular", color: "#DD0031", Icon: SiAngular },
  graphql: { label: "GraphQL", color: "#E10098", Icon: SiGraphql },
  jest: { label: "Jest", color: "#C21325", Icon: SiJest },
  webpack: { label: "Webpack", color: "#8DD6F9", Icon: SiWebpack },
  vite: { label: "Vite", color: "#646CFF", Icon: SiVite },
  redis: { label: "Redis", color: "#FF4438", Icon: SiRedis },
  kubernetes: { label: "Kubernetes", color: "#326CE5", Icon: SiKubernetes },
  linux: { label: "Linux", color: "#FCC624", Icon: SiLinux },
  framer: { label: "Framer Motion", color: "#0055FF", Icon: SiFramer },
};

export function getTech(key) {
  return (
    TECH_REGISTRY[key] || {
      label: key,
      color: "#8CA0B8",
      Icon: null,
    }
  );
}

export default TECH_REGISTRY;
