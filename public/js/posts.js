const postFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector().value.trim();
  const game = document.querySelectory().value.trim();
  const body = document.querySelector().value.trim();
  const votes = document.querySelector().value.trim();

  if (title && game && body) {
    const response = await fetch("/api/users/post", {
      method: "POST",
      body: JSON.stringify({ title, game, body, votes }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
        document.location.replace("api/users/post");

    } else {
        alert('Failed to create post');

    }

  }
  
};
