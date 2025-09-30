//

export async function _fetch<TResponse = unknown, TRequest = unknown>(
  api: string,
  method?: "POST" | "PATCH" | "GET" | "DELETE" | "HEAD",
  body?: TRequest
): Promise<TResponse> {
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Only include body if method allows it
  if (method !== "GET" && method !== "HEAD" && body !== undefined) {
    options.body = JSON.stringify(body);
  }

  const res = await fetch(api, options);

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`HTTP error! Status: ${res.status}, Message: ${errorText}`);
  }

  // Try parsing JSON safely
  try {
    return (await res.json()) as TResponse;
  } catch {
    throw new Error("Failed to parse JSON response.");
  }
}
