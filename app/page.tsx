'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { MapPin, Wifi, Wind, Utensils, Tv, Shield, Phone, Clock } from 'lucide-react'

export default function Home() {
  const whatsappPhone = '2349091411458'
  const whatsappMessage = encodeURIComponent(
    'Hello May Shortlet Suites, I would like to inquire about booking an apartment. Could you please provide more information about availability and pricing?'
  )
  const whatsappLink = `https://wa.me/${whatsappPhone}?text=${whatsappMessage}`

  const amenities = [
    { icon: Wifi, label: 'Wi-Fi', description: 'High-speed internet' },
    { icon: Wind, label: 'Air Conditioning', description: 'Climate control' },
    { icon: Utensils, label: 'Full Kitchen', description: 'Modern facilities' },
    { icon: Tv, label: 'Smart TV', description: 'Entertainment' },
    { icon: Shield, label: 'Security', description: '24/7 monitoring' },
    { icon: Wifi, label: 'Premium Bedding', description: 'Luxury comfort' },
  ]

  const galleryImages = [
    { src: '/sit1.JPG', alt: 'Luxury apartment interior' },
    { src: '/sit7.JPG', alt: 'Master bedroom' },
    { src: '/sit2.JPG', alt: 'Living area' },
    { src: '/sit3.JPG', alt: 'Modern bathroom' },
    { src: '/sit4.JPG', alt: 'Dining space' },
    { src: '/sit6.JPG', alt: 'Premium suite' },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-sm">M</span>
            </div>
            <h1 className="text-lg font-display font-bold text-foreground">May Suites</h1>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className="bg-primary text-primary-foreground hover:opacity-90">
              Book Now
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 w-full overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="May Shortlet Suites - Luxury Apartment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-3">
            Luxury Living in Abuja
          </h2>
          <p className="text-base sm:text-lg mb-6 max-w-2xl opacity-95">
            Premium furnished apartments in Wuse 2
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary text-primary-foreground hover:opacity-90">
              Reserve Now
            </Button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
                About Us
              </h2>
              <p className="text-sm sm:text-base text-foreground/75 mb-3 leading-relaxed">
                Welcome to May Shortlet Suites, your premier destination for luxury short-term rentals in Abuja. 
                Located in prestigious Wuse 2, we offer impeccably furnished apartments perfect for business travelers and vacationers.
              </p>
              <p className="text-sm sm:text-base text-foreground/75 mb-6 leading-relaxed">
                Our women-owned business is dedicated to exceptional hospitality, premium amenities, and flexible check-in/check-out times.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-2xl font-display font-bold text-primary">4.0★</div>
                  <p className="text-xs text-foreground/60">Guest Rating</p>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-primary">24/7</div>
                  <p className="text-xs text-foreground/60">Support Available</p>
                </div>
              </div>
            </div>
            <div className="relative h-80">
              <Image
                src="/about.JPG"
                alt="Our luxury apartment"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-10 text-center">
            Premium Amenities
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, idx) => {
              const Icon = amenity.icon
              return (
                <Card key={idx} className="p-5 bg-white hover:shadow-md transition">
                  <Icon className="w-5 h-5 text-primary mb-3" />
                  <h3 className="text-sm font-semibold text-foreground mb-1">{amenity.label}</h3>
                  <p className="text-xs text-foreground/65">{amenity.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-10 text-center">
            Gallery
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, idx) => (
              <div
                key={idx}
                className="relative h-64 rounded-lg overflow-hidden group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary text-primary-foreground hover:opacity-90">
                Explore More
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Location & Map Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-10 text-center">
            Location
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-sm text-foreground/70">41 Cres, Gwarinpa, Abuja 900108</p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-sm text-foreground/70">+234 909 141 1458</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">Hours</h3>
                  <p className="text-sm text-foreground/70">Available 24/7</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8701547846506!2d7.411789699999999!3d9.074456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104b69c5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2s41%20Cres%2C%20Gwarinpa%2C%20Abuja%20900108!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-foreground mb-4">
            Ready to Book?
          </h2>
          <p className="text-sm sm:text-base text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Contact us via WhatsApp for quick reservations and inquiries. Our team is available 24/7.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-primary hover:bg-secondary">
              Message on WhatsApp
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-10 px-4">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-6 mb-6">
          <div>
            <h3 className="text-base font-display font-bold mb-2">May Shortlet Suites</h3>
            <p className="text-xs opacity-80">Premium apartments in Abuja&apos;s sought-after location.</p>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-xs opacity-80">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#amenities" className="hover:underline">Amenities</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-2">Contact</h3>
            <p className="text-xs opacity-80">+234 909 141 1458</p>
            <p className="text-xs opacity-80">41 Cres, Gwarinpa, Abuja</p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-xs opacity-75">
          <p>&copy; 2024 May Shortlet Suites. All rights reserved. Women-owned business.</p>
        </div>
      </footer>
    </main>
  )
}
