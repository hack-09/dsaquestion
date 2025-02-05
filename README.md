# DSA Question Solving App

This project is a web application designed to help users store and solve Data Structures and Algorithms (DSA) questions. It features a user-friendly interface for adding, viewing, and searching through questions, along with their solutions and descriptions.

## Project Structure

The project is structured into two main parts: the backend and the frontend.

### Backend

- **server.js**: Entry point for the backend application. Sets up the Express server and connects to the database.
- **config/db.js**: Contains the database configuration and connection logic.
- **controllers/questionController.js**: Handles requests related to questions, including adding, retrieving, and updating questions.
- **models/Question.js**: Defines the Question model with fields for question text, solution link, description, and user-uploaded code.
- **routes/questionRoutes.js**: Sets up the routes for question-related API endpoints.

### Frontend

- **public/index.html**: Main HTML file serving as the entry point for the frontend application.
- **src/index.js**: Entry point of the React application, rendering the main App component.
- **src/App.js**: Defines the main App component, including layout and routing.
- **src/components/AddQuestion.js**: Form for users to add new questions.
- **src/components/QuestionList.js**: Displays a list of questions with links to their solutions and detail view buttons.
- **src/components/QuestionDetail.js**: Shows the complete description of a selected question along with user-uploaded code and results.
- **src/components/SearchBar.js**: Provides a search bar for filtering questions based on user input.
- **src/styles/App.css**: Contains the CSS styles for the frontend application.

## Features

- **Add Questions**: Users can add new DSA questions along with their solutions and descriptions.
- **View Questions**: A list of questions is displayed with links to their respective solutions.
- **Search Functionality**: Users can search for questions using keywords.
- **Detailed View**: Users can click on a question to view its complete description and user-uploaded code.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd dsa-question-solving-app
   ```

3. Install dependencies for both backend and frontend:
   ```
   npm install
   ```

4. Start the backend server:
   ```
   node backend/server.js
   ```

5. Start the frontend application:
   ```
   npm start
   ```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.