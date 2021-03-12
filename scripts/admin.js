function admin(){
    let form = document.getElementById('admin-Form');
    const inputs = form.getElementsByTagName('input');


    fetch('http://still-scrubland-29051.herokuapp.com/rejister-admin/',{
        method : "POST",
        body:JSON.stringify({
            firstname:inputs[0].value,
            lastname:inputs[1].value,
            email:inputs[2].value,
                   

        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then ((Response) => Response.json())
    .then((json) => {
        alert("you are registered as admin");
        console.log(json);
        form.reset();
    });
}