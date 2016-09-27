var button = document.getElementById("counter");
var counter=0;
button.onclick=function(){


//Create a request to counter endpoint
var request= new XMLHttpRequest();

//capture api response and change html
request.onreadystatechange=function(){
  if(request.readyState=== XMLHttpRequest.DONE){
    if(request.staus=200){
      counter = request.responseText;

var span=document.getElementById("counterspan");
span.innerHTML=counter.toString();
    }
  }
}

//Make the request to counter endpoint
request.open('GET', 'http://localhost:8080/counter',true);
request.send(null);



};

  var submitComment= document.getElementById("submit_comment_btn");
  submitComment.onclick=function(){
    // Create request
    var request = new XMLHttpRequest();

    //capture api response of comments list and render html to list of comments
    request.onreadystatechange=function(){
      if(request.readyState=== XMLHttpRequest.DONE){
        if(request.staus=200){
          commentJSONString = request.responseText;

          var commentArrayList=JSON.parse(commentJSONString);
      var commentsListHTML='';
      for (var i=0;i<commentArrayList.length;i++){
        commentsListHTML=commentsListHTML+"<li>"+commentArrayList[i]+"</li>";
      }
      var unorderedCommentsList= document.getElementById('unordered_comments_list');
      unorderedCommentsList.innerHTML=commentsListHTML.toString();
        }
      }
    }

   // Make request  to server to add comment to the list of comments

    var commentTextArea= document.getElementById("comment");
    var comment=commentTextArea.value;
    request.open('GET', 'http://localhost:8080/submit-comment?comment='+comment,true);
    request.send(null);

};


