interface SuccessResponse<T> {
  status: "success"
  message: string
  data: T
}

interface ErrorResponse {
  status: "error"
  message: string
}

export function successResponse<T>(message: string, data: T): SuccessResponse<T> {
  return {
    status: "success",
    message: message,
    data: data,
  }
}

export function errorResponse(message: string): ErrorResponse {
  return {
    status: "error",
    message: message,
  }
}
