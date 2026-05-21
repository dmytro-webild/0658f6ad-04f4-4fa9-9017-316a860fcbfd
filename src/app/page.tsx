"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import TextAbout from '@/components/sections/about/TextAbout';
import { Award, Camera, Mic, Music, Share2, Shield, Star, TrendingUp, Users, Video, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="medium"
        background="grid"
        cardStyle="glass-depth"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E0k3DUSx6jycohvNHuDEDzfPVY/uploaded-1779323392402-kdijrktl.png"
      brandName="Augurad Media"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "gradient-bars",
      }}
      title="Defining Luxury Media Production"
      description="Augurad Media is the gold standard in bespoke content creation, photography, and social strategy. Elevate your presence to the extraordinary."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-female-dentist-dentistry-concept-dental-treatment_169016-67066.jpg",
          alt: "professional woman headshot studio",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-successful-businessman-thinking-posing-beige-wall_176420-144.jpg",
          alt: "male director headshot professional",
        },
        {
          src: "http://img.b2bpic.net/free-photo/caucasian-businesswoman-with-elegance-confidence-standing-generative-ai_188544-7684.jpg",
          alt: "creative professional headshot portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-posing_23-2148924772.jpg",
          alt: "marketing executive headshot studio",
        },
        {
          src: "http://img.b2bpic.net/free-photo/sexy-blond-female-black-costume-sits-round-black-chair-empty-room_613910-8182.jpg",
          alt: "agency founder professional headshot",
        },
      ]}
      buttons={[
        {
          text: "Book Production",
          href: "#contact",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Cinematic Quality",
        },
        {
          type: "text",
          text: "Strategic Growth",
        },
        {
          type: "text",
          text: "Global Reach",
        },
        {
          type: "text",
          text: "Bespoke Production",
        },
        {
          type: "text",
          text: "Visual Excellence",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Crafting Auras That Transcend Ordinary Content"
      buttons={[
        {
          text: "Our Creative Vision",
          href: "#services",
        },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Photography & Creation",
          description: "High-end editorial, event, and commercial photography designed to capture the essence of luxury.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/camcorder-with-filmstrip-peach-colored-backdrop-with-filmstrip-peach-colored-backdrop_23-2148188112.jpg",
            imageAlt: "professional photography studio luxury",
          },
          items: [
            {
              icon: Camera,
              text: "Editorial",
            },
            {
              icon: Zap,
              text: "Flash",
            },
            {
              icon: Star,
              text: "High Fashion",
            },
          ],
          reverse: false,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E0k3DUSx6jycohvNHuDEDzfPVY/uploaded-1779323392402-kdijrktl.png",
          imageAlt: "professional photography studio luxury",
        },
        {
          title: "Social Media Strategy",
          description: "Bespoke content roadmaps that amplify your brand aura, managed with expert precision.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/top-view-notebook-yellow-background_23-2149382391.jpg",
            imageAlt: "digital media analytics dashboard holographic",
          },
          items: [
            {
              icon: Share2,
              text: "Analytics",
            },
            {
              icon: TrendingUp,
              text: "Growth",
            },
            {
              icon: Shield,
              text: "Verification",
            },
          ],
          reverse: true,
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-black-gold-podium-with-spotlight-product-presentation_84443-73952.jpg",
          imageAlt: "professional photography studio luxury",
        },
        {
          title: "Podcast & Events",
          description: "Professional studio production and experiential event media management.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/urban-apartment-with-minimalist-home-office-wooden-furniture_482257-120933.jpg",
            imageAlt: "modern podcast studio setup high-end",
          },
          items: [
            {
              icon: Mic,
              text: "Broadcast",
            },
            {
              icon: Video,
              text: "Live",
            },
            {
              icon: Music,
              text: "Audio",
            },
          ],
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/modern-office-space-with-futuristic-decor-furniture_23-2151797669.jpg",
          imageAlt: "professional photography studio luxury",
        },
      ]}
      title="Our Premiere Production Services"
      description="From high-fidelity photography to full-scale event production, we manage the full creative lifecycle."
    />
  </div>

  <div id="portfolio" data-section="portfolio">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Fashion Editorial",
          price: "Production",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-with-albinism-posing-studio_23-2150535751.jpg",
        },
        {
          id: "p2",
          name: "Exclusive Event Series",
          price: "Management",
          imageSrc: "http://img.b2bpic.net/free-photo/wonderful-wedding-table-amazing-restaurant_8353-9875.jpg",
        },
        {
          id: "p3",
          name: "Brand Aura Film",
          price: "Creative",
          imageSrc: "http://img.b2bpic.net/free-photo/actor-front-camera-audition_53876-139546.jpg",
        },
        {
          id: "p4",
          name: "Portrait Collection",
          price: "Bespoke",
          imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-girl-smiling-sitting-floor-white-wall_176420-8548.jpg",
        },
        {
          id: "p5",
          name: "Corporate Highlights",
          price: "Visual",
          imageSrc: "http://img.b2bpic.net/free-photo/gorgeous-blonde-fashion-model-white-suit-sits-soft-armchair-holding-her-legs-up_8353-5467.jpg",
        },
        {
          id: "p6",
          name: "Event Recap Experience",
          price: "Coverage",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-glasses-with-champagne-bubbles_23-2148339537.jpg",
        },
      ]}
      title="Selected Editorial & Media Highlights"
      description="Evidence of excellence in every frame and pixel."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          icon: Users,
          title: "Brand Impressions",
          value: "1.2M+",
        },
        {
          id: "m2",
          icon: Award,
          title: "Events Produced",
          value: "50+",
        },
        {
          id: "m3",
          icon: Camera,
          title: "Projects Completed",
          value: "200+",
        },
      ]}
      title="The Impact of Premium Media"
      description="Data-backed results for luxury brands."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah V.",
          role: "Creative Director",
          company: "Vogue Interiors",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-business-woman-portrait_23-2149280717.jpg",
        },
        {
          id: "2",
          name: "James L.",
          role: "CEO",
          company: "Lux Group",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/bearded-grey-haired-elderly-man-dressed-formal-suit_273609-6125.jpg",
        },
        {
          id: "3",
          name: "Elena M.",
          role: "Brand Manager",
          company: "Elite Beauty",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/interested-gorgeous-man-with-black-eyes-looking-indoor-photo-fashionable-well-dressed-african-guy-glasses_197531-22079.jpg",
        },
        {
          id: "4",
          name: "Marcus R.",
          role: "Producer",
          company: "Sky Films",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/people-having-dinner-luxurious-restaurants_23-2151081913.jpg",
        },
        {
          id: "5",
          name: "Sofia K.",
          role: "Founder",
          company: "Boutique Label",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/sexy-blond-female-black-costume-sits-round-black-chair-empty-room_613910-8182.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "100%",
          label: "Client Satisfaction",
        },
        {
          value: "5x",
          label: "Growth Rate",
        },
        {
          value: "24/7",
          label: "Support",
        },
      ]}
      title="Trusted by Visionaries"
      description="What our clients say about our creative process and delivery."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "LuxeLife",
        "GlobalMedia",
        "EliteProductions",
        "VisionaryBrands",
        "UrbanContent",
      ]}
      title="Our Creative Partners"
      description="Collaborating with elite global brands."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Initiate Your Project"
      description="Get in touch for bespoke media production. Phone: 0714492076 | @auguradmedia"
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Project Details",
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/flat-lay-black-background-with-laptop-coffee-cup-calculator-top-view_169016-34849.jpg"
      mediaPosition="right"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Augurad Media"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Instagram",
              href: "https://instagram.com/auguradmedia",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
