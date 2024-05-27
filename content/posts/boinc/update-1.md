---
title: "[BOINC] Update #1: Project Planning"
date: 2024-05-21T13:19:51-04:00
draft: true
params:
  display_related: true
  description: "Project planning, and a deep dive into the BOINC framework."
---

<br>

Welcome to the second entry in the untitled BOINC project development blog series! This week I focused primarily on doing research into the BOINC framework so that I could lay out all of the pieces of the puzzle together and come up with a coherent plan.

The first thing that I've done is create a GitHub repository for this project. Here, I plan to host project planning material as well as any source code that I create for the project. You can find a link to the repository here: [jack-margeson/boinc](https://github.com/jack-margeson/boinc)

I started my research endeavor with the [BOINC user manual](https://boinc.berkeley.edu/wiki/User_manual). The wiki contains multiple useful articles that helped me gain a basic understanding of the framework. One of the most useful pages, titled [How BOINC works](https://boinc.berkeley.edu/wiki/How_BOINC_works), lays out the basic data flow between an instance of a BOINC server and the clients connected to it:

<img src="https://boinc.berkeley.edu/w/images/1/14/Comm_simple3.png" alt="How BOINC works" width="700">

<br>
<br>

While the user wiki is helpful for understanding the basics, in my experience, it didn't provide much about the logistics behind the server portion of the BOINC framework, or how to get an instance running. For this, I turned to a documentation page on the BOINC website, titled [Setting up a BOINC server](https://boinc.berkeley.edu/trac/wiki/ServerIntro). It was here that I learned that a set of Docker images were available for use, hosted on [GitHub from user marius311](https://github.com/marius311/boinc-server-docker?tab=readme-ov-file).

A quick introduction to Docker--essentially, it is a program that allows you to create virtual environments that can be saved as a list of initialization instructions. When you want to run a program, instead of getting your local machine's environment set up with all the dependencies and libraries, you can instead invoke a "container" based upon a Docker image to create an environment in which you know the program is fit to run. It is a very useful and neat technology, and it just so happens that a series of Docker images have been created to make the process of hosting a BOINC server instance easier.

Alongside these Docker images is some great documentation about using the service to host and run your own BOINC project. The guide, titled [BOINC project cookbook (with boinc-server-docker)](https://github.com/marius311/boinc-server-docker/blob/master/docs/cookbook.md#creating-your-own-project), has a great explanation of the architecture of the Docker images and which services handle certain responsibilities. Within this documentation is a reference to [boinc2docker](https://github.com/marius311/boinc2docker), another project that aims to create Docker tools to create easily distributed client software to users. However, I've decided against using this secondary project due to limitations on GPU usage through Docker containers. In my project, I hope to allow for the option for client computers to run processing on the GPU, which would not be possible using boinc2docker currently. I may change my mind on this later, depending on the problem chosen.

I've created a project flowchart linking together the majority of services, platforms, and data/execution processes required for this project. You can view the flowchart below. Clicking the image will bring you to the hosted version on GitHub for higher quality. I've also put together a tentative Gantt chart outlining what I believe to be a realistic development time frame for the remainder of the semester, which you can also view below.

As always, thank you for reading! Please stay tuned, as next week, I'll be doing some _hello world server startup_.

<a href="https://github.com/jack-margeson/boinc/blob/main/project_planning/boinc.png" target="_blank">
  <img src="https://github.com/jack-margeson/boinc/blob/main/project_planning/boinc.png?raw=true" alt="Project flowchart" width="700">
</a>

<a href="https://github.com/jack-margeson/boinc/blob/main/project_planning/project_gantt.png" target="_blank">
  <img src="https://github.com/jack-margeson/boinc/blob/main/project_planning/project_gantt.png?raw=true" alt="Project Gantt chart" width="700">
</a>
