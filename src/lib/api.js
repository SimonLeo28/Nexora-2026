// Central API helper for the Nexora frontend
// All API calls go through here — handles base URL and auth headers automatically.

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

/**
 * Regular fetch with JSON content-type
 */
export async function apiFetch(endpoint, options = {}) {
  const url = `${API_URL}${endpoint}`;
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  const data = await res.json();

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
