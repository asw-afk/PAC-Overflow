// //Comment Submission unable to get it to work

// const commentFormHandler = async (event) => {
//   event.preventDefault();

//   const commentTextArea = event.target.querySelector("textarea").value.trim();
//   // const user_id = document.querySelector
//   const votes = 0;

//   if (commentTextArea && user_id) {
//     console.log("Preparing to make fetch call...");
//     const response = await fetch("/api/comments/newComment", {
//       method: "POST",
//       body: JSON.stringify({ body: commentTextArea, votes: votes, user_id: user_id }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (response.ok) {
//       document.location.reload();
//     } else {
//       alert("Failed to add comment");
//     }
//   }
// };

// document.querySelectorAll(".comment-input").forEach((commentForm) => {
//   commentForm.addEventListener("submit", commentFormHandler);
// });
