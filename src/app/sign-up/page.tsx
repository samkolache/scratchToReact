'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { supabase } from '../../lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function SignUp() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  
  //errors for validation
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  

  //handles input change and adds to form data state
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
  

  //finds errors and stores them into error object
  const validateForm = () => {
    const newErrors = {}
    
    // Validate first name
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    
    // Validate last name
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }
    
    // Validate confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    
    return newErrors
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    //if errors exist, return
    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Sign up with Supabase
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
          }
        }
      })
      
      if (error) throw error
      
      // Redirect to login page or dashboard
      router.push('/sign-in')
      
    } catch (error) {
      console.error('Signup error:', error)
      setErrors({
        form: error.message || 'An error occurred during signup. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <div className="flex justify-center items-center min-h-screen px-6">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">Create an Account</h1>
        
        {errors.form && (
          <div className="bg-red-100 text-red-600 p-3 rounded-md mb-4">
            {errors.form}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.firstName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-brandBlue focus:border-brandBlue'
                }`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
            
            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.lastName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-brandBlue focus:border-brandBlue'
                }`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>
          
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
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-brandBlue focus:border-brandBlue'
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
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.password ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-brandBlue focus:border-brandBlue'
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          
          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.confirmPassword ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-brandBlue focus:border-brandBlue'
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
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
            {isSubmitting ? 'Creating Account...' : 'Sign Up'}
          </motion.button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link href="/sign-in" className="text-brandBlue font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}