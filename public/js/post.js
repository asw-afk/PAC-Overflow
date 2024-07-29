const post_list = document.querySelector(".posts-list");


// Function that will handel showing the textarea to type comment
function showCommentInput(commentBtn){
 // find out the exact post that the clicked button exist
 const post = commentBtn.closest(".post");
 // use the post to find out the exact target it area that need to change
 const comment_input_area = post.querySelector(".comment-input");

 // if the class contain hidden class remove it otherwise add it
 if( comment_input_area.classList.contains('hidden')){
      comment_input_area.classList.remove("hidden");

  }else{
      comment_input_area.classList.add("hidden");
  }
}

//function that handles adding comments
 const addComment = async (addCommentBtn) => {
    
    const post = addCommentBtn.closest(".post");
    const commentTextArea = post.querySelector("#text-comment").value.trim();
    const user_id = post.dataset.userid;
    const post_id = post.dataset.postid;


    console.log("I'm printing whatever is in text_area");
    console.log(`User: id: ${user_id}`);
    console.log(commentTextArea);
   console.log(`Post id: ${post_id}`)
//    console.log(typeof(user_id));
//    console.log(typeof(post_id));

   //fetch call
     if (commentTextArea && user_id && post_id) {
    console.log("Preparing to make fetch call...");
    const response = await fetch("/api/comments/newComment", {
      method: "POST",
      body: JSON.stringify({ body: commentTextArea, user_id: user_id, post_id: post_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (response.ok) {
      document.location.reload();
    } else {
      console.log(data);
        alert("Failed to add comment");
    }
  }
}

 //***************Function that will expand comments */
 function expandComment(showComment){
    console.log('you clicked show comments');
    // find the post that the button was clicked
    const post = showComment.closest(".post");
// used the post to find the exact button was clicked
    const expandComment = post.querySelector(".comments-section");
    console.log(expandComment);
    // for(let i=0; i<expandComment.length; i++)
    if(expandComment.classList.contains('hidden')){
        console.log('you are here in the condition');
        expandComment.classList.remove("hidden")
    }else{
        expandComment.classList.add("hidden");
    }
 }
// event handler that will handel al click in the post handlebar
post_list.addEventListener("click", (event)=>{
    console.log("You have clicked the button");
    // find the exact button that was clicked 
    const commentBtn = event.target.closest(".comment-btn");

    const showComment = event.target.closest(".show-comment");
   
    // if the commetn btn clicked

   const addCommentBtn = event.target.closest(".add-comment");
    // if it is found

    if(commentBtn){
        // pass the button to the function
        showCommentInput(commentBtn)         
    }

    // if expend the comment btn clicked 
    if(showComment){
        expandComment(showComment);
    }
    if (addCommentBtn){
        addComment(addCommentBtn)
    }
})

