/*TO GET THE VALUE OF INPUT USING ID */

var customerNameInput = document.getElementById("customerName");
var addressInput = document.getElementById("address");
var cityInput = document.getElementById("city");
var phoneInput = document.getElementById("phone");
var btn_click = document.getElementById("click");
var btn_clear = document.getElementById("clear");
var data = document.getElementById("data");
var inputs = document.getElementsByClassName("inputs");
console.log(inputs);
var current_index = 0;
var namealert=document.getElementById("namealert")
var array_customer=[]
//console.log(localStorage.getItem("customers"));

//console.log(localStorage.getItem("customers"));

/* to display local storge which is store  when we relode the page */
if (localStorage.getItem("EmployeesList") == null ){
  var array_customer = [] ; 
}else {
  array_customer = JSON.parse(localStorage.getItem("EmployeesList"));
  displayData() ; 
}



btn_click.onclick = function () {
  if (btn_click.innerHTML == "Add") {
    addCustomer();
  } else {
    updateData();
  }
  displayData();
  clear();
};

btn_clear.onclick = function () {
  clear();
};
/*function for add customer */
function addCustomer() {
  var customer = {
    // object for storing the values of inputs
    name: customerNameInput.value,
    address: addressInput.value,
    city: cityInput.value,
    phone: phoneInput.value,
  };
  array_customer.push(customer);
  console.log(array_customer)
  localStorage.setItem("EmployeesList", JSON.stringify(array_customer));
 
  //var x = localStorage.getItem("customer_data");
  //console.log(x);
  //console.log(array_customer)
}

/*function for display the data in table */
function displayData() {
  var result = " ";

  for (var i = 0; i < array_customer.length; i++)
    result += `<td>${i}</td>
   <td>${array_customer[i].name}
   </td>
   <td>${array_customer[i].address}
   </td>
   <td>${array_customer[i].city}
   </td>
   <td>${array_customer[i].phone}
   </td>
   <td>
 <a href='#editEmployeeModal' class='edit' onclick="getCourseData(${i}) "><i class='material-icons'  title='Edit'>&#xE254;</i></a>
   </td> 
   <td><a href='#editEmployeeModal' class='edit' onclick="deleteCourse(${i}) "><i class='material-icons'  title='Delete'>&#xE872;</i></a>
   </td></tr>`;

  //  console.log(result) "</tr>"
  //  console.log(result)

  data.innerHTML = result;
}

/*function for clear the inputs values */
function clear() {
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
  /*
    customerNameInput.value=""
    cityInput.value=""
addressInput.value=""
phoneInput.value=""*/
}





deleteBtn.onclick = function(){
  localStorage.removeItem("EmployeesList");
  array_customer = [] ; 
  data.innerHTML = "" ; 
}

/* function for the delete button in the table */
function deleteCourse(index) {
 
 
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      array_customer.splice(index, 1);
      localStorage.setItem("EmployeesList", JSON.stringify(array_customer));
      displayData();
      swal("Poof! has been deleted!", {
        icon: "success",
      });
    } else {
      swal("Your imaginary file is safe!");
    }
  });
}
//localStorage.setItem("test","thsis is test value")

function search(val) {
  var result = " ";

  for (var i = 0; i < array_customer.length; i++) {
    if (array_customer[i].name.toLowerCase().includes(val.toLowerCase())) {
      result += `<td>${i}</td>
   <td>${array_customer[i].name}
   </td>
   <td>${array_customer[i].address}
   </td>
   <td>${array_customer[i].city}
   </td>
   <td>${array_customer[i].phone}
   </td>
   <td>
 <a href='#editEmployeeModal' class='edit' ><i class='material-icons'  title='Edit'>&#xE254;</i></a>
   </td> 
   <td><a href='#editEmployeeModal' class='edit' onclick="deleteCourse(${i}) "><i class='material-icons'  title='Delete'>&#xE872;</i></a>
   </td></tr>`;

      //  console.log(result) "</tr>"
      //  console.log(result)
    }
  }
  data.innerHTML = result;
}
/* ACTION HAPPENED WHEN WE CLICK UPDATE  BUTTON  */
function getCourseData(index) {
  console.log(index);
  var customer = array_customer[index];
  console.log(customer);
  customerNameInput.value = customer.name;
  addressInput.value = customer.address;
  cityInput.value = customer.city;
  phoneInput.value = customer.phone;
  btn_click.innerHTML = "update";
  current_index = index;
}
function updateData() {
  var customer = {
    // object for storing the values of inputs
    name: customerNameInput.value,
    address: addressInput.value,
    city: cityInput.value,
    phone: phoneInput.value,
  };
  //هون عشان يعدل على ال row  اللي ضغطت عليه
  array_customer[current_index].name = customer.name;
  array_customer[current_index].address = customer.address;
  array_customer[current_index].city = customer.city;
  array_customer[current_index].phone = customer.phone;
  //console.log(array_customer);
  localStorage.setItem("customer_data", JSON.stringify(array_customer));
  swal("Good job!", "You clicked the button!", "success");
  btn_click.innerHTML = "Add";
}


customerName.onkeyup=function(){
  var namepattern=/^[a-z]{2,10}$/
  if(namepattern.test(customerName.value)){
    //console.log((namepattern.test(customerName.value)))
    btn_click.removeAttribute("disabled")
    customerName.classList.add("valid")
    customerName.classList.remove("is-invalid")
    namealert.classList.add("d-none")
  }
  else{
    btn_click.setAttribute("disabled",true)
    customerName.classList.add("invalid")
    customerName.classList.remove("valid")
    //console.log(namealert.value)
    namealert.classList.remove("d-none")

  }
}