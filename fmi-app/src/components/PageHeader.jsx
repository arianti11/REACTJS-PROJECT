import React from 'react'

const PageHeader = ({ title }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
    </div>
  )
}

export default PageHeader