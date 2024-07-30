import Image from "next/image";
import Link from "next/link";
import Features from "./components/Features";
import Faq from "./components/Faq";


export default function Home() {
  return (
    <main className="">
      {/* Hero sction */}
      <section className="bg-white py-20 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                PRODUCTS INVENTORY & SALES
              </h1>
              <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
                Efficient record-keeping, capturing sales, managing production, tracking stock and inventory, and facilitating product, purchase, sales, suppliers, and invite link management.
              </p>
              <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center lg:justify-start">
                <Link
                  href="/request-demo"
                  className="inline-block bg-orange-600 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-orange-700 transition-colors duration-300"
                >
                  Request a demo
                </Link>
                <Link
                  href="/about"
                  className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-md text-base font-medium hover:bg-gray-300 transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden lg:block lg:w-1/2 mt-8 lg:mt-0">
              <div className="relative w-full sm:h-72 md:h-80 lg:h-96 rounded-lg shadow-lg">
                <Image
                  src={"/hero-image.png"}
                  alt="Hero Image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              {/* <div className="hidden md:block">
                <img src="../public/hero-image" alt="iSalesBook Dashboard" className="rounded-lg shadow-lg max-w-full h-auto" />
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Video */}

      <div className="bg-gray-800 text-white py-20 lg:px-60 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Unleash the Power of Efficient Inventory Management
          </h2>
          <p className="text-lg mb-8">Discover how iSalesBook can streamline your business operations with inventory tracking, real-time analytics, and seamless integration</p>
          <div className="relative overflow-hidden" style={{ paddingTop: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/30YNNFuosf0"
              title="Video title"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <Features />

      {/* Testimonials */}
      {/* <section className="bg-gray-100 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">What Our Customers Say</h2>
          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src="/customer1.jpg"
                    alt="Customer 1"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <p className="text-gray-600">&quot;iSalesBook has transformed our inventory management. It&apos;s efficient and easy to use.&quot;</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">John Doe</h3>
                <p className="text-gray-500">CEO, Company A</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src="/customer2.jpg"
                    alt="Customer 2"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <p className="text-gray-600">&quot;The best software for managing sales and suppliers. Highly recommend!&quot;</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Jane Smith</h3>
                <p className="text-gray-500">Manager, Company B</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src="/customer3.jpg"
                    alt="Customer 3"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <p className="text-gray-600">&quot;iSalesBook has made our store operations seamless. A must-have tool.&quot;</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Alice Johnson</h3>
                <p className="text-gray-500">Owner, Company C</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Prcing */}
      {/* <section id="pricing" className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">Pricing Plans</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-gray-800">Basic Plan</h3>
              <p className="mt-4 text-gray-600">$19/month</p>
              <ul className="mt-4 text-gray-600 space-y-2">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <Link href="#" className="mt-6 inline-block bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition-colors duration-300">
                Choose Plan
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center border-2 border-orange-600">
              <h3 className="text-2xl font-semibold text-gray-800">Standard Plan</h3>
              <p className="mt-4 text-gray-600">$49/month</p>
              <ul className="mt-4 text-gray-600 space-y-2">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>
              </ul>
              <Link href="#" className="mt-6 inline-block bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition-colors duration-300">
                Choose Plan
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-gray-800">Premium Plan</h3>
              <p className="mt-4 text-gray-600">$99/month</p>
              <ul className="mt-4 text-gray-600 space-y-2">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>
                <li>Feature 5</li>
              </ul>
              <Link href="#" className="mt-6 inline-block bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition-colors duration-300">
                Choose Plan
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      <Faq />
      {/* Recent blog posts */}
      {/* <section className="bg-gray-100 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">Recent Blog Posts</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {[1, 2, 3].map((post) => (
              <div key={post} className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative w-full h-48">
                  <Image
                    src={`/blog${post}.jpg`}
                    alt={`Blog Post ${post}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Blog Post Title {post}</h3>
                <p className="mt-2 text-gray-600">A brief excerpt from the blog post to give readers an idea of what it&apos;s about.</p>
                <Link href="#" className="mt-4 inline-block text-orange-600 hover:text-orange-700 transition-colors duration-300">
                  Read More
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/blog" className="inline-block bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition-colors duration-300">
              View All Posts
            </Link>
          </div>
        </div>
      </section> */}

      {/* Call-to-Action Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Ready to Get Started?</h2>
          <p className="mt-4 text-lg text-gray-600">Sign up today and transform your business operations.</p>
          <Link href="/request-demo" className="mt-6 inline-block bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition-colors duration-300">
            Request a Demo
          </Link>
        </div>
      </section>
    </main>
  );
}










































// {/* Hero sction */}
// <section className="bg-white py-20 sm:py-16 lg:py-20">
// <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//   <div className="flex flex-col lg:flex-row items-center">
//     <div className="lg:w-1/2 text-center lg:text-left">
//       <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
//         Streamline Your Business Operations with Ease
//       </h1>
//       <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
//         Comprehensive solutions for managing inventory, sales, suppliers, and more.
//       </p>
//       <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center lg:justify-start">
//         <Link
//           href="/request-demo"
//           className="inline-block bg-orange-600 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-orange-700 transition-colors duration-300"
//         >
//           Request a demo
//         </Link>
//         <Link
//           href="#"
//           className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-md text-base font-medium hover:bg-gray-300 transition-colors duration-300"
//         >
//           Learn More
//         </Link>
//       </div>
//     </div>
//     <div className="hidden lg:block lg:w-1/2 mt-8 lg:mt-0">
//       <div className="relative w-full lg:h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg shadow-lg">
//         <Image
//           src={"/hero-imagee.png"}
//           alt="Hero Image"
//           layout="fill"
//           objectFit="cover"
//           className="rounded-lg"
//         />
//       </div>
//       {/* <div className="hidden md:block">
//         <img src="../public/hero-image" alt="iSalesBook Dashboard" className="rounded-lg shadow-lg max-w-full h-auto" />
//       </div> */}
//     </div>
//   </div>
// </div>
// </section>

// {/* Video */}

// <div className="bg-gray-800 text-white py-20 lg:px-60 text-center">
// <div className="container mx-auto px-4">
// <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
//   Where subscription <br/>expertise meets growth
// </h2>
// <p className="text-lg mb-8">
//   With a 388% increase in subscribers over the past five years, iSalesBook offers deep expertise in subscription management, billing, and churn management. In short? We take your growth seriously.
// </p>
// <div className="relative">
//   <iframe
//     className="w-full h-64 md:h-96"
//     src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
//     title="Video title"
//     allowFullScreen
//   ></iframe>
// </div>
// </div>
// </div>

// {/* Features section */}

// <section id="features" className="bg-gray-100 py-12 sm:py-16 lg:py-20">
// <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//   <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">Features</h2>
//   <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
//     <div className="bg-white p-6 rounded-lg shadow-md text-center">
//       <div className="relative w-16 h-16 mx-auto mb-4">
//         <Image src="/icon-inventory.png" alt="Inventory Management" layout="fill" objectFit="contain" />
//       </div>
//       <h3 className="text-xl font-semibold text-gray-800">Inventory Management</h3>
//       <p className="mt-2 text-gray-600">iSalesBook captures all products in inventory, those purchased and available in store.</p>
//     </div>
//     <div className="bg-white p-6 rounded-lg shadow-md text-center">
//       <div className="relative w-16 h-16 mx-auto mb-4">
//         <Image src="/icon-sales.png" alt="Sales Tracking" layout="fill" objectFit="contain" />
//       </div>
//       <h3 className="text-xl font-semibold text-gray-800">Remote Sales Tracking</h3>
//       <p className="mt-2 text-gray-600">The application gives you real-time dashboard of current sales.</p>
//     </div>
//     <div className="bg-white p-6 rounded-lg shadow-md text-center">
//       <div className="relative w-16 h-16 mx-auto mb-4">
//         <Image src="/icon-supplier.png" alt="Supplier Management" layout="fill" objectFit="contain" />
//       </div>
//       <h3 className="text-xl font-semibold text-gray-800">Supplier Management</h3>
//       <p className="mt-2 text-gray-600">Manage all your suppliers. Let your suppliers keep you updated on any cost price changes.</p>
//     </div>
//     <div className="bg-white p-6 rounded-lg shadow-md text-center">
//       <div className="relative w-16 h-16 mx-auto mb-4">
//         <Image src="/icon-purchase.png" alt="Purchase Orders" layout="fill" objectFit="contain" />
//       </div>
//       <h3 className="text-xl font-semibold text-gray-800">Purchase Orders</h3>
//       <p className="mt-2 text-gray-600">Manage purchase orders efficiently.</p>
//     </div>
//     <div className="bg-white p-6 rounded-lg shadow-md text-center">
//       <div className="relative w-16 h-16 mx-auto mb-4">
//         <Image src="/icon-store.png" alt="Store Management" layout="fill" objectFit="contain" />
//       </div>
//       <h3 className="text-xl font-semibold text-gray-800">Store Management</h3>
//       <p className="mt-2 text-gray-600">Streamline your store operations.</p>
//     </div>
//   </div>
// </div>
// </section>

// {/* Benefits section */}

// <section className="bg-white py-12 sm:py-16 lg:py-20">
// <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//   <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">Benefits</h2>
//   <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
//     <div className="text-center">
//       <div className="relative w-16 h-16 mx-auto mb-4">
//         <Image src="/icon-efficiency.png" alt="Increase Efficiency" layout="fill" objectFit="contain" />
//       </div>
//       <h3 className="text-xl font-semibold text-gray-800">Increase Efficiency</h3>
//       <p className="mt-2 text-gray-600">Boost your operational efficiency.</p>
//     </div>
//     <div className="text-center">
//       <div className="relative w-16 h-16 mx-auto mb-4">
//         <Image src="/icon-cost.png" alt="Reduce Costs" layout="fill" objectFit="contain" />
//       </div>
//       <h3 className="text-xl font-semibold text-gray-800">Reduce Costs</h3>
//       <p className="mt-2 text-gray-600">Save money with optimized processes.</p>
//     </div>
//     <div className="text-center">
//       <div className="relative w-16 h-16 mx-auto mb-4">
//         <Image src="/icon-accuracy.png" alt="Improve Accuracy" layout="fill" objectFit="contain" />
//       </div>
//       <h3 className="text-xl font-semibold text-gray-800">Improve Accuracy</h3>
//       <p className="mt-2 text-gray-600">Ensure data accuracy across your operations.</p>
//     </div>
//     <div className="text-center">
//       <div className="relative w-16 h-16 mx-auto mb-4">
//         <Image src="/icon-satisfaction.png" alt="Enhance Customer Satisfaction" layout="fill" objectFit="contain" />
//       </div>
//       <h3 className="text-xl font-semibold text-gray-800">Enhance Customer Satisfaction</h3>
//       <p className="mt-2 text-gray-600">Deliver better service to your customers.</p>
//     </div>
//   </div>
// </div>
// </section>

// {/* Testimonials */}
// <section className="bg-gray-100 py-12 sm:py-16 lg:py-20">
// <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//   <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">What Our Customers Say</h2>
//   <div className="mt-10">
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
//       <div className="bg-white p-6 rounded-lg shadow-md text-center">
//         <div className="relative w-24 h-24 mx-auto mb-4">
//           <Image
//             src="/customer1.jpg"
//             alt="Customer 1"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-full"
//           />
//         </div>
//         <p className="text-gray-600">&quot;iSalesBook has transformed our inventory management. It&apos;s efficient and easy to use.&quot;</p>
//         <h3 className="mt-4 text-xl font-semibold text-gray-800">John Doe</h3>
//         <p className="text-gray-500">CEO, Company A</p>
//       </div>
//       <div className="bg-white p-6 rounded-lg shadow-md text-center">
//         <div className="relative w-24 h-24 mx-auto mb-4">
//           <Image
//             src="/customer2.jpg"
//             alt="Customer 2"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-full"
//           />
//         </div>
//         <p className="text-gray-600">&quot;The best software for managing sales and suppliers. Highly recommend!&quot;</p>
//         <h3 className="mt-4 text-xl font-semibold text-gray-800">Jane Smith</h3>
//         <p className="text-gray-500">Manager, Company B</p>
//       </div>
//       <div className="bg-white p-6 rounded-lg shadow-md text-center">
//         <div className="relative w-24 h-24 mx-auto mb-4">
//           <Image
//             src="/customer3.jpg"
//             alt="Customer 3"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-full"
//           />
//         </div>
//         <p className="text-gray-600">&quot;iSalesBook has made our store operations seamless. A must-have tool.&quot;</p>
//         <h3 className="mt-4 text-xl font-semibold text-gray-800">Alice Johnson</h3>
//         <p className="text-gray-500">Owner, Company C</p>
//       </div>
//     </div>
//   </div>
// </div>
// </section>

// {/* Prcing */}
// <section id="pricing" className="bg-white py-12 sm:py-16 lg:py-20">
// <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//   <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">Pricing Plans</h2>
//   <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
//     <div className="bg-white p-6 rounded-lg shadow-md text-center">
//       <h3 className="text-2xl font-semibold text-gray-800">Basic Plan</h3>
//       <p className="mt-4 text-gray-600">$19/month</p>
//       <ul className="mt-4 text-gray-600 space-y-2">
//         <li>Feature 1</li>
//         <li>Feature 2</li>
//         <li>Feature 3</li>
//       </ul>
//       <Link href="#" className="mt-6 inline-block bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition-colors duration-300">
//         Choose Plan
//       </Link>
//     </div>
//     <div className="bg-white p-6 rounded-lg shadow-md text-center border-2 border-orange-600">
//       <h3 className="text-2xl font-semibold text-gray-800">Standard Plan</h3>
//       <p className="mt-4 text-gray-600">$49/month</p>
//       <ul className="mt-4 text-gray-600 space-y-2">
//         <li>Feature 1</li>
//         <li>Feature 2</li>
//         <li>Feature 3</li>
//         <li>Feature 4</li>
//       </ul>
//       <Link href="#" className="mt-6 inline-block bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition-colors duration-300">
//         Choose Plan
//       </Link>
//     </div>
//     <div className="bg-white p-6 rounded-lg shadow-md text-center">
//       <h3 className="text-2xl font-semibold text-gray-800">Premium Plan</h3>
//       <p className="mt-4 text-gray-600">$99/month</p>
//       <ul className="mt-4 text-gray-600 space-y-2">
//         <li>Feature 1</li>
//         <li>Feature 2</li>
//         <li>Feature 3</li>
//         <li>Feature 4</li>
//         <li>Feature 5</li>
//       </ul>
//       <Link href="#" className="mt-6 inline-block bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition-colors duration-300">
//         Choose Plan
//       </Link>
//     </div>
//   </div>
// </div>
// </section>

// {/* Recent blog posts */}
// <section className="bg-gray-100 py-12 sm:py-16 lg:py-20">
// <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//   <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">Recent Blog Posts</h2>
//   <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
//     {[1, 2, 3].map((post) => (
//       <div key={post} className="bg-white p-6 rounded-lg shadow-md">
//         <div className="relative w-full h-48">
//           <Image
//             src={`/blog${post}.jpg`}
//             alt={`Blog Post ${post}`}
//             layout="fill"
//             objectFit="cover"
//             className="rounded-md"
//           />
//         </div>
//         <h3 className="mt-4 text-xl font-semibold text-gray-800">Blog Post Title {post}</h3>
//         <p className="mt-2 text-gray-600">A brief excerpt from the blog post to give readers an idea of what it&apos;s about.</p>
//         <Link href="#" className="mt-4 inline-block text-orange-600 hover:text-orange-700 transition-colors duration-300">
//           Read More
//         </Link>
//       </div>
//     ))}
//   </div>
//   <div className="mt-10 text-center">
//     <Link href="/blog" className="inline-block bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition-colors duration-300">
//       View All Posts
//     </Link>
//   </div>
// </div>
// </section>

// {/* Call-to-Action Section */}
// <section className="bg-white py-12 sm:py-16 lg:py-20">
// <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//   <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Ready to Get Started?</h2>
//   <p className="mt-4 text-lg text-gray-600">Sign up today and transform your business operations.</p>
//   <Link href="/request-demo" className="mt-6 inline-block bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition-colors duration-300">
//     Request a Demo
//   </Link>
// </div>
// </section>