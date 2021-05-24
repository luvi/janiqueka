---
templateKey: blog-post
title: Building caricovidmap.com, Part 1
date: 2021-05-24T16:04:06.565Z
description: Building caricovidmap was a project that just fell into my lap, but
  continues to be one of the most fulfilling projects I've worked on.
featuredpost: true
featuredimage: /img/screenshot-2021-04-26-at-12.03.55.png
tags:
  - open source
  - software
  - mapping
---
caricovidmap.com is a website that centralizes Caribbean information related to the COVID-19 pandemic, and now the vaccination roll out. This project was born after being contacted by a journalist who was lamenting the lack of Caribbean focused COVID-19 data resources. He wondered if it would be possible to use Johns Hopkins dataset to create a Caribbean focused map, and the very night I developed a Proof Of Concept (POC) to show the journalist. 

What started out as a simple POC has now grown into a year long project that I work on in my spare time, that has evolved and shifted to suit the changing needs of the pandemic.

## Deciding on the tech stack

React seemed like a natural choice for the POC, even as I was eager to try out the framework since I had just picked up a role in my current company in April as a frontend engineer. I actually hadnt really worked with the framework before, aside from experimenting with React Native for an app I am building.

I had the data endpoint for the Johns Hopkins data set, and had decided to go with React for the frontend. Given that this was just meant to be a quick mockup of the possibilities. I decided against a backend where I would persist the information collected from Johns Hopkins.

> Once I had the data endpoint, all that was necessary to do was to iterate over Caribbean countries

In the end, I ended up deploying via Netlify which would track and autodeploy the code on the master branch of my Github repository. 

## Challenges

For the first iteration of the map, I faced some challenges with the parsing the data. During a live coding session on twitch, A fellow Caribbean engineer pointed out that I could just use lodash to do some of the things that I was doing manually. \
\
Additionally, I had to do some cleanup and manipulation of the Johns Hopkins data, as for example they mistakenly had the same coordinates for Belize and Barbados. In a second blog post I will dive into more technical depth about parts of the codebase, how requirements evolved over the course of the pandemic, and about the decision to make this an open source project.