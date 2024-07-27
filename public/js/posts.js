const postFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const game = document.querySelectory('#post-game').value.trim();
  const body = document.querySelector('#post-body').value.trim();
  const votes = 0;

  if (title && game && body) {
    const response = await fetch("/api/users/newPost", {
      method: "POST",
      body: JSON.stringify({ title, game, body, votes }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/posts");
    } else {
      alert("Failed to create post");
    }
  }
};

document.querySelector('.new-post-form').addEventListener('submit', postFormHandler );

document.querySelector().addEventListener();
