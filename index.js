M.AutoInit();
// Variables DOM
let authorName = document.getElementById("name");
let title= document.getElementById("title");
let post = document.getElementById("post");
let submit = document.getElementById("post-submit");
let topics = document.getElementById("topic");
let selectedTopic = topics.options[topics.selectedIndex].text;
console.log(selectedTopic)
// Styling Texts
  submit.addEventListener("click", function(event) {
    let output = bbcodeParser.bbcodeToHtml(post.value);
     post.value="";
     title.value="";
     authorName.value="";
    event.preventDefault();
    //Save output and author name to database

} )

//disabling button 
