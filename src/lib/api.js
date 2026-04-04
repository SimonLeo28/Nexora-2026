// Central API helper for the Nexora frontend
// All API calls go through here — handles base URL and auth headers automatically.


const API_URL = import.meta.env.VITE_API_URL || 'https://nexora-backend-admin.onrender.com';


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

  // console.log('📡 API Request:', {
  //   url,
  //   method: options.method || 'GET',
  //   body: options.body,
  // });
  console.log(`📡 ${options.method || 'GET'} → ${url}`, options.body || '');


  const method = options.method || 'GET';
  const isGet = method === 'GET';

  const res = await fetch(url, {
    method: options.method || 'GET',
    headers,
    credentials: 'include', // Best practice for production CORS
    // body: options.body ? JSON.stringify(options.body) : undefined,
    body:
      !isGet && options.body && typeof options.body === 'object'
        ? JSON.stringify(options.body)
        : options.body,
  });

  // const data = await res.json();
  // 🔥 Read response safely as text first
  const text = await res.text();

  let data = {};
  try {
    // data = await res.json();
    data = text ? JSON.parse(text) : {};
  } catch (err) {
    console.error('❌ Raw response:', text);
    throw new Error(`Invalid JSON response from server: ${err.message}`);
  }

  if (!res.ok) {
    throw new Error(data.error || data.message || `Server error: ${res.status}`);
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
      // Authorization: token ? `Bearer ${token}` : '',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
}

export async function registerTeam(data) {
  return apiFetch('/api/register', {
    method: 'POST',
    body: data,
  });
}

export { API_URL };

