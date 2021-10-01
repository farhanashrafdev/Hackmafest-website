// Importing all sponsors logos from Assets
//import taskade from "./Assets/sponsorsLogos/taskade.png";
import replit from "./Assets/sponsorsLogos/replit.png";
import dev from "./Assets/sponsorsLogos/dev-black.png";
import BU from "./Assets/sponsorsLogos/BU.png";
import hcb from "./Assets/sponsorsLogos/hackclubbank.png";
import interviewC from "./Assets/sponsorsLogos/interview-cake.jpg";
import echoAR from "./Assets/sponsorsLogos/echoAR.png";
//import cfc from "./Assets/sponsorsLogos/cfc.png";
//import pass from "./Assets/sponsorsLogos/1pass.png";
//import glimpse from "./Assets/sponsorsLogos/glimpse.png";
import qoom from "./Assets/sponsorsLogos/qoom.svg";
//import sublime from "./Assets/sponsorsLogos/sublime.png";
import egg from "./Assets/sponsorsLogos/egg.png";
import DO from "./Assets/sponsorsLogos/DO.png";
//import ll from "./Assets/sponsorsLogos/ll.png";
//import ACF from "./Assets/sponsorsLogos/ACF.png";

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets
import farhan from "./Assets/teami/farhan.jpg";
//import farhan from "./favicon_io/favicon.ico";
import sidra from "./Assets/teami/Sidra.png";
import usama from "./Assets/teami/usama.png";
import usman from "./Assets/teami/usman.png";
import asim from "./Assets/teami/asim.png";
import taskeen from "./Assets/teami/taskeen.png";
import tauqeer from "./Assets/teami/tauqeer.png";
import sameer from "./Assets/teami/sameer.png";
import awais from "./Assets/teami/awais.png"
import hamid from "./Assets/teami/hamid.png";
import azeem from "./Assets/teami/azeem.jpeg";
import haris from "./Assets/sponsers/harisali.jpg";
import php from "./Assets/sessions/php.jpg";



/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */
import hackmafest from "./Assets/teami/hackmafest.png";
import boy from "./Assets/boy.png";

const TOP_SECTION = {
  TITLE: "HackmaFest",
  Typed_effect: ["Hack For Community", "Hack For Diversity","Hack For Inclusion","Win Awesome Prizes","Week long of Learning","Week long of Creation"],
  SHORT_DESCRIPTION:
    "Join us on 25th October 2021 with over 500 students from across the world for a weeklong of creation, innovation, & fun. 5 days are dedicated to learning and 36 hours For hacking.",
  IMG_SRC: boy,
  DISCORD_LINK: "https://discord.hackmafest.tech/",
  JUDGES_FORM_LINK:
    "http://speakerform.hackmafest.tech/",
  HACKERS_REGISTRATION_FORM_LINK:
    "http://hackerform.hackmafest.tech/"
};

const SOCIALS = {
  instagram: "https://instagram.hackmafest.tech",
  discord: "https://discord.hackmafest.tech",
  linkedin: "https://linkedin.hackmafest.tech/",
  twitter: "https://twitter.hackmafest.tech/",
  devpost: "https://devpost.hackmafest.tech/",
  email: "mailto:hi@hackmafest.tech",
  mail: "hi@hackmafest.tech"
};

const MIDDLE_SECTION = {
  TITLE: "What is Hackmafest?",
  LONG_DESCRIPTION:
    "Hackmafest is a weeklong festival to welcome beginners hacker to hackers communities and hackathons, there is 5-day in-person hackathon followed by a 36-hour long digital hackathon will be held on October 29th & 30th, We call for hackers, artists, coders, designers, tech evangelists, creatives, and developers from all disciplines to take part to win awesome prizes and collaborate with other developers. Throughout the weekend hackers at Hackmafest will have unique opportunities to learn from each other trying hands in new technologies, on the most latest equipment provided by the organizers during the hackathon We are determined to have an all-inclusive and diverse group of students attending.",
  LOGO_EFFECT: true,
  LOGO: hackmafest
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: "https://volunteerform.hackmafest.tech/"
  },
  JOIN_TEAM: {
    required: true,
    src: "http://speakerform.hackmafest.tech/"
  },
  Privacy_policy: {
    required: true,
    src: "https://privacypolicy.hackmafest.tech/"
  },
  Terms_of_use: {
    required: true,
    src: "https://tom.hackmafest.tech"
  },
  Code_of_conduct: {
    required: true,
    src: "https://hackclub.com/conduct"
  }
};

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i class="first fas fa-4x fa-trophy"></i>,
      type: "Prizes Detail are Coming soon",
      content:
        "There will be some amazing prizes dont worry :)"
     }
  //  {
  //   icon: <i class="first fas fa-4x fa-trophy"></i>,
  //   type: "overall First",
  //   content:
  //     "First Overall prize will be given to a project that outstands all other submissions"
  //  }
