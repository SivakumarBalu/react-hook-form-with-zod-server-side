'use client'
import React, { useState } from 'react'

const FormWithoutReactHookForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState<string[]>([])

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true)
        if(password !== confirmPassword) {
            setErrors(["Passwords do not match"])
            setIsSubmitting(false)
            return
        }

        //TODO: Server implementation
        await new Promise((resolve) => setTimeout(resolve, 1000))

        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setIsSubmitting(false)
    }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-y-2'>
        {errors.length > 0 && (
            <ul>
               {errors.map(error => 
                (<li key={error} className='bg-red-100 text-red-500 rounded px-4 py-2'>{error}</li>))}
            </ul>
        )}
     <input 
        className='px-4 py-2 rounded'
        type="text"
        value={email}
        required
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}  />
     <input 
        className='px-4 py-2 rounded'     
        type="password"
        value={password}
        required
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}  />
     <input 
        className='px-4 py-2 rounded'     
        type="password"
        value={confirmPassword}
        required
        placeholder='Confirm Password'
        onChange={(e) => setConfirmPassword(e.target.value)}  />
     <button 
        className="rounded py-2 bg-blue-500 disabled:bg-gray-500"
        disabled={isSubmitting}>Submit</button>
    </form>
  )
}

export default FormWithoutReactHookForm