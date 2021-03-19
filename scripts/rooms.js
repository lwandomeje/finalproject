
  function getPosts() {
    // Fetch the data
    fetch("https://still-scrubland-29051.herokuapp.com/show-room-record/")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        json.forEach((blog) => createBlogItem(blog));
      });
  }
  
  function createBlogItem(blog) {
    const item = `
    <div class="room-content" id="room-content${ blog.id }" >
    <img src="${blog.img}"/>
    <h1>${blog.room_type}</h1>
    <h2>${blog.Beds}</h2>
    <h2>${blog.Max_Guests}</h2>
    <h2>${blog.Night}</h2>
    <a class="butt" href="register.html">Book A Room</a>
    </div>`;
    let list = document.getElementById("rooms");
    console.log("Hello");
    list.innerHTML += item;
  }
  
  getPosts();
  