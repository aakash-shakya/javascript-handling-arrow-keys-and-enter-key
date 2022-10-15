function action() {
    let [rows, columns] = tableParameters();
    if (validateTableParameters(rows, columns)) {
        createTable(rows, columns);
    } else {
        alert('Invalid table parameters');
    }
}
