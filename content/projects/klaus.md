---
title: "Klaus, a Discord secret santa bot"
date: 2024-05-07T13:17:19-04:00
draft: false
---

<br>

Repository link: [jack-margeson/klaus](https://github.com/jack-margeson/klaus)

## Project Overview

<br>

This was a personal project that I developed around 2019 for the purposes of solving a problem within my group of friends--we wanted to do a secret santa, but none of us wanted to sit out to facilitate.

The solution was a Discord bot. I got to work creating a bot using [discord.js](https://discord.js.org/), a popular framework at the time of release. Simply, users may use a command to enter their name into a list to be drawn and distributed to another member via direct message, anonymously, in secret santa fashion.

Additionally, an administrator in the server may designate themselves to be the "Head Elf" by assigning the role to their account. This role allows the user to access extra commands to help facilitate the event, such as setting a time and date to meet, removing names from the list, and "starting" the secret santa, which shuffles and assigns participants to each other.

Since the bot was created before the great [Discord bot architecture change of 2021](https://discord.com/blog/slash-commands-are-here), most of the features and standards exhibited in the code are outdated. While Klaus still works, since it doesn't use Discord's new slash command system, it is not a "verified" bot.

## Takeaways

<br>

I had a lot of fun programming this bot. It was the first Discord bot that I had ever worked on, and still the most feature rich/complete bot that I've made for another platform using an external API.

I think that if I were to do it over again, I would handle the project structure a little bit better. I'd move some of the functionality out into their own files, or even make custom class wrappers for some of the elements returned from the Discord API.

## Screenshots

<br>

<img src="/on/projects/klaus/help_dm.png" alt="Figure 1 comparison" width="500">
<img src="/on/projects/klaus/register.png" alt="Figure 1 comparison" width="500">
<img src="/on/projects/klaus/start.png" alt="Figure 1 comparison" width="500">
