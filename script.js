let rowsInput = document.getElementById('rows');
let colsInput = document.getElementById('cols');
let btn = document.getElementById('button');


btn.addEventListener("click", createTable)

function createTable() {
  let table= document.createElement('table');
  let body = document.querySelector('body');
  for(var i=0 ; i < rowsInput.value; i++ ){
  let tr= document.createElement("tr");  //<tr></tr>
  table.appendChild(tr);
  for(var j=0 ; j < colsInput.value ; j++ ){
    let td = document.createElement("td"); //<td></td>
    let  txt =document.createTextNode("item txt");
    td.appendChild(txt);
    tr.appendChild(td);
  }
  }
  body.appendChild(table);
}
createTable();