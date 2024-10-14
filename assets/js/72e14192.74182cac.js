"use strict";(self.webpackChunkurdf_documentation=self.webpackChunkurdf_documentation||[]).push([[2814],{6711:(e,A,n)=>{n.r(A),n.d(A,{assets:()=>o,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=n(4848),i=n(8453);const s={sidebar_position:1,label:"Quick Start"},r="Quick Start - Building a ROS2 Robot",a={id:"quick-start",title:"Quick Start - Building a ROS2 Robot",description:"Introduction",source:"@site/docs/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/docs/quick-start",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,label:"Quick Start"},sidebar:"tutorialSidebar",next:{title:"Robo Everything Documentation",permalink:"/docs/intro"}},o={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Understanding URDF",id:"understanding-urdf",level:2},{value:"What is a URDF?",id:"what-is-a-urdf",level:3},{value:"Links and Joints",id:"links-and-joints",level:3},{value:"Modeling Shapes in URDF",id:"modeling-shapes-in-urdf",level:3},{value:"What is ROS2?",id:"what-is-ros2",level:2},{value:"Overview of ROS2",id:"overview-of-ros2",level:3},{value:"Building a Basic Bot with the URDF Creator",id:"building-a-basic-bot-with-the-urdf-creator",level:2},{value:"The User Interface",id:"the-user-interface",level:3},{value:"Adding Shapes to the Scene",id:"adding-shapes-to-the-scene",level:3},{value:"Manipulating Shapes",id:"manipulating-shapes",level:3},{value:"Adding Wheels",id:"adding-wheels",level:3},{value:"Adding a Camera Sensor",id:"adding-a-camera-sensor",level:3},{value:"Adding Joints",id:"adding-joints",level:3},{value:"Exporting the URDF and Robot Description Package",id:"exporting-the-urdf-and-robot-description-package",level:2},{value:"Exporting Process",id:"exporting-process",level:3},{value:"Package Contents",id:"package-contents",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"Further Guides",id:"further-guides",level:3}];function c(e){const A={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(A.h1,{id:"quick-start---building-a-ros2-robot",children:"Quick Start - Building a ROS2 Robot"}),"\n",(0,t.jsx)(A.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(A.p,{children:"Welcome to the Quick Start Guide for URDF Creator!"}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.em,{children:(0,t.jsx)(A.strong,{children:"We advise that all users of URDF Creator, both students and experienced robot developers, to go through this quick start guide before looking at the detailed documentation."})})}),"\n",(0,t.jsx)(A.p,{children:"The URDF Creator is a powerful tool tailored for ROS2 users, facilitating the creation of robot models within the ROS ecosystem. The URDF (Unified Robot Description Format) defines the geometry, kinematics, joint connections, sensor specifications, as well as transformations between frames provided by the robot state publisher."}),"\n",(0,t.jsx)(A.h2,{id:"understanding-urdf",children:"Understanding URDF"}),"\n",(0,t.jsx)(A.h3,{id:"what-is-a-urdf",children:"What is a URDF?"}),"\n",(0,t.jsx)(A.p,{children:"URDF (Uniform Robot Description Format) serves as a standardized XML-based format for describing robots in ROS. It encompasses various elements such as links, joints, sensors, and visuals, all crucial for accurately representing a robot's physical structure and kinematics."}),"\n",(0,t.jsx)(A.h3,{id:"links-and-joints",children:"Links and Joints"}),"\n",(0,t.jsxs)(A.ul,{children:["\n",(0,t.jsxs)(A.li,{children:["\n",(0,t.jsxs)(A.p,{children:[(0,t.jsx)(A.strong,{children:"Links"})," represent physical components of the robot, such as wheels, arms, or sensors."]}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"Links",src:n(6481).A+"",width:"799",height:"443"})}),"\n"]}),"\n",(0,t.jsxs)(A.li,{children:["\n",(0,t.jsxs)(A.p,{children:[(0,t.jsx)(A.strong,{children:"Joints"})," define the connections between these links, enabling movement and articulation."]}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"Joints",src:n(7162).A+"",width:"800",height:"733"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(A.h3,{id:"modeling-shapes-in-urdf",children:"Modeling Shapes in URDF"}),"\n",(0,t.jsx)(A.p,{children:"URDF models consist of three basic shapes: cubes, cylinders, and spheres. These shapes are used for their simplicity and computational efficiency."}),"\n",(0,t.jsx)(A.h2,{id:"what-is-ros2",children:"What is ROS2?"}),"\n",(0,t.jsx)(A.h3,{id:"overview-of-ros2",children:"Overview of ROS2"}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"ROS2 Logo",src:n(6337).A+"",width:"509",height:"300"})}),"\n",(0,t.jsx)(A.p,{children:"ROS2 (Robot Operating System 2) is an open-source framework that provides libraries and tools to help software developers create robot applications. It is widely used by researchers, hobbyists, and industrial developers to build and simulate robots."}),"\n",(0,t.jsxs)(A.p,{children:["Learn more about ROS2 ",(0,t.jsx)(A.a,{href:"https://docs.ros.org/en/jazzy/",children:"here"}),"."]}),"\n",(0,t.jsx)(A.h2,{id:"building-a-basic-bot-with-the-urdf-creator",children:"Building a Basic Bot with the URDF Creator"}),"\n",(0,t.jsx)(A.h3,{id:"the-user-interface",children:"The User Interface"}),"\n",(0,t.jsx)(A.p,{children:"Before we start building our robot, let's familiarize ourselves with the URDF Creator's user interface."}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"URDF Creator UI",src:n(5348).A+"",width:"3691",height:"1984"})}),"\n",(0,t.jsx)(A.p,{children:"Some of the key features of the URDF Creator include:"}),"\n",(0,t.jsxs)(A.ol,{children:["\n",(0,t.jsxs)(A.li,{children:[(0,t.jsx)(A.strong,{children:"Menu"})," (Top Left): Access to the export URDF option as well as future development into project management."]}),"\n",(0,t.jsxs)(A.li,{children:[(0,t.jsx)(A.strong,{children:"Project Name"})," (Top Left): Name of the robot, will be used as the name of exported packages. Default: robot"]}),"\n",(0,t.jsxs)(A.li,{children:[(0,t.jsx)(A.strong,{children:"Tools"})," (Top Middle): Tools for moving, rotating, and resizing links."]}),"\n",(0,t.jsxs)(A.li,{children:[(0,t.jsx)(A.strong,{children:"Object Tree"})," (Left): Displays the hierarchy of links in the robot model. Joint information is carried inside each link but the base_link defining its relationship to its parent."]}),"\n",(0,t.jsxs)(A.li,{children:[(0,t.jsx)(A.strong,{children:"Add Objects"})," (Bottom Left): Buttons to add shapes to the scene."]}),"\n",(0,t.jsxs)(A.li,{children:[(0,t.jsx)(A.strong,{children:"View"})," (Center): Main view which can be viewed from different angles, and links can be selected and manipulated."]}),"\n",(0,t.jsxs)(A.li,{children:[(0,t.jsx)(A.strong,{children:"Object Parameters"})," (Top Right): Once a link is selected, information about the selected link. The following parameters can be altered:","\n",(0,t.jsxs)(A.ul,{children:["\n",(0,t.jsxs)(A.li,{children:[(0,t.jsx)(A.strong,{children:"Link Name"}),": Name of the link also used as the frame_id in the URDF."]}),"\n",(0,t.jsxs)(A.li,{children:[(0,t.jsx)(A.strong,{children:"Color"}),": Color of the link."]}),"\n",(0,t.jsxs)(A.li,{children:[(0,t.jsx)(A.strong,{children:"Weight"}),": Weight of the link."]}),"\n",(0,t.jsxs)(A.li,{children:[(0,t.jsx)(A.strong,{children:"Joints"}),": Joints that are connected to the link."]}),"\n",(0,t.jsxs)(A.li,{children:[(0,t.jsx)(A.strong,{children:"Position"}),": Position of the link."]}),"\n",(0,t.jsxs)(A.li,{children:[(0,t.jsx)(A.strong,{children:"Rotation"}),": Rotation of the link."]}),"\n",(0,t.jsxs)(A.li,{children:[(0,t.jsx)(A.strong,{children:"Scale"}),": Scale of the link."]}),"\n",(0,t.jsxs)(A.li,{children:[(0,t.jsx)(A.strong,{children:"Sensor"}),": Sensor information of the link. Used by ROS2 for its frame ID but parameters in simulation give accurate representation of the actual sensor."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(A.li,{children:[(0,t.jsx)(A.strong,{children:"URDF Code"})," (Bottom Right): Displays the URDF code generated in real-time as you manipulate the shapes and set their attributes."]}),"\n"]}),"\n",(0,t.jsx)(A.h3,{id:"adding-shapes-to-the-scene",children:"Adding Shapes to the Scene"}),"\n",(0,t.jsx)(A.p,{children:"Each part of a robot that moves independently is represented as a link in URDF. Links are connected by joints, which define how the links can move relative to each other."}),"\n",(0,t.jsxs)(A.ol,{children:["\n",(0,t.jsxs)(A.li,{children:[(0,t.jsx)(A.strong,{children:"Locate the add buttons"})," in the bottom left corner of the screen."]}),"\n",(0,t.jsxs)(A.li,{children:[(0,t.jsx)(A.strong,{children:"Click the desired shape"})," (cube, cylinder, or sphere) to add it to the scene."]}),"\n"]}),"\n",(0,t.jsx)(A.p,{children:"In this example, we will add a cube for the base of our robot. Note that the origin of the grid is used by the center of the robot with ROS2. For a Differential Drive robot, the center of the robot is the center of the back wheels on the ground."}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"Add Cube",src:n(2546).A+"",width:"3691",height:"1970"})}),"\n",(0,t.jsx)(A.h3,{id:"manipulating-shapes",children:"Manipulating Shapes"}),"\n",(0,t.jsx)(A.p,{children:"Manipulate the cube by first selecting it either by selecting it or clicking on it in the Object Tree."}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"Translation",src:n(3583).A+"",width:"629",height:"752"})}),"\n",(0,t.jsx)(A.p,{children:"Move the cube accordingly to the shape of the base of the robot off the ground as high as the wheels will be."}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"Scale",src:n(6295).A+"",width:"1133",height:"1188"})}),"\n",(0,t.jsx)(A.p,{children:"To give specific scaling, positioning, or rotation of a link, use the parameters in the Object Parameters section."}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"Object Parameters",src:n(1695).A+"",width:"2336",height:"1534"})}),"\n",(0,t.jsx)(A.h3,{id:"adding-wheels",children:"Adding Wheels"}),"\n",(0,t.jsx)(A.p,{children:"Next, we will add the wheels to the robot by inserting a cylinder. First by scaling, then position the cylinder in place."}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"Add Cylinder",src:n(6180).A+"",width:"1821",height:"1338"})}),"\n",(0,t.jsx)(A.p,{children:"Also, in the parameters is the ability to change the name of the link. The name of the link will be used by ROS2 as the frame_id. We will change the wheel name to be a unique name."}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"Link Name",src:n(6621).A+"",width:"896",height:"340"})}),"\n",(0,t.jsx)(A.p,{children:"We can use the duplicate function by right-clicking on the link in the Object Tree and selecting duplicate. This is also a way to delete links."}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"Duplicate",src:n(9318).A+"",width:"699",height:"238"})}),"\n",(0,t.jsx)(A.p,{children:"After positioning the wheels, we should get something like this:"}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"Wheels",src:n(7349).A+"",width:"3699",height:"1978"})}),"\n",(0,t.jsx)(A.h3,{id:"adding-a-camera-sensor",children:"Adding a Camera Sensor"}),"\n",(0,t.jsx)(A.p,{children:"Next, we will add a camera sensor to the robot. This will be the position of the camera on the robot and will define the transformation between the robot and where its camera is for other nodes to use, such as orb_slam2. Mark this link as a camera sensor in the parameters and name it camera_link. The sensor details will be primarily used by Gazebo for simulation."}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"Add Camera",src:n(5356).A+"",width:"2255",height:"1978"})}),"\n",(0,t.jsx)(A.h3,{id:"adding-joints",children:"Adding Joints"}),"\n",(0,t.jsx)(A.p,{children:"Finally, we will add the joints which define the relationship between the child and parent link. To define the joint, select the child link and in Object Parameters select the type of joint it is."}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"Joint",src:n(709).A+"",width:"2950",height:"1975"})}),"\n",(0,t.jsx)(A.p,{children:"After adding the joints, we should have a robot that looks like this:"}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"Final Robot",src:n(5493).A+"",width:"3695",height:"1965"})}),"\n",(0,t.jsx)(A.p,{children:"The robot is now ready to be exported as a URDF file and used in ROS2."}),"\n",(0,t.jsx)(A.h2,{id:"exporting-the-urdf-and-robot-description-package",children:"Exporting the URDF and Robot Description Package"}),"\n",(0,t.jsx)(A.h3,{id:"exporting-process",children:"Exporting Process"}),"\n",(0,t.jsxs)(A.ol,{children:["\n",(0,t.jsxs)(A.li,{children:[(0,t.jsx)(A.strong,{children:"Export Menu"}),": Click the menu button in the top left corner of the screen."]}),"\n"]}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"Export Menu",src:n(1424).A+"",width:"97",height:"66"})}),"\n",(0,t.jsxs)(A.ol,{start:"2",children:["\n",(0,t.jsxs)(A.li,{children:[(0,t.jsx)(A.strong,{children:"Exporting"}),': Select "Export URDF" to generate and download your URDF file.']}),"\n"]}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"Export URDF",src:n(2648).A+"",width:"668",height:"243"})}),"\n",(0,t.jsx)(A.p,{children:"The exported URDF file serves as the blueprint for your robot's virtual representation within ROS, enabling simulation, visualization, and control."}),"\n",(0,t.jsx)(A.p,{children:"The exported zip folder should be the name of your robot with _description at the end."}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"Exported Folder",src:n(1524).A+"",width:"1409",height:"45"})}),"\n",(0,t.jsx)(A.p,{children:"Unzip the folder and place it in your ROS2 workspace in the src folder."}),"\n",(0,t.jsx)(A.p,{children:"For more information on how to use the URDF in ROS2, please visit the ROS2 documentation:"}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.a,{href:"https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Creating-A-Workspace/Creating-A-Workspace.html",children:"ROS2 URDF Documentation"})}),"\n",(0,t.jsx)(A.h3,{id:"package-contents",children:"Package Contents"}),"\n",(0,t.jsx)(A.p,{children:"Looking at the contents of the ROS2 packages, what is included is as follows:"}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"Package Contents",src:n(7276).A+"",width:"708",height:"434"})}),"\n",(0,t.jsxs)(A.ul,{children:["\n",(0,t.jsxs)(A.li,{children:[(0,t.jsx)(A.strong,{children:"launch"}),": Contains the launch files for the robot."]}),"\n",(0,t.jsxs)(A.li,{children:[(0,t.jsx)(A.strong,{children:"URDF"}),": Contains the URDF file for the robot."]}),"\n",(0,t.jsxs)(A.li,{children:[(0,t.jsx)(A.strong,{children:"SDF"}),": Contains the SDF file for the robot. This is used in Gazebo Simulation."]}),"\n"]}),"\n",(0,t.jsx)(A.p,{children:"To launch the robot description and see it in RViz, use the following command:"}),"\n",(0,t.jsx)(A.pre,{children:(0,t.jsx)(A.code,{className:"language-bash",children:"ros2 launch <name>_description display.launch.py\n"})}),"\n",(0,t.jsx)(A.p,{children:"This will launch the robot in RViz, and you should see the robot in the center of the screen."}),"\n",(0,t.jsx)(A.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,t.jsx)(A.h3,{id:"further-guides",children:"Further Guides"}),"\n",(0,t.jsxs)(A.ul,{children:["\n",(0,t.jsx)(A.li,{children:"Explore ROS2 control and other advanced features."}),"\n",(0,t.jsx)(A.li,{children:(0,t.jsx)(A.a,{href:"https://control.ros.org/master/doc/getting_started/getting_started.html",children:"ROS2 Control"})}),"\n",(0,t.jsx)(A.li,{children:"Visit the GitHub repository to report issues and contribute to the project."}),"\n",(0,t.jsx)(A.li,{children:"Fill out our bug survey to help us improve the tool."}),"\n"]}),"\n",(0,t.jsx)(A.p,{children:"We extend our gratitude to the ROS2 community for their invaluable contributions to robotics and open-source software. Let's embark on the journey of designing and deploying ROS2 robots with the URDF Creator!"}),"\n",(0,t.jsx)(A.p,{children:"To support this effort, please consider helping to add to these tutorials and documentation with examples and best practices for making the developer experience better."})]})}function l(e={}){const{wrapper:A}={...(0,i.R)(),...e.components};return A?(0,t.jsx)(A,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},7349:(e,A,n)=>{n.d(A,{A:()=>t});const t=n.p+"assets/images/4wheels-c5b8049ad114228de93c58271bba24f2.png"},5348:(e,A,n)=>{n.d(A,{A:()=>t});const t=n.p+"assets/images/blank-676cc2a134e82926e00a6443f86ce726.png"},2546:(e,A,n)=>{n.d(A,{A:()=>t});const t=n.p+"assets/images/box-484815d01ada57cafa3d1240539c7d66.png"},5356:(e,A,n)=>{n.d(A,{A:()=>t});const t=n.p+"assets/images/camera-939918326c22e72ef9c932b8757509c7.png"},9318:(e,A,n)=>{n.d(A,{A:()=>t});const t=n.p+"assets/images/duplicate-4fd038fd89fdeb813b8e6d9bd2887cc4.png"},2648:(e,A,n)=>{n.d(A,{A:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAApwAAADzCAYAAAArdsYDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAACNbSURBVHhe7d0JnMz1H8fxT0KOUMmxJLccneTK2Ykc/eWWWxK5r79KodAlOSMiUSF5iErocOdWCus+wjo6XFF217//fL77+83Obrvs7sx32xmvZ4959PvOrtm55z3f4/O9JnuusL8FAAAAfouMvOgcwVc65/8AAACAFQROAAAAWEXgBAAAgFUETgAAAFhF4AQAAIBVBE4AAABYReAEAACAVQROAAAAWEXgBAAAgFUETgAAAFhF4AQAAIBVBE4AAABYReAEAACAVQROAAAAWEXgBAAAgFUETgAAAFhF4AQAAIBVBE4AAABYReAEAACAVQROAAAAWEXgBAAAgFUETgAAAFhF4AQAAIBVBE4AAABYReAEAACAVQROAAAAWEXgBAAAgFUETgAAAFhF4AQAAIBVBE4AAABYReAEAACAVQROAAAAWEXgBAAAgFUETgAAAFhF4AQAAIBVBE4AAABYReAEAACAVQROAAAAWEXgBAAAgFUETgAAAFhF4AQAAIBVBE4AAABYReAEAACAVQROAAAAWEXgBAAAgFUETgAAAFhF4AQAAIBVBE4AAABYReAEAACAVQROAAAAWEXgBAAAgFUETgAAAFhF4AQAAIBVBE4AAABYReAEAACAVQROAAAAWEXgBAAAgFUETgAAAFhF4AQAAIBVBE4AAABYReAEAACAVQROAAAAWEXgBAAAgFUETgAAAFhF4AQAAIBVBE4AAABYReAEAACAVQROAAAAWEXgBAAAgFUETgAAAFhF4AQAAIBVBE4AAABYReAEAACAVQROAAAAWEXgBAAAgFUETgAAAFhF4AQAAIBVBE4AAABYReAEAACAVQROAAAAWEXgBAAAgFUETgAAAFhF4AQAAIBVBE4AAABYReAEAACAVQROAAAAWEXgBAAAgFUETgAAAFhF4AQAAIBVBE4AAABYReAEAACAVQROAAAAWEXgBAAAgFUETgAAAFhF4AQAAIBVBE4AAABYReAEAACAVQROAAAAWEXgBAAAgFXXZM8V9rdzjGQoX66ctGrRTDJlzuScE1jh4Ttl9Pi3nRZw9SpWtIg82b6d3HjjDaYdEXFMhg5/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e9I6sdrLHT9s6nNDa1w+VKd+QMJmatEveL5zce+643bPa7ed0/p36Oti2/YdMmrMOClbuaq0av8kJcKAqxiBMwhpT0m3Lp0lzOkJ08C0YtUas2Wlv3xrcyp/V61rAKv+UC15+50p8tvvvzvnXpmudNcPp5Zt2kunrt2szKHTgH3vfdXkrbHj5fCRI97gmVTaa6O1GRs1f0I6dO4SZ15hsNEvKj37DkgwvPnS++j48eNWHo+U0Ov9WONm0vSJNua6+25/mVR6mzSsaY/Yg3XqSc9+A9LM7UsqfR7qKIArNQrjuy5GRpr7S5//m7ZskekzPpDWHTpJngKFpcr9D5kpPsH82gAQGAypw2+JDaknRFes1n74YSld6rZ/1Hw8e/acHPKEXe1Z0lIp/vTWpoTO7WzZrInZCz1f3jBxt6d0RUdfkojjx0ztQw342sMWbMEkKbQygA5Xay9ZBs9jqnP5dM6mzonT25yWe/70y1iDuo+asFWieHEzBzh+L6bSElnau/3D1h/NfON/e3oAgNDBkHrCCJzwW3ICJwAAoYzAmTCG1AEAAGAVgRMAAABWETgBAABgFYETAAAAVhE4AQAAYBWBEwAAAFYROAEAAGAVgRMAAABWETgBAABgFYETAAAAVhE4AQAAYBWBEwAAAFYROAEAAGAVgRMAAABWETjht+MnTsqO8HDZviNcwnftklOnTzs/AQAAELkme66wv51jAAAA+CEy8qJzBF/0cAIAAMAqAicAAACsInACAADAKgInAAAArCJwAgAAwCoCJwAAAKwicAIAAMAqAicAAACsInACAADAKgInAAAArCJwAgAAwCoCJwAAAKwicAIAAMAqAicAAACsInACAADAKgInAAAArCJwAgAAwCoCJwAAAKwicAIAAMAqAicAAACsInACAADAKgInAAAArCJwAgAAwCoCJwAAAKwicAIAAMAqAicAAACsInACAADAKgInAAAArCJwAgAAwCoCJwAAAKwicAIAAMAqAicAAACsInACAADAKgInAAAArCJwAgAAwCoCJwAAAKwicAIAAMAqAicAAACsInACAADAKgInAAAArCJwAgAAwCoCJwAAAKwicAIAAMAqAicAAACsInACAADAKgInAAAArCJwAgAAwCoCJwAAAKwicAIAAMAqAicAAACsInACAADAKgInAAAArCJwAgAAwCoCJwAAAKwicAIAAMAqAicAAACsInACAADAKgInAAAArCJwAgAAwCoCJwAAAKwicAIAAMAqAicAAACsInACAADAKgInAAAArCJwAgAAwCoCJwAAAKwicAIAAMAqAicAAACsInACAADAKgInAAAArCJwAgAAwCoCJwAAAKwicAIAAMAqAicAAAAsEvk/Pq3kx36EyfkAAAAASUVORK5CYII="},5493:(e,A,n)=>{n.d(A,{A:()=>t});const t=n.p+"assets/images/final-84324c0375a2a687000bfa5a18c5dbdb.png"},1424:(e,A,n)=>{n.d(A,{A:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAABCCAYAAABHPrg7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJrSURBVHhe7ZzBbtQwEIZnkrQVzwOUFvE+leDUJ+kJpD4RCOiLgMShCps4thNmHCfLAkIcduOR+L8oku1qe/i/nXGilcxX168m+gPTNC+P40gxjuRipM5HCjIfmUkv8Hc0w1Fi1AyDDPSiX5OTSZWHB6QPywf7wdNjP9DXztHjEMnL/5i4goB/hOXLWldMZ01NT84buqiblNyiIyGD3yQsAnbe07duoF0YZRWhH4O65iRDxcwqZg4kqIAobaft5ZvvoqrMfwHH5KJp6KzS6GcRq4SlAr47T21YiwWcCG1RS0UkCSpA71b6fxukAsAmaEWohgMJDv1/c87ret+OdC/weQy2o64rqpYq6ELIy2BrkgRlJy9ioAx5T5A3OjgoxixBbu1NoAwpeRYLeDMoR25HaQwKgR5kAEgwACQYABIMAAkGgAQDQIIBIMEAkGAASDAAX754OcUQ6Us35KWy3L65odvXN3l2Wu7e3dPd2/s8KwcqwQCQYABz7eh/BJVgAEgwACQYwNyecP38GV1dPs2z0/Lh4wO9//Q5z8qB9wS8JwAF7QjtCChoRwaABANAggHwiIpHVKBAggHwiGoAVIIBIMEAkGAASDAAJBgAEgwACQaABANAggEgwQCQYABIMAAkGGCVsBy5A7ZnlaCHEIIyrBIiJBRjlRACTp0qxX5PkAsitkczXyUQMTmvP3Fig96OKWW+l8CcDp/qHX5r3grNWjP/qRLUA6fycM7lFXAqNGPNWjNfJegkHVAutw+Bur6TVbSm4zOlbDXjJe+DdqQiWE8z50osjdS2LfkB7elYaJaaqWarGWvWzEw/AONDQiT5ewvKAAAAAElFTkSuQmCC"},709:(e,A,n)=>{n.d(A,{A:()=>t});const t=n.p+"assets/images/joint-feceb4e2d7a87e1debcaa097c8d2c488.png"},7162:(e,A,n)=>{n.d(A,{A:()=>t});const t=n.p+"assets/images/joints-d99eb95d12d1c2d582aa82bd69f56621.png"},6481:(e,A,n)=>{n.d(A,{A:()=>t});const t=n.p+"assets/images/link-05bb81961da948ba2afd66bb4a0b6431.png"},7276:(e,A,n)=>{n.d(A,{A:()=>t});const t=n.p+"assets/images/package_contents-2b4fe276d087d469f2ef11282340a88a.png"},1695:(e,A,n)=>{n.d(A,{A:()=>t});const t=n.p+"assets/images/params-fe95f5d5e8b606d5b26a6d5aad8a9acf.png"},6621:(e,A,n)=>{n.d(A,{A:()=>t});const t=n.p+"assets/images/params2-1ceb267f9f77f094f18a76403ce21398.png"},1524:(e,A,n)=>{n.d(A,{A:()=>t});const t="data:image/png;base64,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"},6337:(e,A,n)=>{n.d(A,{A:()=>t});const t=n.p+"assets/images/ros2_logo-a6e1bd18fd359c08aa4b749a589a7916.png"},6295:(e,A,n)=>{n.d(A,{A:()=>t});const t=n.p+"assets/images/scale-424bd4f8eb5c59d3d1f254beb499211e.png"},3583:(e,A,n)=>{n.d(A,{A:()=>t});const t=n.p+"assets/images/translate-23660a44c5b29d912df302e724e92a14.png"},6180:(e,A,n)=>{n.d(A,{A:()=>t});const t=n.p+"assets/images/wheel-79f8a2d70f37c542388e89d69a764bed.png"},8453:(e,A,n)=>{n.d(A,{R:()=>r,x:()=>a});var t=n(6540);const i={},s=t.createContext(i);function r(e){const A=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(A):{...A,...e}}),[A,e])}function a(e){let A;return A=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:A},e.children)}}}]);