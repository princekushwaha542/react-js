import CropForm from "../components/CropForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 p-6">

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-6 items-center mb-8">

        {/* Text */}
        <div>
          <h1 className="text-4xl font-bold mb-4 text-green-800">
            🌾 Smart Farmer Dashboard
          </h1>

          <p className="text-gray-700 mb-4">
            Manage your crops, calculate profit & loss, and measure your land easily using smart tools.
          </p>

          <button className="bg-green-600 text-white px-6 py-2 rounded-xl shadow hover:scale-105 transition">
            Get Started
          </button>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef"
            alt="farm"
            className="rounded-2xl shadow-lg"
          />
        </div>

      </div>

      {/* Crop Form */}
      <CropForm />

    </div>
  );
}