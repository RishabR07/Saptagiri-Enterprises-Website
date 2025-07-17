import React from 'react';

export default function About() {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/images/fuel-bg.jpg")' }}>
      {/* Dark translucent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto py-16 px-6 text-white">
        <h2 className="text-4xl font-bold text-center mb-12">About Saptagiri Enterprises</h2>

        {/* Company Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold mb-2">Petrol Pump Name</h3>
            <p>Saptagiri Enterprises</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold mb-2">Owner</h3>
            <p>B. Narayan Shetty</p>
          </div>

          {/* Address and Google Map */}
          <div className="md:col-span-2 grid md:grid-cols-2 gap-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/20">
            <div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p>KPT, Kadri Hills<br />Mangalore, Karnataka, India</p>
              <p className="mt-4"><strong>Operating Hours:</strong><br />5:00 AM – 2:00 AM (Everyday)</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Location Map</h3>
              <div className="rounded-lg overflow-hidden shadow-md h-60">
                <iframe
                  title="Saptagiri Enterprises Location"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3889.2607617737103!2d74.85016507827797!3d12.890946954972739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDUzJzI3LjQiTiA3NMKwNTEnMTguMSJF!5e0!3m2!1sen!2sin!4v1752681345535!5m2!1sen!2sin" 
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Employee Section */}
        <h3 className="text-3xl font-bold mb-6 text-center">Employee Information</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/20">
            <h4 className="text-xl font-semibold mb-2">Total Workers</h4>
            <p>Approximately 30</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/20">
            <h4 className="text-xl font-semibold mb-2">Shifts</h4>
            <ul className="list-disc list-inside">
              <li>Shift 1: 9:00 AM – 6:30 PM</li>
              <li>Shift 2: 6:30 PM – 9:00 AM</li>
            </ul>
          </div>
        </div>

        {/* Key Staff Grid */}
        <h4 className="text-2xl font-semibold mb-4 text-center">Key Staff Members</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: 'Praveen', role: 'Cashier 1' },
            { name: 'Yeshwant', role: 'Cashier 2' },
            { name: 'Rakesh', role: 'Cashier 2' },
            { name: 'Nishanth', role: 'Cashier 3' },
            { name: 'Vishwa', role: 'Manager' },
            { name: 'Naveen', role: 'Manager' },
          ].map((emp, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/20 text-center">
              <h5 className="text-lg font-semibold text-cyan-300">{emp.name}</h5>
              <p className="text-gray-200">{emp.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
