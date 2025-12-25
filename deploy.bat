@echo off
REM Deployment batch script for 92lottery application on Windows

echo Starting deployment process for 92lottery application...

REM Install dependencies
echo Installing dependencies...
npm install --production

REM Run the application in production mode
echo Starting application in production mode...
npm run start:prod

echo Application deployed successfully!
echo Access your application at http://localhost:%PORT% (or the port configured in your environment)
pause