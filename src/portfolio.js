
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
    url: "http://shwetkhatri.com/",
  },
};

const greeting = {
  title: "Shwet Khatri",
  logo_name: "ShwetKhatri",
  nickname: "shwetkhatri",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  portfolio_repository: "https://github.com/ShwetKhatri2001/Shwet-Portfolio",
};

const socialMediaLinks = [
  
  // github: "https://github.com/ShwetKhatri2001",
  // linkedin: "https://www.linkedin.com/in/shwet-khatri-4ab216196/",
  // gmail: "shwetkhatri2001@gmail.com",

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
    softwareSkills: [
     {
      title: "Full Stack Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Creating application backend in Node & Express",
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
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
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
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    }]
  }]
};

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/Shwetkhatri",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "The LNM Institute of Information Technology, Jaipur",
      subtitle: "M.Tech in Computer Science and Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "LNMIIT Jaipur",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
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
    }
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
              title: "Full Stack Web Developer - Intern",
              company: "WedMePlz",
              company_url: "https://wedmeplz.com/",
              logo_path: "delhivery_logo.png",
              duration: "May 2021 - Sept 2021",
              location: "Remote",
              description:
                  "Worked as a full stack web developer on wedmeplz official website managing their business. Created frontend webpages using Nextjs, Styled- components and Material-ui. Worked on backend apis using Graphql and AWS services.",
              color: "#ee3c26",
            },
            {
              title: "Product Web Development Intern",
              company: "Kathanik PVT. LTD.",
              company_url:
                  "hhttps://kathanik.in/",
              logo_path: "intel_logo.jpg",
              duration: "Feb 2021 - Mar 2021",
              location: "Remote",
              description:
                  "Implemented required figma design on their official website showing their business idea and introducingtheir android app. Worked mainly on frontend in Nextjs ,SCSS, Bootstrap.",
              color: "#0071C5",
            },
          ],
      },
     {
      title: "Work",
      experiences: [
        {
          title: "Open Source Contributor - LGMSOC",
          company: "LetsGrowMore",
          company_url: "http://letsgrowmore.in/",
          logo_path: "legato_logo.png",
          duration: "June 2021 - Aug 2021",
          location: "Remote",
          description:
            "One of the Top contributors in LetsGrowMore SummerOfCode contributing to open source projects provided by LetsGrowMoreCommunity ",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Internshala Student Partner",
          company: "Internshala",
          company_url: "https://www.internshala.com/",
          logo_path: "google_logo.png",
          duration: "Feb 2021 - May 2021",
          location: "Remote",
          description:
            "Ranked 80th / 22,827 as a Campus Ambassador for promoting their business idea and services using social media and online meet",
          color: "#4285F4",
        },
        {
          title: "Campus Ambassador",
          company: "LetsUpgrade",
          company_url: "https://letsupgrade.in/",
          logo_path: "microsoft_logo.png",
          duration: "Nov 2019 - Dec 2020",
          location: "Hyderabad, Telangana",
          description:
            "Campus ambassador writing tech blogs , organising workshops and working on their personal projects.",
          color: "#D83B01",
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

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on many social media platforms. Feel free to message me, I will reply within 24 hours. I can help you with  React, Node and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
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
  publicationsHeader,
  contactPageData,
};