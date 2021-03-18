function booking(){
    let form = document.getElementById('myForm');
    const inputs = form.getElementsByTagName('input');
    const select = form.getElementsByTagName('select');
    const textarea = form.getElementsByTagName('textarea');



    fetch('https://still-scrubland-29051.herokuapp.com/add-new-record/',{

        method :"POST",
        body: JSON.stringify({
            name:inputs[0].value,
            lastname:inputs[1].value,
            check_in:inputs[2].value,
            check_out:inputs[3].value,
            email:inputs[4].value,          
            room_type:select[0].value,          
            message:textarea[0].value,        

        }),
        headers:{
            'Content-type': 'application/json ; charset=UTF-8',
        },
    })
    .then ((Response) => Response.json())
    .then((json) => {
        alert("your room is booked");
        console.log(json);
        form.resent();
    });
}


let today = new Date().toISOString().substr(0, 10);
document.querySelector("#today").value = today;

document.querySelector("#today2").valueAsDate = new Date();
