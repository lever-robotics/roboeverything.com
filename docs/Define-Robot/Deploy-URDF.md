---
sidebar_position: 3
---

# Deploy URDF

In this section, we will learn how to deploy a URDF file from a ROS2 package.

<iframe width="560" height="315" src="https://www.youtube.com/embed/V_C8Cmv4fgk?si=uifNVty0BCsR8OdQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Introduction

The following steps will guide you through deploying a URDF file to a ROS2 package.

## Steps

1. Create a ROS2 workspace if you haven't already. You can follow the steps in the [Create a ROS2 Workspace](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Creating-A-Workspace/Creating-A-Workspace.html) tutorial.

2. In the src folder of the workspace unzip the robot description package downloaded from the URDF creator.

3. Build the workspace using the following command:

```bash
colcon build
```

4. Run the launch file in the robot description package that will launch the robot in Rviz:

```bash
ros2 launch <robot_description_package> <launch_file>
```