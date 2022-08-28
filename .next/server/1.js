exports.ids = [1];
exports.modules = {

/***/ "./md/blog/django-crash-course.md":
/*!****************************************!*\
  !*** ./md/blog/django-crash-course.md ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"---\\r\\ntitle: Karim Banjama\\r\\npublished: true\\r\\ndatePublished: 1594425078471\\r\\nauthor: Gregoire Cousin\\r\\ntags:\\r\\n  - Gregoire Cousin\\r\\nauthorPhoto: /img/img4.jpg\\r\\nbannerPhoto: /img/img4.jpg\\r\\nthumbnailPhoto: /img/img4.jpg\\r\\ncanonicalUrl: https://bloggy.dev/blog/gregcousin\\r\\ndescription: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\\r\\n\\r\\n---\\r\\n\\r\\n### Table of content\\r\\n\\r\\n1 Introduction\\r\\n2 Prerequisite\\r\\n3 Why you should Dockerize your application\\r\\n\\r\\n\\r\\n\\r\\n#### Introduction\\r\\nI decided to write this article because I noticed, many tech companies are not using docker for local development, only (in some cases) with their CI/ CD. So today, I will show you how to create a Docker image of a Spring boot application and run it in a Docker container.\\r\\nSo that you don't get lost, I'll start by reminding you what Docker and its containers are. Then you will also see how to create a Docker image of your application with a Dockerfile and with Docker compose (which is the version I recommend) and finally test that your application is well deployed and usable via the Docker container.\\r\\n\\r\\n#### Prerequisite\\r\\n- Fundamentals of Java\\r\\n- Beginner level on Docker\\r\\n- Basic of command line\\r\\n\\r\\n#### Why you should Dockerize your application?\\r\\nWhen you work on an enterprise app, you realize it must respond quickly to changing conditions. That means both easy scaling to meet demand and easy updating to add new features as the business requires.\\r\\nDocker containers make it easy for you to put new versions of software, with new business features, into production quickly and to quickly roll back to a previous version if you need to. Also running application in containers can also bring you plenty of benefits like : <br>\\r\\n\\r\\n*Portability, Performance, Agility, Isolation, and Scalability*\\r\\nNow, let me give you some reminders about the Docker Jargon\\r\\n\\r\\n==Docker==\\r\\n\\r\\nAccording to their official [official documentation](#heading-ids) , Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure, so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your apps.\\r\\n\\r\\n==Container==\\r\\nA container is a runnable instance of an image. You can create, start, stop, move, or delete a container using the Docker API or CLI. You can connect a container to one or more networks, attach storage to it, or even create a new image based on its current state.\\r\\n\\r\\n![The San Juan Mountains are beautiful!](/public/img/docgripcal.png \\\"docker grapg\\\")\\r\\n\\r\\nHow Dockerfile works\\r\\n\\r\\n==Docker Compose==\\r\\nCompose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.\\r\\n\\r\\n```json\\r\\n\\r\\n{\\r\\n  \\\"firstName\\\": \\\"John\\\",\\r\\n  \\\"lastName\\\": \\\"Smith\\\",\\r\\n  \\\"age\\\": 25\\r\\n}\\r\\n\\r\\n```\\r\\n\\r\\n```html\\r\\n\\r\\n<dependency>\\r\\n\\t<groupId>com.h2database</groupId>\\r\\n\\t<artifactId>h2</artifactId>\\r\\n\\t<scope>runtime</scope>\\r\\n</dependency>\\r\\n\\r\\n```\\r\\nTo test that your application works, once you will run it inside your container, add this REST Method, in your Application class. (It’s not the best way to operate, but this tutorial is focused on Docker, not Java)\\r\\n\\r\\n\\r\\n#### Dockerize your Spring boot application using Docker Compose\\r\\n\\r\\nIf you don’t want to pass the port option in the command line or if you want to run your container as a service, you can create a Docker compose file\\r\\n\\r\\n```\\r\\nversion: '3.8'\\r\\nservices:\\r\\n  spring-app:\\r\\n    build: .\\r\\n    container_name: 'demo-spring-app'\\r\\n    restart: always\\r\\n    ports:\\r\\n      - '8080:8080'\\r\\n\\r\\n```\\r\\nThe really valuable idea in this principle is that it's extremely handy if you can clearly separate methods that change state from those that don't. This is because you can use queries in many situations with much more confidence, introducing them anywhere, changing their order. In another side, you have to be more careful with commands.\\r\\n\\r\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tZC9ibG9nL2RqYW5nby1jcmFzaC1jb3Vyc2UubWQ/ZDdhZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFlLDZxR0FBOG1HLGtGQUFrRiw0b0NBQTRvQyIsImZpbGUiOiIuL21kL2Jsb2cvZGphbmdvLWNyYXNoLWNvdXJzZS5tZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiLS0tXFxyXFxudGl0bGU6IEthcmltIEJhbmphbWFcXHJcXG5wdWJsaXNoZWQ6IHRydWVcXHJcXG5kYXRlUHVibGlzaGVkOiAxNTk0NDI1MDc4NDcxXFxyXFxuYXV0aG9yOiBHcmVnb2lyZSBDb3VzaW5cXHJcXG50YWdzOlxcclxcbiAgLSBHcmVnb2lyZSBDb3VzaW5cXHJcXG5hdXRob3JQaG90bzogL2ltZy9pbWc0LmpwZ1xcclxcbmJhbm5lclBob3RvOiAvaW1nL2ltZzQuanBnXFxyXFxudGh1bWJuYWlsUGhvdG86IC9pbWcvaW1nNC5qcGdcXHJcXG5jYW5vbmljYWxVcmw6IGh0dHBzOi8vYmxvZ2d5LmRldi9ibG9nL2dyZWdjb3VzaW5cXHJcXG5kZXNjcmlwdGlvbjogTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay5cXHJcXG5cXHJcXG4tLS1cXHJcXG5cXHJcXG4jIyMgVGFibGUgb2YgY29udGVudFxcclxcblxcclxcbjEgSW50cm9kdWN0aW9uXFxyXFxuMiBQcmVyZXF1aXNpdGVcXHJcXG4zIFdoeSB5b3Ugc2hvdWxkIERvY2tlcml6ZSB5b3VyIGFwcGxpY2F0aW9uXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuIyMjIyBJbnRyb2R1Y3Rpb25cXHJcXG5JIGRlY2lkZWQgdG8gd3JpdGUgdGhpcyBhcnRpY2xlIGJlY2F1c2UgSSBub3RpY2VkLCBtYW55IHRlY2ggY29tcGFuaWVzIGFyZSBub3QgdXNpbmcgZG9ja2VyIGZvciBsb2NhbCBkZXZlbG9wbWVudCwgb25seSAoaW4gc29tZSBjYXNlcykgd2l0aCB0aGVpciBDSS8gQ0QuIFNvIHRvZGF5LCBJIHdpbGwgc2hvdyB5b3UgaG93IHRvIGNyZWF0ZSBhIERvY2tlciBpbWFnZSBvZiBhIFNwcmluZyBib290IGFwcGxpY2F0aW9uIGFuZCBydW4gaXQgaW4gYSBEb2NrZXIgY29udGFpbmVyLlxcclxcblNvIHRoYXQgeW91IGRvbid0IGdldCBsb3N0LCBJJ2xsIHN0YXJ0IGJ5IHJlbWluZGluZyB5b3Ugd2hhdCBEb2NrZXIgYW5kIGl0cyBjb250YWluZXJzIGFyZS4gVGhlbiB5b3Ugd2lsbCBhbHNvIHNlZSBob3cgdG8gY3JlYXRlIGEgRG9ja2VyIGltYWdlIG9mIHlvdXIgYXBwbGljYXRpb24gd2l0aCBhIERvY2tlcmZpbGUgYW5kIHdpdGggRG9ja2VyIGNvbXBvc2UgKHdoaWNoIGlzIHRoZSB2ZXJzaW9uIEkgcmVjb21tZW5kKSBhbmQgZmluYWxseSB0ZXN0IHRoYXQgeW91ciBhcHBsaWNhdGlvbiBpcyB3ZWxsIGRlcGxveWVkIGFuZCB1c2FibGUgdmlhIHRoZSBEb2NrZXIgY29udGFpbmVyLlxcclxcblxcclxcbiMjIyMgUHJlcmVxdWlzaXRlXFxyXFxuLSBGdW5kYW1lbnRhbHMgb2YgSmF2YVxcclxcbi0gQmVnaW5uZXIgbGV2ZWwgb24gRG9ja2VyXFxyXFxuLSBCYXNpYyBvZiBjb21tYW5kIGxpbmVcXHJcXG5cXHJcXG4jIyMjIFdoeSB5b3Ugc2hvdWxkIERvY2tlcml6ZSB5b3VyIGFwcGxpY2F0aW9uP1xcclxcbldoZW4geW91IHdvcmsgb24gYW4gZW50ZXJwcmlzZSBhcHAsIHlvdSByZWFsaXplIGl0IG11c3QgcmVzcG9uZCBxdWlja2x5IHRvIGNoYW5naW5nIGNvbmRpdGlvbnMuIFRoYXQgbWVhbnMgYm90aCBlYXN5IHNjYWxpbmcgdG8gbWVldCBkZW1hbmQgYW5kIGVhc3kgdXBkYXRpbmcgdG8gYWRkIG5ldyBmZWF0dXJlcyBhcyB0aGUgYnVzaW5lc3MgcmVxdWlyZXMuXFxyXFxuRG9ja2VyIGNvbnRhaW5lcnMgbWFrZSBpdCBlYXN5IGZvciB5b3UgdG8gcHV0IG5ldyB2ZXJzaW9ucyBvZiBzb2Z0d2FyZSwgd2l0aCBuZXcgYnVzaW5lc3MgZmVhdHVyZXMsIGludG8gcHJvZHVjdGlvbiBxdWlja2x5IGFuZCB0byBxdWlja2x5IHJvbGwgYmFjayB0byBhIHByZXZpb3VzIHZlcnNpb24gaWYgeW91IG5lZWQgdG8uIEFsc28gcnVubmluZyBhcHBsaWNhdGlvbiBpbiBjb250YWluZXJzIGNhbiBhbHNvIGJyaW5nIHlvdSBwbGVudHkgb2YgYmVuZWZpdHMgbGlrZSA6IDxicj5cXHJcXG5cXHJcXG4qUG9ydGFiaWxpdHksIFBlcmZvcm1hbmNlLCBBZ2lsaXR5LCBJc29sYXRpb24sIGFuZCBTY2FsYWJpbGl0eSpcXHJcXG5Ob3csIGxldCBtZSBnaXZlIHlvdSBzb21lIHJlbWluZGVycyBhYm91dCB0aGUgRG9ja2VyIEphcmdvblxcclxcblxcclxcbj09RG9ja2VyPT1cXHJcXG5cXHJcXG5BY2NvcmRpbmcgdG8gdGhlaXIgb2ZmaWNpYWwgW29mZmljaWFsIGRvY3VtZW50YXRpb25dKCNoZWFkaW5nLWlkcykgLCBEb2NrZXIgaXMgYW4gb3BlbiBwbGF0Zm9ybSBmb3IgZGV2ZWxvcGluZywgc2hpcHBpbmcsIGFuZCBydW5uaW5nIGFwcGxpY2F0aW9ucy4gRG9ja2VyIGVuYWJsZXMgeW91IHRvIHNlcGFyYXRlIHlvdXIgYXBwbGljYXRpb25zIGZyb20geW91ciBpbmZyYXN0cnVjdHVyZSwgc28geW91IGNhbiBkZWxpdmVyIHNvZnR3YXJlIHF1aWNrbHkuIFdpdGggRG9ja2VyLCB5b3UgY2FuIG1hbmFnZSB5b3VyIGluZnJhc3RydWN0dXJlIGluIHRoZSBzYW1lIHdheXMgeW91IG1hbmFnZSB5b3VyIGFwcHMuXFxyXFxuXFxyXFxuPT1Db250YWluZXI9PVxcclxcbkEgY29udGFpbmVyIGlzIGEgcnVubmFibGUgaW5zdGFuY2Ugb2YgYW4gaW1hZ2UuIFlvdSBjYW4gY3JlYXRlLCBzdGFydCwgc3RvcCwgbW92ZSwgb3IgZGVsZXRlIGEgY29udGFpbmVyIHVzaW5nIHRoZSBEb2NrZXIgQVBJIG9yIENMSS4gWW91IGNhbiBjb25uZWN0IGEgY29udGFpbmVyIHRvIG9uZSBvciBtb3JlIG5ldHdvcmtzLCBhdHRhY2ggc3RvcmFnZSB0byBpdCwgb3IgZXZlbiBjcmVhdGUgYSBuZXcgaW1hZ2UgYmFzZWQgb24gaXRzIGN1cnJlbnQgc3RhdGUuXFxyXFxuXFxyXFxuIVtUaGUgU2FuIEp1YW4gTW91bnRhaW5zIGFyZSBiZWF1dGlmdWwhXSgvcHVibGljL2ltZy9kb2NncmlwY2FsLnBuZyBcXFwiZG9ja2VyIGdyYXBnXFxcIilcXHJcXG5cXHJcXG5Ib3cgRG9ja2VyZmlsZSB3b3Jrc1xcclxcblxcclxcbj09RG9ja2VyIENvbXBvc2U9PVxcclxcbkNvbXBvc2UgaXMgYSB0b29sIGZvciBkZWZpbmluZyBhbmQgcnVubmluZyBtdWx0aS1jb250YWluZXIgRG9ja2VyIGFwcGxpY2F0aW9ucy4gV2l0aCBDb21wb3NlLCB5b3UgdXNlIGEgWUFNTCBmaWxlIHRvIGNvbmZpZ3VyZSB5b3VyIGFwcGxpY2F0aW9u4oCZcyBzZXJ2aWNlcy4gVGhlbiwgd2l0aCBhIHNpbmdsZSBjb21tYW5kLCB5b3UgY3JlYXRlIGFuZCBzdGFydCBhbGwgdGhlIHNlcnZpY2VzIGZyb20geW91ciBjb25maWd1cmF0aW9uLlxcclxcblxcclxcbmBgYGpzb25cXHJcXG5cXHJcXG57XFxyXFxuICBcXFwiZmlyc3ROYW1lXFxcIjogXFxcIkpvaG5cXFwiLFxcclxcbiAgXFxcImxhc3ROYW1lXFxcIjogXFxcIlNtaXRoXFxcIixcXHJcXG4gIFxcXCJhZ2VcXFwiOiAyNVxcclxcbn1cXHJcXG5cXHJcXG5gYGBcXHJcXG5cXHJcXG5gYGBodG1sXFxyXFxuXFxyXFxuPGRlcGVuZGVuY3k+XFxyXFxuXFx0PGdyb3VwSWQ+Y29tLmgyZGF0YWJhc2U8L2dyb3VwSWQ+XFxyXFxuXFx0PGFydGlmYWN0SWQ+aDI8L2FydGlmYWN0SWQ+XFxyXFxuXFx0PHNjb3BlPnJ1bnRpbWU8L3Njb3BlPlxcclxcbjwvZGVwZW5kZW5jeT5cXHJcXG5cXHJcXG5gYGBcXHJcXG5UbyB0ZXN0IHRoYXQgeW91ciBhcHBsaWNhdGlvbiB3b3Jrcywgb25jZSB5b3Ugd2lsbCBydW4gaXQgaW5zaWRlIHlvdXIgY29udGFpbmVyLCBhZGQgdGhpcyBSRVNUIE1ldGhvZCwgaW4geW91ciBBcHBsaWNhdGlvbiBjbGFzcy4gKEl04oCZcyBub3QgdGhlIGJlc3Qgd2F5IHRvIG9wZXJhdGUsIGJ1dCB0aGlzIHR1dG9yaWFsIGlzIGZvY3VzZWQgb24gRG9ja2VyLCBub3QgSmF2YSlcXHJcXG5cXHJcXG5cXHJcXG4jIyMjIERvY2tlcml6ZSB5b3VyIFNwcmluZyBib290IGFwcGxpY2F0aW9uIHVzaW5nIERvY2tlciBDb21wb3NlXFxyXFxuXFxyXFxuSWYgeW91IGRvbuKAmXQgd2FudCB0byBwYXNzIHRoZSBwb3J0IG9wdGlvbiBpbiB0aGUgY29tbWFuZCBsaW5lIG9yIGlmIHlvdSB3YW50IHRvIHJ1biB5b3VyIGNvbnRhaW5lciBhcyBhIHNlcnZpY2UsIHlvdSBjYW4gY3JlYXRlIGEgRG9ja2VyIGNvbXBvc2UgZmlsZVxcclxcblxcclxcbmBgYFxcclxcbnZlcnNpb246ICczLjgnXFxyXFxuc2VydmljZXM6XFxyXFxuICBzcHJpbmctYXBwOlxcclxcbiAgICBidWlsZDogLlxcclxcbiAgICBjb250YWluZXJfbmFtZTogJ2RlbW8tc3ByaW5nLWFwcCdcXHJcXG4gICAgcmVzdGFydDogYWx3YXlzXFxyXFxuICAgIHBvcnRzOlxcclxcbiAgICAgIC0gJzgwODA6ODA4MCdcXHJcXG5cXHJcXG5gYGBcXHJcXG5UaGUgcmVhbGx5IHZhbHVhYmxlIGlkZWEgaW4gdGhpcyBwcmluY2lwbGUgaXMgdGhhdCBpdCdzIGV4dHJlbWVseSBoYW5keSBpZiB5b3UgY2FuIGNsZWFybHkgc2VwYXJhdGUgbWV0aG9kcyB0aGF0IGNoYW5nZSBzdGF0ZSBmcm9tIHRob3NlIHRoYXQgZG9uJ3QuIFRoaXMgaXMgYmVjYXVzZSB5b3UgY2FuIHVzZSBxdWVyaWVzIGluIG1hbnkgc2l0dWF0aW9ucyB3aXRoIG11Y2ggbW9yZSBjb25maWRlbmNlLCBpbnRyb2R1Y2luZyB0aGVtIGFueXdoZXJlLCBjaGFuZ2luZyB0aGVpciBvcmRlci4gSW4gYW5vdGhlciBzaWRlLCB5b3UgaGF2ZSB0byBiZSBtb3JlIGNhcmVmdWwgd2l0aCBjb21tYW5kcy5cXHJcXG5cXHJcXG5cIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./md/blog/django-crash-course.md\n");

/***/ })

};;