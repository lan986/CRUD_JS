var customerNameInput =document.getElementById("customerName")
var addressInput =document.getElementById("address")
var cityInput =document.getElementById("city")
var phoneInput =document.getElementById("phone")
var btn_click=document.getElementById("click")
var array_customer=[]
var data = document.getElementById("data")
var inputs=document.getElementsByClassName("inputs")

//console.log(courseCategory,courseDescription,courseName,coursePrice)

btn_click.onclick=function(){
addCustomer();
displayData();
clear();

}

    function addCustomer(){ 
    var customer={   // object for storing the values of inputs 
        name:customerNameInput.value,
       address:addressInput.value,
        city:cityInput.value,
        phone:phoneInput.value
    }
    array_customer.push(customer)
    }

    function displayData(){

    
   var result =" "

   for(var i=0;i<array_customer.length;i++)
   result+=`<td>${i}</td>
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
   </td></tr>`
   /*
        "<button type='button' onclick=''  class='btn btn-default'>" +
        "<span class='glyphicon glyphicon-remove' />" +"update"
        "</button>" +
        "</td>"  
        "<tr>"*/
       
   //  console.log(result) "</tr>"
 //  console.log(result)

data.innerHTML=result

}

function clear(){
    for (var i=0;i<inputs.length;i++){
        inputs[i].value=""
    }
    /*
    customerNameInput.value=""
    cityInput.value=""
addressInput.value=""
phoneInput.value=""*/
    }

    function deleteCourse(index){
   console.log(index)
    array_customer.splice(index,1)
    displayData()
    }
