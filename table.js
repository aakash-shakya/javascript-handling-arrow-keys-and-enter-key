function createTable(rows, columns) {
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