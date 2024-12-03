# WEB-115 Final Project: Perfectly Portioned Fitness Application

## Project Overview
This project is a JavaScript-based web application designed for **Perfectly Portioned Fitness**, a fitness company. The application enables users to create a personalized weekly meal plan. It allows users to input meals for each day of the week and includes functionality for clearing, printing, or downloading the meal plan.

## Features
1. **User-Friendly Interface**: The application provides an easy-to-navigate interface for users to input their meal plans.
2. **Personal Information Collection**:
   - User's Name
   - Email (validated before submission)
   - Weekly Goal
3. **Meal Plan Input**:
   - Options for five meal slots: Breakfast, Snack 1, Lunch, Snack 2, and Dinner.
   - Meal plan spans Monday through Sunday.
4. **Web Page Generation**:
   - A dynamically generated web page displays the meal plan based on user input using the `document.write()` method.
5. **Additional Functionalities**:
   - Clear the planner.
   - Print or download the planner.

## File Structure
- **HTML Document**: `finalProject.html`
  - Contains the form for user input.
  - Displays a banner with your name, course, section number, and the title "Build Your Meal Plan."
- **JavaScript File**: `projectJS.js`
  - Contains all logic for the application.
  - Validates email input and handles dynamic web page generation.
- **CSS Styling** (optional): Applied inline for simple styling. Consider using an external stylesheet for more complex designs.

## Requirements
### HTML Document
- Must include a banner with course details and the project title.
- A form that collects the following:
  - Personal Information: Name, Email, and Goal.
  - Weekly meal plan input (Breakfast, Snack 1, Lunch, Snack 2, Dinner).
- Submit button that triggers the JavaScript function to generate the web page.

### JavaScript
- External file named `projectJS.js`.
- Comments throughout the code to explain functionality.
- Validates email input before generating the meal plan.
- Dynamically generates the web page using `document.write()`.
- Includes functionality to:
  - Clear the form.
  - Print or download the meal plan.

### JavaScript Code Example
```javascript
// Add event listener to the submit button
document.getElementById("submit").addEventListener('click', createMealPlan);

function createMealPlan() {
    let email = document.getElementById("email").value;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!regex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    let breakfast = document.getElementById("breakfast").value;
    let snack1 = document.getElementById("snack1").value;
    let lunch = document.getElementById("lunch").value;
    let snack2 = document.getElementById("snack2").value;
    let dinner = document.getElementById("dinner").value;

    let meals = `Breakfast: <br>${breakfast}<br><br>
                 1st Snack: <br>${snack1}<br><br>
                 Lunch: <br>${lunch}<br><br>
                 2nd Snack: <br>${snack2}<br><br>
                 Dinner: <br>${dinner}<br><br>`;

    let myText = `
        <html>
            <head>
                <title>Weekly Meal Plan</title>
            </head>
            <body>
                <table border="1">
                    <tr align="center">
                        <th width="100">Sunday</th>
                        <th width="100">Monday</th>
                        <th width="100">Tuesday</th>
                        <th width="100">Wednesday</th>
                        <th width="100">Thursday</th>
                        <th width="100">Friday</th>
                        <th width="100">Saturday</th>
                    </tr>
                    <tr>
                        <td>${meals}</td>
                        <td>${meals}</td>
                        <td>${meals}</td>
                        <td>${meals}</td>
                        <td>${meals}</td>
                        <td>${meals}</td>
                        <td>${meals}</td>
                    </tr>
                </table>
            </body>
        </html>
    `;

    let flyWindow = window.open('about:blank', 'myPop', 'width=800,height=800,left=200,top=200');
    flyWindow.document.write(myText);
}
```

### Additional Notes
- Use monospaced fonts or CSS to ensure text wrapping in the output.
- Ensure proper formatting of generated web pages.

## Installation and Deployment
1. Clone or download the repository.
2. Open `finalProject.html` in a browser.
3. Ensure `projectJS.js` is correctly linked to the HTML file.
4. Test the application locally and deploy it to a server (e.g., WCET server) for final submission.

## Usage Instructions
1. Open the `finalProject.html` file in a browser.
2. Fill out the personal information fields (Name, Email, Goal).
3. Enter meal plans for all five slots for each day of the week.
4. Click the "Submit" button to generate the meal plan.
5. Use the additional buttons to clear, print, or download the plan.

## Example Output
Upon successful submission, the application dynamically generates a web page displaying the weekly meal plan with all entered information formatted neatly.

## Deliverables
- `finalProject.html`: HTML document.
- `projectJS.js`: JavaScript logic.
- Uploaded project files to the WCET server.
- Final push of the project repository to GitHub.
- README.md file (this document).
