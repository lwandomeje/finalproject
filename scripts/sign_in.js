function login(){
    let loginForm = document.getElementById('log')
    let inputs = loginForm.getElementsByTagName('input')

    let name = inputs[0].value;
    let lastname = inputs[1].value;

    let log;
    fetch('http://127.0.0.1:5000/show-register-records/')
    .then ((Response) => Response.json())
    .then ((json) =>{
        console.log(json);
        log = json;
        console.log(name,lastname,log);

        let logged = log .filter((userProfile) =>{
            return userProfile.name == name && userProfile.lastname == lastname;
        });

        console.log(logged);
        if (logged.length >= 1){
            window.location.href = './index.html';
        }
    })
}

function logadmin(){
    let loginForm = document.getElementById('admin')
    let inputs = loginForm.getElementsByTagName('input')

    let name = inputs[0].value;
    let lastname = inputs[1].value;

    let log;
    fetch('http://127.0.0.1:5000/show-admin-records/')
    .then ((Response) => Response.json())
    .then ((json) =>{
        console.log(json);
        log = json;
        console.log(name,lastname,log);

        let logged = log.filter((userProfile) =>{
            return userProfile.name == name && userProfile.lastname == lastname;
        });

        console.log(logged);
        if (logged.length >= 1){
            window.location.href = './records.html';
        }
    })
}