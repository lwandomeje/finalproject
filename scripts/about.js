function addabout(){
    let form = document.getElementById('addabout-Form');
    const inputs = form.getElementsByTagName('input');


    fetch('http://still-scrubland-29051.herokuapp.com/about/',{
        method : "POST",
        body:JSON.stringify({
            title:inputs[0].value,
            skill:inputs[1].value,
            skill1:inputs[2].value,
            skill2:inputs[3].value,
            img:inputs[4].value,
            content:inputs[5].value,
                   
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then ((Response) => Response.json())
    .then((json) => {
        alert("About ADDED");
        console.log(json);
        form.reset();
    });
}