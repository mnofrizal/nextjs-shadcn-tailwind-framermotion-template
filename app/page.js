import { Navbar } from "@/components/navbar"
import { Dashboard } from "@/components/dashboard"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Dashboard />
    </div>
  )
}