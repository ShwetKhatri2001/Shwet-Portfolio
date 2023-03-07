const settings = {
  isSplash: false,
};

const seo = {
  title: "Shwet's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Shwet Khatri Portfolio",
    type: "website",
    url: "https://shwetkhatri.netlify.app",
  },
};

const greeting = {
  title: "Shwet Khatri",
  logo_name: "ShwetKhatri",
  nickname: "Web & Open Source Developer",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1qO0gZNqz-dE8LElPdilOH8UG8T0N2Irw/view",
  portfolio_repository: "https://github.com/ShwetKhatri2001/Shwet-Portfolio",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/ShwetKhatri2001",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shwet-khatri-4ab216196/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:shwetkhatri2001@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive front end using React-Redux, NextJs",
        "⚡Creating 3D Photorealistic experiences in AR using ThreeJS",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "logos:nextjs-icon",
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ThreeJS",
          fontAwesomeClassname: "logos:threejs",
        },
        {
          skillName: "Solidity",
          fontAwesomeClassname: "logos:solidity",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Developing server and REST APIs in Firebase, Node & Express",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
      ],
      softwareSkills: [
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos:firebase",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "logos:google-cloud",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "logos:kubernetes",
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "logos:adobe-xd",
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "logos:figma",
        },
        {
          skillName: "Blender",
          fontAwesomeClassname: "logos:blender",
        },
      ],
    },
  ],
};

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "fa-brands:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/Shwetkhatri",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#FFA116",
      },
      profileLink: "https://leetcode.com/ShwetKhatri/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "The LNM Institute of Information Technology, Jaipur",
      subtitle: "B.Tech + M.Tech in Computer Science and Engineering",
      logo_path: "lnmiit_logo.png",
      alt_name: "LNMIIT Jaipur",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I have studied software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Full Stack Development.",
      ],
      website_link: "http://lnmiit.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "HTML, CSS, and Javascript for Web Developers",
      subtitle: "- Yaakov Chaikin",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/KNUMY3S27HR3",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Algorithmic Toolbox",
      subtitle: "- Alexander S. Kulikov",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/URH4NRKFMT27",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Data Structures",
      subtitle: "- Alexander S. Kulikov",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/PHPQANFWCUW3",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
  ],
};

const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with some evolving companies and startups as Web Developer. I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Developer Intern",
          company: "CloudBloq",
          company_url: "https://cloudbloq.io/",
          logo_path: "delhivery_logo.png",
          duration: "Feb 2021 - Sept 2021",
          location: "Remote",
          description:
            "Worked on their next service - Innerloop ( media management portal ). Added new features such as Content management, Story creation from content, User dashboard etc using ReactJS, SCSS, NodeJS and Azure services. ",
          color: "#ee3c26",
        },
        {
          title: "Full Stack Web Developer Intern",
          company: "WedMePlz",
          company_url: "https://wedmeplz.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2021 - Nov 2021",
          location: "Remote",
          description:
            "Worked as a full stack web developer on wedmeplz official website managing their business. Created frontend webpages using Nextjs, Styled- components and Material-ui. Worked on backend apis using Graphql and AWS services.",
          color: "#ee3c26",
        },
        {
          title: "Product Web Development Intern",
          company: "Kathanik PVT. LTD.",
          company_url: "https://kathanik.in/",
          logo_path: "intel_logo.jpg",
          duration: "Feb 2021 - Mar 2021",
          location: "Remote",
          description:
            "Implemented required figma design on their official website showing their business idea and introducingtheir android app. Worked mainly on frontend in Nextjs ,SCSS, Bootstrap.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Open source Participations",
      experiences: [
        {
          title: "LFX Mentee Summer'22",
          company: "Linux Foundation",
          company_url: "https://lfx.linuxfoundation.org/tools/mentorship/",
          logo_path: "legato_logo.png",
          duration: "July 2021 - Aug 2021",
          location: "Remote",
          description:
            "I got selected as one of the 27 open-source contributors worldwide contributing to CNCF projects during Summer'22 via LFX Mentorship Program",
          color: "#0879bf",
        },
        {
          title: "Open Source Contributor - LGMSOC",
          company: "LetsGrowMore",
          company_url: "https://letsgrowmore.in/soc/",
          logo_path: "legato_logo.png",
          duration: "July 2021 - Aug 2021",
          location: "Remote",
          description:
            "Ranked 3rd / 4000  contributors in LetsGrowMore SummerOfCode contributing to open source projects provided by LetsGrowMoreCommunity ",
          color: "#0879bf",
        },
        {
          title:
            "Open Source Contributor - Devincept 30-Days Contribution Program",
          company: "Devincept",
          company_url: "https://dcp.devincept.com/DCP21/top-performers.html",
          logo_path: "legato_logo.png",
          duration: "June 2021 - Aug 2021",
          location: "Remote",
          description:
            "Ranked 4th / 2000 contributurs contributing to open source project provided by Devincept in full stack development",
          color: "#0879bf",
        },
        {
          title: "Open Source Contributor - Winter of Code",
          company: "GDSC NSEC",
          company_url: "https://winterofcode.com/",
          logo_path: "legato_logo.png",
          duration: "Nov 2021 - Jan 2022",
          location: "Remote",
          description:
            "Added a like and comment feature on a open source coding learning platform - Codingspace",
          color: "#0879bf",
        },
        {
          title: "Open Source Contributor - Winter of Code 2.0",
          company: "GDSC IIIT Kalyani",
          company_url: "https://gdsc-woc.tech/",
          logo_path: "legato_logo.png",
          duration: "Oct 2021 - Jan 2022",
          location: "Remote",
          description:
            "Contributed to a deep learning based open source organization - AutoDL",
          color: "#0879bf",
        },
      ],
    },
  ],
};

const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Web Development projects and deploy them using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "shwetphoto.png",
    description:
      "I am available on many social media platforms. Feel free to message me, I will reply within 24 hours. I can help you with  React, Node and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I write blogs about my learnings, tips and eperiences on different tech platforms and help beginners in their development journey.",
    link: "https://medium.com/@shwetkhatri",
    avatar_image_path: "choice.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "A/1 Rajapark Duplex, Padra, Vadodara, Gujarat - 391440",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/CXJC5FM8XsEhL1856",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8905355274",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
