function buildTable() {
    let [rows, columns] = tableParameters();
    
    if (checkTablePresence){
        removeTable();
    }

    if (validateTableParameters(rows, columns)) {
        createTable(rows, columns);
    } else {
        alert('Invalid table parameters');
    }
}
