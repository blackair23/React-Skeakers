# Sneak.In

Sneak.In is a sneaker marketplace that allows registered users to buy, sell, and comment on sneakers from other users. The app has real-time messaging functionality using socket.io, allowing users to communicate with each other. Sneak.In is currently under development, with plans to continuously improve and add new features in the future.

<p align="center">
  <img src="https://user-images.githubusercontent.com/95815081/227042455-d8f54c0f-5dba-411e-a50b-2fbafc5cd5ea.png" />
</p>

## Features

  - User registration and authentication
  - Buying and selling of limited edition sneakers
  - Commenting on sneakers
  - Editing and deleting user listings
  - Profile section with order history
  - **Personal messaging** 
     
## Technologies Used
  
  - React
  - Node.js
  - Express
  - MongoDB
  - Socket.io

## Installation

To run the app locally, you'll need to have **Node.js** installed on your computer. Clone the repository and navigate to the project folder in your terminal. Then run the following commands:

`npm install`

### Front End

`cd client`

`npm start`

The app is running on http://localhost:3000.

### Back End

First you shoud make .env file in folder */server* with variables -> **CONNECTION_STRING** | **PORT** | **SECRET**

`cd server`

`npm start`


### Socket.io

`cd socket`

`npm start`

The app is running on http://localhost:8900.