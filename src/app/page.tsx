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
        background="noiseDiagonalGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingInline
            navItems={[
              { name: "Home", id: "hero" },
              { name: "About", id: "about" },
              { name: "Services", id: "services" },
              { name: "Contact", id: "contact" },
            ]}
            logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E0k3DUSx6jycohvNHuDEDzfPVY/uploaded-1779323392402-kdijrktl.png"
            brandName="Augurad Media"
            button={{ text: "Book Production", href: "#contact" }}
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroCentered
            background={{ variant: "sparkles-gradient" }}
            title="Augurad Media: Redefining Modern Content"
            description="High-impact creative production for brands that refuse to blend in. We turn visions into high-fidelity reality."
            avatars={[
              { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E0k3DUSx6jycohvNHuDEDzfPVY/uploaded-1779323392402-kdijrktl.png", alt: "Augurad Studio" },
            ]}
            buttons={[{ text: "Book Production", href: "#contact" }]}
            marqueeItems={[
              { type: "text", text: "Content Creation" },
              { type: "text", text: "Photography" },
              { type: "text", text: "Social Media Strategy" },
              { type: "text", text: "Podcast Production" },
              { type: "text", text: "Event Media" },
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <TextAbout
            useInvertedBackground={true}
            title="We are the bridge between your brand and the culture that consumes it."
            buttons={[{ text: "Our Creative Vision", href: "#services" }]}
          />
        </div>

        <div id="services" data-section="services">
          <FeatureCardTen
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            title="Comprehensive Media Solutions"
            description="From high-end photography to full-scale event production, we manage the full creative lifecycle for ambitious brands."
            features={[
              {
                title: "Content & Photography",                description: "Elite editorial and commercial photography tailored to your brand identity.",                media: { imageSrc: "https://img.b2bpic.net/free-photo/professional-photographer-studio_23-2148188112.jpg" },
                items: [{ icon: Camera, text: "Editorial" }, { icon: Zap, text: "Flash" }, { icon: Star, text: "High Fashion" }],
                reverse: false
              },
              {
                title: "Social Strategy",                description: "Data-driven content roadmaps that amplify your presence and drive engagement.",                media: { imageSrc: "https://img.b2bpic.net/free-photo/top-view-notebook-yellow-background_23-2149382391.jpg" },
                items: [{ icon: Share2, text: "Growth" }, { icon: TrendingUp, text: "Trends" }, { icon: Shield, text: "Identity" }],
                reverse: true
              },
              {
                title: "Podcast & Events",                description: "Professional-grade production for events and digital broadcast shows.",                media: { imageSrc: "https://img.b2bpic.net/free-photo/urban-apartment-with-minimalist-home-office-wooden-furniture_482257-120933.jpg" },
                items: [{ icon: Mic, text: "Podcast" }, { icon: Video, text: "Broadcast" }, { icon: Music, text: "Live Event" }],
                reverse: false
              }
            ]}
          />
        </div>

        <div id="portfolio" data-section="portfolio">
          <ProductCardThree
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="bento-grid"
            useInvertedBackground={true}
            title="Selected Work"
            description="Excellence in every frame."
            products={[
              { id: "1", name: "Fashion Editorial", price: "Content", imageSrc: "https://img.b2bpic.net/free-photo/woman-with-albinism-posing-studio_23-2150535751.jpg" },
              { id: "2", name: "Brand Aura Film", price: "Video", imageSrc: "https://img.b2bpic.net/free-photo/actor-front-camera-audition_53876-139546.jpg" },
              { id: "3", name: "Event Recap", price: "Events", imageSrc: "https://img.b2bpic.net/free-photo/close-up-glasses-with-champagne-bubbles_23-2148339537.jpg" },
            ]}
          />
        </div>

        <div id="metrics" data-section="metrics">
          <MetricCardThree
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            title="Proven Impact"
            description="Measurable results for premium clients."
            metrics={[
              { id: "m1", icon: Users, title: "Audience Reach", value: "1.5M+" },
              { id: "m2", icon: Zap, title: "Content Pieces", value: "500+" },
              { id: "m3", icon: Award, title: "Events Managed", value: "75+" },
            ]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardSixteen
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={true}
            title="Client Success Stories"
            description="What visionaries have to say about us."
            kpiItems={[
              { value: "100%", label: "Satisfaction" },
              { value: "5.2x", label: "ROI Growth" },
              { value: "24/7", label: "Dedication" },
            ]}
            testimonials={[
              { id: "1", name: "Alex Rivera", role: "Director", company: "Luxe Global", rating: 5 },
            ]}
          />
        </div>

        <div id="socialProof" data-section="socialProof">
          <SocialProofOne
            names={["Brand A", "Brand B", "Brand C", "Brand D"]}
            title="Collaborators"
            description="Partnering with brands that define their industries."
            textboxLayout="default"
            useInvertedBackground={false}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplitForm
            useInvertedBackground={true}
            title="Start Your Project"
            description="Call us at 0714492076 or follow us at @auguradmedia. Let's create something extraordinary."
            inputs={[
              { name: "name", type: "text", placeholder: "Name", required: true },
              { name: "email", type: "email", placeholder: "Email", required: true }
            ]}
            textarea={{ name: "message", placeholder: "Tell us about your production vision", required: true }}
            buttonText="Send Request"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="Augurad Media"
            columns={[
              { title: "Services", items: [{ label: "Photography", href: "#services" }, { label: "Production", href: "#services" }] },
              { title: "Social", items: [{ label: "Instagram", href: "https://instagram.com/auguradmedia" }, { label: "Contact", href: "#contact" }] }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
