# E-Commerce Website (Client, Admin & Server)

**A simple pharmacy website that**:

**Displays products**

**You can order what you want**


An e-commerce project with three parts:

 client: the front-end (React.JS)
 
 admin: the admin dashboard for managing products, categories and orders (React.JS)
 
 server: the backend API (Node.js, Express & MongoDB (for database))

## How to Run the Project

### 1)
Make sure you have the following installed before starting:
 Node.js and npm.
  
 A MongoDB database (local install or a MongoDB Atlas connection string).
 
 A Cloudinary account (used for image uploads).

### 2) Set up the server

cd server

nodemon app.js

Create a .env file inside the server folder with the following variables:

PORT=4000
MONGODB_URI=your_mongodb_connection_string
JSON_WEB_TOKEN_SECRET_KEY=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_api_secret

Then start the server:

nodemon app.js

### 3) Set up the client (store front-end)

cd client

npm install

Create a .env file inside itif you want to point to a different API URL:

REACT_APP_API_URL=http://localhost:4000/api

Then start the client:

npm start


### 4) Set up the admin dashboard

cd admin

npm install

Create a .env file inside it if needed:

REACT_APP_API_URL=http://localhost:4000/api

Then start:

npm start

## Tools and libraries used::

### Frontend (client)
 React: UI library
 
 React Router DOM: page routing
 
 Axios: API requests
 
 Chakra UI: component library and theming
 
 Material UI (MUI): dialogs (product modal), checkboxes and other UI components
 
 Bootstrap: styling
 
 React Icons: icons
 
 React Slick: carousels/sliders

 React Range Slider Input: price range filter
 
 React Inner Image Zoom: product image zoom


### Admin Dashboard (admin)
 React: UI library
 
 React Router DOM: page routing
 
 Axios: API requests
 
 Chakra UI: component library and theming
 
 Material UI (MUI): UI components
 
 Bootstrap: styling
 
 React Icons: icons
 
 Chart.js and react-chartjs-2: sales charts and dashboard graphs
 
 React Hot Toast: notifications


### Backend (server)
 Node.js and Express: server and REST API
 
 MongoDB with Mongoose: database and schema modeling
 
 JSON Web Token (jsonwebtoken, express-jwt): authentication
 
 bcrypt: password hashing
 
 Cloudinary: image storage and hosting
 
 Multer: file upload handling
 
 p-limit: limiting concurrent async operations & cloudinary

## Notes
 Authentication uses JWT tokens stored in the browser's local storage.
 
 Product images are uploaded and served through Cloudinary.
 
 The client and admin apps read their API base URL from an environment variable, falling back to ~ ~ http://localhost:4000/api ~ if not set.
