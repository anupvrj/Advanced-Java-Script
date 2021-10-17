let posts=[{title:"Post 1",description:"this is post one",author:"Author 1"},
{title:"Post 2",description:"this is post two",author:"Author 2"}];

function showPost(){
    setTimeout(
        function(){
            let output="";
            posts.forEach(function(post){
                output+=`<p>
                <b>Title: </b>${post.title}
                <b>Description: </b>${post.description}
                <b>Author: </b>${post.author}</p>`;
            });
            document.getElementById("mypost").innerHTML=output;
 },1000)

}

function createPost(){
    return new Promise(
        function(resolve,reject){
            setTimeout(
                function(){
                    posts.push({title:"Post 3",description:"this is post three",author:"Author 3"});
                    const error=false;
                    if(!error){
                        resolve();
                    }
                    else{
                        reject('Error: something went Wrong');
                    }
                }, 2000);
            }).then(showPost);
}

createPost();