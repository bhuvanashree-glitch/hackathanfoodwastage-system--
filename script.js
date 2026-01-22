function addRecord() {
    let date = document.getElementById("date").value;
    let prepared = Number(document.getElementById("prepared").value);
    let served = Number(document.getElementById("served").value);

    if (date === "" || prepared === 0 || served === 0) {
        alert("Please fill all details");
        return;
    }

    let wasted = prepared - served;
    if (wasted < 0) wasted = 0;

    let table = document.getElementById("tableBody");
    let row = table.insertRow();

    row.insertCell(0).innerText = date;
    row.insertCell(1).innerText = prepared;
    row.insertCell(2).innerText = served;
    row.insertCell(3).innerText = wasted;

    document.getElementById("date").value = "";
    document.getElementById("prepared").value = "";
    document.getElementById("served").value = "";
}