,
  //   {
  //     icon: <i class=" second fas fa-4x fa-medal"></i>,
  //     type: "overall Second",
  //     content:
  //       "Second Overall prize will be given to the second best project of the hackathon"
  //   },
  //   {
  //     icon: <i class=" third fas fa-4x fa-skiing-nordic"></i>,
  //     type: "Third Second",
  //     content:
  //       "Best third overall project of the hackathon will win some awesome prizes"
  //   }
  // ],
  // [
  //   //Array 2
  //   {
  //     icon: <i class="fab fourth fa-3x fa-wpbeginner"></i>,
  //     type: "Best Solo",
  //     content:
  //       "You project will qualify for this prize if you participate alone without a team though we encourage you to participate with a team"
  //   },
  //   {
  //     icon: <i class="first fas fa-4x fa-trophy"></i>,
  //     type: " Best Beginner",
  //     content: "Your project will qualify for this category if hackmafest is your first hackathon."
  //   },
  //   {
  //     icon: <i class=" fifth fa-3x fas fa-book-open"></i>,
  //     type: "Best UI/UX",
  //     content: "Project with most creative designs will be UI/UX track"
  //   }
  // ],
  // [
  //   //Array 3
  //   {
  //     icon: <i class="fas fa-4x sixth fa-male"></i>,
  //     type: "Best Web App with Qoom",
  //     content: "Must use qoom in your project to win this category"
  //   },
  //   {
  //     icon: <i class="fas fa-user-friends seventh fa-3x "></i>,
  //     type: "More prizes",
  //     content: "More prizes will be revealed later"
  //   }
  // ]
    ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: "Farhan Ashraf",
      role: "Lead Organizer",
      github: "https://github.com/mriceflame",
      linkedin: "https://www.linkedin.com/in/s4a/",
      img: farhan
    },
    {
      Name: "Haris Ali",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: haris
    },
    {
      Name: "Sameer",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: sameer
    }
  ],
  [
    //Array 2
    {
      Name: "Hamid Azeem",
      role: "Graphics and Media Team head",
      github: "",
      linkedin: "",
      img: hamid
    },
    {
      Name: "Sidra",
      role: "Head Promotions",
      github: "",
      linkedin: "",
      img: sidra
    },
    {
      Name: "Tauqeer",
      role: "Event Head",
      github: "",
      linkedin: "",
      img: tauqeer
    }
  ],
  [
    //Array 3
    {
      Name: "Usama Rafay",
      role: "Technical Support Team head",
      github: "",
      linkedin: "",
      img: usama
    },
    {
      Name: "Asim Nawaz",
      role: "Resource Team head",
      github: "",
      linkedin: "",
      img: asim
    },
    {
      Name: "Taskeen Fatima",
      role: "Community Manager",
      github: "",
      linkedin: "",
      img: taskeen
    }

  ],
  [
    {
      Name: "Azeem Farooqi",
      role: "Content Writers Team head",
      github: "",
      linkedin: "",
      img: azeem
    },
    {
      Name: "Hamid Azeem",
      role: "Graphics and Media Team head",
      github: "",
      linkedin: "",
      img: hamid
    }
  ],
];

