## Running Rules

### Step 1: Install Dependencies

1. Navigate to the server directory and install dependencies:
   ```bash
   cd server
   npm install
   ```
2. Navigate to the client directory and install dependencies:
   ```bash
   cd ../client
   npm install
   ```

### Step 2: Run Server

1. Navigate back to the server directory:
   ```bash
   cd ../server
   ```
2. Start the server:
   ```bash
   npm run start
   ```

### Step 3: Create Database

1. Create a database called `todo`.
2. Create a table `customers` in the `todo` database with the following structure:
   ```sql
   CREATE TABLE customers (
       customer_id INT AUTO_INCREMENT PRIMARY KEY,
       names VARCHAR(255),
       email VARCHAR(255),
       phone VARCHAR(20)
   );
   ```

### Step 4: Change Key

1. After starting the server, a key will be generated.
2. Modify the generated key in the `/client/js/baseUrl.js` file:
   - Open `/client/js/baseUrl.js`.
   - Replace the placeholder or old key with the new generated key.

### Step 5: Run Client

1. Open the `index.html` file located in the `/client` directory:
   - Navigate to the `/client` directory.
   - Open `index.html` in your preferred web browser.

## 🗒️ Answer

1. Install dependencies in both the server and client directories.
2. Navigate to the server directory and start the server.
3. Create a `todo` database and a `customers` table within it.
4. After the server is running, update the generated key in `/client/js/baseUrl.js`.
5. Open `index.html` in the `/client` directory to run the client application.
