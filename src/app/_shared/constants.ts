export const userInfo: string = "An independent and self-motivated developer with proven and tested skills. More than a 1.5 year of  "+
"experience in the development of Web-based applications, spanning end-to-end project lifecycle using web technologies. Involved in "+
"product management. The tech stack on which I am currently working on is Angular, MSSQL, and .NET C#.";

export const section_grade: string = "grades";
export const section_exper: string = "EXPEREINCES AND THE OTHER ACTIVITIES";
export const section_project: string = "PROJECTS";
export const section_acheiv: string = "ACHIEVMENTS";
export const section_certification: string = "CERTIFICATION";
export const section_skills: string = "SKILLS";
export const section_interest: string = "HOBBIES AND INTERESTS";

export const GradesList:{
  marks:string,
  marksType:string,
  course:string,
  organisation:string,
  timeline:string
  icon:string
}[] = [
  {
    marks:"8.75",
    marksType:"cgpa",
    course:"B.E (CSE)",
    organisation:"Chitkara University, Himachal Pradesh",
    timeline:"June, 2017 - June, 2021",
    icon:"far fa-clock"
  },
  {
    marks:"65.2",
    marksType:"%",
    course:"Non-Med",
    organisation:"Govt. Sr. Sec. School, Chandigarh",
    timeline:"July, 2015 - April, 2017",
    icon:"far fa-clock"
  },
  {
    marks:"8.00",
    marksType:"cgpa",
    course:"10th",
    organisation:"D.A.V Sr. Sec. School, Parwanoo",
    timeline:"April, 2014 - June, 2015",
    icon:"far fa-clock"
  }
]

export const experienceList:{
  icon:string | "fas fa-caret-right",
  organisation:string,
  timeline:string,
  timelineIcon:string | "far fa-clock",
  description:string,
  responsiblities:{
    title:string | "Responsiblities",
    resList:string[],
  }
}[] = [
  {
    icon:"fas fa-caret-right",
    organisation:"Mirra - Health Care : SDE",
    timeline:"July, 21 - Present",
    timelineIcon:"far fa-clock",
    description:"Created a product from a scratch. A medical insurance coverage platform which is fundamentally based on CMS"+
                "(US based Medicare Federal Organization) Currently working on critical, core, module which is enrollment.",
    responsiblities:{
      title:"Responsiblities",
      resList:["Front-End", "Back-End", "Database", "Direct Reporting to PM/BA", "Fixed critical Issues faced on UAT"],
    }
  },
  {
    icon:"fas fa-caret-right",
    organisation:"CodeQuotient : SDE Intern",
    timeline:"March, 20 - June, 21",
    timelineIcon:"far fa-clock",
    description:"Dealt with a critical client on client side ( Mirra-Health Care ) in Medicare domain team. Worked on "+
                "some core critical modules like, enrollment, transaction management, In-transit form management, address "+
                "etc. which I handled solely. I have been also effectively dealing with the onshore BAs.",
    responsiblities:{
      title:"Responsiblities",
      resList:["Front-End", "Back-End", "Trained new joiners twice", "Direct Reporting to PM/BA", "Database", "Delivered session on Front-End Architecture Design more than once", "Designed critical code structures"],
    }
  },
  {
    icon:"fas fa-caret-right",
    organisation:"5Stars in Java, 4Stars in Problem Solving - HackerRank",
    timeline:"",
    timelineIcon:"",
    description:"",
    responsiblities:{
      title:"Responsiblities",
      resList:[],
    }
  }
]


export const projectList:{
  name:string,
  desc:string,
  link:string,
  small?:string
}[] = [
  {
    name:"Medicare Advantage ",
    desc:"This is a health care system which is made by using Angular, .NET C#, and MSSQL. ",
    link:"",
    small:"- US Health Care"
  },
  {
    name:"Answer Den",
    desc:"Grievances System using MERN Stack and Web Scrapper using Cheerio",
    link:""
  },
  {
    name:"Quiz Camp",
    desc:"Its a platform where admin can create quizzes and user can attempt them. Technology used: NodeJS, MongoDB, and JS. Did pure DOM manipulation",
    link:""
  },
  {
    name:"Gray-Scale",
    desc:"This is my portfolio which is made for fun, technology used is Angular.",
    link:"Gray-scale.herokuapp.com"
  },
]

export const certificationList:{
  name:string,
  link:string,
  icon:string
}[] = [
  {
    name:"JAVA - Hackerrank",
    link:"https://www.hackerrank.com/certificates/7680112bd66f",
    icon:"fas fa-caret-right"
  },
  {
    name:"Problem Solving - Hackerrank",
    link:"https://www.hackerrank.com/certificates/a00dba1fd8a8",
    icon:"fas fa-caret-right"
  },
  {
    name:"Responsive Web Design",
    link:"https://www.freecodecamp.org//certification/arunsaini/responsive-web-design",
    icon:"fas fa-caret-right"
  },
]

export const hobyIntrList:{
    title:string,
    desc:string
}[] = [
  {
    title:"Hobbies",
    desc: "Drawing , Singing , Designing and Gaming"
  },
  {
    title:"Interests",
    desc: "Reading Forums on Quora and also started game development."
  }
]

export const achievmentList:{
  icon:string,
  rank:string,
  desc:string,
  org:string,
}[] = [
  {
    icon:"fas fa-caret-right",
    rank:"1st Prize",
    desc:", Annual Technical fest",
    org:"Techlone2019"
  },
  {
    icon:"fas fa-caret-right",
    rank:"Top 10",
    desc:"in Rank,at UIET",
    org:"HackUIET"
  },
  {
    icon:"fas fa-caret-right",
    rank:"Top 6",
    desc:"in Rank National Hackathon, Got an opportunity of direct interview in CodeQuotient",
    org:"BreakPoint 2019."
  },
  {
    icon:"fas fa-caret-right",
    rank:"",
    desc:"Worked on client side for a 1.6 year, then in July 2021 they absorbed me from CodeQuotient for SDE position",
    org:""
  },
]

export const skillList:{
  title:string,
  skills:string[],
  left:boolean
}[] = [
  {
    title:"PROGRAMMING LANGUAGE",
    skills:["JAVA", "C#", "JavaScript/TypeScript"],
    left:true
  },
  {
    title:"FRONTEND",
    skills:["Angular", "HTML & CSS", "ReactJS"],
    left:false
  },
  {
    title:"DATABASE",
    skills:["SQL", "PostGreSQL", "MongoDB"],
    left:true
  },
  {
    title:"PROJECT MANAGEMENT",
    skills:["TFS", "Trello", "Git"],
    left:false
  },
  {
    title:"BACKEND",
    skills:["ADO.net, C#", "NodeJS (EXPRESS)"],
    left:true
  },
  {
    title:"LOGIC AND ALGORITHM",
    skills:["Data Structures", "Problem Solving"],
    left:false
  }
]
