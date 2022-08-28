---
title: Gregoire Cousin
published: true
datePublished: 1594425078471
author: Gregoire Cousin
tags:
  - Gregoire Cousin
authorPhoto: /img/img1.jpg
bannerPhoto: /img/img1.jpg
thumbnailPhoto: /img/img1.jpg
canonicalUrl: https://bloggy.dev/blog/gregcousin
description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
---

### Table of content

1 Introduction
2 Prerequisite
3 Why you should Dockerize your application



#### Introduction
I decided to write this article because I noticed, many tech companies are not using docker for local development, only (in some cases) with their CI/ CD. So today, I will show you how to create a Docker image of a Spring boot application and run it in a Docker container.
So that you don't get lost, I'll start by reminding you what Docker and its containers are. Then you will also see how to create a Docker image of your application with a Dockerfile and with Docker compose (which is the version I recommend) and finally test that your application is well deployed and usable via the Docker container.

#### Prerequisite
- Fundamentals of Java
- Beginner level on Docker
- Basic of command line

####Why you should Dockerize your application?
When you work on an enterprise app, you realize it must respond quickly to changing conditions. That means both easy scaling to meet demand and easy updating to add new features as the business requires.
Docker containers make it easy for you to put new versions of software, with new business features, into production quickly and to quickly roll back to a previous version if you need to. Also running application in containers can also bring you plenty of benefits like : <br>

*Portability, Performance, Agility, Isolation, and Scalability*
Now, let me give you some reminders about the Docker Jargon

==Docker==

According to their official [official documentation](#heading-ids) , Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure, so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your apps.

==Container==
A container is a runnable instance of an image. You can create, start, stop, move, or delete a container using the Docker API or CLI. You can connect a container to one or more networks, attach storage to it, or even create a new image based on its current state.

![The San Juan Mountains are beautiful!](/public/img/docgripcal.png "docker grapg")

How Dockerfile works

==Docker Compose==
Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.

```json

{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}

```

```html

<dependency>
	<groupId>com.h2database</groupId>
	<artifactId>h2</artifactId>
	<scope>runtime</scope>
</dependency>

```
To test that your application works, once you will run it inside your container, add this REST Method, in your Application class. (It’s not the best way to operate, but this tutorial is focused on Docker, not Java)


#### Dockerize your Spring boot application using Docker Compose

If you don’t want to pass the port option in the command line or if you want to run your container as a service, you can create a Docker compose file

```
version: '3.8'
services:
  spring-app:
    build: .
    container_name: 'demo-spring-app'
    restart: always
    ports:
      - '8080:8080'

```
The really valuable idea in this principle is that it's extremely handy if you can clearly separate methods that change state from those that don't. This is because you can use queries in many situations with much more confidence, introducing them anywhere, changing their order. In another side, you have to be more careful with commands.
