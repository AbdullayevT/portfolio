import CoreDB from "@/assets/work/CoreDB2.png";
import expense from "@/assets/work/expense.jpg";
import inventory from "@/assets/work/inventory.png";
import finx from "@/assets/work/finx.jpg";
import tradeFinance from "@/assets/work/tradefinance.jpg";
import azepadel from "@/assets/work/azepadel.jpg";
import {
  faCodepen,
  faCss3Alt,
  faHtml5,
  faJs,
  faPython,
  faReact,
  faSass,
  faTailwindCss,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export const aboutDetailInfo = [
  {
    title: "planningAndAnalysis",
    content: "planningAndAnalysisDesc",
    top: "!top-0",
  },
  {
    title: "development",
    content: "developmentDesc",
    top: "!top-0",
  },
  {
    title: "maintenance",
    content: "maintenanceDesc",
    top: "!top-0",
  },
];

export const workDetails = [
  {
    title: "azepadelTitle",
    content: "azepadelDesc",
    image: azepadel,
    item: "even",
    isHasLiveUrl: true,
    liveUrl: "https://www.azepadel.az",
    workItem: [
      {
        title: "C#",
        icon: faCode,
      },
      {
        title: "Next JS",
        icon: faCode,
      },
      {
        title: "Shadcn UI",
        icon: faCodepen,
      },
      {
        title: "Tailwind CSS",
        icon: faTailwindCss,
      },
    ],
  },
  {
    title: "coreDbTitle",
    content: "coreDbDesc",
    image: CoreDB,
    item: "odd",
    workItem: [
      {
        title: "Python",
        icon: faPython,
      },
      {
        title: "HTML",
        icon: faHtml5,
      },
      {
        title: "JavaScript",
        icon: faJs,
      },
      {
        title: "CSS",
        icon: faCss3Alt,
      },
    ],
  },
  {
    title: "expenseAppTitle",
    content: "expenseAppDesc",
    image: expense,
    item: "even",
    workItem: [
      {
        title: "C#",
        icon: faCode,
      },
      {
        title: "React JS",
        icon: faReact,
      },
      {
        title: "Ant Design",
        icon: faCodepen,
      },
      {
        title: "SASS",
        icon: faSass,
      },
    ],
  },
  {
    title: "finxAppTitle",
    content: "finxAppDesc",
    image: finx,
    item: "odd",
    isHasGitRepo: true,
    gitUrl: "https://github.com/AbdullayevT/digitalBanking/tree/master",
    workItem: [
      {
        title: "TS",
        icon: faCode,
      },
      {
        title: "React JS",
        icon: faReact,
      },
      {
        title: "Ant Design",
        icon: faCodepen,
      },
      {
        title: "SASS",
        icon: faSass,
      },
    ],
  },
  {
    title: "amtAppTitle",
    content: "amtAppDesc",
    image: inventory,
    item: "even",
    workItem: [
      {
        title: "C#",
        icon: faCode,
      },
      {
        title: "React JS",
        icon: faReact,
      },
      {
        title: "Ant Design",
        icon: faCodepen,
      },
      {
        title: "SASS",
        icon: faSass,
      },
    ],
  },
  {
    title: "tradeFinanceTitle",
    content: "tradeFinanceDesc",
    image: tradeFinance,
    item: "odd",
    isNeedToIncreaseSize: true,
    workItem: [
      {
        title: "C#",
        icon: faCode,
      },
      {
        title: "TS",
        icon: faCode,
      },
      {
        title: "React JS",
        icon: faReact,
      },
      {
        title: "Ant Design",
        icon: faCodepen,
      },
      {
        title: "SASS",
        icon: faSass,
      },
    ],
  },
];

export const personalInfo = [
  {
    title: "abdullayevtapdiq2@gmail.com",
    icon: faEnvelope,
  },
  {
    title: "+994 77 389 09 17",
    icon: faPhone,
  },
  {
    title: "Baku, Azerbaijan",
    icon: faLocationDot,
  },
];
