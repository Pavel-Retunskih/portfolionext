export async function sendMessage(message: string): Promise<void> {
  const apiUrl = '/api/telegram'
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: message,
    });

    if (!response.ok) {
      const msg = response.json()
      return Promise.reject(msg);
    }
    return Promise.resolve(response.json());

  } catch (err) {
    return Promise.reject(err);
  }
}