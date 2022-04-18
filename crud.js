// crud.js
// WORK AS EXPECTED!
/* Display list of blogs upon loading and if there is any changes */
export function displayPosts() {
  const titleArr = JSON.parse(localStorage.getItem("localTitle"));

  const date = JSON.parse(localStorage.getItem("localDate"));

  const author = JSON.parse(localStorage.getItem("localAuthor"));

  const summary = JSON.parse(localStorage.getItem("localSummary"));
  if (titleArr.length > 0) {
      // Clear the whole list
    document.getElementById('list-of-posts').innerHTML = "";
    document.getElementById("no-post").innerHTML = "";
    let i; 
    // Display the updated list
    if (titleArr.length > 0) {
      for(i = 0; i < titleArr.length; i++){
        // Create a list element dinamically with the Edit and Delete button
        let leftDiv = document.createElement("div");
        leftDiv.id = "left-div";

        let rightDiv = document.createElement("div");
        rightDiv.id = "right-div";

        let item = document.createElement("li");
      
        // Display all blog posts
        leftDiv.innerHTML = titleArr[i] + " (" + date[i] + ") : " + summary[i] + " - " + author[i] + "&nbsp; &nbsp;";
        
        item.appendChild(leftDiv);
        item.appendChild(rightDiv);

        // Attach to the list to display later
        document.getElementById('list-of-posts').appendChild(item);
      }
    }
  }
  else if(document.getElementById('list-of-posts').length == null) {
    document.getElementById("no-post").innerHTML = "There are no posts to display. Please add new blog posts!";
  }
}