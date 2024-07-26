import Image from 'next/image';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-40">
          <h1 className="text-4xl font-bold text-gray-800 text-center">About Us</h1>
          <p className="mt-4 text-lg text-gray-600 text-center">Learn more about us</p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-1 gap-10">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              {/* <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2> */}
              <p className="text-gray-600">
                In the rising global costs, a low cost solution for managing Inventory, Sales, Suppliers, Purchases, 
                Stores and many more are not available for every kind of enterprise. iSalesBook hopes to bridge this gap by providing this product to all classes of businesses and helping them in making data driven decisions. 
                iSalesBook is a product of RDAS Solutions Limited, a tech company providing simple data driven solutions for our everyday lives.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              {/* <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2> */}
              <p className="text-gray-600">
              Rdas Solutions Limited, formally known as RDAS Softtech, is an IT company founded solely for the main purpose of helping Small and Large Scale businesses manage their data without having to lose sight of their growth and development. 
              We offer a wide range of services by combining innovative approach, creative thinking and a full understanding of today&apos;s fast moving technology world, to market your services to the online world.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-1 gap-10">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              {/* <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2> */}
              <p>
              iSalesBook is a software solution designed to manage inventory, sales, suppliers, purchases, and stores for businesses. It provides a comprehensive set of features to streamline and automate various aspects of the supply chain and retail operations. <br/><br/>
              Like a traditional sales book, it is used to digitally manage automated inventory, sales and purchase order management, supplier management, store management, reporting and analytics. iSalesBook aims to provide an inventory management service to various industries such as retail, manufacturing, healthcare, distributors, wholesalers, and e-commerce. This service offers customization options to tailor the software to the specific need of the industry’s requirements and workflows. 
              This product is continuously updated and enhanced to make it more flexible, easier, cheaper, and faster for the entire supply chain and production life cycle.
              </p>
            </div>
            {/* <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
              <p className="text-gray-600">
                Our team is made up of passionate and talented individuals who are dedicated to helping our customers succeed. We bring diverse skills 
                and expertise to the table, working together to deliver the best possible solutions for our clients.
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;



























































{/* <div className="bg-gray-100 min-h-screen">
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-0">
          <h1 className="text-4xl font-bold text-gray-800 text-center">About Us</h1>
          <p className="mt-4 text-lg text-gray-600 text-center">Learn more about our company and team</p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-600">
                iSalesBook was founded with the mission to help businesses manage their inventory, sales, suppliers, purchases, and stores efficiently. 
                We understand the challenges businesses face in today&apos;s fast-paced environment, and we&apos;re here to provide comprehensive solutions that 
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
    </div> */}