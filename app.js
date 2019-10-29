//init github
const github = new Github();

//init Ui CLASS
const ui = new UI();
//search input
const searchUser = document.getElementById("searchUser");

//search user input event listener
searchUser.addEventListener("keyup", e => {
  //get input text
  const userText = e.target.value;

  if (userText !== "") {
    //make HTTP call
    github.getUser(userText).then(data => {
      if (data.profile.message === "not Found") {
        // show alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        //Show profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    //clear profile
    ui.clearProfile();
  }
});
