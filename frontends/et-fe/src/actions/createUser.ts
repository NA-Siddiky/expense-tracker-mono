'use server'

type ICreateUserResponse = {
  message: string
  status?: number
  error?: string
  success?: boolean
}

const mockUserDb: {email: string}[] = []

export async function createUser(
  state: ICreateUserResponse,
  payload: {email: string | null},
): Promise<ICreateUserResponse> {
  const email = payload.email

  if (typeof email !== 'string' || !email.includes('@')) {
    return {message: 'Invalid email address', status: 400, error: 'error'}
  }

  mockUserDb.push({email})

  return {message: 'User created successfully!', status: 200, success: true}
}
