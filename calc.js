let op=document.getElementById('output');
// function to display all the numbers
function display(num){
    // output screen display numbers
    op.value+=num;
}
// function for the equal button using try and catch statement
function calculate(){
    try{
        op.value=eval(op.value);
    }
    catch(err){
        alert("don't input more than one symbol");
    }
}
// function for clear button
function clear(){
    // when i click on clear button/cl everything must be empty!
    op.value="";
}
function del(){
    // when we click on delete button it will delete numbers one by one.
    op.value=op.value.slice(0,-1);
}