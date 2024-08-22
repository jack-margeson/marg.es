---
title: "[BOINC] Update #7: a Conclusion (for now)"
date: 2024-08-22T15:18:54-04:00
draft: false
params:
  display_related: true
  description: "A wrap-up/summary post for the apriori@home summer research project."
  math: true
---

Hello, and welcome back to the eighth (and as for right now, final) entry of the apriori@home project development blog series! Today, I'll be sharing some general thoughts and things I learned during the duration of my summer research project. 

Let's go through all the goals that I set out to achieve:

- Learn the BOINC framework and how it functions in relation to volunteer computing 

I feel like I have successfully learned most of what it takes to create a successful volunteer computing project with the BOINC framework. While the final state of apriori@home leaves some desires in regard to full self-sufficiency, I believe that in it's current state, the project would be able to process smaller transactional databases with some level of human involvement server-side. For the time frame of 3 months, I am happy with what I was able to accomplish for the project.

- Create C/C++ programs that integrate with the BOINC framework

This is where I think I spent the most time with this project. While I was very familiar with C/C++ development, I had never used anything from the BOINC library before. The documentation of certain features in the BOINC API were sometimes lacking, so some of the elements of the programs I created were a mix of trial and error and asking for help through the community developer forums. 

- Create and maintain basic server architecture to support running an instance of BOINC

Server architecture is fun! I think in another life, one in which I didn't want to pursue software development, I would be a sysadmin. I really enjoyed getting the BOINC server application set up and managing/configuring pieces of the software for my new self-hosted home server. While in the beginning I tried a Docker implementation of BOINC that didn't work out, I think that experience was still worthwhile to have, as it made seeing the server fully operational that much more important to me.

- Use a database management software compatible with BOINC to store data pertaining to the volunteer computing workflow

Throughout the project, I've been interacting with the underlying SQL database of BOINC through phpMyAdmin, a tool (also hosted locally) written in PHP. I had never set up an instance of this software before, so getting to learn how to put that together mixed with remembering SQL syntax from my database courses was a good learning experience and topic review for me.

In general, I think that I got a lot of valuable experience through studying BOINC. I've gained a new perspective on the world of distributed computing and I believe that I'm better equipped now to handle development of projects that utilize that type of architecture. I'm also glad that I got to interact with the open source community that supports BOINC through talking to some of the lead maintainers of the project several times throughout the summer for help and even bug report contributions.

All in all, I had a really good time developing the apriori@home project! I'd like to again thank Professor Hawkins for agreeing to supervise this independent study. If I ever get the time, I'd like to potentially revisit this project down the line and see if I can add some of the extra functionality that I've been thinking about. You can expect more posts in the future about my endeavors if that ends up happening. 

For now though, if you have any questions, comments, or concerns, please feel free to reach out--my contact and socials are on the sidebar of this website. And as always, thank you for reading! 

\- Jack Margeson