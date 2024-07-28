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
function addComment(addCommentBtn, event) {
    
    const post = addCommentBtn.closest(".post");
    const commentTextArea = post.querySelector("#text-comment").value.trim();
    // const user_id = req.session.logged_in;
    const post_id = post.dataset.postid;


    console.log("I'm printing whatever is in text_area");
    // console.log(user_id);
    console.log(commentTextArea);
   console.log(`Post id: ${post_id}`)
}

// event handler that will handel al click in the post handlebar
post_list.addEventListener("click", (event)=>{
    console.log("You have clicked the button");
    // find the exact button that was clicked 
    const commentBtn = event.target.closest(".comment-btn");
   const addCommentBtn = event.target.closest(".add-comment");
    // if it is found
    if(commentBtn){
        // pass the button to the function
        showCommentInput(commentBtn)      
       
    }
    if (addCommentBtn){
        addComment(addCommentBtn, event)
    }
})