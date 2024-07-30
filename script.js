function addTransaction() {
  const type = document.getElementById('type').value;
  const name = document.getElementById('name').value;
  const amount = document.getElementById('amount').value;

  if (name === '' || amount === '') {
    alert('Please fill in all fields');
    return;
  }

  const table = document.getElementById('transactionTable');
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  
  cell1.innerHTML = type;
  cell2.innerHTML = name;
  cell3.innerHTML = `$${amount}`;
  cell4.innerHTML = `<button onclick="deleteTransaction(this)">Delete</button>`;
}

function deleteTransaction(button) {
  const row = button.parentElement.parentElement;
  row.remove();
}