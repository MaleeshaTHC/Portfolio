// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.png"

//profile picture
import profilePic from './images/CM.png'

//import skill icons
import javaIcon from "./images/java.png"
import pythonIcon from "./images/python.png"
import appIcon from "./images/react.png"
import hcjIcon from "./images/hcj.png"
import pyLogoIcon from "./images/python logo.png"
import JavaLogoIcon from "./images/java logo.png"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Maleesha",
  headerTagline: [
    //Line 1 For Header
    "Building UI/UX",
    //Line 2 For Header
    "designs, graphics,",
    //Line 3 For Header
    "and mobile applications",
  ],
  //   Header Paragraph
  headerParagraph:
    "Dedicated and hardworking with internal drive to deliver.",

  //Contacts
  contactNumber : "          +9470 514 9750",
  contactEmail: "     thcmaleesha@gmail.com",
  contactEmailoffice: "     96755@fhss.sjp.ac.lk",
  address : "     No.170/D/1/B, Viharahena, Deniyaya, Matara, Sri Lanka",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Python Project", //Project Title - Add Your Project Title Here
      para:
        "School Management System. Developed by using Python + Access", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        pythonIcon,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/THCMaleesha/First-Project-Python",
    },
    {
      title: "Java Project", //Project Title - Add Your Project Title Here
      para:
        "Customer Management System. Developed by using Java + MySQL", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        javaIcon,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/THCMaleesha/Final-Project-Java",
    },
    {
      title: "React-Native Project", //Project Title - Add Your Project Title Here
      para:
        "Nursery Education Application. Developed by using ReactNative + Firebase + CSS", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        appIcon,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/THCMaleesha/Nursery-Education-App",
    },
    {
      title: "Web Development Project", //Project Title - Add Your Project Title Here
      para:
        "Nursery Website. Developed by using HTML + CSS +JavaScript", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        hcjIcon,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/THCMaleesha/First-Web-Development",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Hello, my name is Chathumini Maleesha, I'm studying in BSc(Hons) in IT at University of Sri Jayewardenepura.",
  aboutParaTwo:
    "As an undergraduate Love to spend my time on doing academics and exploring about the knowledge. When I'm not studying, listen varieties of musics in the world as a mind release.",
  aboutParaThree:
    "I am doing design works now as a hobby. Doing some codings on web developing. And also I like to move to a grate destination of my life within 5 years ahead.",
  aboutImage:
    profilePic,
  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "The standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      img: cssIcon,
      para:
        "A style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
    },
    {
      img: pyLogoIcon,
      para:
        "A powerful general-purpose programming language. It is used in web development, data science, creating software prototypes, and so on.",
    },
    {
      img: JavaLogoIcon,
      para:
        "A high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
    },
    {
      img: jsIcon,
      para:
        "A programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    },
    {
      img: reactIcon,
      para:
        "A free and open-source front-end JavaScript library for building user interfaces based on UI components.",
    },
    {
      img: designIcon,
      para:
        "The profession and academic discipline whose activity consists in projecting visual communications intended to transmit specific messages to social groups, with specific objectives.",
    },
    {
      img: codeIcon,
      para:
        "The process of transforming ideas, solutions, and instructions into the language that the computer can understand.",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Experience",
  promotionPara1:
    "Information Communication Technology Technician (ICTT) - (2019 Jul- 2020 Feb)",
  promotionPara2:
    "Kotapola Pradeshiya Sabhawa, Deniyaya",
  // End Promotion Section -----------------


  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/MaleeshaTHC" },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/chathumini-maleesha-39a016215/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
