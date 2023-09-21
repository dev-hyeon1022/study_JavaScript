fetch("https://jsonplaceholder.typicode.com/posts/101")
.then((response) => {
  if(!response.ok){
    throw new Error(`response: ${response.status}`)
  }
  return response.json();
})
.then((posts) => {
  if(!posts || posts.length == 0){
    throw new Error("none result");
  }
  return posts.map((post, i) => {
    return {id: post.id, title: post.title};
  })
})
.then(console.log)
.catch((error) => {
  console.log(error);
  console.log("error");
});