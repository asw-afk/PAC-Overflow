//Comment Submission

const commentFormHandler = async (event) => {
  event.preventDefault();

  const body = event.target.querySelector("textarea").value.trim();
  const votes = 0;

  if (body && votes) {
    const response = await fetch("/api/comments/newComment", {
      method: "POST",
      body: JSON.stringify({ body, votes }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    
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
