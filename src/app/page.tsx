import FormBuilder from '../components/FormBuilder'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Form Builder</h1>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <FormBuilder />
        </div>
      </div>
    </main>
  )
}

