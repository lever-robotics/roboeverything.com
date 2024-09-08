---
sidebar_position: 3
---

# Joints

Joints are the elements that connect two links in a robot. They define the relative motion between the links.

![Joints](./img/joints.png)

The joint element in the URDF defines the kinematics and dynamics of the joint and also specifies the safety limits of the joint.

## Types of Joints

There are several types of joints including:

### Fixed

A fixed joint is a joint that does not move. It is used to connect two links that are rigidly attached to each other.

### Revolute

A revolute joint is a joint that allows rotation around a single axis. It is similar to a hinge joint.

### Prismatic

A prismatic joint is a joint that allows translation along a single axis.

### Continuous

A continuous joint is a joint that can rotate indefinitely.

### Planar

A planar joint is a joint that allows motion in a plane.

### Floating

A floating joint is a joint that allows motion in 6 degrees of freedom.



Listed below are optional attributes that can be added to the joint element:

