import { useState } from 'react'

function HealthForm() {
  const [form, setForm] = useState({
    age: '',
    gender: '',
    symptoms: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted. Your data is being analyzed.')
  }

  return (
    <div className="p-8 max-w-xl mx-auto bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">Health Analysis Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="number" name="age" placeholder="Age" onChange={handleChange} className="w-full p-3 border rounded" />
        <select name="gender" onChange={handleChange} className="w-full p-3 border rounded">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <textarea name="symptoms" placeholder="Describe your symptoms..." rows="4" onChange={handleChange} className="w-full p-3 border rounded"></textarea>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-all">
          Get Advice
        </button>
      </form>
    </div>
  )
}

export default HealthForm

