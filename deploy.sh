#!/bin/bash

# Deployment script for 92lottery application

echo "Starting deployment process for 92lottery application..."

# Install dependencies
echo "Installing dependencies..."
npm install --production

# Run production build if needed
echo "Starting application in production mode..."
npm run start:prod

echo "Application deployed successfully!"
echo "Access your application at http://localhost:$PORT (or the port configured in your environment)"