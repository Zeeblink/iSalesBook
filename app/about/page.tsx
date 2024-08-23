const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-40">
          <h1 className="text-4xl font-bold text-gray-800 text-center">About Us</h1>
          <p className="mt-4 text-lg text-gray-600 text-center">Learn more about us</p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-1 gap-10">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <p className="text-gray-600 text-justify">
                In the rising global costs, a low cost solution for managing Inventory, Sales, Suppliers, Purchases, 
                Stores and many more are not available for every kind of enterprise. iSalesBook hopes to bridge this gap by providing this product to all classes of businesses and helping them in making data driven decisions. 
                iSalesBook is a product of RDAS Solutions Limited, a tech company providing simple data driven solutions for our everyday lives.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <p className="text-gray-600 text-justify">
              Rdas Solutions Limited, formally known as RDAS Softtech, is an IT company founded solely for the main purpose of helping Small and Large Scale businesses manage their data without having to lose sight of their growth and development. 
              We offer a wide range of services by combining innovative approach, creative thinking and a full understanding of today&apos;s fast moving technology world, to market your services to the online world.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-1 gap-10">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <p className="text-gray-600 text-justify">
              iSalesBook is a software solution designed to manage inventory, sales, suppliers, purchases, and stores for businesses. It provides a comprehensive set of features to streamline and automate various aspects of the supply chain and retail operations. <br/><br/>
              Like a traditional sales book, it is used to digitally manage automated inventory, sales and purchase order management, supplier management, store management, reporting and analytics. iSalesBook aims to provide an inventory management service to various industries such as retail, manufacturing, healthcare, distributors, wholesalers, and e-commerce. This service offers customization options to tailor the software to the specific need of the industry’s requirements and workflows. 
              This product is continuously updated and enhanced to make it more flexible, easier, cheaper, and faster for the entire supply chain and production life cycle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
