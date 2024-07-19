---
title: "[BOINC] Update #3: The Apriori Algorithm"
date: 2024-06-21T11:45:55-04:00
draft: false
params:
  display_related: true
  description: "This week, I talk about the Apriori algorithm."
  math: true
---

<br>

Hello, and welcome back to the fourth entry of the soon-to-be-titled BOINC project development blog series! This week, I want to introduce you to the problem that I've chosen to work on.

In data science, there is a technique that researchers utilize called "[itemset mining](https://en.wikipedia.org/wiki/Sequential_pattern_mining#Itemset_mining)". The goal of this technique is to find relation between sets of items, and it's most often used in the commerce industry in order to associate a set of products with another. For example, if a customer walked into the grocery store and picked up the items $\\\{\text{eggs, milk, bread}\\\}$, the results of itemset mining may tell us that the customer will likely also add $\\\{\text{cinnamon, sugar}\\\}$ to their cart (mmm... french toast). This data could be potentially very useful to the management at the grocery store for several reasons, including grouping aisles together based on commonly bought items and their relational sets so that shopping is more efficient and profitable.

There are several algorithms that can assist data scientists in performing itemset mining. One of these algorithms will be the focus of my distributed computing project--the Apriori algorithm. Originally described in [Fast Discovery of Association Rules (Agrawal, Rakesh, et al.)](https://www.cs.bme.hu/~marti/adatbanya/apriori_hashtree.pdf), this algorithm takes a list of transactions and outputs frequent item sets based on occurrences.

**Here's a breakdown of the algorithm.** We'll start with defining a set of items, one for each unique item in the transactional database, $I=\\\{i_1,i_2,\dots i_n\\\}$. We have a transactional database $T$, which is a list of k-itemsets (a set of items containing $k$ items), such as $T = [\\\{i_1\\\}, \\\{i_1,i_2\\\},\\\{i_1, i_4\\\},\\\{i_3,i_2\\\}]$. And finally, we also have the constant $C$, which is the relevancy threshold (in this example, let's set $C=2$).

The overall idea is to generate _candidate sets_, which is a list of sets denoted by $C_k$, where $k$ is the number of items in each set. We will repeat this process until we run out of itemsets that match the relevancy threshold that we have set. The first step in the algorithm is to generate $C_1$, which is the first candidate set. In our example, $C_1=[\\\{i_1\\\}, \\\{i_2\\\},\\\{i_3\\\},\\\{i_4\\\}]$. We then perform iteration through our transactional database--for each set $t_i$ in $T$ and each set $c_i$ in $C_k$, count the instances in which $c_i$ is a subset of $t_i$. For our example, we get the following:

| Itemsets ($C_1$) | Support ($\vert c_i \subseteq t_i\vert$) |
| ---------------- | ---------------------------------------- |
| $\\\{i_1\\\}$    | 3                                        |
| $\\\{i_2\\\}$    | 2                                        |
| $\\\{i_3\\\}$    | 1                                        |
| $\\\{i_4\\\}$    | 1                                        |

We can see now that the only two itemsets that pass our minimum support threshold $C=2$ are $\\\{i_1\\\}$ and $\\\{i_2\\\}$. With this information, we construct a new set of items consisting of only items from the itemsets that passed the support threshold, so $I_2=\\\{i_1,i_2\\\}$. Then we run candidate set generation again for the next $k$ level, so in our case $C_2=[\\\{1,2\\\}]$, which only has one candidate set. Again iterating through our transactional database, we get:

| Itemsets ($C_2$)   | Support ($\vert c_i \subseteq t_i\vert$) |
| ------------------ | ---------------------------------------- |
| $\\\{i_1, i_2\\\}$ | 1                                        |

... and we see that we no longer have any itemsets that satisfy our support threshold of $C=2$. Therefore, we have finished performing the Apriori algorithm.

Apologies for the math dump! However, it is important to understand the theory of the algorithm to evaluate it. Here's why--the example that I just gave above has four items. According to The Food Industry Association, the [average number of items carried in a supermarket is around ~30,000](https://www.fmi.org/our-research/food-industry-facts). In the worse case performance of Apriori, we'd have to generate $2^{|n|}$ sets, where $n$ is the total number of unique items in the transactional database. We'd also have to check those generated sets against the transactional database, meaning at the worst, time and space complexity for Apriori is $\text{O}(2^{|n|}).$ $2^4$ is manageable--doable by hand even. $2^{30,000}$ is slightly less doable by hand, considering we probably haven't named the number that it evaluates to.

So, what can we do about this? Pruning, or the idea of removing non-supportive sets before generating a new item list and new itemsets (like we did above) helps cut down on complexity given that some items are just less popular. Having a higher threshold value for what is considered frequent is another way to cut down on the number of items. However, for large item databases, the Apriori algorithm is just incredibly difficult for one singular computer to run.

OH! That's why we've been talking about this. I almost forgot this was about a distributed computing project. This is the problem that I would like to focus on--creating a distributed application that spreads the workload of the Apriori algorithm to multiple computers in order to research association between larger item sets. In keeping with tradition of distributed computing projects, I've decided to name the program `apriori@home`.

Behind the scenes, I've gone ahead and created a project with the new name on the BOINC server that was set up last week. I've now begun development on the application that will drive this process using the BOINC API--more information on the actual programming will be released shortly in the next blog post (cause this one is getting a little long).

But one more piece of information that I'd like to share before wrapping up this post--I've found a dataset that will be good for testing the system. It is a list of transactions from a retail store, [which can be found here](https://archive.ics.uci.edu/dataset/352/online+retail). I've downloaded this dataset and cleaned it up using Python to create a formatted transactional database--you can view the code as well as the dataset on [this project's GitHub page](https://github.com/jack-margeson/boinc). It consists of 25,900 transactions--so I better grab a larger sheet of paper and some more pencils.

And with that, thank you for reading! Please stay tuned, as next week, I'll be doing some
_BOINC API application debugging, most likely_.
