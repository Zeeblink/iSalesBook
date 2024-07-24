import { DatabaseIcon, TrendingUpIcon, UserGroupIcon, ClipboardCheckIcon, OfficeBuildingIcon, LightningBoltIcon, CashIcon, ChartBarIcon, EmojiHappyIcon } from '@heroicons/react/outline';

const Features = () => {
  const features = [
    {
      title: "Inventory Management",
      description: "iSalesBook captures all products in inventory, those purchased and available in store.",
      icon: DatabaseIcon
    },
    {
      title: "Remote Sales Tracking",
      description: "The application gives you real-time dashboard of current sales.",
      icon: TrendingUpIcon
    },
    {
      title: "Supplier Management",
      description: "Manage all your suppliers. Let your suppliers keep you updated on any cost price changes.",
      icon: UserGroupIcon
    },
    {
      title: "Purchase Orders",
      description: "Manage purchase orders efficiently.",
      icon: ClipboardCheckIcon
    },
    {
      title: "Store Management",
      description: "Streamline your store operations.",
      icon: OfficeBuildingIcon
    }
  ];

  const benefits = [
    {
      title: "Increase Efficiency",
      description: "Boost your operational efficiency.",
      icon: LightningBoltIcon
    },
    {
      title: "Reduce Costs",
      description: "Save money with optimized processes.",
      icon: CashIcon
    },
    {
      title: "Improve Accuracy",
      description: "Ensure data accuracy across your operations.",
      icon: ChartBarIcon
    },
    {
      title: "Enhance Customer Satisfaction",
      description: "Deliver better service to your customers.",
      icon: EmojiHappyIcon
    }
  ];

  return (
    <>
      {/* Features Section */}
      <section id="features" className="bg-gray-100 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">What iSalesBook can do</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105">
                <feature.icon className="w-16 h-16 mx-auto mb-4 text-orange-600" />
                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">Benefits</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center transition-transform transform hover:scale-105">
                <benefit.icon className="w-16 h-16 mx-auto mb-4 text-orange-600" />
                <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
                <p className="mt-2 text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
