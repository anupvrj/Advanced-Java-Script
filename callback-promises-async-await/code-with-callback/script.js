let posts=[{title:"Post 1",description:"this is post one",author:"Author 1"},
{title:"Post 2",description:"this is post two",author:"Author 2"}];


function getPost(){
    setTimeout(
        function(){
    let output="";
 posts.forEach(function(post){output+=`<p><b>Title:</b> ${post.title} 
 <b>Description:</b> ${post.description} <b>Author:</b>${post.author}`});
document.getElementById("mypost").innerHTML=output;
},1000);
}

function createPost(addpost,callback){
setTimeout(function(){
addpost.push({title:"Post 3",description:"this is post three",author:"Author 3"});
callback();
}
,2000);

}

createPost(posts,getPost);
