function photo(){
    let form = document.getElementById('photo-Form');
    const inputs = form.getElementsByTagName('input');


    fetch('https://127.0.0.1:5000/add-new-photo/',{
        method : "POST",
        body:JSON.stringify({
            img:inputs[0].value,

        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then ((Response) => Response.json())
    .then((json) => {
        alert("you are registered");
        console.log(json);
        form.reset();
    });
}