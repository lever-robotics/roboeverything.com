"use strict";(self.webpackChunkurdf_documentation=self.webpackChunkurdf_documentation||[]).push([[3976],{619:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=t(4848),i=t(8453);const s={sidebar_position:2,label:"RoboEverything Docs"},r="Robo Everything Documentation",a={id:"intro",title:"Robo Everything Documentation",description:"Welcome to the Robo Everything Documentation! The following documentation is designed to help you through the software definition phase of building robots using Robo Everything and give you the tools necessary to begin robot development.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,label:"RoboEverything Docs"},sidebar:"tutorialSidebar",previous:{title:"Quick Start - Building a ROS2 Robot",permalink:"/docs/quick-start"},next:{title:"Understanding the Robot",permalink:"/docs/category/understanding-the-robot"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Fundamentals of Robot Development",id:"fundamentals-of-robot-development",level:3},{value:"Success:",id:"success",level:6},{value:"Conceptualization",id:"conceptualization",level:3},{value:"Success:",id:"success-1",level:6},{value:"CAD Design",id:"cad-design",level:3},{value:"Success:",id:"success-2",level:6},{value:"Software Definition",id:"software-definition",level:3},{value:"Success:",id:"success-3",level:6},{value:"Development",id:"development",level:3},{value:"Robot Simulation",id:"robot-simulation",level:3},{value:"Success:",id:"success-4",level:6},{value:"Robot Testing",id:"robot-testing",level:3},{value:"Success:",id:"success-5",level:6},{value:"Deployment",id:"deployment",level:3},{value:"Success:",id:"success-6",level:6}];function h(e){const o={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",h6:"h6",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"robo-everything-documentation",children:"Robo Everything Documentation"}),"\n",(0,n.jsx)(o.p,{children:"Welcome to the Robo Everything Documentation! The following documentation is designed to help you through the software definition phase of building robots using Robo Everything and give you the tools necessary to begin robot development."}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.img,{alt:"Idea Flow",src:t(2177).A+"#gh-dark-mode-only",width:"8095",height:"2654"}),"\n",(0,n.jsx)(o.img,{alt:"Idea Flow",src:t(465).A+"#gh-light-mode-only",width:"8095",height:"2654"})]}),"\n",(0,n.jsx)(o.admonition,{type:"note",children:(0,n.jsxs)(o.p,{children:["If you are looking to start using the URDF Creator to start building your robot, please follow the link to the ",(0,n.jsx)(o.a,{href:"https://marksoulier.github.io/URDF_creator/",children:"URDF creator"}),". Also look at the ",(0,n.jsx)(o.a,{href:"/docs/quick-start",children:"Quick Start Guide"})," to get a quick overview of the URDF Creator and the tools it provides."]})}),"\n",(0,n.jsx)(o.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(o.p,{children:"Below are listed each of the phases of the robot development lifecycle along with resources to complete each. Below are recommendations based on designing a robot with ROS2 of resources to help through each phase."}),"\n",(0,n.jsx)(o.h3,{id:"fundamentals-of-robot-development",children:"Fundamentals of Robot Development"}),"\n",(0,n.jsx)(o.p,{children:"If you are a beginner to robotic development or need a refresher on foundational concepts in robotics, we recommend starting with the following tutorials:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"/docs/Understand-Robot/building-a-robot",children:"Understanding a Robot"})}),"\n"]}),"\n",(0,n.jsx)(o.h6,{id:"success",children:"Success:"}),"\n",(0,n.jsx)(o.p,{children:"If you consider yourself knowledgeable about linux, command line, configuring a onboard computer (Raspberry Pi, Nvidia Jetson, etc..), basic power distribution, basic electronics communication systems, basics in object oriented python programming and C++, understanding coordinate frames and transformations, and basics of types of sensors and actuators then you have the skills to start building a robot with ROS2."}),"\n",(0,n.jsx)(o.h3,{id:"conceptualization",children:"Conceptualization"}),"\n",(0,n.jsx)(o.p,{children:"Conceptualization is the first phase of the robot development lifecycle. During this phase, you will define the purpose of the robot, its capabilities, and the environment in which it will operate. The following resources can help you through the conceptualization phase:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://www.sciencebuddies.org/science-fair-projects/engineering-design-process/best-solution",children:"The Engineering Design Matrix"})}),"\n"]}),"\n",(0,n.jsx)(o.h6,{id:"success-1",children:"Success:"}),"\n",(0,n.jsx)(o.p,{children:"If there is a clear purpose outlined for the robot, the required behavior of the robot, the environment in which the robot will operate, and the constraints of the robot then you have successfully completed the conceptualization phase."}),"\n",(0,n.jsx)(o.admonition,{type:"tip",children:(0,n.jsx)(o.p,{children:"A clear end objective for the robot is crucial as an all in one robot doesn't exist and distracts from the development of reliable actions a robot can preform consistently."})}),"\n",(0,n.jsx)(o.h3,{id:"cad-design",children:"CAD Design"}),"\n",(0,n.jsx)(o.p,{children:"The physical design is the actual design of a robot is as important as the software that controls it. These tutorials will not cover the physical design of a robot but below are listed a few resources."}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://kolaszek.medium.com/robot-cad-model-e138182e92b6",children:"Building a Robot in CAD"})}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Free CAD tools"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://www.autodesk.com/products/fusion-360/overview",children:"Fusion 360"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://www.onshape.com/",children:"Onshape"})}),"\n",(0,n.jsxs)(o.li,{children:["You can also skip designing your robot in CAD and jump into designing your robot in software using the ",(0,n.jsx)(o.a,{href:"https://marksoulier.github.io/URDF_creator/",children:"URDF creator"}),"."]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Payed CAD tools"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://www.solidworks.com/",children:"SolidWorks"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://www.autodesk.com/products/autocad/overview",children:"AutoCAD"})}),"\n"]}),"\n",(0,n.jsx)(o.h6,{id:"success-2",children:"Success:"}),"\n",(0,n.jsx)(o.p,{children:"If the physical design elements have been prototyped tested for stability and durability having exceeded the required constraints of the robot set. This includes but not limited to stress testing, weight distribution, actuator testing, sensor safety, and power distribution."}),"\n",(0,n.jsx)(o.h3,{id:"software-definition",children:"Software Definition"}),"\n",(0,n.jsx)(o.p,{children:"The software definition is outlining the physical robot model in software so the brain of the robot can understand and use what it knows about itself to interact with the world. This includes defining the robot's physical structure, kinematics, joint connections, sensor specifications, and transformations between frames. The following resources can help you through the software definition phase:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"/docs/Define-Robot/what-is-URDF",children:"Defining a Robot"})}),"\n"]}),"\n",(0,n.jsx)(o.h6,{id:"success-3",children:"Success:"}),"\n",(0,n.jsx)(o.p,{children:"Once you have defined your robot you should be able to visualize your robot in tool such as Rviz and visualize the robot in simulation in Gazebo."}),"\n",(0,n.jsx)(o.h3,{id:"development",children:"Development"}),"\n",(0,n.jsx)(o.p,{children:"The development of the code for the robot can be an extensive process depending on the complexity of the robot. This development refers to the ROS2 network of information and computation that will run in order to guide the robots actions."}),"\n",(0,n.jsx)(o.p,{children:"To be able to develop a robot effectively you should have a good understanding of the following:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://docs.ros.org/en/jazzy/",children:"ROS2"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://docs.python.org/3/",children:"Python"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://en.cppreference.com/w/",children:"C++"})}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Success:\nIf you have a robot that can preform the tasks you have set out for it then you have successfully developed a robot."}),"\n",(0,n.jsx)(o.h3,{id:"robot-simulation",children:"Robot Simulation"}),"\n",(0,n.jsx)(o.p,{children:"For complex robots simulation can assist with the testing and training of robots. There are several simulators available for robotics development including open source and commercially available simulators. The following resources can help you through the robot simulation phase:"}),"\n",(0,n.jsx)(o.h6,{id:"success-4",children:"Success:"}),"\n",(0,n.jsx)(o.p,{children:"This phase goes along actively with testing the real robot as the robot is developed. Simulation success is accurately modeling the robot in many scenarios."}),"\n",(0,n.jsx)(o.h3,{id:"robot-testing",children:"Robot Testing"}),"\n",(0,n.jsx)(o.p,{children:"Real robot testing is what people typically imagine as a robotic developer but you knew there was a lot of work to get to this point. Real robot testing is crucial as it will bring to light bugs and issues then anything else which is annoying. The following resources can help the process of implementing a robotic system on to a physical robot and testing it."}),"\n",(0,n.jsx)(o.h6,{id:"success-5",children:"Success:"}),"\n",(0,n.jsx)(o.p,{children:"If you have a robot that can preform the tasks you have set out for it then you have successfully developed a robot."}),"\n",(0,n.jsx)(o.h3,{id:"deployment",children:"Deployment"}),"\n",(0,n.jsx)(o.p,{children:"Congratulations, if you have a robot that has reliably preformed the tasks you have set out for it then you have successfully developed a robot. Now its time to deploy the robot, building tools for security, monitoring, and maintenance of the robot are parts of the deployment phase."}),"\n",(0,n.jsx)(o.h6,{id:"success-6",children:"Success:"}),"\n",(0,n.jsx)(o.p,{children:"Success in this phase will typically require continued maintenance and updates to the robot as it continues to be more reliable and efficient. If you make it to this step with a project, pat yourself on the back, very few make it to this step."})]})}function d(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},2177:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/Idea_dark-b18b4a7bc177550b60a79694b5a57403.png"},465:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/Idea_light-45fa9ce27513c768120a9dfaec394e68.png"},8453:(e,o,t)=>{t.d(o,{R:()=>r,x:()=>a});var n=t(6540);const i={},s=n.createContext(i);function r(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);