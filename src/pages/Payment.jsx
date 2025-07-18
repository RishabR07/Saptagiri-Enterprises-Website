import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Wallet, Banknote, Gift } from 'lucide-react';

export default function Payment() {
  const paymentMethods = [
    {
      icon: <Wallet className="w-8 h-8 text-purple-300" />,
      title: 'UPI Payments',
      desc: 'Accepted via GPay, PhonePe, Paytm, and BHIM UPI.',
    },
    {
      icon: <CreditCard className="w-8 h-8 text-pink-300" />,
      title: 'Credit/Debit Cards',
      desc: 'Supports all major Visa, MasterCard, and RuPay cards.',
    },
    {
      icon: <Banknote className="w-8 h-8 text-yellow-300" />,
      title: 'Cash',
      desc: 'Quick and easy offline payment option available.',
    },
    {
      icon: <Gift className="w-8 h-8 text-green-300" />,
      title: 'Loyalty Programs',
      desc: 'Use HP Pay, IndianOil XTRAREWARDS, and more.',
    },
  ];

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-[#141e30] via-[#243b55] to-[#0f2027] text-white py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
        Payment Options
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-2 max-w-6xl mx-auto">
        {paymentMethods.map((method, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white/10 border border-white/20 shadow-xl backdrop-blur-md p-6 hover:shadow-[0_0_25px_#00f7ff] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-white/10 rounded-full">
                  {method.icon}
                </div>
                <h3 className="text-2xl font-semibold text-cyan-300">{method.title}</h3>
              </div>
              <p className="text-gray-200">{method.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
