# iReporter Frontend

iReporter is a platform that allows users to report issues, incidents, and feedback. The frontend is built using React.js and TailwindCSS, providing a modern, responsive, and user-friendly interface. This repository contains the source code for the iReporter frontend.

## Features

- **Responsive Design**: Mobile-first design, optimized for all screen sizes.
- **User Authentication**: Sign up, login, and account management.
- **Issue Reporting**: Submit reports on various incidents.
- **Map Integration**: Users can view incidents on a map.
- **Admin Dashboard**: Admins can view and manage user-submitted reports.

## Getting Started

### Prerequisites

To run this project locally, you will need:

- Node.js (v16.0 or higher)
- npm (or Yarn)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/ireporter-frontend.git
   cd ireporter-frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

   This will start the app on [http://localhost:3000](http://localhost:3000).

## Folder Structure

```
/src
  /assets       # Static assets like images and fonts
  /components   # Reusable UI components
  /pages        # Page components (e.g., Home, Login, etc.)
  /services     # API requests and related utilities
  /hooks        # Custom React hooks
  /context      # React Contexts for state management
  /styles       # TailwindCSS and global styles
  App.js        # Main App component
  index.js      # Entry point
```

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **React Router**: For client-side routing.
- **Axios**: HTTP client for making API requests.
- **React Hook Form**: For form handling and validation.
- **React Query**: For data fetching and caching.
- **Font Awesome**: Icons for UI elements.

## Environment Variables

The following environment variables are required for the app to run:

- `REACT_APP_API_URL`: The base URL of your backend API.
- `REACT_APP_GOOGLE_MAPS_API_KEY`: Your Google Maps API key (if map features are used).

To configure these variables, create a `.env` file in the root of the project with the following content:

```
REACT_APP_API_URL=https://your-api-url.com
REACT_APP_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
```

## Testing

To run tests, use the following command:

```bash
npm test
# or
yarn test
```

## Contributing

We welcome contributions to improve the project. Here’s how you can help:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a pull request with a detailed description of the changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or inquiries, please contact:

- Email: [techymuideen@gmail.com](mailto:techymuideen@gmail.com)
