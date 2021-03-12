
  function getPosts() {
    // Fetch the data
    fetch("http://still-scrubland-29051.herokuapp.com/show-about-record/")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        json.forEach((blog) => createBlogItem(blog));
      });
  }
  
  function createBlogItem(blog) {
    const item = `
 <div class="inner-container" id="room-content${ blog.id }" >
    <h1>${blog.title}</h1>
    <p>${blog.skill}</p>

    <div class="skills" id="aboutdiv2${blog.id }">
     <span>${blog.img}</span>
     <span>${blog.skill1}</span>
     <span>${blog.skill2}</span>
    </div>

 </div>`;
    let list = document.getElementById("about");
    console.log("Hello");
    list.innerHTML += item;
  }
  
  getPosts();