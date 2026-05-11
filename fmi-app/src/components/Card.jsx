import React from 'react'

const Card = ({ title, value, change, icon: Icon, color }) => {
  const colors = {
    blue: 'bg-blue-600 text-white',
    green: 'bg-emerald-500 text-white',
    yellow: 'bg-amber-400 text-black',
    red: 'bg-rose-600 text-white',
  };

  return (
    <div className={`${colors[color]} p-6 rounded-2xl shadow-md flex items-center justify-between`}>
      <div>
        <p className="text-sm font-medium opacity-80">{title}</p>
        <p className="text-5xl font-extrabold mt-1">
          {value}
          {change && <span className="text-xl font-normal ml-2">{change}</span>}
        </p>
      </div>
      <div className="p-3 bg-white/20 rounded-full">
        <Icon className="w-10 h-10" />
      </div>
    </div>
  )
}

export default Card