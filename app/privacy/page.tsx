'use client';

import { Shield, Camera, Users, Globe, Mail, Clock, Lock, Share2, Trash2, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/Assets/Viraj Logo.png"
                alt="Viraj Logo"
                className="h-10 w-10 sm:h-12 sm:w-12"
              />
              <span className="text-lg sm:text-xl font-semibold">Viraj Art Photos</span>
            </Link>
            <Link
              href="/"
              className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-primary/10 via-primary/5 to-background py-12 sm:py-20">
        <div className="absolute inset-0 bg-grid-primary/5 [mask-image:linear-gradient(0deg,transparent,black)]" />
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Shield className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-primary animate-pulse" />
            <h1 className="text-3xl py-3 sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
          {/* Last Updated */}
          <motion.div 
            className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground border-b border-border pb-4"
            {...fadeIn}
          >
            <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
            <p>Last updated: February 01, 2025</p>
          </motion.div>

          {/* Photography Services */}
          <motion.section className="space-y-6 sm:space-y-8" {...fadeIn}>
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Photography Services</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  When you book our photography services, we collect necessary information to provide
                  you with the best possible experience. This includes your contact details, event
                  information, and preferences for photo shoots. We ensure that all collected data
                  is handled with the utmost care and confidentiality.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Information Collection */}
          <motion.section className="space-y-6 sm:space-y-8" {...fadeIn}>
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Information We Collect</h2>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                      Name and contact information
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                      Event details and locations
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                      Photography preferences
                    </li>
                  </ul>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                      Payment information
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                      Technical metadata
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                      Usage statistics
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Data Security */}
          <motion.section className="space-y-6 sm:space-y-8" {...fadeIn}>
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Data Security</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                  We implement industry-standard security measures to protect your personal information:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-secondary/50 rounded-lg p-3 sm:p-4">
                    <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mb-2" />
                    <h3 className="text-sm sm:text-base font-medium mb-1 sm:mb-2">Data Encryption</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">All sensitive data is encrypted during transmission and storage</p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-3 sm:p-4">
                    <Trash2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mb-2" />
                    <h3 className="text-sm sm:text-base font-medium mb-1 sm:mb-2">Data Retention</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">Your data is only kept for as long as necessary</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Information Usage */}
          <motion.section className="space-y-6 sm:space-y-8" {...fadeIn}>
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">How We Use Your Information</h2>
                <div className="grid gap-3 sm:gap-4 text-sm sm:text-base text-muted-foreground">
                  <p className="leading-relaxed mb-2 sm:mb-4">We use your information to:</p>
                  <ul className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <li className="bg-secondary/30 rounded-lg p-3 sm:p-4">Deliver photography services</li>
                    <li className="bg-secondary/30 rounded-lg p-3 sm:p-4">Process secure payments</li>
                    <li className="bg-secondary/30 rounded-lg p-3 sm:p-4">Improve our services</li>
                    <li className="bg-secondary/30 rounded-lg p-3 sm:p-4">Send updates (with consent)</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Contact Information */}
          <motion.section className="space-y-6 sm:space-y-8" {...fadeIn}>
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Contact Us</h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                  If you have any questions about our privacy policy or how we handle your data,
                  please contact us using the information below:
                </p>
                <div className="bg-secondary/50 rounded-lg p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    <p className="text-sm sm:text-base text-foreground">virajartphots@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    <p className="text-sm sm:text-base text-foreground">+91 9819814077</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 sm:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-xs sm:text-sm text-gray-600">
            <p>© 2025 Viraj Art Photos. All rights reserved.</p>
            <Link href="/" className="text-primary hover:underline mt-2 inline-block">
              Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}