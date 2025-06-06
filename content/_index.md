# About

<br/>

[![Netlify Status](https://api.netlify.com/api/v1/badges/25fab077-8c3f-4b1d-b78a-cfbaf0fb88b5/deploy-status)](https://app.netlify.com/sites/margeson/deploys)
![GitHub repo size](https://img.shields.io/github/repo-size/jack-margeson/marg.es)
![GitHub Repo stars](https://img.shields.io/github/stars/jack-margeson/marg.es)

<img id="imgAbout" src="jack.jpg" alt="Jack Margeson" width="250" style="float:left;padding-right:15px;" onclick="imgAboutClicked()">

Hello! My name is Jack Margeson. I’m a computer scientist and engineer with a passion for problem solving and creating efficient solutions. I graduated from the [University of Cincinnati](https://www.uc.edu/) with my Master of Engineering in Computer Science and was honored to be selected as the Best Co-op Performer for my graduating class.

Currently, I work at [Siemens Digital Industries Software](https://www.sw.siemens.com/en-US/) as a Software Engineer, helping develop the [NX CAD](https://plm.sw.siemens.com/en-US/nx/cad-online/) suite.

Outside of tech, I’m a lifelong Eagle Scout (achieved 2019) and an obsessive maker. Whether it’s glassworking, metal fabrication, 3D printing, or hobby electronics, I’m always working on a new project. I believe the best solutions come from blending technical skill with hands-on creativity.

As a maker, I serve as leadership for a local non-profit makerspace in Cincinnati called [Hive13](https://hive13.org/). You can check out my wiki page [here](https://wiki.hive13.org/view/User:Jackmargeson).

# Site

<br/>

This site is part portfolio of my work and part blog posts.

Under the projects tab, you can find many of my past code repositories for both my past university projects and personal endeavors alongside write-ups on the project if applicable.

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
