# Login Screen with Google and GitHub Authentication

This project is a simple login screen that uses NextAuth.js for authentication with Google and GitHub credentials.

## Features

- User authentication with Google and GitHub
- Session management with NextAuth.js

## Setup

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2. Install the dependencies:
```npm install```

3. Set up your environment variables:
```
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

Replace with your actual credentials.

4. Run the development server:
```npm run dev```

Open http://localhost:3000 with your browser to see the result.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.