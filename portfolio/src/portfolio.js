const header = {
  homepage: "https://dvillasmil08.github.io/",
  title: "Daniel Villasmil",
};

const about = {
  name: "Daniel Villasmil",
  role: "Software Developer",
  description: (
    <div>
      Ohio-born, Venezuela raised where I studied Civil Engineering, I
      discovered my passion for programming through a C++ class, realizing that
      software development is my true calling. Once returning to the US, I
      joined the US Army and served for seven years on active duty. In 2020, I
      transitioned to the Reserves. Being a father is essential to my life, and
      I cherish the time I spend with my family. 
      <br />
      <br />
      I enjoy playing video games,
      watching movies, and traveling in my free time. This brief overview
      highlights my multicultural background, academic journey, military
      service, and the joy of fatherhood, showcasing the diverse experiences
      that have shaped me as an individual.
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
    description: (
      <div>
        One Day At A Time is a Java-based web application built with Spring Boot
        and JavaScript. It helps individuals assess their emotional state and
        provides appropriate guidance and resources.
        <br />
        By selecting their level of happiness or sadness, users can receive
        recommendations for professional psychologists or discover local events
        through meet-up websites for a positive social experience.
        EmotionTracker aims to improve mental well-being by offering
        personalized assistance and promoting social connections.
      </div>
    ),
    stack: ["Java", "Spring Boot", "JavaScript"],
    sourceCode: "https://github.com/WCCI-one-day-at-a-time/OneDayAtATime",
  },
  {
    name: "Clicking Calamity",
    id: 2,
    description: (
      <div>
        Clicking Calamity is a Cookie Clicker-inspired application that is a
        simple and addictive game where the objective is to click on a cookie to
        earn points.
        <br />
        The more cookies you click, the more points you accumulate. With these
        points, you can unlock upgrades or power-ups that help you make even
        more points per click or automate the process.
      </div>
    ),
    stack: ["JavaScript"],
    sourceCode:
      "https://github.com/2020-Spring-Cohort/clicking-calamity-DanielVillasmil",
  },
  {
    name: "Top Down Shooter",
    id: 3,
    description: (
      <div>
        In this simple Lua and Love2D application, you face an endless horde of
        enemies that progressively swarm toward you. With each passing second,
        the number of enemies increases, intensifying the challenge.
        <br />
        You aim to survive for as long as possible by avoiding the incoming
        enemies and using your weapon to fend them off. Test your reflexes and
        see how long you can withstand the relentless onslaught in this
        thrilling and fast-paced game.
      </div>
    ),
    stack: ["Lua", "Love2D"],
    sourceCode: "https://github.com/dvillasmil08/TopDownShooter",
    livePreview: "https://zombiekillergta.com/",
  },
  {
    name: "Shooting Gallery Game",
    id: 4,
    description: (
      <div>
        In this fast-paced Lua and Love2D game, you aim to shoot as many targets
        as possible within a challenging 20-second time limit. Take aim, fire,
        and test your reflexes in this addictive target practice experience.
        <br />
        Can you achieve the highest score and become the ultimate sharpshooter?
        Enable your shooting skills and beat the clock in this thrilling game!
      </div>
    ),
    stack: ["Lua", "Love2D"],
    sourceCode: "https://github.com/dvillasmil08/ShootingGalleryGame",
    livePreview: "https://6strshooter.online/",
  },
  {
    name: "Platformer",
    id: 5,
    description: (
      <div>
        Embark on an exciting adventure in this Lua and Love2D platform game,
        reminiscent of the classic Mario series. Navigate through multiple
        challenging platforms, overcoming obstacles and enemies along the way.
        Your goal is to reach the door at the end of each level, transporting
        you to a whole new platform world brimming with fresh challenges and
        surprises.
        <br />
        Be careful not to fall into the abyss or let enemies touch you, as a
        single misstep could cost you your life. Can you conquer each level,
        unravel the mysteries, and emerge as the ultimate platformer champion?
        Jump, run, and navigate to victory in this thrilling and addictive
        platforming experience.
      </div>
    ),
    stack: ["Lua", "Love2D"],
    sourceCode: "https://github.com/dvillasmil08/Platformer",
  },
  {
    name: "Purple Haze",
    id: 6,
    description: (
      <div>
        Purple Haze is a Java-based web application built with Spring Boot and
        JavaScript. It allows users to search for artists, albums, and songs.
        Users can also save their favorite artists, albums, and songs to their
        profile.
      </div>
    ),
    stack: ["JavaScript", "Java", "Rest", "Spring Boot"],
    sourceCode:
      "https://github.com/2020-Spring-Cohort/artists-albums-songs-purple-haze",
  },
  {
    name: "Portfolio",
    id: 7,
    description: (
      <div>
        This portfolio, built with React and hosted on GitHub, showcases my
        coding experience and personal identity. It offers a seamless browsing
        experience, allowing visitors to explore my projects, skills, and
        achievements. Its design and content reflect my passion for coding. It
        provides insights into who I am as a developer and individual.
      </div>
    ),
    stack: ["React"],
    sourceCode: "https://github.com/dvillasmil08/react-portfolio",
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
