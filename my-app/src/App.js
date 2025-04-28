
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}>
      {/* Header */}
      <header className="flex justify-between items-center p-4 shadow-md sticky top-0 bg-gray-800 z-50">
        <h1 className="text-2xl font-bold">Portfoliometry</h1>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 dark:bg-gray-200 dark:hover:bg-gray-300 transition"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1611974789855-9c2a0a7236ad?q=80&w=2070&auto=format&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center z-10 px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Master Your Investment Journey with Portfoliometry
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Track, Trade, and Grow your portfolio with real-time stock and mutual fund data – all with virtual money!
          </p>
          <a
            href="#signup"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="p-8 md:p-16">
        <h2 className="text-3xl font-bold text-center mb-6">How Portfoliometry Works</h2>
        <p className="text-center max-w-2xl mx-auto mb-8">
          Portfoliometry offers a realistic, engaging way to trade stocks and mutual funds with virtual money. Whether
          you're a beginner or an experienced investor, you can track market movements, make trades, and build your virtual
          portfolio with ease.
        </p>
        <ul className="list-disc max-w-2xl mx-auto mb-8">
          <li>Real-time stock & mutual fund data</li>
          <li>Buy and sell assets using virtual funds</li>
          <li>Track your gains, losses, and overall portfolio value</li>
          <li>View transaction history and insights</li>
          <li>Optional features: Leaderboard, tips, and news to guide your trading</li>
        </ul>
        <div className="text-center">
          <a
            href="#signup"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up Now
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="p-8 md:p-16 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6">Features That Empower Your Investment Strategy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg text-center">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/stock.png"
              alt="Real-Time Data"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Real-Time Data</h3>
            <p>Access live stock and mutual fund prices to stay updated with the market.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg text-center">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/buy.png" alt="Buy & Sell" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Buy & Sell Operations</h3>
            <p>Make buy and sell transactions with virtual funds and see your portfolio grow.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg text-center">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/dashboard.png"
              alt="Portfolio Dashboard"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Portfolio Dashboard</h3>
            <p>Keep track of your investments, performance, and portfolio distribution.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg text-center">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/leaderboard.png"
              alt="Leaderboard & News"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Leaderboard & News</h3>
            <p>Compete with other traders and stay informed with the latest market news and tips.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="p-8 md:p-16">
        <h2 className="text-3xl font-bold text-center mb-6">What Our Users Are Saying</h2>
        <p className="text-center max-w-2xl mx-auto mb-8">
          See how Portfoliometry is helping traders and investors learn, grow, and succeed.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <p className="italic">
              "An amazing tool for simulating real-world trading – a must-try for anyone interested in investing!"
            </p>
            <p className="mt-4 font-semibold">– Jane Doe</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <p className="italic">
              "I love the portfolio tracking feature. It keeps me on top of my trades and helps me improve my strategies."
            </p>
            <p className="mt-4 font-semibold">– John Smith</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="p-8 md:p-16 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6">Who We Are</h2>
        <p className="text-center max-w-2xl mx-auto mb-8">
          Portfoliometry was created to offer an accessible, realistic virtual trading experience for people of all skill
          levels. Our goal is to make trading education and practice enjoyable, safe, and easy to use.
        </p>
        <div className="text-center">
          <a
            href="#about"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Learn More About Us
          </a>
        </div>
      </section>

      {/* Sign-Up Section */}
      <section id="signup" className="p-8 md:p-16">
        <h2 className="text-3xl font-bold text-center mb-6">Ready to Start Trading?</h2>
        <p className="text-center max-w-2xl mx-auto mb-8">
          Sign up today and begin your investment journey with virtual funds!
        </p>
        <div className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 mt-1 rounded-lg bg-gray-700 text-white dark:bg-gray-200 dark:text-gray-900"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 mt-1 rounded-lg bg-gray-700 text-white dark:bg-gray-200 dark:text-gray-900"
            />
          </div>
          <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Sign Up
          </button>
          <p className="text-center mt-4">
            Already have an account?{' '}
            <a href="#login" className="text-blue-600 hover:underline">
              Log in here
            </a>
            .
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-8 bg-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Portfoliometry</h3>
            <p>Virtual trading made simple for everyone.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul>
              <li>
                <a href="#about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#twitter">
                <img src="https://img.icons8.com/ios-filled/24/ffffff/twitter.png" alt="Twitter" />
              </a>
              <a href="#linkedin">
                <img src="https://img.icons8.com/ios-filled/24/ffffff/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="#facebook">
                <img src="https://img.icons8.com/ios-filled/24/ffffff/facebook.png" alt="Facebook" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
