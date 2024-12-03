const experiences = [
  {
    company: 'Universe Soft Tech',
    role: 'Python Django Developer',
    duration: 'April 2024 - Jun 2024',
    description: `
      ● Collaborated with experienced team members to develop Python and Django projects, 
        contributing to backend functionality and database management.
      ● Designed and implemented user-friendly interfaces for web applications, 
        enhancing user experience and engagement.
      ● Ensured consistency and coherence in design across all platforms, 
        maintaining a unified and professional appearance.
      `

  }
  // Add more experiences as needed
];
const Experience = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          My Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6  transition-transform duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {experience.role}
                  </h3>
                  <p className="text-gray-600">{experience.company}</p>
                </div>
                <span className="text-gray-500 text-sm">
                  {experience.duration}
                </span>
              </div>
              <pre className=" text-gray-700">{experience.description}</pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience