# Rex Begonias Galore!

## Welcome
Welcome to Rex Begonias Galore!

This project is the frontend application for Rex Begonias Galore, a tool designed for managing and showcasing our collection of Rex Begonias. It enables users to view, create, edit, and delete begonia entries, assisting them in effectively organizing their Rex Begonia collection.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- React Router: A collection of navigational components that compose declaratively with your application.
- Fetch API: For making HTTP requests to the backend server.

## Features

1. Create a New Rex Begonia:
   - User Action: Add a new Rex Begonia to the inventory.
   - Implementation: Capture user input for the new begonia's details (e.g., variety, size, price, quantity) and add this information to the inventory data.

2. List All Rex Begonias:
   - User Action: View a list of all available Rex Begonias in the inventory.
   - Implementation: Display the list of begonias along with their details (e.g., variety, size, price, quantity) in a readable format.

3. View Details of a Rex Begonia:
   - User Action: View detailed information about a specific Rex Begonia.
   - Implementation: Prompt the user to enter the ID or unique identifier of the begonia they want to view and display its details.

4. Delete a Rex Begonia:
   - User Action: Delete a Rex Begonia from the inventory.
   - Implementation: Prompt the user to enter the ID or unique identifier of the begonia they want to delete and remove it from the inventory data.

5. Update a Rex Begonia:
   - User Action: Update information about an existing Rex Begonia.
   - Implementation: Prompt the user to enter the ID or unique identifier of the begonia they want to update and allow them to modify its details (e.g., variety, size, price, quantity).

6. Data File Integrity:
   - User Action: Ensure user actions like creating or deleting items update the data file correctly.
   - Implementation: Implement logic to handle data operations securely and accurately to prevent data corruption.

7. Unique ID Assignment:
   - User Action: Assign a unique ID when the user creates a new begonia.
   - Implementation: Generate a unique ID for each new begonia added to the inventory to ensure it can be easily tracked and managed.

8. Cart Functionality:
   - User Action: Add Rex Begonias to a shopping cart and see the total price and quantity.
   - Implementation: Implement a cart feature where the user can add begonias, calculate the total price, and display the cart contents.

9. Cancel Cart Function:
   - User Action: Empty the shopping cart.
   - Implementation: Implement a function to clear the shopping cart and remove all items from it.

## Getting Started

1. Create the Repository:
   ```bash
   // Web URL
   https://github.com/Rex-Begonia-Galore/rex-begonia-galore-frontend.git
   ```

2. Initialize Vite project using Create React App and create necessary directories and files:
   ```bash
   npm create vite@latest rex-begonia-galore-frontend
   cd rex-begonia-galore-frontend
   npm install
   ```

3. Install Dependencies:
   ```bash
   npm install react-router-dom axios redux react-redux styled-components dotenv
   ```

4. Start the Development Server:
   ```bash
   npm run dev
   ```

5. Create Directories and Files:
   ```bash
   mkdir src
   cd src
   mkdir Components Pages assets
   touch App.css App.jsx index.css main.jsx .gitignore
   ```

### Running the Application

1. Start the Development Server:
   ```bash
   npm run dev
   ```

2. Open Your Browser:
   Navigate to `http://localhost:5173/`.

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
│    ├─── CSS/
│    │    ├─── NavBar.css
│    │    ├─── Begonia.css
│    │    ├─── BegoniaDetails.css
│    │    ├─── BegoniaEditForm.css
│    │    ├─── BegoniaNewForm.css
│    │    ├─── Begonias.css
│    │    ├─── About.css
│    │    ├─── Edit.css
│    │    ├─── Error.css
│    │    └─── Home.css
│    │
│    ├─── Pages/
│    │    ├─── About.jsx
│    │    ├─── Add.jsx
│    │    ├─── Edit.jsx
│    │    ├─── Error.jsx
│    │    ├─── Home.jsx
│    │    ├─── Index.jsx
│    │    └─── Show.jsx
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

1. NavBar.jsx: Navigation bar present on all pages.
   - CSS: `NavBar.css` styles the navigation bar, including layout, spacing, and responsiveness.

2. Begonia.jsx: Represents a single Rex Begonia, likely used in lists.
   - CSS: `Begonia.css` styles individual begonia entries, including layout, typography, and visual presentation.

3. BegoniaDetails.jsx: Detailed view of a single Begonia.
   - CSS: `BegoniaDetails.css` styles the detailed view, ensuring readability and visual separation of different sections.

4. BegoniaEditForm.jsx: Form to edit an existing Begonia entry.
   - CSS: `BegoniaEditForm.css` styles the form elements, ensuring proper spacing, alignment, and responsiveness.

5. BegoniaNewForm.jsx: Form to create a new Begonia entry.
   - CSS: `BegoniaNewForm.css` styles the new entry form, including form fields, labels, and submit buttons.

6. Begonias.jsx: List of all Rex Begonias.
   - CSS: `Begonias.css` styles the list of begonias, including item layout, spacing, and visual hierarchy.

### Pages

1. About.jsx: Page for Web Developer's biography.
   - CSS: `About.css` styles the biography page, including layout, typography, and any images or sections.

2. Add.jsx: Page for creating a new Begonia entry, contains `BegoniaNewForm`.
   - CSS: `Home.css` provides layout and styling for the new begonia entry page.

3. Edit.jsx: Page for editing a Begonia entry, contains `BegoniaEditForm`.
   - CSS: `Edit.css` styles the editing page, including the form and any surrounding content.

4. Error.jsx: Page displayed when a route is not found or an error occurs.
   - CSS: `Error.css` styles the error page, ensuring it is visually distinct and informative.

5. Home.jsx: Home page/ landing page of the application.
   - CSS: `Home.css` provides styling for the main landing page, including layout, typography, and any featured content.

6. Index.jsx: Page displaying a list of all Begonias, contains `Begonias`.
   - CSS: `Begonias.css` styles the index page, ensuring a clean and readable list of begonias.

7. Show.jsx: Page displaying details of a single Begonia, contains `BegoniaDetails`.
   - CSS: `BegoniaDetails.css` styles the details page for a single begonia, focusing on detailed information layout and readability.

### CSS

1. About.css: Styles for the About page, including layout and text formatting.
2. NavBar.css: Styles for the navigation bar, including positioning and responsiveness.
3. Begonia.css: Styles for individual begonia components in lists.
4. BegoniaDetails.css: Styles for the begonia detail view

 page.
5. BegoniaEditForm.css: Styles for the begonia edit form.
6. BegoniaNewForm.css: Styles for the begonia creation form.
7. Begonias.css: Styles for the list of all begonias.
8. Edit.css: Styles for the edit page, including form layout.
9. Error.css: Styles for error and not found pages.
10. Home.css: Styles for the homepage, including layout and visual elements.

### Static Assets

- assets: Folder to store static assets like images, icons, etc.

### Styling

- App.css: Global styles for the application.
- index.css: Additional global styles.
- App.jsx: Main App component that includes routing and layout.

# Notes

If you see `node_modules` or `.env` files being tracked, you should:

1. Remove `node_modules` and update `.gitignore`:
   ```bash
   rm -rf node_modules
   git rm -r --cached node_modules
   echo 'node_modules/' >> .gitignore
   ```

2. Reinstall dependencies:
   ```bash
   npm install
   ```

3. Commit changes:
   ```bash
   git add .gitignore
   git commit -m "Update .gitignore to ignore node_modules"
   ```

### Explanation of Dependencies

- React Router: For handling routing in your React app.
  ```bash
  npm install react-router-dom
  ```

- Axios: For making HTTP requests.
  ```bash
  npm install axios
  ```

- Redux: For state management (optional).
  ```bash
  npm install redux react-redux
  ```

- Styled Components: For styling your components.
  ```bash
  npm install styled-components
  ```

```

### Wireframe Outline

1. Home Page (Home.jsx)
   - Header: Navigation bar (styled with `NavBar.css`).
   - Main Content: Introduction or summary of the Rex Begonia collection.
   - Footer: Any additional links or information.

2. About Page (About.jsx)
   - Header: Navigation bar.
   - Main Content: Biography of the web developer or information about the project.
   - Footer: Additional links or credits.

3. Index Page (Index.jsx)
   - Header: Navigation bar.
   - Main Content: List of all Rex Begonias (`Begonias.jsx`), styled with `Begonias.css`.
   - Footer: Pagination or filters (if any).

4. Show Page (Show.jsx)
   - Header: Navigation bar.
   - Main Content: Detailed view of a single begonia (`BegoniaDetails.jsx`), styled with `BegoniaDetails.css`.
   - Footer: Option to go back or to edit the begonia.

5. Add Page (Add.jsx)
   - Header: Navigation bar.
   - Main Content: Form to create a new begonia (`BegoniaNewForm.jsx`), styled with `BegoniaNewForm.css`.
   - Footer: Navigation or submission confirmation.

6. Edit Page (Edit.jsx)
   - Header: Navigation bar.
   - Main Content: Form to edit an existing begonia (`BegoniaEditForm.jsx`), styled with `BegoniaEditForm.css`.
   - Footer: Navigation or submission confirmation.

7. Error Page (Error.jsx)
   - Main Content: Error message or not found information, styled with `Error.css`.


### Route Paths Reference
```bash
   <Route path='/' element={<Home />} />
   <Route path='/about' element={<About />} />
   <Route path='/index' element={<Index />} />
   <Route path='/add' element={<Add />} />
   <Route path='/show/:id' element={<Show />} />
   <Route path='/edit/:id' element={<Edit />} />
   <Route path='*' element={<Error />} />
