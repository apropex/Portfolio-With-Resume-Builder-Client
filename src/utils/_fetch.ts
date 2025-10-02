//

export async function _fetch<TResponse = unknown, TRequest = unknown>(
  api: string,
  options: RequestInit = {},
  body?: TRequest
): Promise<TResponse> {
  if (!options.method) options.method = "GET";
  if (!options.headers) {
    options.headers = {
      "Content-Type": "application/json",
    };
  }
  if (options.method !== "GET" && options.method !== "HEAD" && !body) {
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
