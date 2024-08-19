#Rex Begonias Galore!

## Welcome
Welcome to Rex Begonias Galore!

This project is the frontend application for Rex Begonia Galore, a tool designed for managing and showcasing our collection of Rex Begonia Begonias. It enables users to view, create, edit, and delete begonia entries, assisting them in effectively organizing their rex begonia collection.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- React Router: A collection of navigational components that compose declaratively with your application.
- Fetch API: For making HTTP requests to the backend server.


## Features

1. Create a New Rex Begonia:
   - User Action: Add a new rex begonia Begonia to the inventory.
   - Implementation: Capture user input for the new begonia's details (e.g., variety, size, price, quantity) and add this information to the inventory data.

2. List All Rex Begonias:
   - User Action: View a list of all available rex begonias in the inventory.
   - Implementation: Display the list of begonias along with their details (e.g., variety, size, price, quantity) in a readable format on the command line.

3. View Details of a Rex Begonia:
   - User Action: View detailed information about a specific rex begonia Begonia.
   - Implementation: Prompt the user to enter the ID or unique identifier of the begonia they want to view and display its details.

4. Delete a Rex Begonia:
   - User Action: Delete a rex begonia Begonia from the inventory.
   - Implementation: Prompt the user to enter the ID or unique identifier of the begonia they want to delete and remove it from the inventory data.

5. Update a Rex Begonia:
   - User Action: Update information about an existing rex begonia Begonia.
   - Implementation: Prompt the user to enter the ID or unique identifier of the begonia they want to update and allow them to modify its details (e.g., variety, size, price, quantity).

6. Data File Integrity:
   - User Action: Ensure user actions like creating or deleting items update the data file correctly.
   - Implementation: Implement logic to handle data operations securely and accurately to prevent data corruption.

7. Unique ID Assignment:
   - User Action: Assign a unique ID when the user creates a new begonia.
   - Implementation: Generate a unique ID for each new begonia added to the inventory to ensure it can be easily tracked and managed.

8. Cart Functionality:
   - User Action: Add rex begonia Begonias to a shopping cart and see the total price and quantity.
   - Implementation: Implement a cart feature where the user can add begonias, calculate the total price, and display the cart contents.

9. Cancel Cart Function:
   - User Action: Empty the shopping cart.
   - Implementation: Implement a function to clear the shopping cart and remove all items from it.



## Getting Started

1. DO NOT clone the repository. Create from scratch:

   ```bash
   //Web URL
   https://github.com/Rex-Begonia-Galore/rex-begonia-galore-frontend.git
   ```

2. Initialize Vite project using Create React App and create necessary directories and files:

    ```bash
    npm create vite@latest rex-begonia-galore-frontend
    cd rex-begonia-galore-frontend
    npm install
    npm run dev
    ```

    ```bash
    //Install Dependencies: Install the necessary dependencies.
    npm install
    npm install react-router-dom axios redux react-redux styled-components dotenv

    //React Router: For handling routing in your React app.
    npm install react-router-dom

    //Axios: For making HTTP requests.
    npm install axios

    //Redux: For state management (optional).
    npm install redux react-redux

    //Styled Components: For styling your components.
    npm install styled-components
    ```

    ```bash
    //Start the Development Server: Start the development server to see your new React app.
    npm run dev
    ```

    ```bash
    mkdir src
    cd src
    mkdir Components Pages assets
    touch App.css App.jsx index.css main.jsx .gitignore
    ```

### Running the Application

1. Start the development server:

   ```bash
   npm run dev

```

2. Open your browser and navigate to `http://localhost:5173/`.

## Project Structure

```
RexBegonia/
│
├─── node_modules/
│
├─── public/
│    └─── vite.svg
│
├─── src/
│    │
│    ├─── Components/
│    │    ├─── NavBar.jsx
│    │    ├─── Begonia.jsx
│    │    ├─── BegoniaDetails.jsx
│    │    ├─── BegoniaEditForm.jsx
│    │    ├─── BegoniaNewForm.jsx
│    │    └─── Begonias.jsx
│    │
│    ├─── Pages/
│    │    ├─── EditPage.jsx
│    │    ├─── ErrorPage.jsx
│    │    ├─── HomePage.jsx
│    │    ├─── IndexPage.jsx
│    │    ├─── NewPage.jsx
│    │    └─── ShowPage.jsx
│    │
│    ├─── assets/
│    │
│    ├─── App.css
│    ├─── App.jsx
│    ├─── index.css
│    └─── main.jsx
│
├─── .gitignore
├─── .eslintrc.cjs
├─── README.md
├─── index.html
├─── package-lock.json
├─── package.json
└─── vite.config.js
```

### Components

1. **NavBar.jsx**: Navigation bar present on all pages.
2. **Begonia.jsx**: Represents a single Rex Begonia Begonia, likely used in lists.
3. **BegoniaDetails.jsx**: Detailed view of a single Begonia.
4. **BegoniaEditForm.jsx**: Form to edit an existing Begonia entry.
5. **BegoniaNewForm.jsx**: Form to create a new Begonia entry.
6. **Begonias.jsx**: List of all Rex Begonia Begonias.

### Pages

1. **EditPage.jsx**: Page for editing a Begonia entry, contains `BegoniaEditForm`.
2. **ErrorPage.jsx**: Page displayed when a route is not found or an error occurs.
3. **HomePage.jsx**: Home page of the application.
4. **IndexPage.jsx**: Page displaying a list of all Begonias, contains `Begonias`.
5. **NewPage.jsx**: Page for creating a new Begonia entry, contains `BegoniaNewForm`.
6. **ShowPage.jsx**: Page displaying details of a single Begonia, contains `BegoniaDetails`.

### Static Assets

- **assets**: Folder to store static assets like images, icons, etc.

### Styling

- **App.css**: Global styles for the application.
- **index.css**: Additional global styles.
- **App.jsx**: Main App component that includes routing and layout.


# Notes

If you see node_modules or .env files, you should stop them from being added and tracked:

rm -rf node_modules.
git commit -am 'remove node modules'.
Update the .gitignore to ignore node_modules.
npm install - to install the node packages listed in the package.json.
git commit -am "remove node_modules tracking".
You should now get an update similar to the following (only the .gitignore has changed)
