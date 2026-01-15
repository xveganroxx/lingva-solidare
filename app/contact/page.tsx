'use client'

import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    alert('This is a static mock-up. Form submission is not functional.')
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact</h1>

      {/* Intro */}
      <section className="mb-8">
        <p className="text-lg text-gray-700 leading-relaxed">
          Lingva Solidare is a proof-of-concept initiative exploring how Esperanto can serve as a tool for 
          linguistic decolonization and cross-cultural solidarity on college campuses. We welcome inquiries 
          from students interested in starting chapters, faculty seeking to integrate linguistic justice into 
          their work, and organizations looking to collaborate on anti-colonial language education.
        </p>
      </section>

      {/* Form */}
      <section className="mb-12">
        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-2">
                University/Organization
              </label>
              <input
                type="text"
                id="university"
                name="university"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none"
                placeholder="Your institution or organization"
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                Role
              </label>
              <select
                id="role"
                name="role"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none bg-white"
              >
                <option value="">Select your role</option>
                <option value="student">Student</option>
                <option value="faculty">Faculty</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none resize-y"
                placeholder="Tell us about your interest in Lingva Solidare, questions about starting a club, or ideas for collaboration..."
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors cursor-pointer"
              >
                Send
              </button>
              <p className="text-sm text-gray-600 mt-3">
                <em>Note: Static mock-up; no backend submission. This form is for demonstration purposes only.</em>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
