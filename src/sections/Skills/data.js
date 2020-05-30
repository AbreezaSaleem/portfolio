import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTerminal, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

export default {
  frontend: {
    logo: <FontAwesomeIcon icon={faEdit} size="2x" />,
    title: "Front-end Developer",
    details: "I love the flexibility frontend developing provides me in creating usable and minimalistic user interfaces",
    tools: ["React Dev Tools", "Redux Dev Tools", "React Profiler"],
    languages: {
      "HTML": "⭐️⭐️⭐️⭐️", "CSS": "⭐️⭐️⭐️⭐️", "SASS": "⭐️⭐️⭐️⭐️⭐️", "JavaScript": "⭐️⭐️⭐️⭐️⭐️", "React": "⭐️⭐️⭐️⭐️⭐️", "Redux": "⭐️⭐️⭐️⭐️⭐️", "Redux-Saga": "⭐️⭐️⭐️⭐️⭐️", "React Hooks": "⭐️⭐️⭐️⭐️⭐️"
    }
  },
  backend: {
    logo: <FontAwesomeIcon icon={faTerminal} size="2x" />,
    title: "Back-end Developer",
    details: "I love the flexibility frontend developing provides me in creating usable and minimalistic user interfaces",
    tools: ["GraphQL Playground", "Postman", "Swagger", "Postico"],
    languages: {
      "NodeJS": "⭐️⭐️⭐️⭐️⭐️", "ExpressJS": "⭐️⭐️⭐️⭐️⭐️", "MongoDB": "⭐️⭐️⭐️⭐️⭐️", "SQL": "⭐️⭐️⭐️⭐️⭐️", "Apollo GraphQL": "⭐️⭐️⭐️⭐️⭐️", "Elasticsearch": "⭐️⭐️⭐️⭐️⭐️", "Sequalize": "⭐️⭐️⭐️⭐️⭐️"
    }
  },
  devOps: {
    logo: <FontAwesomeIcon icon={faCodeBranch} size="2x" />,
    title: "DevOps",
    details: "DevOps are cool but I dont know what they are so idk should I write. Is git even a devop",
    tools: ["Git", "GitHub", "BitBucket", "Docker", "Sourcetree", "Invision"],
    languages: {}
  }
}