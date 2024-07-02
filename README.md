
# Stay Sphere

Stay Sphere is a modern hotel booking platform designed to provide a seamless and user-friendly experience for booking hotel rooms. It offers a range of features to enhance user experience, manage bookings efficiently, and ensure secure authentication.

## Live Site URL
[Stay Sphere](https://stay-sphere-ebed4.web.app/)

## Main Features 📋

- **Homepage Design 🏡**
  - **Banner**: Engaging images or videos of hotel rooms to create a visual experience.
  - **Map**: Interactive map displaying the hotel's location.
  - **Newsletter Signup**: Encourages users to subscribe for updates, deals, and exclusive offers.
  - **Featured Rooms**: Highlights a selection of featured rooms with images and descriptions. Includes a "Book Now" button for quick access.
  - **User Reviews**: Displays authentic user reviews and ratings to build trust.

- **User Authentication 📝**
  - Users can create an account with email and password.
  - Users can log in using Google authentication via Firebase.

- **Navigation Bar 🧭**
  - Links to the "Rooms" page and "My Bookings" page.
  - The "My Bookings" page is accessible only to authenticated users.


- **Rooms Page 🛌**
  - Displays a list of available rooms with images.
  - Clicking an image redirects to the room details page.
  - Implements a filter system to filter rooms by price range (server-side filter).
  - Users can view the total review count of each room.
  - Users can post reviews for rooms they have booked.

- **Room Details Page 🏡**
  - Detailed room description, price per night, room size, availability, and images.
  - Special offers (if available).
  - "Book Now" button to book a room, making the room unavailable upon booking.
  - Users can select a booking date using a date picker.
  - Room summary and confirmation modal before booking.
  - Reviews section, showing user reviews or a meaningful message if unavailable.

- **My Bookings Page 🛌**
  - Displays a list of rooms booked by the logged-in user.
  - Users can cancel bookings with a confirmation modal.
  - Option to update the booking date.
  - Users can post reviews from this page.

- **Review System 📝**
  - Users can post reviews for rooms they have booked.
  - Reviews include username, rating (1-5), comment, and timestamp.
  - Reviews are shown on the room details page for other users.

- **Access Control 🔒**
  - Only logged-in users can book rooms or post reviews.
  - Unauthenticated users can view basic room details but must log in to book or review.

- **404 Page 🚀**
  - Custom 404 page with an engaging image or gif and a "Back to home" button.

## Technologies:

- **Frontend Technologies**: HTML, CSS, JavaScript, React.js
- **Backend Technologies**: Node.js, Express.js, MongoDB
- **Authentication**: Firebase authentication, JWT token implementation
- **State Management**: Tanstack Query
- **Map Integration**: Leaflet map library

### To-Do:  
- About Us and Contact Us.

### Installation

Follow these steps to install and run the project locally:
1. Clone the repository
2. cd your-repo-name
3. npm install
4. npm run dev
