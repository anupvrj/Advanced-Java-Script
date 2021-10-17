let posts=[{title:"Post 1",description:"this is post one",author:"Author 1"},
{title:"Post 2",description:"this is post two",author:"Author 2"}];

/*Consider to load this post, system takes 1 sec so we will use setTimeOut() function to achieve this task*/
function getPosts(){
setTimeout(function(){
    var output="";
posts.forEach((post)=>{
   output+=`<p><b>Title:</b> ${post.title} <b>Description:</b> ${post.description} <b>Author:</b> ${post.author}</p>`;
});
document.getElementById("mypost").innerHTML=output;
},1000);
}
// consider that to creat this post server takes 2 seconds now in this sitiuation,getPost() function will be executed 
// without waiting createPost() to complete
function createPost(posts2){
setTimeout(()=>posts2.push({title:"Post 2",description:"this is post one",author:"Author 3"}),2000);
}


createPost(posts);
getPosts();
