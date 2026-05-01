export function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem('user')) || null;
  } catch (error) {
    return null;
  }
}

export function isAuthenticated() {
  return Boolean(getCurrentUser());
}

export function isAdmin() {
  return getCurrentUser()?.role === 'admin';
}

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}
