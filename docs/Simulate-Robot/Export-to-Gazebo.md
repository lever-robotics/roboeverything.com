---
sidebar_position: 1
label: Export to Gazebo
---


# Export to Gazebo

From the URDF Creator, you can export a ROS2 simulation packages that integrates nicely with Gazebo. Gazebo is a powerful 3D simulation environment that allows you to simulate your robot in a virtual world, testing and training it before deploying it in the real world.

## Exporting to Gazebo

Follow the following command to take your robot from the URDF Creator to Gazebo:

1. Click the `Export` menu in the top left selection bar.
2. Select `Robot Package` and export the package.
3. The instructions on the export modal will be the most helpful as they will use the name of your robot but these can be adapted to the name of your robot.

:::note
URDF Creator will ensure your name of robot is compliant with ROS2 naming conventions. Meaning all spaces will be made into unserscores and all capital letters will be made lowercase. Aswell as special characters will be removed. Finally a number can not be the first character of the name.
:::

## Importing to ROS2 workspace

If you have not already [installed ROS Desktop](https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html) onto a computer that you will do development, please follow the following instructions to install on to a ubuntu environment. This can be done on a windows through a virtual machine, dual booting, WSL. Otherwise a dedicated ubuntu computer is recommended. 

1. If you already have a ROS2 workspace then navigate to the 'src' folder of your workspace. If you do not have a workspace open the terminal and run the following commands:
```bash
mkdir -p ~/ros2_ws/src
cd ~/ros2_ws/src
```

2. Copy the exported package into the 'src' folder of your workspace. This can be done through the terminal or through the file manager, make sure you unzip the downloaded folder beforehand. If you are using the terminal run the following command:
```bash
cp -r ~/Downloads/<robot-name>_description ~/ros2_ws/src
```

After placing the package the file structure should look like this:

![Idea Flow](./img/file_structure_dark.png#gh-dark-mode-only)
![Idea Flow](./img/file_structure_light.png#gh-light-mode-only)

3. Navigate to the root of your workspace and build the workspace. If you are not already in the root of your workspace run the following command:
```bash
cd ~/ros2_ws
```

:::caution
If you do not have Gazebo installed on your system run the following command to install it
:::

```bash
sudo apt install ros-<distro>-gazebo-ros
```
If there are other packages you need to install you can use rosdep to install them with the following command:
```bash
rosdep install --from-paths src --ignore-src -r -y
```
:::

4. Build the workspace with the following command:
```bash
colcon build --symlink-install --packages-select <robot-name>_description
```

:::note
Symlink install is used so when you make changes to existing files in your package you do not need to rebuild before running them again though if you add files it will need to be rebuilt. Packages select will select only your new package to be built and not other packages in your workspace.
:::

5. Source the workspace with the following command:
```bash
source install/setup.bash
```

6. Launch the robot in Gazebo with the following command:
```bash
ros2 launch <robot-name>_description <robot-name>.launch.py
```




