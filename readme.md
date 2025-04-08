
🩺 DoctorSuite is a modern and sleek mobile application built using React Native and Expo, designed to reimagine healthcare management—seamless, personalized, and intuitive.

🚀 Features
The project currently includes these key screens:

Guest Landing:
Welcomes new users with intuitive navigation options (Explore as Guest, Login, Signup).

Onboarding Flow:
Informative onboarding steps with modern interactions and shimmer animations.

Login Screen:
Clean interface for user authentication.

Register Screen:
User-friendly registration form, capturing essential user details including name, DOB, email, password, and phone number.

Main Dashboard (MainMenu.js):
Placeholder dashboard featuring quick navigation buttons for future app sections.

🛠️ Technologies Used
React Native (Expo-managed workflow)

Expo Linear Gradient

Expo Vector Icons

React Native Animated API

JavaScript/ES6+

📂 Project Structure
pgsql
Copy
Edit
doctorsuite/
├── assets/
├── App.js
├── GuestLanding.js
├── GuestOnboarding.js
├── Login.js
├── Register.js
├── MainMenu.js
├── package.json
└── README.md
▶️ How to Run Locally
Step 1: Clone the repository from GitHub.
bash
Copy
Edit
git clone https://github.com/algajon/doctorsuite.git
cd doctorsuite
Step 2: Install dependencies.
bash
Copy
Edit
npm install
or (if you prefer yarn)

bash
Copy
Edit
yarn install
Step 3: Start Expo development server.
bash
Copy
Edit
npx expo start
This will open the Expo DevTools in your browser.

To run on Android: Scan QR code with Expo Go app or launch Android Emulator.

To run on iOS: Scan QR code with Expo Go app or run in iOS Simulator.

🌐 Navigation & Flow
Screens and Navigation Logic:
landing → onboarding → landing

landing → login → MainMenu

landing → register → MainMenu

Navigation handled internally by React state, without external libraries.