const Session = [
  [
    {
      title: "Workshop Name and schedule coming soon",
      speaker: "Speaker Name",
      img: php,
      role: "Intro",
      date: "Date ",
      time: "Time",
      feature1: "Feature 1",
      feature2: "Feature 2",
      feature3: "Feature 3",
    },

    // {
    //   title: "Advanced Web Dev",
    //   speaker: "Haris Ali",
    //   img: php,
    //   role: "Software Engineer",
    //   date: "21/04/2021",
    //   time: "8:30 PM",
    //   feature1: "KickStart your programming",
    //   feature2: "Intro to Web",
    //   feature3: "Get to Know React",
    // },
    

    {
      title: "Advanced Web Dev",
      speaker: "Haris Ali",
      img: php,
      role: "Software Engineer",
      date: "21/04/2021",
      time: "8:30 PM",
      feature1: "KickStart your programming",
      feature2: "Intro to Web",
      feature3: "Get to Know React",
      github: "www.github/HarisAli-git.com"
    },
    // {
    //   title: "Advanced Web Dev",
    //   speaker: "Haris Ali",
    //   img: php,
    //   role: "Software Engineer",
    //   date: "21/04/2021",
    //   time: "8:30 PM",
    //   feature1: "KickStart your programming",
    //   feature2: "Intro to Web",
    //   feature3: "Get to Know React",
    // },

  ],
  // [
  //   {
  //     title: "Building Tech Careers through the Web Dev",
  //     speaker: "Farhan Ashraf",
  //     img: php,
  //     role: "Chair Person, IEEE BULC",
  //     date: "21/04/2021",
  //     time: "8:30 PM",
  //     feature1: "KickStart your programming",
  //     feature2: "Booast You Portfolio",
  //     feature3: "Get to Know your Php Laraval",
  //   },

  //   {
  //     title: "Advanced Web Dev",
  //     speaker: "Haris Ali",
  //     img: php,
  //     role: "Software Engineer",
  //     date: "21/04/2021",
  //     time: "8:30 PM",
  //     feature1: "KickStart your programming",
  //     feature2: "Intro to Web",
  //     feature3: "Get to Know React",
  //   },
    
  //   {
  //     title: "Advanced Web Dev",
  //     speaker: "Haris Ali",
  //     img: php,
  //     role: "Software Engineer",
  //     date: "21/04/2021",
  //     time: "8:30 PM",
  //     feature1: "KickStart your programming",
  //     feature2: "Intro to Web",
  //     feature3: "Get to Know React",
  //   },
  //],
];

const SpeakersInfo = [
  [
    //Array 1
    {
      Name: "Farhan Ashraf",
      role: "Lead Organizer",
      github: "https://github.com/mriceflame",
      linkedin: "https://www.linkedin.com/in/s4a/",
      img: farhan
    },
    {
      Name: "Haris Ali",
      role: "Co-Lead",
      github: "https://github.com/HarisAli-git",
      linkedin: "https://www.linkedin.com/in/harisa73",
      img: haris
    },
    {
      Name: "Awais",
      role: "Organizer",
      github: "https://github.com/HarisAli-git",
      linkedin: "https://www.linkedin.com/in/harisa73",
      img: awais
    },
    {
      Name: "Usman Hamid",
      role: "Organizer",
      github: "https://github.com/HarisAli-git",
      linkedin: "https://www.linkedin.com/in/harisa73",
      img: usman
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

// const sponsorLogos = [
//  [{src: qoom, {src: Replit}, {src: egg}], //Array 1
//   [{src: BU}, {src: hcb}, {src: dev}], //Array 2
// //  [{src: interviewC}, {src: pass}, {src: glimpse}], //Array 3
//  // [{src: egg}, {src: ll}, {src: ACF}] //Array 4
// ];

const sponsorLogos = [
 // [{src: qoom}, {src: Replit}, {src: egg}]
   [{src: qoom}, {src: replit}, {src: egg}], //Array 1
  [{src: BU}, {src: hcb}, {src: dev}], //Array 2
 //Array 3
  [{src: interviewC}, {src: DO}, {src: echoAR}] //Array 4
  //[{src: }, {src: cfc}, {src: echoAR}] //Array 4
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions  = [
  [
    [
      {
        label: "What is a hackathon?",
        content:
        'Hackathons are community events, where you get to interact with students from all around the world as well as forming teams to create future tech'      },
      {
        label: "I have no idea what coding is?",
        content: "Thats why you must attend our event, we will guide you through everything with awesome workshops,tech talk and many more"
      },
      {
        label: "Do i need to pay any money?",
        content: "Absolutely not ! our event is free and open for all , if incase anyone asks for money you can dm any of our moderator"
      },
      {
        label: "I dont have a team to participate?",
        content: "You dont need one, prior to our event in discord you will meet many hackers exactly like you and join to form a team, if not you can participate alone and fun fact we are running special best solo prize."
      }
    ],
    [
      {
        label: "How to participate?",
        content: "All you need is to fill our form above and join Discord, we will guide you through everything there"
      },
      {
        label: "I have more doubts?",
        content: "Reach us directly at (hi@hackmafest.tech) we would happy to help you."
      }
      ,
      {
        label: "Can i volunteer?",
        content: "Yes we are looking for volunteers, fill the form (in footer section) we would be glad to have you."
      }
      ,
      {
        label: "What are the conduct of guidlines?",
        content: "We strongly follow the HackClub code of conduct, Our team members will enforce this code throughout the event. To See the code of conduct please visit the Website Footer"
      }
    ]
  ],

];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Session,
  Prizeinfo,
  sponsorLogos,
  SpeakersInfo,
  TeamInfo,
  frequentlyAskedQuestions
};
