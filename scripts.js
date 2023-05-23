async function check(apiKey, text){
  const url = "http://localhost:8080/api/organization/check"
  const payload = {
    apiKey: apiKey,
    text: text,
  };

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  try {
    return await response.json()
  } catch (ignored) {
    return null
  }
}

async function handleCheck() {
  const apiKeyInput = document.querySelector("#api-key")
  const textInput = document.querySelector("#text")

  const response = await check(apiKeyInput.value, textInput.value)
  const responseSpan = document.querySelector("#response")
  responseSpan.innerText = response
}