export async function submitContact({ name, email, message, botcheck = false }, accessKey) {
  if (!accessKey.trim()) {
    throw new Error('The contact form is temporarily unavailable. Please try again later.');
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        access_key: accessKey.trim(),
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        subject: 'New message from the KCODE. portfolio',
        from_name: 'KCODE. Contact',
        botcheck,
      }),
    });
    const result = await response.json();

    if (!response.ok || result.success !== true) {
      throw new Error('Submission rejected');
    }
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('The request timed out. Delivery could not be confirmed. Please try again later.');
    }
    throw new Error('Your message could not be sent. Please check your connection and try again.');
  } finally {
    clearTimeout(timeout);
  }
}
