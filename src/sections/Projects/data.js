export default [
  {
    name: "MailMunch",
    description: "A digital marketing service that captures leads from your website and converts visitors into life-long readers, email subscribers and customers.  ",
    details:
      [`I developed multiple features for the website. The prominent ones included a custom floating action button builder that was used to trigger any popups embedded within a page. 
      A countdown timer with the option of respecting either the visitors timezone or a specific chosen timezone. A google font picker, powered by WebfontLoader for lazy loading,
      that gave the managers a huge variety of fonts to choose from for their campaigns.`,
      `Apart from that I also set up Cypress for the codebase that greatly sped up the testing process.`
    ],
    link: "https://www.mailmunch.com/",
    tags: ["React", "Redux", "Redux-Saga", "GraphQL", "Sequalize", "Nodejs", "Cypress"],
    year: 2020,
  },
  {
    name: "Droobi",
    description: "A 16-week online programme to helps its users change their lifestyle and manage their diabetes.",
    details:[
      `I created a chat module in ReactJS containing features like last seen, media files support, archive/unarchive conversation.
      I also bought down code duplication from 34% to 11% by formulating a reusable UI library on top of Material-UI components (Figures reported by SonarQube)
      And I set up unit testing from scratch using Jest/Enzyme in the application, attaining a code coverage of 85%`
    ],
    link: "https://en.droobihealth.com/",
    tags: ["React", "Redux", "Jest/Enzyme", "Webpack"],
    year: 2019,
  },
  {
    name: "Covid-19",
    description: "A Covid Relief website that gave the user an option of selecting a city from the dropdown and displaying the charities available for that city via Google Maps.",
    details:[`
      I Co-authored in a website that was powered by a Node.js to serve a React SPA. The application the consumed Twilio SMS API to send charity details to users upon their request.
    `],
    link: "https://pacific-headland-81140.herokuapp.com/",
    tags: ["React", "Twillio"],
    year: 2020,
  },
  {
    name: "CodeLMS",
    description: "A platform for users to view their enrolled courses, upload programming assignments and an use in-browser IDE to write code.",
    details:[
      `Developed a web application that provided a platform to upload and solve coding assignments. Made use of Docker to execute the user code in a safe environment containing all the required dependencies. Users of the application had a repository created on Gitlab where their code was retrieved and updated automatically using GitLab’s APIs.`
    ],
    link: "https://github.com/AbreezaSaleem/codeLMS",
    tags: ["React", "Nodejs", "Rest-api"],
    year: 2018,
  },
  {
    name: "Stutor",
    description: "A web application that provides a platform to connect students with tutors based on their proximity to each other based on the model of Tinder.",
    details: [`
      
    `],
    link: "",
    tags: ["React", "Nodejs", "Mongo  ", "Express"],
    year: 2017,
  },
  {
    name: "Program Inspection Tool",
    description: "An inspection tool that provides a comprehensive visualisation of fault localisation in user code.",
    details:[
      `Developed an inspection tool that generated a thorough report on the occurrences of bugs in the program, using Levenshtein’s Algorithm. It provided a visual report of all the failed test cases and how far they were from the original solution via a web application.`,
    ],
    link: "https://github.com/AbreezaSaleem/Automated-Program-Inspection-using-LLVM",
    tags: ["C++", "LLVM"],
    year: 2019,
  },
  {
    name: "Plagersim Detector Tool",
    description: "A plagiarism detection tool that generates Program Dependence Graphs of all uploaded programs/assignments and compares each pair by using subgraph isomorphism to detect disguised code changes.",
    details:[
      `Developed a plagiarism detection tool that generated Program Dependance Graphs of two source codes and compared them both using subgraph isomorphism to detect disguised code changes. Successfully tested tool on common disguises like statement reordering, variable renaming, control replacement and code insertion.`
    ],
    link: "https://github.com/AbreezaSaleem/ProgramDependenceGraph",
    tags: ["C++", "LLVM"],
    year: 2018,
  }
]