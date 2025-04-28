'use client'
import React, { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { supabase } from '../../lib/supabaseClient'

export default function SignIn() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const message = searchParams?.get('message')

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (message) {
      setSuccess(message)
    }
  }, [message])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  
    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }
  
    setIsSubmitting(true)
  
    try {
      console.log('Attempting to sign in with:', formData.email)
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })
  
      if (error) {
        console.error('Supabase auth error:', error)
        throw error
      }
  
      console.log('Sign in successful:', data)
      router.push('/learn')
  
    } catch (error) {
      console.error('Sign in error:', error)
      setErrors({
        form: `Sign in failed: ${error.message || 'Invalid email or password'}`
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen px-6">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">Sign In</h1>
        {success && (
          <div className="bg-green-100 text-green-600 p-3 rounded-md mb-4">
            {success}
          </div>
        )}

        {errors.form && (
          <div className="bg-red-100 text-red-600 p-3 rounded-md mb-4">
            {errors.form}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-brandBlue focus:border-brandBlue'
                }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-brandBlue focus:border-brandBlue'
                }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="flex justify-end">
            <Link href="/forgot-password" className="text-sm text-brandBlue">
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full py-3 px-4 bg-brandBlue text-white font-medium rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing In...' : 'Sign In'}
          </motion.button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link href="/sign-up" className="text-brandBlue font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}