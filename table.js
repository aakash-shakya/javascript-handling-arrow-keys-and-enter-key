function createTable(rows, columns) {
    // construct table from the values of rows and columns.

    for (let i=0; i<rows; i++) {
        let row = document.createElement('tr');
        
        for (let j=0; j<columns; j++) {
            let cell = document.createElement('td');

            cell.setAttribute('contenteditable', 'true') //makes cell editable
            cell.setAttribute('onkeyup','handleEvent(event)')  // calls postAnswer() function on keyup

            cell.innerHTML = `${i}${j}`;
            row.appendChild(cell);
        }
        document.getElementById('tableBody').appendChild(row);
    }

}


function tableParameters(){
    // get the parameter to construct table
    let rows = document.getElementById('rows').value;
    let columns = document.getElementById('columns').value;
    return [rows, columns];
}


function validateTableParameters(rows, columns){
    // validates the parameter to construct table.
    // higher values of row and columns return higher space and time complexity 
    // the table constructed will be size (rows * columns).

    if (rows > 20 || columns > 10){
        return false;
    }

    return true;
}

// function validateTableParametersType(rows, columns){
//     if (typeof(rows)==Number || typeof(columns)==Number ){
//         return true;
//     }
//     return false;
// }