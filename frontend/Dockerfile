# Step 1: Use the official Node.js 14 image as a parent image
FROM node:14

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of your application code
COPY . .

# Step 6: Expose port 3000 to the outside world
EXPOSE 3000

# Step 7: Run the command to start your application
CMD ["npm", "start"]