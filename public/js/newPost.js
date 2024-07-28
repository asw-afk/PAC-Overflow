const postFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();
  const body = document.querySelector("#post-body").value.trim();
  const votes = 0;

  if (title && body) {
    const response = await fetch("/api/posts/newPost", {
      method: "POST",
      body: JSON.stringify({ title, body, votes }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/api/posts/");
    } else {
      alert("Failed to create post");
    }
  }
};

document
  .querySelector("#submit-post")
  .addEventListener("click", postFormHandler);
