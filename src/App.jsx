import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Brain, Target, Users, Shield, TrendingUp, Zap, CheckCircle, Star, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const services = [
    {
      title: "Strategy & Readiness",
      icon: <Target className="w-6 h-6" />,
      items: [
        "AI Readiness Assessment",
        "AI Roadmap & Strategy"
      ]
    },
    {
      title: "Data Foundation & Piloting",
      icon: <Brain className="w-6 h-6" />,
      items: [
        "Data Preparation & Management",
        "Proof-of-Concept & Rapid Prototyping"
      ]
    },
    {
      title: "AI Solution Implementation",
      icon: <Zap className="w-6 h-6" />,
      items: [
        "Custom AI & Automation Solutions",
        "Implementation & Support"
      ]
    },
    {
      title: "People & Culture",
      icon: <Users className="w-6 h-6" />,
      items: [
        "Change Management & Training"
      ]
    }
  ]

  const focusAreas = [
    {
      title: "Customer Experience & Engagement",
      description: "AI Chatbots, Personalization Engines, Sentiment Analysis",
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Operations & Process Automation",
      description: "RPA, Document Processing, Workflow Automation",
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Data & Analytics",
      description: "Predictive Analytics, Fraud Detection, Knowledge Management",
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "IT & Service Management",
      description: "AI Service Desk, Security, Predictive Maintenance",
      color: "bg-orange-50 border-orange-200"
    },
    {
      title: "Business & Decision Support",
      description: "Executive Dashboards, Scenario Planning, Financial Modeling",
      color: "bg-indigo-50 border-indigo-200"
    },
    {
      title: "Human Resources",
      description: "Talent Acquisition, Employee Experience, Workforce Analytics",
      color: "bg-pink-50 border-pink-200"
    }
  ]

  const businessGoals = [
    {
      goal: "Drive Efficiency & Reduce Costs",
      value: "Automate repetitive tasks, streamline complex business processes, and free up your team for high-value work.",
      icon: <TrendingUp className="w-5 h-5 text-green-600" />
    },
    {
      goal: "Enhance Decision-Making",
      value: "Leverage data-driven insights from your own business data to make smarter, faster, and more accurate decisions.",
      icon: <Brain className="w-5 h-5 text-blue-600" />
    },
    {
      goal: "Elevate Customer Experience",
      value: "Deliver personalized engagement, 24/7 support with AI-powered chatbots, and gain deeper customer understanding.",
      icon: <Star className="w-5 h-5 text-purple-600" />
    },
    {
      goal: "Mitigate Business Risk",
      value: "Improve compliance with automated monitoring and detect anomalies in real-time to prevent fraud and security threats.",
      icon: <Shield className="w-5 h-5 text-red-600" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <motion.section 
        className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              Unlock Your Business Potential
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-4 text-blue-100"
              variants={fadeInUp}
            >
              A Practical Roadmap for Enterprise AI
            </motion.p>
            <motion.p 
              className="text-lg mb-8 max-w-3xl mx-auto text-blue-200"
              variants={fadeInUp}
            >
              Embrace the future of business with confidence. Our IT services are designed to guide your organization at every stage of the AI journey—from your very first questions to full-scale implementation.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-3">
                Start Your AI Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </motion.section>

      {/* Philosophy Section */}
      <motion.section 
        className="py-16 bg-white"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Core Philosophy</h2>
            <p className="text-lg text-gray-700 italic">
              "AI adoption shouldn't be a leap of faith. It should be a deliberate, step-by-step journey that delivers tangible value at every milestone."
            </p>
          </div>
        </div>
      </motion.section>

      {/* Services Portfolio */}
      <motion.section 
        className="py-20 bg-gray-50"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive AI Services Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a comprehensive suite of services to support you, no matter where you are on your AI journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Focus Areas */}
      <motion.section 
        className="py-20 bg-white"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Broad Focus Areas for Enterprise AI Implementation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI implementation can be classified into key service categories, each mapping to critical business units and functions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className={`h-full hover:shadow-lg transition-all duration-300 border-2 ${area.color}`}>
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{area.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Business Goals */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Opportunities We Can Unlock for Your Business
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {businessGoals.map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.goal}</h3>
                        <p className="text-gray-600">{item.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section 
        className="py-20 bg-white"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-600">
              Choosing the right partner is the most critical step in your AI journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Expertise</h3>
              <p className="text-gray-600">Track record of successfully enabling organizations with little to no AI background to achieve remarkable results.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dedicated AI Practice</h3>
              <p className="text-gray-600">Our team consists of seasoned experts with deep industry knowledge and strong technology alliances.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Outcome-Driven Approach</h3>
              <p className="text-gray-600">Your success is our metric. We tailor every engagement to your unique needs, budget, and pace.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Transform your business potential into measurable value. Let's have a conversation about where you are today and where AI can take you tomorrow.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-3">
            Contact Us Today for a Complimentary AI Readiness Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Enterprise AI Services. Transform your business potential into measurable value.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

