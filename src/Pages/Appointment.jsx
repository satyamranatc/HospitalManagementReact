import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Calendar, Clock, MessageSquare, Phone, User, Check } from 'lucide-react'

export default function Appointment() {
  const { DoctorName } = useParams()
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="ml-64 mt-2 p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-white rounded-xl shadow-md p-8 mb-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-3">Book Appointment</h1>
        <p className="text-xl text-gray-600">Welcome to {DoctorName}'s Clinic!</p>
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          {/* Name Field */}
          <div className="mb-6">
            <label className="flex items-center text-gray-700 font-medium mb-2">
              <User className="w-5 h-5 mr-2 text-blue-500" />
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Phone Field */}
          <div className="mb-6">
            <label className="flex items-center text-gray-700 font-medium mb-2">
              <Phone className="w-5 h-5 mr-2 text-blue-500" />
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Date and Time Fields */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="flex items-center text-gray-700 font-medium mb-2">
                <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                required
              />
            </div>
            <div>
              <label className="flex items-center text-gray-700 font-medium mb-2">
                <Clock className="w-5 h-5 mr-2 text-blue-500" />
                Preferred Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                required
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label className="flex items-center text-gray-700 font-medium mb-2">
              <MessageSquare className="w-5 h-5 mr-2 text-blue-500" />
              Additional Notes
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition h-32 resize-none"
              placeholder="Any specific concerns or information you'd like to share?"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition font-medium text-lg flex items-center justify-center space-x-2"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Appointment</span>
          </button>
        </form>

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center animate-fade-in">
            <Check className="w-5 h-5 mr-2" />
            Appointment booked successfully!
          </div>
        )}
      </div>
    </div>
  )
}