import Image from 'next/image';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-0">
          <h1 className="text-4xl font-bold text-gray-800 text-center">About Us</h1>
          <p className="mt-4 text-lg text-gray-600 text-center">Learn more about our company and team</p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-600">
                iSalesBook was founded with the mission to help businesses manage their inventory, sales, suppliers, purchases, and stores efficiently. 
                We understand the challenges businesses face in today's fast-paced environment, and we're here to provide comprehensive solutions that 
                streamline operations and drive success.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                Our mission is to empower businesses with the tools they need to optimize their operations and achieve their goals. We are committed to 
                delivering high-quality software solutions that are easy to use and provide real value to our customers.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
              <ul className="text-gray-600 space-y-2">
                <li><strong>Customer Success:</strong> We prioritize the success of our customers above all else.</li>
                <li><strong>Innovation:</strong> We are constantly innovating to improve our products and services.</li>
                <li><strong>Integrity:</strong> We operate with integrity and transparency in all that we do.</li>
                <li><strong>Teamwork:</strong> We believe in the power of teamwork and collaboration.</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
              <p className="text-gray-600">
                Our team is made up of passionate and talented individuals who are dedicated to helping our customers succeed. We bring diverse skills 
                and expertise to the table, working together to deliver the best possible solutions for our clients.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-3xl font-semibold text-gray-800 text-center">Meet Our Leadership</h2>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 lg:px-0">
              {[
                { name: 'John Doe', title: 'CEO', imgSrc: '/leader1.jpg' },
                { name: 'Jane Smith', title: 'CTO', imgSrc: '/leader2.jpg' },
                { name: 'Alice Johnson', title: 'COO', imgSrc: '/leader3.jpg' },
                { name: 'Bob Lee', title: 'CFO', imgSrc: '/leader4.jpg' },
              ].map((leader) => (
                <div key={leader.name} className="text-center">
                  <Image src={leader.imgSrc} alt={leader.name} className="mx-auto mb-4 rounded-full w-24 h-24 object-cover" width={96} height={96} />
                  <h3 className="text-xl font-semibold text-gray-800">{leader.name}</h3>
                  <p className="text-gray-600">{leader.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
