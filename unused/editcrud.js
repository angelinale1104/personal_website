// editcrud.js

const titleArr = JSON.parse(localStorage.getItem("localTitle"));

const date = JSON.parse(localStorage.getItem("localDate"));

const author = JSON.parse(localStorage.getItem("localAuthor"));

const summary = JSON.parse(localStorage.getItem("localSummary"));

// WORK AS EXPECTED!
/* Add new post */
export function addPosts() {
  let dialog = document.getElementById('crud-dialog'); 
  document.getElementById('add').onclick = function() {    
    dialog.showModal();    
  };    
  document.getElementById('cancel').onclick = function() { 
    dialog.close();
  };     
  document.getElementById('save').onclick = function() {   
    let userTitle = document.getElementById('title').value;
    let userDate = document.getElementById('date').value;
    let userAuthor = document.getElementById('author').value;
    let userSummary = document.getElementById('summary').value;

    // Check if the user has entered all required info or not.
    if (userTitle == "" ||  userTitle == null) {
      alert("User did not enter the title. Please put in the post title!")
    }
    if (userDate == "" ||  userDate == null) {
      alert("User did not enter the date. Please put in the post date!")
    }
    if (userSummary == "" ||  userSummary == null) {
      alert("User did not enter the summary. Please put in the post summary!")
    }
    if (userAuthor == "" ||  userAuthor == null) {
      alert("User did not enter the author's name. Please put in the author!")
    }
    else {
      // Add all of the new info to the corresponding arrays
      titleArr.push(userTitle);
      localStorage.setItem("localTitle", JSON.stringify(titleArr));

      date.push(userDate);
      localStorage.setItem("localDate", JSON.stringify(date));

      author.push(userAuthor);
      localStorage.setItem("localAuthor", JSON.stringify(author));

      summary.push(userSummary);
      localStorage.setItem("localSummary", JSON.stringify(summary));

      // Display the updated list of blogs
      displayPosts();

      // Reset the input fields
      let form  = document.getElementById("add-form");
      form.reset();

      // Close the dialog
      dialog.close();
    }
  };
}

// WORK AS EXPECTED!
/* Display list of blogs upon loading and if there is any changes */
export function displayPosts() {
  let i; 
  // Display the updated list
  if (titleArr.length > 0) {
    // Clear the whole list
    document.getElementById('list-of-posts').innerHTML = "";
    document.getElementById('no-post').innerHTML = "";

    for(i = 0; i < titleArr.length; i++){
      // Create a list element dinamically with the Edit and Delete button
      let leftDiv = document.createElement("div");
      leftDiv.id = "left-div";

      let rightDiv = document.createElement("div");
      rightDiv.id = "right-div";

      let item = document.createElement("li");

      let editBtn = document.createElement("button");
      editBtn.id = `edit${i+1}`;
      editBtn.className = "edit-btn";
      // Attach event listener to dynamically created buttons
      editBtn.addEventListener('click', editPosts);

      let deleteBtn = document.createElement("button");
      deleteBtn.id = `delete${i+1}`;
      deleteBtn.className = "del-btn";
      // Attach event listener to dynamically created buttons
      deleteBtn.addEventListener('click', deletePosts);
    
      // Display all blog posts
      leftDiv.innerHTML = titleArr[i] + " (" + date[i] + ") : " + summary[i] + " - " + author[i] + "&nbsp; &nbsp;";
 
      // Edit and Delete buttons have the icons instead of text
      let editImage = document.createElement("img");
      editImage.src = "https://img.icons8.com/ios-glyphs/20/000000/edit--v1.png";
      editImage.id = `edit${i+1}`;
      editImage.className = "edit-btn";
      editBtn.appendChild(editImage);
      
      let delImage = document.createElement("img");
      delImage.src = "https://img.icons8.com/fluency-systems-filled/20/000000/trash.png";
      delImage.id = `delete${i+1}`;
      delImage.className = "del-btn";
      deleteBtn.appendChild(delImage);

      // Styling for Edit and Delete buttons
      editBtn.style.marginRight = '0.7em';
      editBtn.style.padding = '0.5em';

      deleteBtn.style.padding = '0.5em';

      // Append the post content and the 2 buttons together
      rightDiv.appendChild(editBtn);
      rightDiv.appendChild(deleteBtn);
      item.appendChild(leftDiv);
      item.appendChild(rightDiv);

      // Attach to the list to display later
      document.getElementById('list-of-posts').appendChild(item);
    }
  }
  else {
    document.getElementById('list-of-posts').innerHTML = "";
    document.getElementById("no-post").innerHTML = "There are no posts to display. Please add new blog posts!";
  }
}

// WORK AS EXPECTED!
/* Edit the posts */
export function editPosts() {
  let dialog = document.getElementById('edit-dialog');
  let editBtn, saveBtn;

  // Use a for-loop to grab the correct edit button and 
  // make the changes to the corresponding entry.
  for(let i = 0; i < titleArr.length; i++){
    let editTitle = document.getElementById('edit-title');
    let editDate = document.getElementById('edit-date');
    let editAuthor = document.getElementById('edit-author');
    let editSummary = document.getElementById('edit-summary');

    editBtn = document.getElementById(`edit${i+1}`);    
    saveBtn = document.getElementById('edit-save');
    editBtn.onclick = function() {
      dialog.showModal();

      // Display the current value in the corresponding fields
      editTitle.value = titleArr[i];
      editDate.value = date[i];
      editAuthor.value = author[i];
      editSummary.value = summary[i];

      // If the user made any edits, then make the same change to the arrays at the same indexes.
      // Then, display the updated values.
      saveBtn.onclick = function () {
        titleArr[i] = editTitle.value;
        localStorage.setItem("localTitle", JSON.stringify(titleArr));

        date[i] = editDate.value;
        localStorage.setItem("localDate", JSON.stringify(date));

        author[i] = editAuthor.value;
        localStorage.setItem("localAuthor", JSON.stringify(author));

        summary[i] = editSummary.value;
        localStorage.setItem("localSummary", JSON.stringify(summary));

        displayPosts();
        dialog.close();
      }
    }
  }

  // If the user clicks Cancel, then just close the dialog and make no further changes.
  document.getElementById('edit-cancel').onclick = function() {    
    dialog.close();
  }; 
}

// WORK AS EXPECTED 
/* Delete the posts */
export function deletePosts() {
  let deleteBtn;

  for(let i = 0; i < titleArr.length; i++){
    deleteBtn = document.getElementById(`delete${i+1}`);
    deleteBtn.onclick = function() {
      let dialog = document.getElementById('delete-dialog'); 
      dialog.showModal();   
      document.getElementById('cancel-delete').onclick = function() {    
        dialog.close();
      };     
      document.getElementById('ok-delete').onclick = function() {  
        titleArr.splice(i,1);
        localStorage.setItem("localTitle", JSON.stringify(titleArr));

        date.splice(i,1);
        localStorage.setItem("localDate", JSON.stringify(date));
        
        author.splice(i,1);
        localStorage.setItem("localAuthor", JSON.stringify(author));

        summary.splice(i,1);
        localStorage.setItem("localSummary", JSON.stringify(summary));

        dialog.close();
        displayPosts();   
      };
    }
  }
}
  