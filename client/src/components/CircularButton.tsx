import { Link } from 'wouter'
import { ReactNode } from 'react'

interface CircularButtonProps {
  href: string
  color: string
  icon: ReactNode
  label: string
}

const CircularButton = ({ href, color, icon, label }: CircularButtonProps) => {
  return (
    <Link href={href}>
      <a className="flex flex-col items-center space-y-3 group">
        <div 
          className={`w-20 h-20 rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110 ${color}`}
        >
          <div className="text-2xl">
            {icon}
          </div>
        </div>
        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
          {label}
        </span>
      </a>
    </Link>
  )
}

export default CircularButton