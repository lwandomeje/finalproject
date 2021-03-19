function cancel(){
    let form = document.getElementById('delete-Form');
    const inputs = form.getElementsByTagName('input');


    fetch('http://127.0.0.1:5000/delete-booking/',{
        method : "POST",
        body:JSON.stringify({
            firstname:inputs[0].value,
            lastname:inputs[1].value,
            bookin_id:inputs[2].value,
                   

        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then ((Response) => Response.json())
    .then((json) => {
        alert("booking deleted");
        console.log(json);
        form.reset();
    });
}