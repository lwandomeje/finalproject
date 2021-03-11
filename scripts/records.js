function getPosts() {
    // Fetch the data
    fetch("http://127.0.0.1:5000/show-records/")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        json.forEach((blog) => createBlogItem(blog));
      });
  }
  
  function createBlogItem(blog) {
    const item = `
    
    <table>

       <tr di="records${blog.id}">
           <td>${blog.id}</td>
           <td>${blog.name}</td>
           <td>${blog.lastname}</td>
           <td>${blog.check_in}</td>
           <td>${blog.check_out}</td>
           <td>${blog.email}</td>
           <td>${blog.room_type}</td>
           <td>${blog.message}</td>
       </tr>
`;
    let list = document.getElementById("booking-records");
    console.log("Hello");
    list.innerHTML += item;
  }
  
  getPosts();

  function getUsers() {
    // Fetch the data
    fetch("http://127.0.0.1:5000/show-register-records/")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        json.forEach((blog) => createUserItem(blog));
      });
  }
  
  function createUserItem(blog) {
    const item = `
  <table>

    <tr di="records${blog.id}">
       <td>${blog.id}</td>
       <td>${blog.name}</td>
       <td>${blog.lastname}</td>
       <td>${blog.email}</td>
    </tr>
   `;
    let list = document.getElementById("user-records");
    console.log("Hello");
    list.innerHTML += item;
  }
  
  getUsers();



  function getrooms() {
    // Fetch the data
    fetch("http://127.0.0.1:5000/show-room-record/")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        json.forEach((room) => createroomItem(room));
      });
  }
  
  function createroomItem(room) {
    const item = `
  <table>

    <tr di="records${room.id}">
       <td>${room.id}</td>
       <td>${room.room_type}</td>
       <td>${room.Beds}</td>
       <td>${room.Max_Guests}</td>
       <td>${room.Night}</td>
       <td>${room.img}</td>
    </tr>
  </table>
 `;
    let list = document.getElementById("room-records");
    console.log("Hello");
    list.innerHTML += item;
  }
  
  getrooms();


  