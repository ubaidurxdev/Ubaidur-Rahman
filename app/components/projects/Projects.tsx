import React from "react";
import careerCrafter from "/careerCrafter.png";
import recipe from "/recipe.png";
import jobent from "/jobent.png";
import devdit from "/devdit.png";
const Projects = () => {
  const allProjects = [
    {
      id: 1,
      img: careerCrafter,
      name: "Career Crafter",
      teamProject: true,
      description:
        "Career Crafter is an AI-powered networking platform that helps users find jobs, build resumes, create CVs, enhance skills, and connect with professionals through smart, personalized recommendations.",
      features: [
        "Job seekers can create their resumes and CVs.",
        "Job seekers can analyze their skills through our Skill Gap feature.",
        "If job seekers already have a resume, they can check whether it is ATS-friendly.",
        "Job seekers can improve their interview skills through our Mock Interview feature.",
        "Job seekers receive job posts that match their skills and can apply directly.",
        "Users can chat live, make video calls, and voice calls with their connected contacts.",
        "Users are guided through our AI Chatbot feature.",
        "Users receive personalized guidance from our AI Mentor on how to improve their desired skills.",
        "Users can access more AI features by purchasing our Premium Plan.",
        "Users can share job posts, and the shared recipients can apply for those jobs.",
        "Users can save job posts and apply later when ready.",
      ],
      techStack: [
        "React JS",
        "Tailwind CSS",
        "React Router",
        "Redux Toolkit",
        "Stripe",
        "JWT",
        "Express JS",
        "Node JS",
        "MongoDB",
        "Socket.io",
        "ShadCN ui",
        "Axios JS",
        "Firebase",
      ],
      status : [
        {
            id:1,
            name : "Timeline",
            duration : '2 months'
        },
        {
            id:2,
            name : "Role",
            duration : 'Full Stack'
        },
        {
            id:3,
            name : "Team",
            duration : '5 members'
        },
        {
            id:4,
            name : "Status",
            duration : 'Completed'
        },
      ],
      liveLink: "https://careercrafter5.web.app",
      clientLink: "https://github.com/moshiurrahmandeap11/careerCrafter-client",
      serverLink:
        "https://github.com/moshiurrahmandeap11/careerCrafter-ServerV2",
    },
  ];
  return <div></div>;
};

export default Projects;
