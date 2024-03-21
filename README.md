Parcel

Dev Build
Local Server
HMR = Hot Module Replacement
File Watching Algorithm - written in C++
Caching - Faster Builds
Image Optimization
Minification
Bundling
Compress
Consistent Hashing
Code Splitting
Differential Bundling - support older browsers
Diagnostic
Error Handling
HTTPs
Tree Shaking - remove unused code
Different dev and prod bundles

# 2 types routing in web app
- cline side Rounting
- server side Routing

//Redux-Toolkit

* insatall @reduxjs/toolkit and react-redux
- build store
- provide store to hole app 
- create slice
- dispatch (action)
- selector(read the data)


//Testing
-Unit Testing
-Integration Testing
-End to End Testing

//seting up testing
install  react-testing labrery
 -npm install --save-dev @testing-library/react
 install jest
 -npm install --save-dev jest
 install bebel
 -$ npm install --save-dev babel-jest @babel/core @babel/preset-env
 config bebel js

***configure Parcel Config file  to disable default babel transpilaction

-jest configuration
-npx just --init

-If you're using Jest 28 or later, jest-environment-jsdom package now must be installed separately.
*npm install --save-dev jest-environment-jsdom



*Header.test.js
*Header.test.ts
*Header.spec.js
*Header.spec.ts

to read the Jsx
*add @babel/preset-react
-npm i -D @babel/preset-react
need to config in bebal confic
["@babel/preset-react" , {runtime:"automatic"}]

need to insatll @testing-library/jest-dom

