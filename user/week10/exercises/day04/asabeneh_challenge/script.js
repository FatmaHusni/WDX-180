const asabenehChallenges2020 = {
  description: "Asabeneh Yetayeh challenges",
  challengeTitle: "Asabeneh Yetayeh challenges",
  challengeSubtitle: "30DaysOfJavaScript Challenge",
  challengeYear: 2020,
  keywords: [
    "HTML",
    "HTML5",
    "CSS",
    "CSS3",
    "JS",
    "JavaScript",
    "ES6",
    "Promise",
    "async await",
    "Database",
    "React",
    "React Hooks",
    "Context API",
    "React Router",
    "Web Storage",
    "localStorage",
    "sessionStorage",
    "Redux",
    "Node",
    "MongoDB",
    "SQL",
    "API",
    "DOM",
    "data science",
    "MERN",
    "Python",
    "Flask",
    "Statistics",
    "Linear Algebra",
    "Numpy",
    "Pandas",
    "Scipy",
    "Scikit-learn",
    "Visualization",
    "D3.js",
  ],
  author: {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    titles: [
      ["🌱", "Educator"],
      ["💻", "Programmer"],
      ["🌐", "Developer"],
      ["🔥", "Motivator"],
      ["📔", "Content Creator"],
    ],
    qualifications: [
      "MSc. Computer Science Ongoing",
      "BSc. Information and Communication Eng.",
      "MSc. Food Technology",
      "BSc.Food Technology",
    ],
    socialLinks: [
      {
        social: "LinkedIn",
        url: "https://www.linkedin.com/in/asabeneh/",
        fontawesomeIcon: '<i class="fab fa-linkedin">',
      },
      {
        social: "Twitter",
        url: "https://twitter.com/Asabeneh",
        fontawesomeIcon: '<i class="fab fa-twitter-square"></i>',
      },
      {
        social: "Github",
        fontawesomeIcon: '<i class="fab fa-github-square"></i>',
        url: "https://github.com/Asabeneh",
      },
      {
        social: "DEV.to",
        fontawesomeIcon: "",
        url: "https://dev.to/asabeneh",
      },
    ],
    skills: [
      "Web Development",
      "Data Analysis",
      "Data Visualization",
      "Programming",
      "Databases",
      "Developing API",
    ],
    bio: "I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.",
  },
  challenges: [
    {
      name: "30 Days Of Python",
      topics: [
        "Python",
        "Flask",
        "Numpy",
        "Pandas",
        "Statistics",
        "API",
        "MongoDB",
      ],
      days: 30,
      status: "Done",
      questions: "Above 500",
      projects: "Two",
      interviewQns: "",
      githubUrl: "https://github.com/Asabeneh/30-Days-Of-Python",
    },
    {
      name: "30 Days Of JavaScript",
      topics: ["JavaScript", "ES6", "Promise", "async and await", "DOM"],
      days: 30,
      status: "Ongoing",
      questions: "Above 500",
      projects: "About 30",
      interviewQns: "",
      githubUrl: "https://github.com/Asabeneh/30DaysOfJavaScript",
    },
    {
      name: "30 Days Of HTML & CSS",
      topics: ["CSS", "Flex", "Grid", "CSS Animation"],
      days: 30,
      status: "Coming",
      questions: "Above 500",
      projects: "Two",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of React",
      topics: [
        "React",
        "React Router",
        "Redux",
        "Context API",
        "React Hooks",
        "MERN",
      ],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of ReactNative",
      topics: ["ReactNative", "Redux"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "Two",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Fullstack",
      topics: ["React", "Redux", "MongoDB", "Node", "MERN"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Data Analysis",
      topics: ["Python", "Numpy", "Pandas", "Statistics", "Visualization"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Machine Learning",
      topics: [
        "Python",
        "Numpy",
        "Pandas",
        "Scikit-learn",
        "Scipy",
        "Linear Algebra",
        "Statistics",
        "Visualization",
      ],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
  ],
};


// INSERT YOUR CODE HERE
const wrapper = document.querySelector('.wrapper');
const h1 = document.createElement('h1');
h1.textContent = `${asabenehChallenges2020.challengeTitle} ${asabenehChallenges2020.challengeYear}`;
wrapper.appendChild(h1);
const h2 = document.createElement('h2');
h2.textContent = asabenehChallenges2020.challengeSubtitle;
wrapper.appendChild(h2);
const now = new Date();
now.textContent = `${now.getDate()}:${now.getMonth()}:${now.getFullYear()}:${now.getHours()}:${now.getMinutes()}`;
const h3 = document.createElement('h3');
h3.textContent = now.textContent;
wrapper.appendChild(h3);
const ul = document.createElement('ul');
asabenehChallenges2020.challenges.forEach((challenge) => {
  const li = document.createElement('li');
  li.textContent = challenge.name;
  ul.appendChild(li);
});
wrapper.appendChild(ul);

const authorName = document.createElement('h2');
authorName.textContent = `${asabenehChallenges2020.author.firstName} ${asabenehChallenges2020.author.lastName}`;
wrapper.appendChild(authorName);

const socialLinks = document.createElement('div');
asabenehChallenges2020.author.socialLinks.forEach((link) => {
  const a = document.createElement('a');
  a.href = link.url;
  a.innerHTML = link.fontawesomeIcon ? link.fontawesomeIcon : link.social;
  a.style.marginRight = '10px';
  socialLinks.appendChild(a);
});
wrapper.appendChild(socialLinks);

const socialLinks2 = document.createElement('div');
asabenehChallenges2020.author.socialLinks.forEach((link) => {
  const a = document.createElement('a')
  a.href = link.url;
  a.textContent = link.social;
  a.style.marginRight = '10px';
  socialLinks2.appendChild(a);
});
wrapper.appendChild(socialLinks2);

const bio = document.createElement('p');
bio.textContent = asabenehChallenges2020.author.bio;
wrapper.appendChild(bio);

const div = document.createElement('div');
div.textContent = asabenehChallenges2020.author
  .titles.map((title) => title[1])
  .join(', ');
  wrapper.appendChild(div);

const skills = document.createElement('div');
skills.textContent = asabenehChallenges2020.author
  .skills.join(', ');
wrapper.appendChild(skills);


const qualifications = document.createElement('div');
qualifications.textContent = asabenehChallenges2020.author
  .qualifications.join(', ');
wrapper.appendChild(qualifications);

const keys = document.createElement('p');
keys.textContent = asabenehChallenges2020.keywords.join(', ');
wrapper.appendChild(keys);
