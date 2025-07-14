import { Route, Switch } from 'wouter'
import { Toaster } from '@/components/ui/toaster'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Projects from '@/pages/Projects'
import Contact from '@/pages/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route>
            <div className="flex items-center justify-center min-h-screen">
              <h1 className="text-2xl font-bold">Page Not Found</h1>
            </div>
          </Route>
        </Switch>
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}

export default App