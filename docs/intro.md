---
sidebar_position: 2
label: RoboEverything Docs
---

# Robo Everything Documentation

Welcome to the Robo Everything Documentation! The following documentation is designed to help you through the software definition phase of building robots using Robo Everything and give you the tools necessary to begin robot development.

![Idea Flow](./img/Idea_dark.png#gh-dark-mode-only)
![Idea Flow](./img/Idea_light.png#gh-light-mode-only)

:::note
If you are looking to start using the URDF Creator to start building your robot, please follow the link to the [URDF creator](https://marksoulier.github.io/URDF_creator/). Also look at the [Quick Start Guide](./quick-start.md) to get a quick overview of the URDF Creator and the tools it provides.
:::

## Introduction

Below are listed each of the phases of the robot development lifecycle along with resources to complete each. Below are recommendations based on designing a robot with ROS2 of resources to help through each phase.

### Fundamentals of Robot Development

If you are a beginner to robotic development or need a refresher on foundational concepts in robotics, we recommend starting with the following tutorials:

- [Understanding a Robot](./Understand-Robot/building-a-robot.md)

###### Success: 
If you consider yourself knowledgeable about linux, command line, configuring a onboard computer (Raspberry Pi, Nvidia Jetson, etc..), basic power distribution, basic electronics communication systems, basics in object oriented python programming and C++, understanding coordinate frames and transformations, and basics of types of sensors and actuators then you have the skills to start building a robot with ROS2.

### Conceptualization
<!-- Include a picture of conceptulization -->

Conceptualization is the first phase of the robot development lifecycle. During this phase, you will define the purpose of the robot, its capabilities, and the environment in which it will operate. The following resources can help you through the conceptualization phase:

<!-- Look up a engineering matrix -->
- [The Engineering Design Matrix](https://www.sciencebuddies.org/science-fair-projects/engineering-design-process/best-solution)

###### Success: 
If there is a clear purpose outlined for the robot, the required behavior of the robot, the environment in which the robot will operate, and the constraints of the robot then you have successfully completed the conceptualization phase.

:::tip
A clear end objective for the robot is crucial as an all in one robot doesn't exist and distracts from the development of reliable actions a robot can preform consistently.
:::

### CAD Design

The physical design is the actual design of a robot is as important as the software that controls it. These tutorials will not cover the physical design of a robot but below are listed a few resources.

<!-- List a few resources on designing physical robot -->
- [Building a Robot in CAD](https://kolaszek.medium.com/robot-cad-model-e138182e92b6)

Free CAD tools
- [Fusion 360](https://www.autodesk.com/products/fusion-360/overview)
- [Onshape](https://www.onshape.com/)
- You can also skip designing your robot in CAD and jump into designing your robot in software using the [URDF creator](https://marksoulier.github.io/URDF_creator/).

Payed CAD tools
- [SolidWorks](https://www.solidworks.com/)
- [AutoCAD](https://www.autodesk.com/products/autocad/overview)

###### Success:
If the physical design elements have been prototyped tested for stability and durability having exceeded the required constraints of the robot set. This includes but not limited to stress testing, weight distribution, actuator testing, sensor safety, and power distribution.

### Software Definition

The software definition is outlining the physical robot model in software so the brain of the robot can understand and use what it knows about itself to interact with the world. This includes defining the robot's physical structure, kinematics, joint connections, sensor specifications, and transformations between frames. The following resources can help you through the software definition phase:

- [Defining a Robot](./Define-Robot/what-is-URDF.md)

###### Success:
Once you have defined your robot you should be able to visualize your robot in tool such as Rviz and visualize the robot in simulation in Gazebo.

### Development

The development of the code for the robot can be an extensive process depending on the complexity of the robot. This development refers to the ROS2 network of information and computation that will run in order to guide the robots actions.

To be able to develop a robot effectively you should have a good understanding of the following:

- [ROS2](https://docs.ros.org/en/jazzy/)
- [Python](https://docs.python.org/3/)
- [C++](https://en.cppreference.com/w/)

Success:
If you have a robot that can preform the tasks you have set out for it then you have successfully developed a robot.

### Robot Simulation

For complex robots simulation can assist with the testing and training of robots. There are several simulators available for robotics development including open source and commercially available simulators. The following resources can help you through the robot simulation phase:

###### Success:
This phase goes along actively with testing the real robot as the robot is developed. Simulation success is accurately modeling the robot in many scenarios.

### Robot Testing

Real robot testing is what people typically imagine as a robotic developer but you knew there was a lot of work to get to this point. Real robot testing is crucial as it will bring to light bugs and issues then anything else which is annoying. The following resources can help the process of implementing a robotic system on to a physical robot and testing it.

###### Success:
If you have a robot that can preform the tasks you have set out for it then you have successfully developed a robot.

### Deployment

Congratulations, if you have a robot that has reliably preformed the tasks you have set out for it then you have successfully developed a robot. Now its time to deploy the robot, building tools for security, monitoring, and maintenance of the robot are parts of the deployment phase.

###### Success:
Success in this phase will typically require continued maintenance and updates to the robot as it continues to be more reliable and efficient. If you make it to this step with a project, pat yourself on the back, very few make it to this step. 
