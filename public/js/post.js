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
    if(commentBtn){
        // pass the button to the function
        showCommentInput(commentBtn)         
    }

    // if expend the comment btn clicked 
    if(showComment){
        expandComment(showComment);
    }
})