function addroom(){
    let form = document.getElementById('addRoom-Form');
    const inputs = form.getElementsByTagName('input');


    fetch('https://still-scrubland-29051.herokuapp.com/add-room/',{
        method : "POST",
        body:JSON.stringify({
            room_type:inputs[0].value,
            Beds:inputs[1].value,
            Max_Guests:inputs[2].value,
            Night:inputs[3].value,
            img:inputs[4].value,
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then ((Response) => Response.json())
    .then((json) => {
        alert("ROOM ADDED");
        console.log(json);
        form.reset();
    });
}