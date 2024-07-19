---
title: "[BOINC] Update #4: Programming, Probably"
date: 2024-07-19T12:21:20-04:00
draft: false
params:
  display_related: true
  description: "This 'week', I do some programming and finalize the server setup."
  math: true
---

<br>

Hello, and welcome back to the fifth entry of the apriori@home project development blog series! This 'week', I've been doing some programming for the BOINC application, as well as finalizing the server setup.

First off, I want to apologize for my lack of updates for a while! I've been very busy at work and with my personal life, so I haven't had time to sit down and write this update. I did however, have time to work on the project--and I'll be updating you all on what's been done since I've last posted.

First off, I'd like to announce that the project has been officially hosted at a permanent address! You can visit https://apriori.group to sign up for an account with the project as of today (although don't expect work units yet--more on that later).

There was a lot of behind the scenes work that went into hosting. For one, I decided to go the complicated route and procured a used tower off of eBay in order to set up my own home server. This aligned with one of the main goals of my independent study this semester--I wanted to figure out how every process of the BOINC platform worked, and if I was going to achieve this, it had to involve doing all the server work and networking from scratch, and not relying on hosting somewhere in the cloud.

I'll spare you the mind-numbingly boring (well, boring to non-nerds--I found it pretty fun) details of installing, configuring, and debugging Apache, PHP, and my network settings. I did however encounter a bug in the BOINC web UI regarding the version of PHP that I was using, [and after a report to the maintainers on GitHub](https://github.com/BOINC/boinc/issues/5692), the problem was solved within the day. Huge shout out to the BOINC team for the quick turn around!

Besides the server finalization, I've began the process of developing code in C++ that utilizes the BOINC API for computing. The development flow was pretty straightforward--there are several example programs packaged with the BOINC source code that make it easier to understand what parts of your program need to interact with the API. For example, input and output files are handled completely by the API, specifically calls to `boinc_resolve_filename()`. Another example of a small conversion is the fact that programs are now to end with `boinc_finish(0)` instead of returning 0 like a standard C++ program--this is because when BOINC jobs are created from applications, they're spun off as fork processes--and this is how the BOINC API keeps track of process completion.

So far, I have written one part of the Apriori algorithm, that being candidate generation. [You can view the source code for all applications on this project's GitHub repository](https://github.com/jack-margeson/boinc/tree/main/src). I first started off with creating a C++ program that completes candidate generation given a list of inputs from a file and the constant $k$, representing the size of the itemsets generated. The program then outputs the candidates that it has generated into a separate file.

As I touched upon before, converting this program to use the BOINC API was not terribly difficult--and a second version of the program, `generate_candidates_boinc.cpp` was created. I was able to get a build of this application running on the BOINC instance after creating an application entry for it in the system. Soon after, I was also able to create a work unit from this code, send it to my other computer (running the BOINC client) for testing, and receive the output file in response. Nice!

Alright, so what's next? Well, I've begun work on what is to be the main piece of code for this project--the work generator. Essentially, a [work generator](https://github.com/BOINC/boinc/wiki/WorkGeneration) is a program for a BOINC project that uses the API to create work units/jobs programmatically. In the case of apriori@home, I want the work generator to parse a file containing thousands of items and break them down into smaller item sets. Each item set will be stored in it's own file, and processing each file will then be created as work units for the project. Once all work units are finished, the work generator will then compile results in $O(n)$ time, prune non-supportive sets, and then repeat the process until all sets have been analyzed, completing the Apriori algorithm.

But for now, that's all the updates that I have. Thank you for reading! Please stay tuned, as next week, I'll be going over some _work generation code_.
