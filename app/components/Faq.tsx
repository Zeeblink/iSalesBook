
const faqData = [
    {
      question: 'What is iSalesBook software?',
      answer: 'iSalesBook is a software solution designed to manage inventory, sales, suppliers, purchases, and stores for businesses. It provides a comprehensive set of features to streamline and automate various aspects of the supply chain and retail operations.'
    },
    {
      question: 'What is iSalesBook used for?',
      answer: 'iSalesBook is used to manage all types of inventory and sales records. Picture it as a traditional sales book.'
    },
    {
      question: 'How can iSalesBook benefit my business?',
      answer: 'iSalesBook can streamline your business operations, increase efficiency, reduce costs, improve accuracy, and enhance customer satisfaction.'
    },
    {
      question: 'What are the key features os iSlaesBook?',
      answer: 'iSalesBook offers features like automated inventory tracking, sales and purchase order management, supplier management, store management, reporting and analytics, and more'
    },
    {
      question: 'What offers can I get if I start using the application?',
      answer: 'You have the first two months free. You can even cancel your subscription within the period.'
    },
    {
      question: 'How can I get started with iSalesBook?',
      answer: 'You can get in touch with us via phone, email, WhatsApp or our social media handles to indicate interest. We will send the link to the application so you can register your products and start using the application.'
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can contact our customer support team via email at info@isalesbook.com or by phone at (+234) 812 961 7910.'
    }
  ];

const Faq: React.FC = () => {
  return (
    <div id='faq' className="bg-gray-100 min-h-screen">
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-0">
          <h1 className="text-4xl font-bold text-gray-800 text-center">Frequently Asked Questions</h1>

          <div className="mt-10">
            {faqData.map((faq, index) => (
              <div key={index} className="mb-6">
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">{faq.question}</h2>
                </div>
                <div className="mt-2 p-4 border-l-4 border-orange-600 bg-gray-50 rounded-lg shadow-md">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Faq;
