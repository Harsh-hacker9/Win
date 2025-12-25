# Deployment Guide for 92lottery Application

This is a Node.js/Express application with EJS templating that needs to be deployed to a live server.

## Deployment Options

### Option 1: Deploy to Heroku (Recommended for beginners)

1. Create a Heroku account at https://heroku.com
2. Install Heroku CLI
3. Create a `Procfile` in your project root with:
   ```
   web: node src/server.js
   ```
4. Login to Heroku: `heroku login`
5. Create a new app: `heroku create your-app-name`
6. Set environment variables:
   ```bash
   heroku config:set PORT=3000
   heroku config:set DATABASE_HOST=your-db-host
   heroku config:set DATABASE_USER=your-db-user
   heroku config:set DATABASE_PASSWORD=your-db-password
   heroku config:set DATABASE_NAME=your-db-name
   # Add other environment variables from your .env file
   ```
7. Deploy: `git push heroku main`

### Option 2: Deploy to VPS/Cloud Server (DigitalOcean, AWS, etc.)

1. Set up a Linux server (Ubuntu recommended)
2. Install Node.js and npm
3. Clone your repository to the server
4. Install dependencies: `npm install`
5. Set up environment variables
6. Use PM2 for process management:
   ```bash
   npm install -g pm2
   pm2 start src/server.js --name "92lottery"
   pm2 startup
   pm2 save
   ```
7. Set up Nginx as a reverse proxy
8. Configure SSL with Let's Encrypt

### Option 3: Deploy to Railway

1. Create an account at https://railway.app
2. Connect your GitHub repository
3. Add environment variables in the Railway dashboard
4. Deploy automatically on git push

### Option 4: Deploy to Render

1. Create an account at https://render.com
2. Create a new Web Service
3. Connect your repository
4. Set environment variables
5. Deploy

## Important Configuration Notes

1. **Environment Variables**: Update your .env values with production credentials
2. **Database**: Ensure your database is accessible from the deployment environment
3. **Port**: The application uses PORT from environment variables or defaults to 3000
4. **SSL**: For production, ensure you have SSL certificates
5. **Static Files**: Make sure public assets are properly served

## Production Setup Steps

1. Create a production-ready environment file (`.env.production`)
2. Update database connection strings for production
3. Set appropriate security headers
4. Configure logging for production
5. Set up monitoring and error tracking

## Security Considerations

1. Never commit your actual .env file to version control
2. Use strong passwords and API keys
3. Implement rate limiting
4. Add input validation and sanitization
5. Set up proper authentication and authorization

## Running in Production

To start the application in production:
```bash
node src/server.js
```

Or with PM2 for process management:
```bash
pm2 start src/server.js --name "92lottery" --env production
```

## Monitoring

Monitor your application with:
- PM2 logs: `pm2 logs 92lottery`
- Health checks: Set up monitoring for the root endpoint
- Database connection health
- Memory and CPU usage