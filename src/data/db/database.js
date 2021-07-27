import Mock from "../mock";

const database = {
  information: {
    name: 'Brandon Clarke-Moss',
    aboutContent: "I am a gameplay programmer and designer. I provide clean code and bring fresh ideas to the table. In addition to games, I also work on mobile appplications.",
    age: 24,
    phone: '470-495-1995',
    email: 'brandonclarkemoss@gmail.com',
    socialLinks: {
      twitter: 'https://twitter.com/brandon_a_moss',
      linkedin: 'https://www.linkedin.com/in/brandonmosstech/'
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/brandon_moss_resume.pdf'
  },
  services: [
    {
      title: "Game Development",
      icon: 'code',
      details: "I have experience creting games with both Unity/C# and the Unreal Engine/C++ as well as a BS in Computer Game Design and Development."
    },
    {
      title: "Mobile Application Development",
      icon: 'mobile',
      details: "In addition to game development, I have experience working on native android and ios applications, utilizing kotlin, java, and swift."
    }
  ],
  skills: [
    {
      title: "Unity/C#",
      value: 95
    },
    {
      title: "Unreal/C++",
      value: 90
    },
    {
      title: "Android Development with Kotlin & Java",
      value: 70
    },
    {
      title: "iOS Development with Swift",
      value: 65
    }
  ],
  portfolio: [
    {
      id: 1,
      title: "Power Play",
      subtitle: "A game focused on teaching elementary school age kids to be safe around electricity played by millions of children across the southeast.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://powerplay.southernco.com/'
    },
    {
      id: 2,
      title: "Gunnomancer",
      subtitle: "A VR game in which you must fight waves of enemies using magic in one hand and a gun in the other. Made in 48 hours for a game jam.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://www.youtube.com/watch?v=gm4MmHQUYWU'
    },
    {
      id: 3,
      title: "Neon Arcade",
      subtitle: "A fully-functional online multiplayer first-person shooter in VR as a year-long capstone project.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://www.youtube.com/watch?v=J3HrnELxUl4'
    },
    {
      id: 4,
      title: "UMG eSports",
      subtitle: "An application for UMG Gaming's eSports events with over 1,000 installs.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: 'https://play.google.com/store/apps/details?id=com.umggaming.stationvault&hl=en_US'
    },
    {
      id: 5,
      title: "Ragin' Ronnie",
      subtitle: "A mobile game in which your character blinds cars going the opposite direction. Made in 48 hours for a game jam.",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "November 2020 - Present",
        position: "Unity Developer",
        company: "Meta Gaming Studios",
        details: "Created casino games in Unity from scratch using the C# programming language - Implemented a robust WebGL build environment and adhered to Unity WebGL requirements and quirks - Helped kickstart AGILE workflow in a development pipeline that lacked any previous defined structure"
      },
      {
        id: 2,
        year: "July 2017 - March 2020",
        position: "iOS/Android Developer (Contractor until Oct. 2019)",
        company: "Materialize",
        details: "Utilized Java and Kotlin to develop native Android and iOS applications used by hundreds of consumers nation-wide - Implemented Android/iOS-specific APIs such as Google Play Services, Android/iOS camera dependencies, and native UI systems - Met with clients to ensure stable large-scale releases"
      },
      {
        id: 3,
        year: "Aug. 2019 - Oct. 2019",
        position: "Software Engineer/Unity Developer",
        company: "ViZZ Inc.",
        details: "Created 3D visualization software with C# and Unity that allows users to digitally mirror projects and environments from a multitude of sources and programs - Coordinated with QA and UX departments to ensure satisfactory deliverables - Practiced agile development through sprints, stand-up meetings, and a proper documentation workflow"
      },
      { id: 4,
        year: "May 2019 - July 2019",
        position: "Technology Innovation Intern",
        company: "Southern Company",
        details: "Developed an educational electrical safety video game that has been presented to millions of elementary school students across Georgia, Alabama, and Mississippi - Operated over 30 different devices for development and showcase purposes - Presented projects to large audiences during demos held in Georgia and Mississippi"
      }, 
      { id: 5,
        year: "May 2018 - October 2018",
        position: "Game Networking Engineer Intern (May 2018 – July 2018)/Contractor (July 2018 – October 2018)",
        company: "PacketZoom, Inc",
        details: "Built a complete online multiplayer game in Unity for Android and iOS to field-test PacketZoom’s Unity networking plugin and protocol - Interfaced with network engineers to ensure new functionalities were gradually tested and implemented in a working example"
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2015 - 2019",
        graduation: "Bachelor of Science",
        university: "Kennesaw State University",
        details: "Researched augmented reality, virtual reality, and motion capture to explore contemporary systems - SU Game Design and Development Club President and Event Coordinator - planned large-scale events, led meetings, and taught game design fundamentals - KSU Residence Hall Association President - created a sense of community on campus through planning multi-campus events, leading town hall meetings, and acted as a liaison between the student body and KSU faculty" 
      }
    ]
  },
  contactInfo: {
    phoneNumber: ['470-49-1995'],
    emailAddress: ['brandonclarkemoss@gmail.com']
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolio").reply(config => {
  const response = database.portfolio;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});