---
title: "[BOINC] Update #0: an Introduction"
date: 2024-05-13T12:08:19-04:00
draft: false
params:
  display_related: true
  description: "An introduction to my Summer '24 independent study."
---

<br>

Hello! This post will be serving as an introduction to my ongoing independent study project through the University of Cincinnati. My advisor for this semester will be Professor Hawkins. The topic of interest: BOINC.

[BOINC](https://boinc.berkeley.edu/), or the Berkley Open Infrastructure for Network Computing, is a framework developed by the namesake college that assists in managing distributed computing efforts. Originally used for managing the [SETI@home](https://setiathome.berkeley.edu/) (Search for Extraterrestrial Intelligence) project, the BOINC software distributes "work units" to participating machines working towards a common goal in which it would take one computer thousands of years to complete on its own.

The neat part, or at least the part that I find neat, is that the BOINC framework is open source. This means that anyone could define their own distributed computing problem, supply code that generates work units, spin up a server to handle requests, and make their own "x@home" project.

Several projects have done this, actually. A cursory glance at the [BOINC Wikipedia page](https://en.wikipedia.org/wiki/Berkeley_Open_Infrastructure_for_Network_Computing#Projects) yields a list of independent/sponsored projects that have used the framework. Many have applications relating to science, math, and medicine.

A few notable examples:

- [ABC@home](https://www.math.leidenuniv.nl/~desmit/abc/index.php?set=1), performing thousands of calculations to find triples of the ABC conjecture
- [LHC@home](https://lhcathome.web.cern.ch/), which performed testing for the Large Hadron Collider in its search for the god particle
- [climateprediction.net](https://climateprediction.net/), a project designed to improve our climate prediction models in regards to climate change

Why do I care about BOINC? I learned that I had an interest in the world of distributed computing after a course I completed for my undergrad, being CS6068 Parallel Computing. Getting to run code through the multi-machine range provided by the [Ohio Supercomputer Center](https://www.osc.edu/) really got me thinking about how such a large amount of resources could be used to solve an "unsolvable" problem by the computing standards of a single machine.

All that being said, the reason for me choosing BOINC as the subject of my study this semester is pretty simple. I want to learn the framework and create my own distributed computing network in order to work towards solving some sort of problem.

So, here are the goals that I've laid out for myself this semester:

- Learn the BOINC framework and how it functions in relation to volunteer computing
- Create C/C++ programs that integrate with the BOINC framework
- Create and maintain basic server architecture to support running an instance of BOINC
- Use a database management software compatible with BOINC to store data pertaining to the volunteer computing workflow

I also aim to post weekly/biweekly updates on this site to document my findings, thought process, and procedure as I attempt to achieve the goals above. By the end of the independent study, I want to have a fully fledged and operational BOINC project set up and running for people to donate their computer resources to. What that project aims to answer, however, is still up in the air.

Thank you for reading! Please stay tuned, as next week, I'll be doing some _project planning_.
