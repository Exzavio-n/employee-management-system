function navigateTo(page) {
  switch (page) {
    case 'dashboard':
      window.location.href = '../dashboard/dashboard.html';
      break;
    case 'employee-list':
      window.location.href = '../employee-list/employee-list.html';
      break;
    case 'positions':
      window.location.href = '../positions/positions.html';
      break;
    case 'attendance':
      window.location.href = '../attendance/attendance.html';
      break;
  }
}

function logout() {
  // Clear session (if any)
  // Redirect to login
  window.location.href = '../index/index.html';
}

fetch('http://localhost:3000/api/dashboard')
      .then(res => res.json())
      .then(data => {
        document.getElementById('totalEmployee').textContent = data.employeeCount;
        document.getElementById('totalPosition').textContent = data.positionCount;
      })
      .catch(err => {
        console.error(err);
        document.getElementById('totalEmployee').textContent = 'Error';
        document.getElementById('totalPosition').textContent = 'Error';
      });