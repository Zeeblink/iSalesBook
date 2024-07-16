'use client'
import { useState, FC } from 'react';

const faqData = [
  {
    question: 'What is iSalesBook?',
    answer: 'iSalesBook is a software solution designed to help businesses manage their inventory, sales, suppliers, purchases, and stores efficiently.'
  },
  {
    question: 'How can iSalesBook benefit my business?',
    answer: 'iSalesBook can streamline your business operations, increase efficiency, reduce costs, improve accuracy, and enhance customer satisfaction.'
  },
  {
    question: 'Is iSalesBook easy to use?',
    answer: 'Yes, iSalesBook is designed with user-friendliness in mind, making it easy for businesses of all sizes to implement and use.'
  },
  {
    question: 'What features does iSalesBook offer?',
    answer: 'iSalesBook offers features such as inventory management, sales tracking, supplier management, purchase orders, and store management.'
  },
  {
    question: 'How can I get started with iSalesBook?',
    answer: 'You can get started with iSalesBook by signing up for a free trial on our website. For more details, visit our Pricing page.'
  },
  {
    question: 'How do I contact customer support?',
    answer: 'You can contact our customer support team via email at support@isalesbook.com or by phone at (123) 456-7890.'
  }
];

const FAQ: FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-0">
          <h1 className="text-4xl font-bold text-gray-800 text-center">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-gray-600 text-center">Find answers to common questions about iSalesBook</p>

          <div className="mt-10">
            {faqData.map((faq, index) => (
              <div key={index} className="mb-6">
                <div
                  onClick={() => toggleFAQ(index)}
                  className="cursor-pointer bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200 ease-in-out"
                >
                  <h2 className="text-xl font-semibold text-gray-800">{faq.question}</h2>
                </div>
                <div
                  className={`mt-2 p-4 border-l-4 border-orange-600 bg-gray-50 rounded-lg shadow-md transition-max-height duration-300 ease-in-out ${
                    openIndexes.includes(index) ? 'max-h-96' : 'max-h-0 overflow-hidden'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
