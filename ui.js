class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card-body mb-3">
      <div class="row">
         <div class="col-md-3">
         <img class="img-fluid mb-2" src="${user.avatar_url}">
         <a href="${
           user.html_url
         }" target = "_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
         </div>
         <div class="col-md-9">
         <span class="badge badge-primary">Public repos: ${
           user.public_repos
         }</span>
         <span class="badge badge-secondary">Public gists: ${
           user.public_gists
         }</span>
         <span class="badge badge-success">Public followers: ${
           user.followers
         }</span>
         <span class="badge badge-info">Public following: ${
           user.following
         }</span>
         <br><br>
         <ul class="list-group">
         <li class="list-group-item">Company: ${user.company}</li>
         <li class="list-group-item">Company: ${user.blog}</li>
         <li class="list-group-item">Company: ${user.location}</li>
         <li class="list-group-item">Company: ${user.created_at}</li>
         
         </ul>
         </div>
      </div>
      </div>
      <h3 class="page-header mb-3">Lastest Repos</h3>
       <div id="repos"></div>
      `;
    //console.log(user);
  }
  //showAlert
  showAlert(message, className) {
    //create div
    const div = document.createElement("div");
    //add classes
    div.className = className;
    //add text
    div.appendChild(document.createTextNode(message));
    //get parent
    const container = document.querySelector(".searchContainer");
    //get search box
    const search = document.querySelector(".search");
    //insert alert
    container.insertBefore(div, search);
  }

  //clear profile
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
