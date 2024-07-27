const comment = document.querySelector("#comment-btn");
const comment_input_area = document.querySelector(".comment-input")

comment.addEventListener("click", ()=>{
    console.log("You have clicked the button");
   if( comment_input_area.classList.contains('hidden')){
        comment_input_area.classList.remove("hidden");

    }else{
        comment_input_area.classList.add("hidden");
    }
})