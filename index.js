function createPost(){
  //create functon
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  
  //get blog values
  
  var postTitle  = document.getElementById('postTitle').value;
  var post = document.getElementById('post').value;
  var postAuthor = document.getElementById('postAuthor').value;  
  
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
  
  var blogSection = postTemplate({ 'title': postTitle, 'body': post, 'poster': postAuthor});
  var postElement = document.getElementById("post");
  var commentsSection = commentsTemplate();

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commentText = document.getElementById("commentText").value;
  var commenterName = document.getElementById("commenter").value;

  var commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
}