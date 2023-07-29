// Storing data in an key value Array format
let data = [
    {
        id: 1,name:'Akshay',email:'akshaybendadi@gmail.com',phone:9316054442,city:'surat'
    },
    {
        id: 2,name:'Ashim',email:'ashimdevnath01@gmail.com',phone:8866220094,city:'surat'
    }
] 

// onload add the existiong data in table and keeps data updated and stores in the table
function readData(){
    localStorage.setItem("object",JSON.stringify(data));
    var tabledata = document.querySelector(".data_table");

    var object = localStorage.getItem("object");
    var objectdata = JSON.parse(object);
    var elements = "";
    
    objectdata.map(record => (
        elements += `<tr>
            <td>${record.id}<//td>
            <td>${record.name}</td>
            <td>${record.email}</td>
            <td>${record.phone}</td>
            <td>${record.city}</td>
            <td class='action'>
            <button class='edit' onclick=edit(${record.id})>Edit</button>
            <button class='delete' onclick=deleteData(${record.id})>Delete</button>
            </td>
            </tr>`
    ))
    tabledata.innerHTML = elements;
}

// Add data in the table and localstorage
function submit(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let city= document.getElementById("city").value;
    const id = Math.floor(Math.random()*100)

   if(name&&email&&phone&&city){
    var newobject = {id:id,name:name,email:email,phone:phone,city:city};
    data.push(newobject);
   }
    document.getElementById("name").value = null;
    document.getElementById("email").value = null;
    document.getElementById("phone").value = null;
    document.getElementById("city").value = null;

    readData();
}

// to fetch the data index to be updated
function edit(id){
    document.getElementById("myForm").style.display = "block";
    var obj = data.find(rec => rec.id === id);
    document.getElementById("e_name").value = obj.name;
    document.getElementById("e_email").value = obj.email;
    document.getElementById("e_phone").value = obj.phone;
    document.getElementById("e_city").value = obj.city;
    document.getElementById("id").value = obj.id;
}

// to update the data in the table
function update(){
    let id = parseInt(document.getElementById("id").value);
    let name = document.getElementById("e_name").value;
    let email = document.getElementById("e_email").value;
    let phone = document.getElementById("e_phone").value;
    let city= document.getElementById("e_city").value;
    
    if(name&&email&&phone&&city){
        var index = data.findIndex(rec => rec.id === id);
        data[index] = {id,name,email,phone,city};
       }
    
    document.getElementById("myForm").style.display = "none";
    readData();
}

// to delete the inserted data from the table
function deleteData(id){
    data = data.filter(rec => rec.id !== id);
    readData();
}

// to close the update credentials form
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}