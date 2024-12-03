

document.getElementById("submit").addEventListener('click', createMealPlan);


function createMealPlan() {
    let email = document.getElementById("email").value;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(!regex.test(email)){
        alert("Please change email;")
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
                    <tr align="center">
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