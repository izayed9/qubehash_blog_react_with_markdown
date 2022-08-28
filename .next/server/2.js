exports.ids = [2];
exports.modules = {

/***/ "./md/blog/gregcousin.md":
/*!*******************************!*\
  !*** ./md/blog/gregcousin.md ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"---\\ntitle: Gregoire Cousin\\npublished: true\\ndatePublished: 1594425078471\\nauthor: Gregoire Cousin\\ntags:\\n  - Gregoire Cousin\\nauthorPhoto: /img/img1.jpg\\nbannerPhoto: /img/img1.jpg\\nthumbnailPhoto: /img/img1.jpg\\ncanonicalUrl: https://bloggy.dev/blog/gregcousin\\ndescription: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\\n---\\n\\n### Table of content\\n\\n1 Introduction\\n2 Prerequisite\\n3 Why you should Dockerize your application\\n\\n\\n\\n#### Introduction\\nI decided to write this article because I noticed, many tech companies are not using docker for local development, only (in some cases) with their CI/ CD. So today, I will show you how to create a Docker image of a Spring boot application and run it in a Docker container.\\nSo that you don't get lost, I'll start by reminding you what Docker and its containers are. Then you will also see how to create a Docker image of your application with a Dockerfile and with Docker compose (which is the version I recommend) and finally test that your application is well deployed and usable via the Docker container.\\n\\n#### Prerequisite\\n- Fundamentals of Java\\n- Beginner level on Docker\\n- Basic of command line\\n\\n####Why you should Dockerize your application?\\nWhen you work on an enterprise app, you realize it must respond quickly to changing conditions. That means both easy scaling to meet demand and easy updating to add new features as the business requires.\\nDocker containers make it easy for you to put new versions of software, with new business features, into production quickly and to quickly roll back to a previous version if you need to. Also running application in containers can also bring you plenty of benefits like : <br>\\n\\n*Portability, Performance, Agility, Isolation, and Scalability*\\nNow, let me give you some reminders about the Docker Jargon\\n\\n==Docker==\\n\\nAccording to their official [official documentation](#heading-ids) , Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure, so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your apps.\\n\\n==Container==\\nA container is a runnable instance of an image. You can create, start, stop, move, or delete a container using the Docker API or CLI. You can connect a container to one or more networks, attach storage to it, or even create a new image based on its current state.\\n\\n![The San Juan Mountains are beautiful!](/public/img/docgripcal.png \\\"docker grapg\\\")\\n\\nHow Dockerfile works\\n\\n==Docker Compose==\\nCompose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.\\n\\n```json\\n\\n{\\n  \\\"firstName\\\": \\\"John\\\",\\n  \\\"lastName\\\": \\\"Smith\\\",\\n  \\\"age\\\": 25\\n}\\n\\n```\\n\\n```html\\n\\n<dependency>\\n\\t<groupId>com.h2database</groupId>\\n\\t<artifactId>h2</artifactId>\\n\\t<scope>runtime</scope>\\n</dependency>\\n\\n```\\nTo test that your application works, once you will run it inside your container, add this REST Method, in your Application class. (It’s not the best way to operate, but this tutorial is focused on Docker, not Java)\\n\\n\\n#### Dockerize your Spring boot application using Docker Compose\\n\\nIf you don’t want to pass the port option in the command line or if you want to run your container as a service, you can create a Docker compose file\\n\\n```\\nversion: '3.8'\\nservices:\\n  spring-app:\\n    build: .\\n    container_name: 'demo-spring-app'\\n    restart: always\\n    ports:\\n      - '8080:8080'\\n\\n```\\nThe really valuable idea in this principle is that it's extremely handy if you can clearly separate methods that change state from those that don't. This is because you can use queries in many situations with much more confidence, introducing them anywhere, changing their order. In another side, you have to be more careful with commands.\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tZC9ibG9nL2dyZWdjb3VzaW4ubWQ/ZjJhZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFlLDhqR0FBKy9GLDBFQUEwRSx3a0NBQXdrQyIsImZpbGUiOiIuL21kL2Jsb2cvZ3JlZ2NvdXNpbi5tZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiLS0tXFxudGl0bGU6IEdyZWdvaXJlIENvdXNpblxcbnB1Ymxpc2hlZDogdHJ1ZVxcbmRhdGVQdWJsaXNoZWQ6IDE1OTQ0MjUwNzg0NzFcXG5hdXRob3I6IEdyZWdvaXJlIENvdXNpblxcbnRhZ3M6XFxuICAtIEdyZWdvaXJlIENvdXNpblxcbmF1dGhvclBob3RvOiAvaW1nL2ltZzEuanBnXFxuYmFubmVyUGhvdG86IC9pbWcvaW1nMS5qcGdcXG50aHVtYm5haWxQaG90bzogL2ltZy9pbWcxLmpwZ1xcbmNhbm9uaWNhbFVybDogaHR0cHM6Ly9ibG9nZ3kuZGV2L2Jsb2cvZ3JlZ2NvdXNpblxcbmRlc2NyaXB0aW9uOiBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLlxcbi0tLVxcblxcbiMjIyBUYWJsZSBvZiBjb250ZW50XFxuXFxuMSBJbnRyb2R1Y3Rpb25cXG4yIFByZXJlcXVpc2l0ZVxcbjMgV2h5IHlvdSBzaG91bGQgRG9ja2VyaXplIHlvdXIgYXBwbGljYXRpb25cXG5cXG5cXG5cXG4jIyMjIEludHJvZHVjdGlvblxcbkkgZGVjaWRlZCB0byB3cml0ZSB0aGlzIGFydGljbGUgYmVjYXVzZSBJIG5vdGljZWQsIG1hbnkgdGVjaCBjb21wYW5pZXMgYXJlIG5vdCB1c2luZyBkb2NrZXIgZm9yIGxvY2FsIGRldmVsb3BtZW50LCBvbmx5IChpbiBzb21lIGNhc2VzKSB3aXRoIHRoZWlyIENJLyBDRC4gU28gdG9kYXksIEkgd2lsbCBzaG93IHlvdSBob3cgdG8gY3JlYXRlIGEgRG9ja2VyIGltYWdlIG9mIGEgU3ByaW5nIGJvb3QgYXBwbGljYXRpb24gYW5kIHJ1biBpdCBpbiBhIERvY2tlciBjb250YWluZXIuXFxuU28gdGhhdCB5b3UgZG9uJ3QgZ2V0IGxvc3QsIEknbGwgc3RhcnQgYnkgcmVtaW5kaW5nIHlvdSB3aGF0IERvY2tlciBhbmQgaXRzIGNvbnRhaW5lcnMgYXJlLiBUaGVuIHlvdSB3aWxsIGFsc28gc2VlIGhvdyB0byBjcmVhdGUgYSBEb2NrZXIgaW1hZ2Ugb2YgeW91ciBhcHBsaWNhdGlvbiB3aXRoIGEgRG9ja2VyZmlsZSBhbmQgd2l0aCBEb2NrZXIgY29tcG9zZSAod2hpY2ggaXMgdGhlIHZlcnNpb24gSSByZWNvbW1lbmQpIGFuZCBmaW5hbGx5IHRlc3QgdGhhdCB5b3VyIGFwcGxpY2F0aW9uIGlzIHdlbGwgZGVwbG95ZWQgYW5kIHVzYWJsZSB2aWEgdGhlIERvY2tlciBjb250YWluZXIuXFxuXFxuIyMjIyBQcmVyZXF1aXNpdGVcXG4tIEZ1bmRhbWVudGFscyBvZiBKYXZhXFxuLSBCZWdpbm5lciBsZXZlbCBvbiBEb2NrZXJcXG4tIEJhc2ljIG9mIGNvbW1hbmQgbGluZVxcblxcbiMjIyNXaHkgeW91IHNob3VsZCBEb2NrZXJpemUgeW91ciBhcHBsaWNhdGlvbj9cXG5XaGVuIHlvdSB3b3JrIG9uIGFuIGVudGVycHJpc2UgYXBwLCB5b3UgcmVhbGl6ZSBpdCBtdXN0IHJlc3BvbmQgcXVpY2tseSB0byBjaGFuZ2luZyBjb25kaXRpb25zLiBUaGF0IG1lYW5zIGJvdGggZWFzeSBzY2FsaW5nIHRvIG1lZXQgZGVtYW5kIGFuZCBlYXN5IHVwZGF0aW5nIHRvIGFkZCBuZXcgZmVhdHVyZXMgYXMgdGhlIGJ1c2luZXNzIHJlcXVpcmVzLlxcbkRvY2tlciBjb250YWluZXJzIG1ha2UgaXQgZWFzeSBmb3IgeW91IHRvIHB1dCBuZXcgdmVyc2lvbnMgb2Ygc29mdHdhcmUsIHdpdGggbmV3IGJ1c2luZXNzIGZlYXR1cmVzLCBpbnRvIHByb2R1Y3Rpb24gcXVpY2tseSBhbmQgdG8gcXVpY2tseSByb2xsIGJhY2sgdG8gYSBwcmV2aW91cyB2ZXJzaW9uIGlmIHlvdSBuZWVkIHRvLiBBbHNvIHJ1bm5pbmcgYXBwbGljYXRpb24gaW4gY29udGFpbmVycyBjYW4gYWxzbyBicmluZyB5b3UgcGxlbnR5IG9mIGJlbmVmaXRzIGxpa2UgOiA8YnI+XFxuXFxuKlBvcnRhYmlsaXR5LCBQZXJmb3JtYW5jZSwgQWdpbGl0eSwgSXNvbGF0aW9uLCBhbmQgU2NhbGFiaWxpdHkqXFxuTm93LCBsZXQgbWUgZ2l2ZSB5b3Ugc29tZSByZW1pbmRlcnMgYWJvdXQgdGhlIERvY2tlciBKYXJnb25cXG5cXG49PURvY2tlcj09XFxuXFxuQWNjb3JkaW5nIHRvIHRoZWlyIG9mZmljaWFsIFtvZmZpY2lhbCBkb2N1bWVudGF0aW9uXSgjaGVhZGluZy1pZHMpICwgRG9ja2VyIGlzIGFuIG9wZW4gcGxhdGZvcm0gZm9yIGRldmVsb3BpbmcsIHNoaXBwaW5nLCBhbmQgcnVubmluZyBhcHBsaWNhdGlvbnMuIERvY2tlciBlbmFibGVzIHlvdSB0byBzZXBhcmF0ZSB5b3VyIGFwcGxpY2F0aW9ucyBmcm9tIHlvdXIgaW5mcmFzdHJ1Y3R1cmUsIHNvIHlvdSBjYW4gZGVsaXZlciBzb2Z0d2FyZSBxdWlja2x5LiBXaXRoIERvY2tlciwgeW91IGNhbiBtYW5hZ2UgeW91ciBpbmZyYXN0cnVjdHVyZSBpbiB0aGUgc2FtZSB3YXlzIHlvdSBtYW5hZ2UgeW91ciBhcHBzLlxcblxcbj09Q29udGFpbmVyPT1cXG5BIGNvbnRhaW5lciBpcyBhIHJ1bm5hYmxlIGluc3RhbmNlIG9mIGFuIGltYWdlLiBZb3UgY2FuIGNyZWF0ZSwgc3RhcnQsIHN0b3AsIG1vdmUsIG9yIGRlbGV0ZSBhIGNvbnRhaW5lciB1c2luZyB0aGUgRG9ja2VyIEFQSSBvciBDTEkuIFlvdSBjYW4gY29ubmVjdCBhIGNvbnRhaW5lciB0byBvbmUgb3IgbW9yZSBuZXR3b3JrcywgYXR0YWNoIHN0b3JhZ2UgdG8gaXQsIG9yIGV2ZW4gY3JlYXRlIGEgbmV3IGltYWdlIGJhc2VkIG9uIGl0cyBjdXJyZW50IHN0YXRlLlxcblxcbiFbVGhlIFNhbiBKdWFuIE1vdW50YWlucyBhcmUgYmVhdXRpZnVsIV0oL3B1YmxpYy9pbWcvZG9jZ3JpcGNhbC5wbmcgXFxcImRvY2tlciBncmFwZ1xcXCIpXFxuXFxuSG93IERvY2tlcmZpbGUgd29ya3NcXG5cXG49PURvY2tlciBDb21wb3NlPT1cXG5Db21wb3NlIGlzIGEgdG9vbCBmb3IgZGVmaW5pbmcgYW5kIHJ1bm5pbmcgbXVsdGktY29udGFpbmVyIERvY2tlciBhcHBsaWNhdGlvbnMuIFdpdGggQ29tcG9zZSwgeW91IHVzZSBhIFlBTUwgZmlsZSB0byBjb25maWd1cmUgeW91ciBhcHBsaWNhdGlvbuKAmXMgc2VydmljZXMuIFRoZW4sIHdpdGggYSBzaW5nbGUgY29tbWFuZCwgeW91IGNyZWF0ZSBhbmQgc3RhcnQgYWxsIHRoZSBzZXJ2aWNlcyBmcm9tIHlvdXIgY29uZmlndXJhdGlvbi5cXG5cXG5gYGBqc29uXFxuXFxue1xcbiAgXFxcImZpcnN0TmFtZVxcXCI6IFxcXCJKb2huXFxcIixcXG4gIFxcXCJsYXN0TmFtZVxcXCI6IFxcXCJTbWl0aFxcXCIsXFxuICBcXFwiYWdlXFxcIjogMjVcXG59XFxuXFxuYGBgXFxuXFxuYGBgaHRtbFxcblxcbjxkZXBlbmRlbmN5PlxcblxcdDxncm91cElkPmNvbS5oMmRhdGFiYXNlPC9ncm91cElkPlxcblxcdDxhcnRpZmFjdElkPmgyPC9hcnRpZmFjdElkPlxcblxcdDxzY29wZT5ydW50aW1lPC9zY29wZT5cXG48L2RlcGVuZGVuY3k+XFxuXFxuYGBgXFxuVG8gdGVzdCB0aGF0IHlvdXIgYXBwbGljYXRpb24gd29ya3MsIG9uY2UgeW91IHdpbGwgcnVuIGl0IGluc2lkZSB5b3VyIGNvbnRhaW5lciwgYWRkIHRoaXMgUkVTVCBNZXRob2QsIGluIHlvdXIgQXBwbGljYXRpb24gY2xhc3MuIChJdOKAmXMgbm90IHRoZSBiZXN0IHdheSB0byBvcGVyYXRlLCBidXQgdGhpcyB0dXRvcmlhbCBpcyBmb2N1c2VkIG9uIERvY2tlciwgbm90IEphdmEpXFxuXFxuXFxuIyMjIyBEb2NrZXJpemUgeW91ciBTcHJpbmcgYm9vdCBhcHBsaWNhdGlvbiB1c2luZyBEb2NrZXIgQ29tcG9zZVxcblxcbklmIHlvdSBkb27igJl0IHdhbnQgdG8gcGFzcyB0aGUgcG9ydCBvcHRpb24gaW4gdGhlIGNvbW1hbmQgbGluZSBvciBpZiB5b3Ugd2FudCB0byBydW4geW91ciBjb250YWluZXIgYXMgYSBzZXJ2aWNlLCB5b3UgY2FuIGNyZWF0ZSBhIERvY2tlciBjb21wb3NlIGZpbGVcXG5cXG5gYGBcXG52ZXJzaW9uOiAnMy44J1xcbnNlcnZpY2VzOlxcbiAgc3ByaW5nLWFwcDpcXG4gICAgYnVpbGQ6IC5cXG4gICAgY29udGFpbmVyX25hbWU6ICdkZW1vLXNwcmluZy1hcHAnXFxuICAgIHJlc3RhcnQ6IGFsd2F5c1xcbiAgICBwb3J0czpcXG4gICAgICAtICc4MDgwOjgwODAnXFxuXFxuYGBgXFxuVGhlIHJlYWxseSB2YWx1YWJsZSBpZGVhIGluIHRoaXMgcHJpbmNpcGxlIGlzIHRoYXQgaXQncyBleHRyZW1lbHkgaGFuZHkgaWYgeW91IGNhbiBjbGVhcmx5IHNlcGFyYXRlIG1ldGhvZHMgdGhhdCBjaGFuZ2Ugc3RhdGUgZnJvbSB0aG9zZSB0aGF0IGRvbid0LiBUaGlzIGlzIGJlY2F1c2UgeW91IGNhbiB1c2UgcXVlcmllcyBpbiBtYW55IHNpdHVhdGlvbnMgd2l0aCBtdWNoIG1vcmUgY29uZmlkZW5jZSwgaW50cm9kdWNpbmcgdGhlbSBhbnl3aGVyZSwgY2hhbmdpbmcgdGhlaXIgb3JkZXIuIEluIGFub3RoZXIgc2lkZSwgeW91IGhhdmUgdG8gYmUgbW9yZSBjYXJlZnVsIHdpdGggY29tbWFuZHMuXFxuXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./md/blog/gregcousin.md\n");

/***/ })

};;