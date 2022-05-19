import api from '../../../infrastructure/api';

describe('API', () => {
  const apiRequest = api('http://hn.algolia.com/api/v1/');

  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({ data: { username: 'John Doe' } }),
  });

  beforeEach(() => {
    fetch.mockClear();
  });

  // ---------- GET ----------
  it('Should GET success', async () => {
    const res = await apiRequest.get('items/2', 'token');

    expect(res).toEqual({ data: { username: 'John Doe' } });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('Should GET fails', async () => {
    fetch.mockRejectedValueOnce('API is down');

    const res = await apiRequest.get('usuario/v1');

    expect(res).toEqual({ error: 'API is down' });
  });

  // ---------- POST ----------
  it('Should POST success', async () => {
    const payload = {
      name: 'John Doe',
      age: 99,
    };

    const res = await apiRequest.post('usuario/v1', payload, 'token');

    expect(res).toEqual({ data: { username: 'John Doe' } });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('Should POST fails', async () => {
    const payload = {
      name: 'John Doe',
      age: 99,
    };

    fetch.mockRejectedValueOnce('API is down');

    const res = await apiRequest.post('usuario/v1', payload, 'token');

    expect(res).toEqual({ error: 'API is down' });
  });

  // ---------- UPDATE (PUT) ----------
  it('Should UPDATE (PUT) success', async () => {
    const payload = {
      name: 'John Doe',
      age: 99,
    };

    const res = await apiRequest.put('usuario/v1', payload, 'token');

    expect(res).toEqual({ data: { username: 'John Doe' } });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('Should UPDATE (PUT) fails', async () => {
    const payload = {
      name: 'John Doe',
      age: 99,
    };

    fetch.mockRejectedValueOnce('API is down');

    const res = await apiRequest.put('usuario/v1', payload);

    expect(res).toEqual({ error: 'API is down' });
  });

  // ---------- DELETE ----------
  it('Should DELETE success', async () => {
    const payload = {
      name: 'John Doe',
      age: 99,
    };

    const res = await apiRequest.delete('usuario/v1', payload, 'token');

    expect(res).toEqual({ data: { username: 'John Doe' } });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('Should DELETE fails', async () => {
    const payload = {
      name: 'John Doe',
      age: 99,
    };

    fetch.mockRejectedValueOnce('API is down');

    const res = await apiRequest.delete('usuario/v1', payload);

    expect(res).toEqual({ error: 'API is down' });
  });
});
