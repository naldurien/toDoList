let taskTextBox = document.getElementById("taskTextBox");
let btnAdd = document.getElementById("btnAdd");
let pendingUL = document.getElementById("pendingUL");
let completedUL = document.getElementById("completedUL");

btnAdd.addEventListener("click", function(){
    let taskName = "&nbsp&nbsp&nbsp&nbsp&nbsp" + taskTextBox.value + "&nbsp&nbsp&nbsp&nbsp&nbsp"
    let liItem = document.createElement("li")

    //create text label
    let taskLabel = document.createElement("label")
    taskLabel.innerHTML = taskName
    
    //create checkbox
    let liCheckbox = document.createElement("input")
    liCheckbox.setAttribute("type", "checkbox")
    liCheckbox.setAttribute("id", taskName)
    liCheckbox.addEventListener("click", function(){
        if(this.checked) {
            completedUL.appendChild(this.parentElement)
        }
        else {
            pendingUL.appendChild(this.parentElement)
        }
        // this will automatically remove the item from the pending list
    })
    
   
    //create remove button
    let removeButton = document.createElement("button")
    removeButton.innerHTML = "Remove"
    removeButton.addEventListener("click", function() {
        if(this.parentElement.parentElement == pendingUL) {
            pendingUL.removeChild(this.parentElement)
        }
        else {
            completedUL.removeChild(this.parentElement)
        }
    }) 
    //make remove function check which list the li is on

    //append checkbox
    liItem.appendChild(liCheckbox)
    //append task wording
    liItem.appendChild(taskLabel)
    //append remove button
    liItem.appendChild(removeButton)
    //append task name
    pendingUL.appendChild(liItem)
    
    //clear previous text from input field
    document.getElementById('taskTextBox').value=''
})




