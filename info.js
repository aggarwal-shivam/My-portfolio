let info = {
  name: "Shivam Aggarwal",
  logo_name: "Shivam Aggarwal",
  flat_picture: require("./src/assets/pic.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "A final year M.Tech student at IIT Kanpur in the Computer Science and Engineering Department with an interest in Artificial Intelligence, High Performance Computing and Software Developement - and seeking opportunities related to the same.<br><br>Currently I am working on the topic 'Performance prediction of MPI codes' for my thesis, under the supervision of Dr. Preeti Malakar at IIT Kanpur. Other than this I am exploring the area of Reinforcement Learning under the AI.",
  links: {
    linkedin: "https://www.linkedin.com/in/shivam-aggarwal-a02673140/",
    github: "https://github.com/aggarwal-shivam",
    resume:
      "https://github.com/aggarwal-shivam/aggarwal-shivam.github.io/blob/main/assets/resume.pdf"
  },
  education: [
    {
      name: "Indian Institute of Technology, Kanpur",
      place: "Kanpur, India",
      date: "Aug, 2020 - May, 2022",
      degree: "M.Tech in Computer Science",
      gpa: "9.43/10",
      description:
        "Currently pursuing my Master's in Computer Science, while specializing in the field of Artificial Intelligence and Machine Learning.",
      skills: [
        "Natural Language Processing",
        "Cryptography",
        "Parallel Computing",
        "Advanced Computer Architecture",
        ,
        "OS"
      ]
    },
    {
      name: "National Institute of Technology, Uttarakhand",
      place: "Srinagar, India",
      date: "July, 2016 - May, 2020",
      degree: "B.Tech in Computer Science and Engineering",
      gpa: "8.29/10.0",
      description:
        "Graduated from NIT Uttarakhand with a bachelors degree in Computer Science and Engineering.",
      skills: [
        "Machine Learning",
        "Neural Netwroks",
        "Computer Networks",
        "Operating Systems",
        "Database MAnagement Systems",
        "Data Structures and Algrorithms",
        "Software Engineering"
      ]
    }
  ],
  experience: [
    {
      name: "Indian Institute of Technology, Kanpur",
      place: "Kanpur, India",
      date: "Sep, 2020 - Present",
      position: "Teaching Assistant",
      description:
        "Working as a Teaching assistant in the course ESC101 at IIT Kanpur",
      skills: ["Programming", "C"]
    },
    {
      name: "Defense Research and Developement Organization DRDO",
      place: "New Delhi, India",
      date: "May, 2019 - Jun, 2019",
      position: "Research Intern",
      description:
        "Worked as a Research Intern, implementing various models for object detection including YOLO v3. Our team annotated a large dataset for the project and build the complete framework for target detection.",
      skills: ["Computer Vision", "Object Detection"]
    }
  ],
  skills: [
    {
      title: "Languages",
      info: [
        "Python",
        "C",
        "C++",
        "Shell scripting",
        "SQL"
      ],
      icon: "fa fa-code"
    },
    {
      title: "Data Frameworks",
      info: [
        "Numpy",
        "Pandas",
        "Seaborn",
        "Pytorch",
        "SKlearn",
      ],
      icon: "fa fa-cubes"
    },
    // {
    //   title: "databases",
    //   info: ["MySQL"],
    //   icon: "fa fa-database"
    // },
    {
      title: "Operating Systems & Tools",
      info: [
        // "MacOS",
        "Ubuntu",
        "Windows",
        "VS Code",
        "Github"
        // "Android",
        // "Agile",
        // "Scrum",
        // "JIRA",
        // "Heroku",
        // "Firebase",
        // "AWS S3"
      ],
      icon: "fas fa-tools"
    },
    // {
    //   title: "design",
    //   info: ["Illustrator", "XD", "Photoshop", "Final Cut Pro"],
    //   icon: "fa fa-pencil-square-o"
    // }
  ],
  portfolio: [
    {
      name: "Few-Shot NLI using MAML on Indian Languages",
      pictures: [
        {
          img: require("./src/assets/portfolio/suicide/nlp.jpg")
        },
      ],
      technologies: ["Artificial Intelligence", "NLP", "Pytorch"],
      category: "AI",
      date: "Mar, 2021 - May, 2021",
      github: "https://github.com/aggarwal-shivam/CS779-Research-Project",
      visit: "https://github.com/aggarwal-shivam/CS779-Research-Project",
      description:
        "This research project aims to implement the Natural Language Inference task for Indian Languages using the MAML. This project consisted two parts, first was the literature survey of the domain, and the second was the implementation of Research problem."
    },
    {
      name: "Directory based cache coherence",
      pictures: [
        {
          img: require("./src/assets/portfolio/post/logo.png")
        },
        
      ],
      technologies: [
        "Cache coherence",
        "Multithreading"
      ],
      category: "Systems",
      github: "https://github.com/aggarwal-shivam/Directory-based-cache-coherence",
      date: "Nov, 2020",
      visit: "https://post-client.herokuapp.com/",
      description:
        "This repository implements a Directory based cache coherence protocol."
    },
    {
      name: "MultiLevel Cache Simulator",
      pictures: [
        {
          img: require("./src/assets/portfolio/cache-sim/one.jpg")
        },
      ],
      technologies: ["Computer Architecture"],
      category: "Systems",
      date: "Sep 2020",
      github:
        "https://github.com/aggarwal-shivam/MultiLevel-cache-simulator",
      visit: "https://github.com/aggarwal-shivam/MultiLevel-cache-simulator",
      description:
        "This project implements a MultiLevel Cache simulator to simulate a two level cache model. L1 miss traces are generated for spec CPU files, and then these traces are passed through the simulator to simulate the behaviour of L2 and L3 cache "
    },
    {
      name: "Trace generation and analysis for Multi threaded programs",
      pictures: [
        {
          img: require("./src/assets/portfolio/noq/first.png")
        },
      ],
      technologies: ["PIN Tool", "Binary Instrumentation"],
      category: "Systems",
      date: "Oct, 2020",
      github: "https://github.com/aggarwal-shivam/Trace-generation-and-analysis-for-Multi-threaded-programs",
      visit: "https://github.com/aggarwal-shivam/Trace-generation-and-analysis-for-Multi-threaded-programs",
      description:
        "This repository makes use of PIN tool to generate the traces for Multi-threaded programs, and performs analysis of these traces on parameters like access distance and sharing profile."
    },
    
    
    // {
    //   name: "Sentiment Analyzer",
    //   pictures: [
    //     {
    //       img: require("./src/assets/portfolio/smit/one.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/smit/two.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/smit/three.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/smit/four.png")
    //     }
    //   ],
    //   technologies: ["LSTM", "Keras", "Angular", "Tweepy", "Heroku", "Python"],
    //   category: "Alogrithm",
    //   date: "Feb, 2018 - Apr  , 2018",
    //   github: "https://github.com/hrishikeshpaul/sih",
    //   visit: "https://angel.co/projects/1009777-sentiment-analysis",
    //   description:
    //     "Developing this for the final round of Smart India Hackathon 2018, the web application is a platform for showcasing the sentiment of the tweets of the people in the Telangana region in India on policy satisfaction, services and problem definitions. The minimal UI design consists of different bins, that have their respective tweets, all scraped from twitter. There is also a simple graphical representation denoting the sentiment of the tweets."
    // },
    // {
    //   name: "Clumpr",
    //   pictures: [
    //     {
    //       img: require("./src/assets/portfolio/clumpr/logo.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/clumpr/one.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/clumpr/two.png")
    //     }
    //   ],
    //   technologies: ["Node", "Angular", "Express", "MySQL", "Facebook API"],
    //   category: "Web App",
    //   github: "https://github.com/hrishikeshpaul/clumpr",
    //   date: "Sep, 2017 - Nov, 2017",
    //   visit: "https://github.com/hrishikeshpaul/clumpr",
    //   description:
    //     'Clumpr is an online social event planning assistant that - using information about similar events happening in similar locations around the same time, friends who frequently attend the same events, and mutual friends - helps users to collaborate, combine, and attend events together, effectively "clumping" people and activities in a way that makes intuitive sense.'
    // },
    // {
    //   name: "Nutricare",
    //   pictures: [
    //     {
    //       img: require("./src/assets/portfolio/nc/one.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/nc/two.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/nc/three.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/nc/four.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/nc/five.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/nc/six.png")
    //     }
    //   ],
    //   technologies: ["Node", "Angular", "Express", "MongDB", "Medical"],
    //   category: "Website",
    //   github: "https://github.com/hrishikeshpaul/clumpr",
    //   date: "May, 2017 - Aug, 2017",
    //   visit: "https://angel.co/projects/576300-nutricare",
    //   description:
    //     "Nutricare is a basic health website for users(patients) to input nutrient intake data and researchers to analyse the data with the help of graphs and tables. A researcher can conduct studies on N different subjects (patient) for a particular problem statement. Typically, a researcher will enter food item consumed by subjects over a period of time (Ex - 24hrs, or 1 week, or 1 month etc)."
    // }
  ],
  portfolio_design: [
    // {
    //   name: "Guituna",
    //   title: "Guituna - Mockup Design",
    //   pictures: [
    //     {
    //       img: require("./src/assets/designs/coursera1/MoodBoard.png"),
    //       title: "MoodBoard"
    //     },
    //     {
    //       img: require("./src/assets/designs/coursera1/Mockups 1.png"),
    //       title: "Mockups 1"
    //     },
    //     {
    //       img: require("./src/assets/designs/coursera1/Mockups 2.png"),
    //       title: "Mockups 2"
    //     },
    //     {
    //       img: require("./src/assets/designs/coursera1/App Elements.png"),
    //       title: "App Elements"
    //     }
    //   ],
    //   technologies: ["XD", "Illustrator"],
    //   category: "Visual Design",
    //   github: "",
    //   date: "May, 2020 - Jun, 2020",
    //   visit: "",
    //   description:
    //     "Guituna is a simple, lightweight and intuitive guitar tuner, that provides different modes of guitars based on your usage. You can either select a specific string to tune, or free tune your guitar based on the frequency shown on the meter. Guituna also provides a handful of different tunings to help explore various tuning paradigms. There is also an array of settings that can be configured to your liking based on the devices you're using. <br/><br/>The interface aims to highlight the use of a minimal design and providing just enough controls to make for a great tuner, while exposing various possibilities of guitarists to explore."
    // },
    // {
    //   name: "Pantree",
    //   title: "Pantree - Mockup Design",
    //   pictures: [
    //     {
    //       img: require("./src/assets/designs/pantree/MoodBoard.png"),
    //       title: "Moodboard"
    //     },
    //     {
    //       img: require("./src/assets/designs/pantree/1.png"),
    //       title: "Mockups 1"
    //     },
    //     {
    //       img: require("./src/assets/designs/pantree/2.png"),
    //       title: "Mockups 2"
    //     }
    //   ],
    //   technologies: ["XD", "Illustrator"],
    //   category: "Visual Design",
    //   github: "",
    //   date: "May, 2020 - July, 2020",
    //   visit: "",
    //   description:
    //     "Pantree is a recipiece finding and recommending application. It is often the case that you have run to your closest grocery store just to pick up one item that is missing in your kitchen. Pantree keeps a track of all your ingredients, and suggests recipes based on your meal preferences and past recipes. <br/><br/> The goal of the interface is to keep it similar to various recipe/food apps to reduce the learning required by the user, but also provide a smooth interface for users to seemlessly browse through recipes and ingredients."
    // },
    {
      name: "Bunder",
      title: "Bunder - MVP Proposal",
      pictures: [
        {
          img: require("./src/assets/designs/bunder/Moodboard.png"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 1.png"),
          title: "Mockup 1"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 2.png"),
          title: "Mockup 2"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 3.png"),
          title: "Mockup 3"
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 1.png"),
          title: "Market Research 1"
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 2.png"),
          title: "Market Research 2"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Bunder is an intuitive web platform for micro-communities to share sensitive data with privacy within the community and allow engagement amongst them. Our aim is two-fold - Co-existing and Collaboration. The former is executed by providing a platform for communities that are geographically positioned in the same proximity (Housing societies, Dorms, Apartment Complexes) to have and share data (exact apartment addresses, phone number, apartment housing rules, individuals tested positive for COVID-19) in an exclusive platform. The latter is to give these people in the community the ability to carry out a task you are physically or remotely unable to do; with dignity and ease."
    }
  ],
  // recommendations: [
  //   {
  //     title:
  //       "In his internship, Hrishikesh has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
  //     author: "Ushanas Shastri",
  //     position: "CTO",
  //     company: "Viteos Capital Market Services",
  //     location: "Mumbai"
  //   },
  //   {
  //     title:
  //       "I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",
  //     author: "Anil Dukkipatty",
  //     position: "CTO",
  //     company: "Elemential Labs",
  //     location: "Mumbai"
  //   },
  //   {
  //     title:
  //       "He has gained great knowledge and experience of SDE, and has learned ot develop the application keeping in mind the client's perpective and also making it creative.",
  //     author: "Chintan Shah",
  //     position: "Director",
  //     company: "Hridayam Soft Solution",
  //     location: "Mumbai"
  //   },
  //   {
  //     title:
  //       "During the course of his employment we have found him to be a self-started who was motivated, duty bound and a highly commited team player.",
  //     author: "Mrinal Pai",
  //     position: "Co-Founder & Director",
  //     company: "Skylark Drones",
  //     location: "Bangalore"
  //   }
  // ]
};

export default info;
