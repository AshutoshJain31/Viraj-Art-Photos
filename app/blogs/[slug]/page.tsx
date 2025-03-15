import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Photography Blog's
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              {/* <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              /> */}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Weeding</h3>
                <p className="text-gray-600 mb-2">Best Weeding</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-blue-600 font-medium">Kalyan</span>
                  <span className="text-gray-500">
                    {new Date().toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        
      </main>
    </div>
  );
};

export default Page;
