'use client'

import type React from 'react'
import {useFormState} from 'react-dom'
import {createUser} from '../actions/createUser'

export const SignupForm: React.FC = () => {
  const [state, formAction] = useFormState(createUser, {message: ''})
  const {error, message, success} = state

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const emailValue = formData.get('email')
    const email = typeof emailValue === 'string' ? emailValue : null
    formAction({email})
  }

  const showErrorMessage = error && (
    <div style={{color: 'red'}}>
      <p>{message}</p>
    </div>
  )

  const showSuccessMessage = success && (
    <div style={{color: 'green'}}>
      <p>{message}</p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" />
      <button type="submit">Sign Up</button>
      {showErrorMessage}
      {showSuccessMessage}
    </form>
  )
}
