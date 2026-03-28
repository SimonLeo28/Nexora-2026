// Central API helper for the Nexora frontend
// All API calls go through here — handles base URL and auth headers automatically.


const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';


/**
 * Regular fetch with JSON content-type
 */
export async function apiFetch(endpoint, options = {}) {
  const token = localStorage.getItem('nexora_admin_token');

  const url = `${API_URL}${endpoint}`;
  
  // Prepare headers
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  };

  // Only add Authorization if token exists to avoid "Bearer null" errors on public routes
  if (token && !headers.Authorization) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, {
    method: options.method || 'GET',
    headers,
    credentials: 'include', // Best practice for production CORS
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  // const data = await res.json();
  let data;
  try {
    data = await res.json();
  } catch (err) {
    throw new Error(`Invalid JSON response from server: ${err.message}`);
  }

  if (!res.ok) {
    throw new Error(data.error || `Server error: ${res.status}`);
  }

  return data;
}

/**
 * Fetch with JWT auth header (for admin API calls)
 */
export async function authFetch(endpoint, options = {}) {
  const token = localStorage.getItem('nexora_admin_token');
  return apiFetch(endpoint, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  });
}

export { API_URL };

