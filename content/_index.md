# About

<br/>

[![Netlify Status](https://api.netlify.com/api/v1/badges/25fab077-8c3f-4b1d-b78a-cfbaf0fb88b5/deploy-status)](https://app.netlify.com/sites/margeson/deploys)
![GitHub repo size](https://img.shields.io/github/repo-size/jack-margeson/marg.es)
![GitHub Repo stars](https://img.shields.io/github/stars/jack-margeson/marg.es)

<img id="imgAbout" src="jack.jpg" alt="Jack Margeson" width="250" style="float:left;padding-right:15px;" onclick="imgAboutClicked()">

Hello! My name is Jack Margeson. I'm a student at the [University of Cincinnati](https://www.uc.edu/), concurrently working on my bachelor's and master's degrees in Computer Science through the ACCEND program.

Currently, I'm a full-time software developer for [Siemens](https://plm.sw.siemens.com/en-US/), working on product lifecycle managment.

I've been a Boy Scout all my life, and achieved the highest rank of Eagle Scout in September, 2019.

In my free time, I like to make all sorts of cool things, in all sorts of different mediums: glass-working, woodworking, metalworking, fabric-working, embroidery, 3D printing, hobby electronics, and more.
As a maker, I serve as leadership for a local non-profit makerspace in Cincinnati called [Hive13](https://hive13.org/). You can check out my wiki page [here](https://wiki.hive13.org/view/User:Jackmargeson).

# Site

<br/>

This site is part portfolio of my work and part blog posts.

Under the projects tab, you can find many of my past code repositories for both school and personal endeavours alongside write-ups on the project if applicable.

The blog section of this site is dedicated to documenting in-progress reports for ongoing projects, posts about topics that I might find interesting, experiences that I've had recently, or really anything else that comes to mind.

<script>
    var count = 0;

    function imgAboutClicked() {
        count = count + 1;
        if (count >= 3) {
            console.log(document.getElementById("imgAbout"));
            document.getElementById("imgAbout").getAttribute("src") == "jack.jpg" ? 
                document.getElementById("imgAbout").setAttribute("src", "jack_baby.jpg") : 
                document.getElementById("imgAbout").setAttribute("src", "jack.jpg")
            count = 0;
        }
    }
</script>
