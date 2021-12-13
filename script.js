var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["tiTle"] = document.getElementById("tiTle").value;
    formData["auThor"] = document.getElementById("auThor").value;
    formData["daTe"] = document.getElementById("daTe").value;
    formData["prIce"] = document.getElementById("prIce").value;
    formData["lanGuage"] = document.getElementById("lanGuage").value;
    formData['roman']= document.querySelector('input[name="tYpe"]:checked').value
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("bookList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.tiTle;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.auThor;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.daTe;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.prIce;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.lanGuage;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.roman;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("tiTle").value = "";
    document.getElementById("auThor").value = "";
    document.getElementById("daTe").value = "";
    document.getElementById("prIce").value = "";
    document.getElementById("lanGuage").value = "";
    document.getElementsByClassName("roman").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("tiTle").value = selectedRow.cells[0].innerHTML;
    document.getElementById("auThor").value = selectedRow.cells[1].innerHTML;
    document.getElementById("daTe").value = selectedRow.cells[2].innerHTML;
    document.getElementById("prIce").value = selectedRow.cells[3].innerHTML;
    document.getElementById("lanGuage").value = selectedRow.cells[4].innerHTML;
    document.getElementsByClassName("roman").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.tiTle;
    selectedRow.cells[1].innerHTML = formData.auThor;
    selectedRow.cells[2].innerHTML = formData.daTe;
    selectedRow.cells[3].innerHTML = formData.prIce;
    selectedRow.cells[4].innerHTML = formData.lanGuage;
    selectedRow.cells[5].innerHTML = formData.roman;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("bookList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("tiTle").value == "") {
        isValid = false;
    }
    return isValid;
}
