document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // You can later route this to a backend login check
  if (username === "admin" && password === "adimin") {
    window.location.href = "../dashboard/dashboard.html";
  } else {
    alert("Invalid credentials");
  }
  
});
