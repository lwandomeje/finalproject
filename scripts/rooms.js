
  function getPosts() {
    // Fetch the data
    fetch("http://127.0.0.1:5000/show-room-record/")
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
    <button class="butt"> book room</button>
    </div>`;
    let list = document.getElementById("rooms");
    console.log("Hello");
    list.innerHTML += item;
  }
  
  getPosts();
  