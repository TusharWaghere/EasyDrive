# EasyDrive – Car Rental Platform
EasyDrive is a full-stack car rental web application where users can search, view, and book cars online, while admins can manage the vehicle listings and monitor platform activity through a dashboard.

The project is built using Node.js, Express, MongoDB, EJS, and Bootstrap, following an MVC architecture for better scalability and maintainability.

**🌐 Features**
**👤 User Features**
1. User Signup and Login (Authentication using Passport.js)
2. Search cars by location
3. View detailed car information
4. Book cars online
5. View personal bookings
6. Profile page
7. Light / Dark mode theme toggle

**🚘 Car Features**
1. View all available cars
2. Display car details:
3. Vehicle type
4. Seats
5. Fuel type
6. Price per day
7. Location
8. Car availability indicator
9. Prevent booking unavailable cars

**🛠 Admin Features**
1. Admin dashboard
2. Add new cars
3. Edit car details
4. Delete cars
5. Only the admin who created the car can edit/delete it
6. View total platform statistics:
7. Total cars
8. Total bookings
9. Total users

**🧠 Technologies Used**
1. Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Authentication
- Passport.js
- Passport Local Strategy
- Express Session

2. Frontend
- EJS Template Engine
- Bootstrap 5
- Font Awesome
- Chart.js
- Flatpickr (date picker)

3. Other Tools
- Method Override
- Joi Validation
- MVC Architecture

**⚙️ Installation & Setup**

1. Clone the repository
- git clone https://github.com/yourusername/easydrive.git
2. Navigate into project
- cd easydrive
3. Install dependencies
- npm install
4. Start MongoDB
- Make sure MongoDB is running locally:
- mongodb://127.0.0.1:27017/cars
5. Run the server
- node app.js
6. Open in browser
- http://localhost:3000/home

**Images**
1. Home Page
3. Add New Car
4. Edit Car
5. User Profile
6. Signup
7. Login
8. My Bookings
