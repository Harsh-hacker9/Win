# 92lottery Application

This is a Node.js/Express application with EJS templating, featuring real-time updates with Socket.IO and a MySQL database.

## Project Overview

- **Framework**: Node.js with Express
- **Template Engine**: EJS
- **Database**: MySQL
- **Real-time Features**: Socket.IO
- **Task Scheduling**: node-cron
- **Authentication**: JSON Web Tokens (JWT)

## Local Development Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in a `.env` file (use `.env` as reference)
4. Start the development server:
   ```bash
   npm start
   ```

## Deployment Options

### Deploy to Render (Recommended)

This application is ready for deployment to Render with these simple steps:

1. Push your code to a GitHub repository
2. [Sign up for Render](https://render.com) with your GitHub account
3. Create a new Web Service and connect it to your GitHub repository
4. Configure the following settings:
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `npm run start:prod`
   - Region: Choose appropriate region
5. Add your environment variables from your `.env` file in the Render dashboard
6. Deploy and your app will be live at your-app-name.onrender.com

### Other Cloud Platforms

The application can also be deployed to various other platforms:

1. **Heroku** - Easy deployment with Git integration
2. **Railway** - Platform for deploying Node.js applications
3. **DigitalOcean** - VPS hosting with full control
4. **AWS/GCP** - Cloud infrastructure solutions

### Production Deployment Steps

1. Prepare your production environment with Node.js installed
2. Upload/clone your code to the server
3. Install dependencies:
   ```bash
   npm install --production
   ```
4. Configure environment variables for production
5. Start the application:
   ```bash
   node src/server.js
   ```
   Or using PM2 for process management:
   ```bash
   pm2 start src/server.js --name "92lottery"
   ```

### Environment Variables

Ensure all required environment variables are set in production:
- `PORT` - Port number for the application
- `DATABASE_HOST` - Database host
- `DATABASE_USER` - Database username
- `DATABASE_PASSWORD` - Database password
- `DATABASE_NAME` - Database name
- `JWT_ACCESS_TOKEN` - JWT secret
- Other variables as defined in your `.env` file

## Application Features

- Real-time updates via Socket.IO
- Scheduled tasks with node-cron
- User authentication and authorization
- Database integration with MySQL
- EJS templating for dynamic content
- RESTful API endpoints

## Security Considerations

- Use strong passwords and API keys
- Implement proper input validation
- Secure JWT tokens with appropriate expiration
- Use HTTPS in production
- Regular security updates

## Support

For deployment assistance or technical issues, refer to the detailed deployment guide in `DEPLOYMENT_GUIDE.md`.
=======
# Win
>>>>>>> 3561df0613e9fff6c488a5de469eddb0db390909