```

//App.jsx
```bash
   <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/allbegonias' element={<Index />} />
      <Route path='/begonias/add:' element={<Add />} />
      <Route path='/begonias/:id' element={<Show />} />
      <Route path='/begonias/:id/edit' element={<Edit />} />
      <Route path='*' element={<Error />} />
   </Routes>
```


# Team Member Assignments:

### To-Do List

#### Files

1. App.css
   - Description: Global styles for the main application.
   - Assignee: 

2. App.jsx
   - Description: Main component that sets up routing and overall layout of the application.
   - Assignee: 

3. index.css
   - Description: Global styles applied at the entry point of the application.
   - Assignee: 

4. main.jsx
   - Description: Entry point for the React application; renders the main `App` component.
   - Assignee: 

5. .gitignore
   - Description: Specifies files and directories to be ignored by Git.
   - Assignee: 

6. README.md
   - Description: Documentation file providing an overview of the project, setup instructions, and usage guidelines.
   - Assignee: 

7. index.html
   - Description: Main HTML file serving as the entry point for the application.
   - Assignee: 

8. package-lock.json
   - Description: Automatically generated file that locks the dependencies to specific versions.
   - Assignee: 

9. package.json
   - Description: Manages project dependencies, scripts, and metadata.
   - Assignee: 

10. vite.config.js
    - Description: Configuration file for Vite, a build tool and development server.
    - Assignee: 


#### Components

1. NavBar.jsx
   - Description: Navigation bar present on all pages.
   - CSS: `NavBar.css` styles the navigation bar, including layout, spacing, and responsiveness.
   - Assignee: 

2. Begonia.jsx
   - Description: Represents a single Rex Begonia, likely used in lists.
   - CSS: `Begonia.css` styles individual begonia entries, including layout, typography, and visual presentation.
   - Assignee: 

3. BegoniaDetails.jsx
   - Description: Detailed view of a single Begonia.
   - CSS: `BegoniaDetails.css` styles the detailed view, ensuring readability and visual separation of different sections.
   - Assignee: 

4. BegoniaEditForm.jsx
   - Description: Form to edit an existing Begonia entry.
   - CSS: `BegoniaEditForm.css` styles the form elements, ensuring proper spacing, alignment, and responsiveness.
   - Assignee: 

5. BegoniaNewForm.jsx
   - Description: Form to create a new Begonia entry.
   - CSS: `BegoniaNewForm.css` styles the new entry form, including form fields, labels, and submit buttons.
   - Assignee: 

6. Begonias.jsx
   - Description: List of all Rex Begonias.
   - CSS: `Begonias.css` styles the list of begonias, including item layout, spacing, and visual hierarchy.
   - Assignee: 


#### Pages

1. About.jsx
   - Description: Page for Web Developer's biography.
   - CSS: `About.css` styles the biography page, including layout, typography, and any images or sections.
   - Assignee: 

2. Add.jsx
   - Description: Page for creating a new Begonia entry, contains `BegoniaNewForm`.
   - CSS: `Home.css` provides layout and styling for the new begonia entry page.
   - Assignee: 

3. Edit.jsx
   - Description: Page for editing a Begonia entry, contains `BegoniaEditForm`.
   - CSS: `Edit.css` styles the editing page, including the form and any surrounding content.
   - Assignee: 

4. Error.jsx
   - Description: Page displayed when a route is not found or an error occurs.
   - CSS: `Error.css` styles the error page, ensuring it is visually distinct and informative.
   - Assignee: 

5. Home.jsx
   - Description: Home page/ landing page of the application.
   - CSS: `Home.css` provides styling for the main landing page, including layout, typography, and any featured content.
   - Assignee: 

6. Index.jsx
   - Description: Page displaying a list of all Begonias, contains `Begonias`.
   - CSS: `Begonias.css` styles the index page, ensuring a clean and readable list of begonias.
   - Assignee: 

7. Show.jsx
   - Description: Page displaying details of a single Begonia, contains `BegoniaDetails`.
   - CSS: `BegoniaDetails.css` styles the details page for a single begonia, focusing on detailed information layout and readability.
   - Assignee: 

