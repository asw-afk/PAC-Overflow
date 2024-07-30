const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, 
    });
    
if (response.ok) {
   window.location.href = "/api/users/login"
} else {
    alert(response.statusText);
}
};

document.querySelector('#logout').addEventListener('click', logout); 

