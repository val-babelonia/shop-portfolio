// login browser alert
$("#submit").click(function() {            
    if ($("#email").val() ===""  &&
        $("#password").val() ==="") {
            alert("Email and password required")
        } else { 
            alert ("Email and Password accepted")
        }
});

// shop alert
$("#submit2").click(function() {            
    if ($("#webname").val() ===""  &&
        $("#web_content").val() ==="") {
            alert("Error input! Please make sure to input for your website sake!")
        } else {
           alert ("Submitted! wait for response :) Redirecting at Homepage") 
           window.location.href = "index.html"; 
        } 
});


//home page small animation 
$(".open").click(function() {
    $("html, body").animate({
        scrollTop: $("#option2").offset().top
    }, 1000);
});

$(".open").click(function() {
  $("#box").animate({
    left: "200px",
    opacity: 0.5,
    height: "150px",
    width: "150px"
  }, 1000);
});
$(".open").click(function() {
  $("#box2").animate({
    right: "200px",
    opacity: 0.5,
    height: "150px",
    width: "150px"
  }, 1000);
});
$(".open").click(function() {
  $("#box3").animate({
    left: "200px",
    opacity: 0.0,
    height: "150px",
    width: "150px"
  }, 1000);
});
$(".open").click(function() {
  $("#box4").animate({
    right: "200px",
    opacity: 0.0,
    height: "150px",
    width: "150px"
  }, 1000);
});


function toggle() {
    const $input = $("#password");
    $input.attr("type", $input.attr("type") === "text" ? "password" : "text");
}



//register page
let users = [];       
let userStack = [];   

$('#userForm').on('submit', function(event) {
    event.preventDefault(); 

    const user = {
        name: $('#name').val(),
        middlename: $('#middlename').val(),
        lastname: $('#lastname').val(),
        age: $('#age').val(),
        email: $('#email').val()
    };

    users.push(user);
    userStack.push(user);
    displayUsers();

    $('#name, #middlename, #lastname, #age, #email').val('');
});

$('#undo').click(function() {
    if (userStack.length > 0) {
        const lastUser = userStack.pop();            // to remove last user     
        users = users.filter(u => u !== lastUser);      
        displayUsers();
        alert ("Last user successfully removed") 
    } else {
        alert("No more users");
    }
});

function displayUsers() {
    $('#table1 table tr:not(:first)').remove();

    for (let i = 0; i < users.length; i++) {
        const newRow = `<tr>
            <td>${users[i].name}</td>
            <td>${users[i].middlename}</td>
            <td>${users[i].lastname}</td>
            <td>${users[i].age}</td>
            <td>${users[i].email}</td>
        </tr>`;
        $('#table1 table').append(newRow);
    }
}


