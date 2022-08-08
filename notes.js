// calling classes
const addBox = document.querySelector(".add-box"),
  popupBox = document.querySelector(".popup-box"),
  popupTitle=document.querySelector('header p'),
  addNote = document.querySelector(".note-btn"),
  titleTag = document.getElementById("titleTag"),
  descTag = document.getElementById("descTag"),
  closingBox = document.querySelector("header i");

// getting localStorage notes if exist, and parsing them to js object, else passing an empty array to notes
const notes = JSON.parse(localStorage.getItem("notes") || "[]");
// Parse the data with JSON.parse(), and the data becomes a JavaScript object.

// adding all months in an array format
const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

// showing hiding popup box when clicked on addBox
addBox.addEventListener("click", () => {
  popupBox.classList.add("show");
});
// closing the popupBox by clicking on closing button
closingBox.addEventListener("click", () => {
  popupBox.classList.remove("show");
  // clearing the values of input and text box whenever user closes the form.
  titleTag.value = "";
  descTag.value="";
});

// showing notes from localStorage
function showNotes() {
  // remove all previous notes before adding new
  document.querySelectorAll(".note").forEach(note=>note.remove());

  notes.forEach((note,index) => {
    let liTag = `<li class="note">
       <div class="details">
         <p>${note.title} </p>
         <span> ${note.description} </span>
       </div>
       <div class="bottom-content">
         <span> ${note.date} </span>
         <!-- setting icon to edit/delete a particular note -->
         <div class="settings">
           <i class="bx bx-dots-horizontal-rounded"></i>
           <ol class="menu">
           <!-- edit and delete icons under ol tag -->
               <li onclick="updateNote( ${index} , ${note.title}, ${note.description} )"><i class='bx bx-edit-alt' ></i>edit</li>
               <li onclick="deleteNote( ${index} )"><i class='bx bx-trash' ></i>delete</li>
           </ol>
         </div>
       </div>
     </li>`;

     addBox.insertAdjacentHTML("afterend",liTag);
});
}
showNotes();

// function to delete a particular note
function deleteNote(noteId){
  notes.splice(noteId,1) //removing selected notes from array/tasks

  // updating notes to localStorage
  localStorage.setItem('notes', JSON.stringify(notes)); 
  showNotes();
}

// making addNote button work
addNote.addEventListener("click", (e) => {
  // to prevent form from submitting
  e.preventDefault();
  // getting input and textArea values
  let noteTitle = titleTag.value,
    noteDesc = descTag.value;

  // making user fill at-least one field.
  if (noteTitle || noteDesc) {
    // getting month, day, year from current day.
    let dateObj = new Date(),
      day = dateObj.getDate(),
      month = months[dateObj.getMonth()],
      year = dateObj.getFullYear();

    // creating an object of title, description and date
    let noteInfo = {
      title: noteTitle,
      description: noteDesc,
      date: `${day} ${month}, ${year}`,
    };

    //saving info in the localStorage

    notes.push(noteInfo); //adding new note
    //saving notes to localStorage.

    // localStorage.setItem('notes',notes);*
    // Above^ localStorage statement* will return an object in localStorage but we want that element as string so we have to convert that from [object] to "string" type!.
    localStorage.setItem("notes", JSON.stringify(notes));
    // when we submit a note popupBox will close automatically.
    closingBox.click();
showNotes();
  }
});
