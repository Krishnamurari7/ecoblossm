"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MapPin, CreditCard, CheckCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const subtotal = getTotalPrice();
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingAddress({
      ...shippingAddress,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
      router.push("/");
    }, 3000);
  };

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="pb-20 min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-food-dark dark:bg-lime-400 text-lime-300 dark:text-food-dark rounded-full font-semibold"
              >
                Continue Shopping
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="pt-24 pb-20 min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-teal-950 rounded-2xl p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 bg-lime-500 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-3xl font-bold mb-4 text-food-dark dark:text-lime-300">
              Order Placed Successfully!
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Thank you for your order. You will receive a confirmation email
              shortly.
            </p>
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-food-dark dark:bg-lime-400 text-lime-300 dark:text-food-dark rounded-full font-semibold shadow-lg"
              >
                Continue Shopping
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            href="/cart"
            className="flex items-center gap-2 text-food-dark dark:text-lime-300 hover:text-teal-700 dark:hover:text-lime-400 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Cart
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Checkout</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Complete your order by filling in the details below
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-teal-950 rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-lime-100 dark:bg-lime-900 rounded-full">
                  <MapPin className="w-5 h-5 text-lime-600 dark:text-lime-400" />
                </div>
                <h2 className="text-2xl font-bold text-food-dark dark:text-lime-300">
                  Shipping Address
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-food-dark dark:text-lime-300">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={shippingAddress.firstName}
                      onChange={handleShippingChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-teal-700 bg-white dark:bg-teal-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-food-dark dark:text-lime-300">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={shippingAddress.lastName}
                      onChange={handleShippingChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-teal-700 bg-white dark:bg-teal-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-food-dark dark:text-lime-300">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={shippingAddress.email}
                    onChange={handleShippingChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-teal-700 bg-white dark:bg-teal-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-food-dark dark:text-lime-300">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={shippingAddress.phone}
                    onChange={handleShippingChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-teal-700 bg-white dark:bg-teal-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-food-dark dark:text-lime-300">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={shippingAddress.address}
                    onChange={handleShippingChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-teal-700 bg-white dark:bg-teal-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
                    placeholder="123 Main Street"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-food-dark dark:text-lime-300">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={shippingAddress.city}
                      onChange={handleShippingChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-teal-700 bg-white dark:bg-teal-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
                      placeholder="New York"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-food-dark dark:text-lime-300">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={shippingAddress.state}
                      onChange={handleShippingChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-teal-700 bg-white dark:bg-teal-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
                      placeholder="NY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-food-dark dark:text-lime-300">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={shippingAddress.zipCode}
                      onChange={handleShippingChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-teal-700 bg-white dark:bg-teal-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
                      placeholder="10001"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-food-dark dark:text-lime-300">
                    Country *
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={shippingAddress.country}
                    onChange={handleShippingChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-teal-700 bg-white dark:bg-teal-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
                    placeholder="United States"
                  />
                </div>

                {/* Payment Method */}
                <div className="pt-6 border-t border-gray-200 dark:border-teal-800">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-lime-100 dark:bg-lime-900 rounded-full">
                      <CreditCard className="w-5 h-5 text-lime-600 dark:text-lime-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-food-dark dark:text-lime-300">
                      Payment Method
                    </h2>
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-4 border-2 border-gray-200 dark:border-teal-700 rounded-lg cursor-pointer hover:border-lime-500 transition-colors">
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4 text-lime-500 focus:ring-lime-500"
                      />
                      <span className="text-food-dark dark:text-lime-300 font-semibold">
                        Credit/Debit Card
                      </span>
                    </label>
                    <label className="flex items-center gap-3 p-4 border-2 border-gray-200 dark:border-teal-700 rounded-lg cursor-pointer hover:border-lime-500 transition-colors">
                      <input
                        type="radio"
                        name="payment"
                        value="paypal"
                        checked={paymentMethod === "paypal"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4 text-lime-500 focus:ring-lime-500"
                      />
                      <span className="text-food-dark dark:text-lime-300 font-semibold">
                        PayPal
                      </span>
                    </label>
                    <label className="flex items-center gap-3 p-4 border-2 border-gray-200 dark:border-teal-700 rounded-lg cursor-pointer hover:border-lime-500 transition-colors">
                      <input
                        type="radio"
                        name="payment"
                        value="cod"
                        checked={paymentMethod === "cod"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4 text-lime-500 focus:ring-lime-500"
                      />
                      <span className="text-food-dark dark:text-lime-300 font-semibold">
                        Cash on Delivery
                      </span>
                    </label>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-food-dark dark:bg-lime-400 text-lime-300 dark:text-food-dark rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  Place Order
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-teal-950 rounded-2xl p-6 sticky top-32"
            >
              <h2 className="text-2xl font-bold mb-6 text-food-dark dark:text-lime-300">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {cartItems.map((item: any) => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm text-food-dark dark:text-lime-300 truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Qty: {item.quantity}
                      </p>
                      <p className="text-sm font-semibold text-food-dark dark:text-lime-300">
                        ₹{(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-6 border-t border-gray-200 dark:border-teal-800">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotal</span>
                  <span className="font-semibold text-food-dark dark:text-lime-300">
                    ₹{subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Shipping</span>
                  <span className="font-semibold text-food-dark dark:text-lime-300">
                    {shipping === 0 ? (
                      <span className="text-lime-600 dark:text-lime-400">Free</span>
                    ) : (
                      `₹${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Tax</span>
                  <span className="font-semibold text-food-dark dark:text-lime-300">
                    ₹{tax.toFixed(2)}
                  </span>
                </div>
                <div className="border-t border-gray-200 dark:border-teal-800 pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-food-dark dark:text-lime-300">Total</span>
                    <span className="text-2xl text-food-dark dark:text-lime-300">
                      ₹{total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

