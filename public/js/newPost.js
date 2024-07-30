import ("../../controllers/api/userApi")
document.addEventListener('DOMContentLoaded', (event) => {
  const submitPostButton = document.querySelector("#submit-post");

  //the addEventListener call is only made if the #submit-post button exists in the DOM.

  if (submitPostButton) {
    submitPostButton.addEventListener("click", postFormHandler);
  }
})
;
const postFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();
  const body = document.querySelector("#post-body").value.trim();
  const votes = 0;
  const user_id = 1;

  if (title && body) {
    const response = await fetch("/api/posts/newPost", {
      method: "POST",
      body: JSON.stringify({ title, body, votes,user_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to create post");
    }
  }
};
