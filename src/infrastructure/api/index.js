const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Connection: 'keep-alive',
};

function _getToken() {
  const token = localStorage.getItem('token');

  if (token) headers.Authorization = `Bearer ${token}`;

  return token;
}

function _processResponse(result) {
  return result
    .then((res) => res.json())
    .then(async (res) => {
      let _res = res;

      if (!res?.data) _res = { error: res?.error, data: res?.data };
      else if (res?.data?.error) _res = { error: res.data.error };

      return _res;
    })
    .catch((error) => {
      return { error };
    });
}

async function _processesRequest(request, method, params, optionalsHeaders) {
  _getToken();

  const response = fetch(request, {
    method,
    headers: optionalsHeaders ? { ...headers, ...optionalsHeaders } : headers,
    ...(params ? { body: JSON.stringify({ params }) } : {}),
  });

  const result = await _processResponse(response);
  return result;
}

const api = (urlBase) => ({
  async get(endpoint, params = null, optionalsHeaders = null) {
    const result = await _processesRequest(
      `${urlBase}${endpoint}`,
      'GET',
      params,
      optionalsHeaders
    );
    return result;
  },
  async post(endpoint, params = null, optionalsHeaders = null) {
    const result = await _processesRequest(
      `${urlBase}${endpoint}`,
      'POST',
      params,
      optionalsHeaders
    );
    return result;
  },
  async put(endpoint, params = null, optionalsHeaders = null) {
    const result = await _processesRequest(
      `${urlBase}${endpoint}`,
      'PUT',
      params,
      optionalsHeaders
    );
    return result;
  },
  async delete(endpoint, params = null, optionalsHeaders = null) {
    const result = await _processesRequest(
      `${urlBase}${endpoint}`,
      'GET',
      params,
      optionalsHeaders
    );
    return result;
  },
});

export default api;
