import { FileText, FolderOpen, Mail } from 'lucide-react'
import CircularButton from '@/components/CircularButton'

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            MK
          </div>
        </div>

        {/* Greeting */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Hello
        </h1>

        {/* Introduction */}
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-lg mx-auto leading-relaxed">
          I'm Munish Kumar, a Site Reliability Engineer with 8+ years of experience 
          building reliable, scalable systems.
        </p>

        {/* Circular Buttons */}
        <div className="flex justify-center items-center space-x-8 md:space-x-12">
          <CircularButton
            href="/about"
            color="bg-blue-500 hover:bg-blue-600"
            icon={<FileText />}
            label="Resume"
          />
          <CircularButton
            href="/projects"
            color="bg-green-500 hover:bg-green-600"
            icon={<FolderOpen />}
            label="Projects"
          />
          <CircularButton
            href="/contact"
            color="bg-purple-500 hover:bg-purple-600"
            icon={<Mail />}
            label="Contact"
          />
        </div>
      </div>
    </div>
  )
}

export default Home