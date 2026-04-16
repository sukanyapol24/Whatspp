import ContactForm from "./ContactForm";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-black flex items-center justify-center p-4">
      <div className="max-w-md mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-yellow-500 overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default App;