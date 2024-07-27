//Comment Submission

const commentFormHandler = async (event) => {
  event.preventDefault();

  const commentText = event.target.querySelector("textarea").value.trim();
  const post_Id = event.target.closest(".post").getAttribute("data-post-id");

  if (commentText && post_Id) {
    const response = await fetch("/api/comments/newComment", {
      method: "POST",
      body: JSON.stringify({
        body: commentText,
        votes: 0,
        user_id: 1,
        post_id: post_Id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.status);
    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to add comment");
    }
  }
};

document.querySelectorAll(".comment-input").forEach((commentForm) => {
  commentForm.addEventListener("submit", commentFormHandler);
});
