let firstName=""
let lastName=""
let country=""
let phnNum=""
let state=""
let city=""
let village=""

function getData(){
    firstName=prompt("Enter First Name:");
    localStorage.setItem("firstName",firstName)

    lastName=prompt("Enter Last Name:");
    localStorage.setItem("lastName",lastName)

    country=prompt("Enter Country Name:");
    localStorage.setItem("country",country)

    phnNum=prompt("Enter Phone Number:");
    localStorage.setItem("phn",phnNum)

    state=prompt("Enter State:");
    localStorage.setItem("state",state)

    city=prompt("Enter City:");
    localStorage.setItem("city",city)

    village=prompt("Enter Village:");
    localStorage.setItem("village",village)
    setData()
}


function setData(){

    document.querySelector("#fname").value=localStorage.getItem("firstName");
    document.querySelector("#lname").value=localStorage.getItem("lastName");
    document.querySelector("#country").value=localStorage.getItem("country");
    document.querySelector("#phnNum").value=localStorage.getItem("phn");
    document.querySelector("#state").value=localStorage.getItem("state");
    document.querySelector("#city").value=localStorage.getItem("city");
    document.querySelector("#village").value=localStorage.getItem("village");
    
}


if(localStorage.length==0){
    getData();
}else{
    setData()
}

let container=document.querySelector(".container")
let modes=document.querySelector("button")
modes.innerText="Dark"
modes.addEventListener("click",()=>{
    if(modes.innerText=="Dark"){
        modes.innerText="Light"
        document.body.style.background="#a291eb"
    }
    else{
        modes.innerText="Dark"
        document.body.style.background="#210d7b"
    }
})