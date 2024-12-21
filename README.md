# CampusNet - Social Platform for University of Bari

CampusNet is a web application designed to create a unified digital space for the University of Bari's academic community. It serves as a centralized platform for communication, collaboration, and information sharing, combining social networking features with academic functionalities.

## Preview
![CampusNet Preview](public/assets/images/campusnet-screen-login.png)
*Replace with actual screenshot of your application*

## Key Features
- Social networking focused on academic life
- Real-time messaging system
- Event management & live streaming
- Post sharing & interaction
- Profile management
- Student-focused community

## Getting Started

### Environment Variables
Create a `.env.local` file in the root directory with the following variables:
```env
VITE_APPWRITE_URL=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_STORAGE_ID=
VITE_APPWRITE_USER_COLLECTION_ID=
VITE_APPWRITE_POST_COLLECTION_ID=
VITE_APPWRITE_SAVES_COLLECTION_ID=
```

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/campusnet.git
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application should now be running at `http://localhost:5173`

## Tech Stack
- React.js
- Tailwind CSS
- AppWrite
- React Query
- Shadcn/ui
