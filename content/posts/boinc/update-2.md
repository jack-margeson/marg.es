---
title: "[BOINC] Update #2: Server Shenanigans"
date: 2024-06-09T16:36:02-04:00
draft: false
params:
  display_related: true
  description: "This week, I attempt to get a custom BOINC server up for testing."
---

<br>

Hello, and welcome back to the third entry of the untitled BOINC project development blog series! This week, I focused on getting a custom BOINC server running in Docker.

I first started following the [BOINC project cookbook (with boinc-server-docker)](https://github.com/marius311/boinc-server-docker/blob/master/docs/cookbook.md#creating-your-own-project) that I had found during last week's research. I installed Docker on my personal laptop, which is running Arch Linux.

<img src="/on/posts/boinc/update-2/docker_install.png" alt="Docker running in the terminal" width="500">

Small detour--I installed the client program for BOINC on my machine as well. This will be how I connect to the Docker server for testing in order to see if I can start accepting jobs. I went ahead and put the BOINC client in "advanced mode" through the options, so if it looks different from a standard client install, that's why.

<img src="/on/posts/boinc/update-2/boinc_client.png" alt="BOINC client window" width="500">

I then went ahead and cloned the [marius311/boinc-server-docker](https://github.com/marius311/boinc-server-docker?tab=readme-ov-file) repository to my machine. I then used the Docker Compose tool to download the images specified in the repository and spun up an instance of them using `docker-compose up -d`.

<img src="/on/posts/boinc/update-2/docker_compose.png" alt="Docker running in the terminal" width="500">
<br>
<img src="/on/posts/boinc/update-2/docker_compose_up.png" alt="Using Docker Compose" width="500">

Running the command `docker volume list` will show me all of the volumes that the Docker Compose start-up script created on my machine. It looks like four volumes have been created for storing SQL data, being `boinc-server-docker_mysql`,`boinc-server-docker-project`,`boinc-server-docker-results`, and `boinc-server-docker-secrets`. This is where data regarding the BOINC installation, including results of work done, will be stored.

<img src="/on/posts/boinc/update-2/volumes.png" alt="Docker volumes" width="500">

With the containers running, I can now access `http://localhost:80/boincserver`, which is the name of the default test project. This web server is being hosted by the container that handles the Apache installation. Pretty neat!

<img src="/on/posts/boinc/update-2/localhost_boincserver.png" alt="Default landing page for the BOINC server" width="500">

One important thing to note however--originally, trying to access this webpage would give a 404 error. The fix for this issue was to execute `docker-compose exec apache bash` to get a shell on the Apache container, symlink the `boincserver.httpd.conf` file in the project directory to the `conf-enabled` directory for Apache, and then restart the server. I found this fix through GitHub user [Jordan-Hall's comment on this issue.](https://github.com/marius311/boinc-server-docker/issues/53#issuecomment-879718221)

I decided to go ahead and make a test account for this boincserver installation. Upon entering a username and password, a page telling me how to connect with my client appeared. I followed the instructions, and the client program for BOINC prompted me to log into the account I just created.

<img src="/on/posts/boinc/update-2/download_boinc.png" alt="Downloading BOINC client instructions" width="500">

<img src="/on/posts/boinc/update-2/login_client.png" alt="Client login prompt" width="500">

After signing in, I was able to see that I had successfully authenticated to the server from my client.

<img src="/on/posts/boinc/update-2/logged_in.png" alt="Client login success" width="500">

Small detour #2--I was having an issue where the web client stated that the boincserver had "gone into maintenance" every ten minutes or so, and I'd have to reboot the entire Docker service to get anything to work again. I did some debugging and found that Docker was killing the MySQL container due to it exceeding memory limits. I went ahead and manually provisioned 2GB of memory for the MySQL container by editing the Docker Compose file like so--it seems to have fixed the issue, but it's important to note if the issue ever comes up again.

<img src="/on/posts/boinc/update-2/memissue.png" alt="Client login success" width="500">

The next step was figuring out how to give my client something to do by generating a work unit on the server. I started by getting a bash shell into the container as before by running the command `docker-compose exec apache bash`. The cookbook guide that I had been referencing said that I could use the provided `boinc2docker_create_work.py` script to run a simple task. As touched upon in the last update, the boinc2docker project will convert Docker scripts into BOINC work units automatically. While I may or may not be using boinc2docker in the final project due to its lack of GPU support, I'll be using it here to check the operation of my server.

Within the bash shell I've opened on the Apache server, I _should_ just be able to run the command to add a unit of work with an Alpine Docker container that just prints something in Python--

`ERROR: client version 1.22 is too old. Minimum supported API version is 1.24, please upgrade your client to a newer version.`

--yeah that checks out. The main branch of `boinc-docker-server` is pretty outdated, and we're on a old version of the Docker client on the Apache container. I can go ahead and use the Docker install script at [get.docker.com](https://get.docker.com/) in the Dockerfile for the Apache image to update to a newer version of Docker, but first, I'll have to update the version of Debian that this project uses, since that's also outdated. Thankfully, a fork of the project by user [AenBleidd](https://github.com/AenBleidd/boinc-server-docker/tree/vko_fix_build) has modified Dockerfiles that update the Debian version from Stretch to Buster.

After updating the Dockerfiles to upgrade the Debian and Docker versions, we can re-build the server images with the command `docker-compose up --build`. After the build completes and the server is operational again, we can get our shell back and try running `bin/boinc2docker_create_work.py python:alpine python -c "print('Hello BOINC')"` to create a job.

Unfortunately... this still wasn't it. I continued to get errors trying to run the boinc2docker scripts. At this point, I've spent around 12-14 hours getting this server set up with Docker. I went looking online and found a community of [BOINC developers on Discord](https://discord.gg/qQYfRG64z4). As a hail mary, I joined to ask about some of the errors that I was getting, and if I was even going down the right rabbit hole.

To my surprise, a maintainer of the BOINC project got back to me fairly quickly. He let me know that the boinc-server-docker and boinc2docker projects had been developmentally stagnant for a few years, and there were a few issues with setting up a BOINC server this way. I was pointed in the direction of [this wiki article on the BOINC GitHub](<https://github.com/BOINC/boinc/wiki/Create-a-BOINC-server-(cookbook)>), which he claimed was the preferred and most current way of creating a BOINC server.

So, it's time for a pivot.

I went ahead and bit the bullet, starting from scratch with this newer guide. This entailed downloading Oracle VM VirtualBox and Xubuntu 22.04, a lightweight version of the Ubuntu distribution. After creating the virtual machine, I installed the three major things (previously represented by three different containers)--the BOINC server code, Apache, and MySQL.

After installation, I was left at the same point as before--I had a fully working test server running named "boincserver", and I signed up for a user account. The difference now is that I will be trying to issue tasks from an app directly built for BOINC, not through boinc2docker. I continued following the guide in order to [create an app](<https://github.com/BOINC/boinc/wiki/Create-a-BOINC-server-(cookbook)#create-an-app>), which uses a test program distributed with BOINC called `uppercase` that simply changes the case of characters in a file as a test of functionality.

After creating the app, I logged into the BOINC Manager client and connected to the server. Running `bin/start` on the server spun up all of the daemons needed for operation. So, now that I've gotten back to the previous point of failure, I was finally ready to try submitting a test job on the server. Using the command `bin/demo_submit uppsercase infile`, where `infile` was just a file containing a test string in lowercase, I submitted a job, which spawned a work unit.

Returning to the window that had my client open, I clicked update (and to be honest, held my breath). But, to my surprise:

<img src="/on/posts/boinc/update-2/task_running.png" alt="NICE!" width="500">

... the work unit was assigned to my client successfully, the work files downloaded, and my client posted results to the server after it was finished! I checked the logs via the administrator portal on the web server, and it indicated that results were produced and the job succeded. I then queried the results database by issuing the command `bin/demo_query` with the job name, and saw that my infile string `testinggg!!` was properly returned in uppercase as `TESTINGGG!!`.

<img src="/on/posts/boinc/update-2/results.png" alt="Results" width="500">

<img src="/on/posts/boinc/update-2/demo_query.png" alt="Demo query" width="500">

And with that, the full server-to-client communication stack is complete! There are a few more things that I have to do, such as creating a new, non-test project directory to house the final implementation--but that won't be hard now that I've confirmed the tech stack works. I wont bore anyone reading for much longer about the thousand small configuration updates to the server that I'll probably be playing with in the next few days. The next big step for the project now is to start developing an application that can create units of work, similar to the provided `uppercase` app.

This post was a long one--so thank you for reading! Please stay tuned, as next week, I'll be doing some _BOINC application development_, along with announcing whatever cool problem I've decided to research.
