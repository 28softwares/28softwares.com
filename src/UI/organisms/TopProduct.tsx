import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  ShoppingCart,
  Search,
  Star,
  Truck,
  CreditCard,
  Heart,
  Package,
  Medal,
} from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { Button } from '../shadcn/ui/button'

export default function Component() {
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsHovered((prev) => !prev)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <div className="bg-gradient-to-br from-yellow-100 to-yellow-300 p-8 rounded-xl shadow-2xl max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold flex items-center text-yellow-800">
          <Medal className="mr-2" />
          Our #1 Sold Product
        </h2>
        <Link>
          <Button className="bg-yellow-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-yellow-600 transition-colors">
            View All
          </Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <p className="text-lg text-yellow-800">
            Our top-selling e-commerce platform provides seamless navigation,
            detailed product information, customer reviews, and smooth
            transactions with various payment options and real-time inventory
            updates.
          </p>
          <ul className="space-y-4">
            {[
              {
                icon: Search,
                text: 'User-friendly navigation with advanced search and filtering options',
              },
              {
                icon: Star,
                text: 'Rich product presentations featuring reviews, wishlists, and detailed descriptions',
              },
              {
                icon: Truck,
                text: 'Advanced shopping features including dynamic filters and real-time inventory updates',
              },
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <item.icon className="text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                <span className="text-yellow-800">{item.text}</span>
              </motion.li>
            ))}
          </ul>
          <div className="flex space-x-4 mt-8">
            <Button className="bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-700 transition-colors">
              Request for Demo
            </Button>
            <Button className="bg-yellow-400 text-yellow-800 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors">
              Request for Quotation
            </Button>
          </div>
        </div>
        <div className="relative h-[400px]">
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          >
            {[ShoppingCart, Heart, CreditCard, Package].map((Icon, index) => (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  top: `${50 + 40 * Math.sin((index * Math.PI) / 2)}%`,
                  left: `${50 + 40 * Math.cos((index * Math.PI) / 2)}%`,
                }}
                initial="hidden"
                animate="visible"
                variants={iconVariants}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Icon className="text-yellow-600 h-12 w-12" />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <svg viewBox="0 0 200 200" className="w-64 h-64">
              <defs>
                <linearGradient
                  id="laptopGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#FFD700" />
                  <stop offset="100%" stopColor="#FFA500" />
                </linearGradient>
              </defs>
              <motion.rect
                x="40"
                y="40"
                width="120"
                height="80"
                rx="5"
                fill="url(#laptopGradient)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
              <motion.path
                d="M30,120 L170,120 L180,140 L20,140 Z"
                fill="#FFD700"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
              />
              <motion.circle
                cx="100"
                cy="80"
                r="20"
                fill="#FFA500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: 'spring', stiffness: 500 }}
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
