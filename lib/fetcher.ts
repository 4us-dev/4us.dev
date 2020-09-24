export class RequestError {
  data?: any
  status?: number

  constructor(public message: string) {}
}

export const fetcherJson = async <T>(
  input: RequestInfo,
  init?: RequestInit
): Promise<T> => {
  const res = await fetch(input, init)

  if (!res.ok) {
    const error = new RequestError("Ocorreu um erro enquanto buscava os dados.")
    const contentType = res.headers.get("content-type")
    if (contentType && contentType.indexOf("application/json") !== -1) {
      error.data = await res.json()
    } else {
      error.data = await res.text()
    }
    error.status = res.status
    throw error
  }

  return await res.json()
}

export interface Snapshot<T> {
  data?: T
  isLoading: boolean
  isError: boolean
  error?: any
}
