This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Study Lounge
A platform for browsing courses.

## Build With

* Next.js
* Typescript
* SCSS

## Additional Packages

Several packages were used to implement the project

* Material UI
* EsLint
* Axios
* Cypress
* Hls.js

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Documentation

The website is divided into two main pages: The page for all courses and one specific.

A page with all the courses `/` will be visible on start-up. This provides basic information 
about each course. On it, you can choose any course you like . Clicking on a course card will take you to the page for 
that particular course. 

The specific course page `/course/{courseid}` gives you the opportunity to view the lessons as well as additional information about the 
course as a whole. There is also the possibility of closed lessons.

A video function has been developed where you can change the speed of the video you are watching using **`,`** and **`.`**. 
You can also use the `right mouse button` to switch to Picture in Picture mode.

## Tests
The entire website has been checked with tests written by Cypress. To view the test results, go to the **cypress folder** 
and a video with test statistics can be found for each component.

## Author Details
The website was created by Danyil Butov. 
[HJK - GitHub.](https://github.com/HJyup)

