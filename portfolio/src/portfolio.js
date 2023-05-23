const header = {
  homepage: "https://dvillasmil08.github.io/",
  title: "Daniel Villasmil",
};

const about = {
  name: "Daniel Villasmil",
  role: "Software Developer",
  description: (
    <div>
      I was born in Columbus, OH, and moved to Venezuela at two years old. While
      living in Venezuela, I had the opportunity to experience the culture and
      grow up in a different environment. While studying Civil Engineering
      there, I had a C++ class that made me realize I enjoyed programming and
      that software development is my calling.
      <br />
      <br />
      After moving back to Columbus, I joined the US Army and served for seven
      years on active duty. In 2020, I transitioned from active duty and
      currently serve in the Reserves while also taking on roles in coaching and
      leadership. I enjoy playing video games, watching movies, and traveling.
    </div>
  ),
  resume: "placeholder.com",
  linkedin: "https://www.linkedin.com/in/danielvillasmil/",
  github: "https://github.com/dvillasmil08/",
  image: "https://via.placeholder.com/200",
};

const projects = [
  {
    name: "One Day At A Time",
    id: 1,
    description: "Here is project description",
    stack: ["Java, Spring Boot, JavaScript, HTML, CSS"],
    sourceCode: "https://github.com/WCCI-one-day-at-a-time/OneDayAtATime",
  },
  {
    name: "Clicking Calamity",
    id: 2,
    description: "Here is project description",
    stack: ["JavaScript, HTML, CSS"],
    sourceCode:
      "https://github.com/2020-Spring-Cohort/clicking-calamity-DanielVillasmil",
  },
  {
    name: "Top Down Shooter",
    id: 3,
    description: "Here is project description",
    stack: ["Lua, Love2D"],
    sourceCode: "https://github.com/dvillasmil08/TopDownShooter",
    livePreview: "https://zombiekillergta.com/",
  },
  {
    name: "Shooting Gallery Game",
    id: 4,
    description: "Here is project description",
    stack: ["Lua, Love2D"],
    sourceCode: "https://github.com/dvillasmil08/ShootingGalleryGame",
    livePreview: "https://6strshooter.online/",
  },
  {
    name: "Platformer",
    id: 5,
    description: "Here is project description",
    stack: ["Lua, Love2D"],
    sourceCode: "https://github.com/dvillasmil08/Platformer",
  },
];
const hobbies = [
  {
    id: 2,
    name: "Counter Strike: Global Offensive",
    description: (
      <div>
        I've been grinding CSGO for over a decade now, honing my skills on the
        virtual battlefield. As a player and coach, I had the awesome
        opportunity to be part of the US Army CSGO team's outreach program. We
        went on an epic journey, climbing three divisions and leaving our mark
        in the gaming world!
      </div>
    ),
    image: require("./Images/esports.JPG"),
  },
  {
    id: 3,
    name: "USArmy",
    description: (
      <div>
        During my incredible 10-year military journey, I ventured through
        unexpected places. From California's scorching desert to Georgia's
        challenging landscapes, each location presented unique adventures. New
        York brought brutal winters upstate and memorable trips to Canada. And
        in El Paso, I discovered a vibrant atmosphere that made it all
        worthwhile. From deserts to frozen tundras, each place left an indelible
        mark on my journey.
      </div>
    ),
    image: require("./Images/armyHead.jpg"),
  },
  {
    id: 4,
    name: "Soccer",
    description: (
      <div>
        Soccer is my lifeblood. From World Cups to local matches, I live and
        breathe the game. Whether it's following international tournaments or
        supporting my beloved Columbus Crew with a season ticket, soccer is more
        than a hobby—it's a lifelong passion that keeps me connected to the
        beautiful game.
      </div>
    ),
    image: require("./Images/columbus-stadium.JPG"),
  },
  {
    id: 5,
    name: "Rugby",
    description: (
      <div>
        Rugby has shaped me. I played for Venezuela's U-18 team, training with
        the seniors. We took the lead, forming our own team and winning the
        Venezuelan 7-a-side championship. Rugby is ingrained in me, symbolizing
        camaraderie and resilience.
      </div>
    ),
    image: require("./Images/rugby.JPG"),
  },
];

const skills = [
  "HTML/CSS",
  "React",
  "Git",
  "CI/CD",
  "Java",
  "Spring Boot",
  "SQL",
  "Change Management",
  "Erwin Data Model",
  "Agile",
  "Scrum",
  "Jira",
];

const contact = {
  email: "dvillasmil08@gmail.com",
  linkedin: "https://www.linkedin.com/in/danielvillasmil/",
  github: "https://github.com/dvillasmil08/",
};

export { header, about, projects, skills, contact, hobbies };
