import React, { useState, useMemo, useEffect } from 'react';
import { 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  ChevronRight, 
  Sparkles, 
  MessageCircle, 
  ShieldCheck, 
  ArrowRight, 
  SlidersHorizontal,
  Compass,
  CheckCircle,
  Gem,
  Award,
  Crown,
  Heart,
  ChevronDown,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// === EMBEDDED CUSTOM LOGO DESIGN (Crown & Crest MJ Monogram) ===
const MJLogoIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Subtle royal navy background disc gradient for premium contrast */}
    <circle cx="50" cy="55" r="37" fill="url(#crestNavyDisc)" opacity="0.9" />
    
    {/* Golden Circular Frame */}
    <circle cx="50" cy="55" r="33" stroke="url(#navGoldGradient)" strokeWidth="2.5" fill="none" />
    <circle cx="50" cy="55" r="29" stroke="url(#navGoldGradient)" strokeWidth="0.75" strokeDasharray="3 2" fill="none" opacity="0.8" />
    
    {/* Elegant Royal Crown on top of the circle */}
    {/* Base of crown */}
    <path 
      d="M38 21.5C38 21.5 45 22.5 50 22.5C55 22.5 62 21.5 62 21.5L64.5 26.5C64.5 26.5 57 25 50 25C43 25 35.5 26.5 35.5 26.5L38 21.5Z" 
      fill="url(#navGoldGradient)" 
    />
    {/* Crown Spikes */}
    <path 
      d="M38 21.5 L36 12 L43.5 17.5 L50 9 L56.5 17.5 L64 12 L62 21.5 Z" 
      fill="url(#navGoldGradient)" 
    />
    {/* Jewels / Pearl Circles on top of peaks */}
    <circle cx="36" cy="11.5" r="1.5" fill="url(#navGoldGradient)" />
    <circle cx="50" cy="8.2" r="1.8" fill="url(#navGoldGradient)" />
    <circle cx="64" cy="11.5" r="1.5" fill="url(#navGoldGradient)" />
    
    {/* Stylized intertwined serif letters 'M' and 'J' */}
    <g fill="url(#navGoldGradient)">
      {/* Letter M */}
      <path d="M33 66 L33 46 H35.5 L42.5 59.5 L49.5 46 H52 L52 66 H49.5 L49.5 51 L43.5 62.5 H41.5 L35.5 51 L35.5 66 H33 Z" />
      {/* Intertwined Letter J slightly lower for bespoke royal interlocking */}
      <path d="M54.5 49 H61 V51 H59 L59 66 C59 70.5 55.5 72.5 51.5 72.5 C48 72.5 45.5 70.5 45.5 68" stroke="url(#navGoldGradient)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>

    <defs>
      <radialGradient id="crestNavyDisc" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#0a214f" />
        <stop offset="100%" stopColor="#010715" />
      </radialGradient>
      <linearGradient id="navGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF9E6" />
        <stop offset="30%" stopColor="#E5C175" />
        <stop offset="50%" stopColor="#FBE7C4" />
        <stop offset="80%" stopColor="#C99B4B" />
        <stop offset="100%" stopColor="#9E7028" />
      </linearGradient>
    </defs>
  </svg>
);

// === PREMIUM DATA STRUCTURES ===

interface JewelryPiece {
  id: string;
  name: string;
  category: 'Bridal Masterpieces' | 'Gold & Antique' | 'Silver';
  image: string;
  fallbackImage?: string;
  description: string;
  detailedSpecs: {
    metal: string;
    purity: string;
    gemstoneWeights: string;
    totalWeight: string;
    certification: string;
  };
  designContext: string;
  priceEstimate: string;
}

// === SAFE FALLBACK IMAGE LOADER ===
const SafeImage = ({ 
  src, 
  fallbackSrc, 
  alt = "", 
  className = "", 
  ...props 
}: { 
  src: string; 
  fallbackSrc?: string; 
  alt?: string; 
  className?: string; 
  [key: string]: any;
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <img 
      src={imgSrc} 
      alt={alt} 
      className={className} 
      onError={() => {
        if (fallbackSrc && imgSrc !== fallbackSrc) {
          setImgSrc(fallbackSrc);
        }
      }}
      {...props}
    />
  );
};

// Motion-enabled safe image fallback for slide transitions
const MotionSafeImage = motion.create(SafeImage);

const JEWELRY_CATALOG: JewelryPiece[] = [
  {
    id: "MJ-BR-101",
    name: "The Royal Bridal Necklace Set",
    category: "Bridal Masterpieces",
    image: "/images/products/royal-gilded-choker.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800",
    description: "A magnificent 22KT gold bridal necklace set featuring intricate floral cutwork, cascading gold tassels, matching chandelier earrings, and a decorative maang tikka headpiece.",
    detailedSpecs: {
      metal: "22KT Pure Yellow Gold",
      purity: "HUID Hallmarked (91.6% Pure)",
      gemstoneWeights: "AD Stone Accents on Earrings & Tikka",
      totalWeight: "Available in multiple weight options",
      certification: "BIS Hallmarked & HUID Certified"
    },
    designContext: "A complete bridal adornment set crafted by our master karigars, featuring traditional V-shaped neckline design with elaborate floral motifs, fine gold chain tassels, and perfectly matched accessories.",
    priceEstimate: "Available upon Custom Customization"
  },
  {
    id: "MJ-AN-204",
    name: "The Maharaja Cuban Pendant Chain",
    category: "Gold & Antique",
    image: "/images/products/celestial-solitaire-ring.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800",
    description: "A bold and luxurious men's Cuban link chain in 22KT hallmarked gold, featuring alternating flat engraved plates and twisted links, with a striking diamond-studded jaguar pendant.",
    detailedSpecs: {
      metal: "22KT Heavy Yellow Gold",
      purity: "HUID Hallmarked (91.6% Pure)",
      gemstoneWeights: "CZ Diamond Micro-Pave Setting on Pendant",
      totalWeight: "Available in multiple weight options",
      certification: "BIS Hallmarked & HUID Certified"
    },
    designContext: "A statement piece for men, this chain combines heavyweight Cuban links with engraved flat stations and a micro-pavé jaguar pendant — a symbol of power and prestige by Milap Jewellers.",
    priceEstimate: "Available upon Custom Customization"
  },
  {
    id: "MJ-AN-301",
    name: "The Grand Floral Dome Choker",
    category: "Gold & Antique",
    image: "/images/products/antique-heritage-kadas.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800",
    description: "A breathtaking broad gold choker featuring an ornate central sunflower dome medallion, intricately textured petals, scalloped gold drop balls, and detailed Nakshi embossed backdrop.",
    detailedSpecs: {
      metal: "22KT Hallmarked Yellow Gold",
      purity: "HUID Hallmarked (91.6% Pure)",
      gemstoneWeights: "None — Pure Gold Sculpture Art",
      totalWeight: "Available in multiple weight options",
      certification: "BIS Hallmarked & HUID Certified"
    },
    designContext: "A heritage-style broad choker showcasing traditional Indian goldsmithing at its peak — the central floral dome is hand-sculpted, surrounded by layered petal arches and dangling gold balls.",
    priceEstimate: "Available upon Custom Customization"
  },
  {
    id: "MJ-BR-402",
    name: "The Rajwadi Filigree Choker",
    category: "Bridal Masterpieces",
    image: "/images/products/polki-medallion-jhumkas.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1635767790028-3e2a220a2051?auto=format&fit=crop&q=80&w=800",
    description: "An elegant 22KT gold choker necklace with exquisite filigree mesh work, layered scallop borders, a prominent floral center motif, star-cut panels, and a classic teardrop pendant.",
    detailedSpecs: {
      metal: "22KT Pure Yellow Gold",
      purity: "HUID Hallmarked (91.6% Pure)",
      gemstoneWeights: "None — Pure Handcrafted Gold",
      totalWeight: "Available in multiple weight options",
      certification: "BIS Hallmarked & HUID Certified"
    },
    designContext: "A masterclass in traditional filigree artistry — this choker combines fine mesh weaving, star-punched cutwork, and layered scallop edges into a single breathtaking bridal ornament with a signature teardrop drop.",
    priceEstimate: "Available upon Custom Customization"
  },
  {
    id: "MJ-BR-102",
    name: "The Sunburst Petal Bridal Choker",
    category: "Bridal Masterpieces",
    image: "/images/products/temple-emerald-necklace.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=800",
    description: "A grand broad choker featuring a spectacular central sunflower dome medallion, Meenakari-accented petals, gold bead dangles, and intricate hand-textured Nakshi work throughout.",
    detailedSpecs: {
      metal: "22KT Hallmarked Yellow Gold",
      purity: "HUID Hallmarked (91.6% Pure)",
      gemstoneWeights: "Meenakari Enamel Accent Work",
      totalWeight: "Available in multiple weight options",
      certification: "BIS Hallmarked & HUID Certified"
    },
    designContext: "An iconic bridal centrepiece featuring a striking oversized sunflower medallion surrounded by concentric petal layers, each individually sculpted and finished with contrasting Meenakari enamel detailing.",
    priceEstimate: "Available upon Custom Customization"
  },
  {
    id: "MJ-AN-205",
    name: "The Royal Interlocking Gold Chain",
    category: "Gold & Antique",
    image: "/images/products/infinite-tennis-cuff.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800",
    description: "A premium designer gold chain featuring interlocking circular links with ornate barrel stations and fine lattice-carved rectangular connectors — a timeless piece for everyday elegance.",
    detailedSpecs: {
      metal: "22KT Hallmarked Yellow Gold",
      purity: "HUID Hallmarked (91.6% Pure)",
      gemstoneWeights: "None — Pure Gold Chain Design",
      totalWeight: "Available in multiple weight options",
      certification: "BIS Hallmarked & HUID Certified"
    },
    designContext: "A versatile designer chain combining interlocking ring clusters with lattice-carved barrel stations. Each connector is hand-finished with detailed geometric engravings for a premium everyday look.",
    priceEstimate: "Available upon Custom Customization"
  },
  {
    id: "MJ-BR-103",
    name: "The Heritage Mangalsutra",
    category: "Bridal Masterpieces",
    image: "/images/products/heritage-mangalsutra.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800",
    description: "A stunning traditional long Mangalsutra featuring elaborate 22KT gold pendant work with delicate emerald drops and a classic double-layered black bead chain.",
    detailedSpecs: {
      metal: "22KT Pure Yellow Gold",
      purity: "HUID Hallmarked (91.6% Pure)",
      gemstoneWeights: "Emerald Accent Stones",
      totalWeight: "Available in multiple weight options",
      certification: "BIS Hallmarked & HUID Certified"
    },
    designContext: "A beautiful fusion of deep-rooted tradition and heavy bridal aesthetics, this mangalsutra is designed as a masterpiece for auspicious beginnings, anchored by a regal gold pendant.",
    priceEstimate: "Available upon Custom Customization"
  },
  {
    id: "MJ-SV-501",
    name: "925 Silver Apple Pendant Necklace",
    category: "Silver",
    image: "/images/products/silver-apple-necklace-1.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800",
    description: "A delicate handmade 925 sterling silver chain featuring an intricately paved apple-shaped pendant and elegant black bead accents.",
    detailedSpecs: {
      metal: "925 Pure Sterling Silver",
      purity: "92.5% Pure Silver Hallmarked",
      gemstoneWeights: "Sparkling Zirconia Accent Stones",
      totalWeight: "Lightweight Everyday Wear",
      certification: "925 Sterling Silver Verified"
    },
    designContext: "Designed for modern daily wear, this piece combines the traditional black bead aesthetic with a contemporary sparkling apple pendant crafted in premium 925 silver.",
    priceEstimate: "Available in Store"
  },
  {
    id: "MJ-SV-502",
    name: "Handcrafted Silver Apple Mangalsutra",
    category: "Silver",
    image: "/images/products/silver-apple-necklace-2.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800",
    description: "Beautiful everyday wear 925 sterling silver mini mangalsutra packaged with care, highlighting our commitment to quality handmade silver jewelry.",
    detailedSpecs: {
      metal: "925 High-Grade Pure Silver",
      purity: "925 Sterling Hallmarked",
      gemstoneWeights: "Paved Zirconia Apple Motif",
      totalWeight: "Lightweight Everyday Wear",
      certification: "925 Sterling Silver Verified"
    },
    designContext: "A minimalist approach to traditional jewelry. The sterling silver construction ensures skin-friendly everyday use while maintaining brilliant shine.",
    priceEstimate: "Available in Store"
  }
];

// === NAVIGATION AND HERO SLIDES ===

const HERO_SLIDES = [
  {
    title: "Timeless Heritage. Forever Purity.",
    subtitle: "MILAP JEWELLERS",
    description: "For three generations, we have crafted precious heirlooms out of rich 22KT gold, antique Kundan masterpieces, and brilliant authentic jewelry.",
    highlight: "Since 1993, Handcrafted to Perfection",
    bgPattern: "bg-gradient-to-r from-[#110e0c]/90 via-[#261f19]/80 to-[#110e0c]/90",
    itemRef: "MJ-BR-101",
    primaryImage: "/images/products/royal-gilded-choker.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "A Symphony of Tradition",
    subtitle: "THE HERITAGE BRIDAL COLLECTION",
    description: "Dazzling 22KT gold masterpieces, including ornate mangalsutras and classic bridal sets designed for your most auspicious beginnings.",
    highlight: "Exclusive Bridal Curations",
    bgPattern: "bg-gradient-to-r from-[#0d0f11]/90 via-[#1a2128]/85 to-[#0d0f11]/90",
    itemRef: "MJ-BR-103",
    primaryImage: "/images/products/heritage-mangalsutra.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Bespoke Antique Masterpieces",
    subtitle: "THE GOLD & ANTIQUE COLLECTION",
    description: "Intricately hand-sculpted pure 22KT gold featuring complex engravings, broad floral domes, and traditional Nakshi craftsmanship.",
    highlight: "100% Gov. HUID Hallmarked Purity Guaranteed",
    bgPattern: "bg-gradient-to-r from-[#120f0d]/90 via-[#221c16]/80 to-[#120f0d]/90",
    itemRef: "MJ-AN-301",
    primaryImage: "/images/products/antique-heritage-kadas.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=1200"
  }
];

// === BOUTIQUE SHOWROOM IMAGES ===

interface ShowroomImage {
  title: string;
  category: string;
  image: string;
  fallbackImage?: string;
  description: string;
}

const SHOWROOM_IMAGES: ShowroomImage[] = [
  {
    title: "Storefront Facade",
    category: "Milap Jewellers Landmark",
    image: "/images/showroom/showroom-storefront.png",
    fallbackImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    description: "Our Hanuman Nagar, Kandivali East flagship showroom facade. Beautifully lit with golden fairy lights and festive floral decorations, celebrating trust, certified purity, and traditional craftsmanship under the official BIS Hallmark."
  },
  {
    title: "Bridal Heritage Showcase",
    category: "The Bridal Salon",
    image: "/images/showroom/showroom-gold-salon.png",
    fallbackImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    description: "Our signature bridal collection showcase featuring exquisite 22KT gold chokers, layered necklaces, and traditional Kundan sets. Milap Jewellers — your trusted 91.6 Hallmark jewellers in Kandivali East, Mumbai."
  },
  {
    title: "Signature Craftsmanship",
    category: "Master Artisan Collection",
    image: "/images/showroom/showroom-private-suite.png",
    fallbackImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
    description: "A glimpse of our master artisan craftsmanship — precision-crafted gold bangles with diamond detailing, each piece bearing the Milap Jewellers hallmark of quality from our Wadar Pada Road workshop."
  },
  {
    title: "Our Milap Family",
    category: "The Team Behind The Trust",
    image: "/images/showroom/showroom-atelier-desk.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1200",
    description: "The heart of Milap Jewellers — our dedicated team welcoming you inside our beautifully decorated showroom. We believe in building lasting relationships with every customer who walks through our doors."
  },
  {
    title: "Gold & Diamond Gallery",
    category: "Heritage Collection Room",
    image: "/images/showroom/showroom-polki-room.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
    description: "Our expansive jewelry display showcasing hundreds of handcrafted necklaces, earrings, and ornamental sets in illuminated glass cases — a treasure trove of gold and diamond artistry for every occasion."
  }
];

export default function App() {
  // Website Loading & Animation Intro State
  const [isIntroLoading, setIsIntroLoading] = useState(true);

  // Navigation & UI States
  const [activeTab, setActiveTab] = useState<'All' | 'Bridal Masterpieces' | 'Gold & Antique' | 'Silver'>('All');
  const [selectedPiece, setSelectedPiece] = useState<JewelryPiece | null>(null);
  const [heroIndex, setHeroIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Boutique Showroom Interactive Gallery active state
  const [activeShowroomIdx, setActiveShowroomIdx] = useState(0);

  // Floating WhatsApp Box State
  const [isWhatsAppBoxOpen, setIsWhatsAppBoxOpen] = useState(false);
  const [quickContactMsg, setQuickContactMsg] = useState("");

  // Loading Intro Timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntroLoading(false);
    }, 4200);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotating Hero
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
    }, 8200);
    return () => clearInterval(timer);
  }, []);

  // Automatically cycle through showroom images in a continuous loop every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveShowroomIdx((prevIdx) => (prevIdx + 1) % SHOWROOM_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Filter Catalog
  const filteredCatalog = useMemo(() => {
    if (activeTab === 'All') return JEWELRY_CATALOG;
    return JEWELRY_CATALOG.filter(item => item.category === activeTab);
  }, [activeTab]);

  // Handle WhatsApp URL Redirects safely
  const triggerWhatsAppRedirect = (messageText: string) => {
    const number = "919930839406"; // Official Milap Jewellers WhatsApp line
    const url = `https://wa.me/${number}?text=${encodeURIComponent(messageText)}`;
    window.open(url, "_blank");
  };

  const handleProductInquiry = (piece: JewelryPiece) => {
    const text = `Greetings Milap Jewellers Team! I am browsing your online luxury catalogue and fell absolute in love with this masterpiece:
--------------
- Masterpiece: ${piece.name}
- Catalogue ID: ${piece.id}
- Collection: ${piece.category}
- Metal Spec: ${piece.detailedSpecs.metal} (${piece.detailedSpecs.purity})
- Gem Spec: ${piece.detailedSpecs.gemstoneWeights}
--------------
Could you kindly let me know the availability, share additional close-up photos, or guide me on booking a private appointment at your atelier?`;
    triggerWhatsAppRedirect(text);
  };

  const handleConciergeQuickCta = (topic: string) => {
    let text = "";
    if (topic === 'bridal') {
      text = "Greetings Milap Jewellers! I am styling my upcoming bridal trousseau and would love to arrange a bespoke royal bridal lookbook consultation with your top jewelers. Please share your availability.";
    } else if (topic === 'appointment') {
      text = "Greetings Milap Jewellers. I would love to plan a personal curated visit to your premium showroom. Could you provide address landmarks, free parking details, and book me a customized VIP timeslot?";
    } else if (topic === 'custom') {
      text = "Hi Milap Jewellers! I have a traditional design idea in gold and emeralds that I want to bring to life. May I schedule a direct interaction with your head artisan (karigar)?";
    } else {
      text = `Hi Milap Jewellers! I would love to consult about some of your exquisite ornaments on your website. Under custom message: ${quickContactMsg || "Hello!"}`;
    }
    triggerWhatsAppRedirect(text);
    setIsWhatsAppBoxOpen(false);
    setQuickContactMsg("");
  };

  return (
    <div id="website-root" className={`min-h-screen bg-[#faf8f5] text-[#2a231d] selection:bg-[#eed6a4] selection:text-[#2a231d] font-sans antialiased relative ${isIntroLoading ? 'h-screen overflow-hidden' : 'overflow-x-hidden'}`}>
      
      {/* 0. BRAND LAUNCH INTRO SCREEN (Cinematic Animation Sequence) */}
      <AnimatePresence mode="wait">
        {isIntroLoading && (
          <motion.div
            key="intro-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#020712] via-[#041029] to-[#01050d] text-[#faf8f5] overflow-hidden"
          >
            {/* Shimmering background radial gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(223,186,115,0.08)_0%,transparent_60%)] pointer-events-none"></div>
            
            {/* Fine geometric jewelry grid backdrop line */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #dfba73 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            <div className="flex flex-col items-center max-w-md px-6 text-center select-none z-10">
              
              {/* Elegant Royal Crest Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0,
                  transition: {
                    duration: 1.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.3
                  }
                }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.5 } }}
                className="mb-8 relative"
              >
                {/* Back ring glow */}
                <div className="absolute inset-0 scale-120 bg-[#cb9742]/10 blur-xl rounded-full"></div>
                <MJLogoIcon className="w-28 h-28 sm:w-36 sm:h-36 overflow-visible relative z-10" />
              </motion.div>

              {/* Brand Typography Core Name */}
              <div className="relative overflow-hidden py-1">
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 1.5,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 1.2
                    }
                  }}
                  exit={{ opacity: 0, y: -10, transition: { duration: 0.5 } }}
                  className="bg-gradient-to-r from-[#9e7028] via-[#eecf94] to-[#cb9742] bg-clip-text text-transparent font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-black tracking-[0.28em] uppercase block leading-none"
                >
                  MILAP
                </motion.span>
              </div>

              {/* Sub-label JEWELLERS */}
              <div className="relative overflow-hidden py-1 mt-3 sm:mt-4">
                <motion.span
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 1.3,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 1.7
                    }
                  }}
                  exit={{ opacity: 0, y: -10, transition: { duration: 0.5 } }}
                  className="text-zinc-400 text-xs sm:text-[14px] tracking-[0.58em] font-sans font-black uppercase block leading-none"
                >
                  JEWELLERS
                </motion.span>
              </div>

              {/* Legacy Subtitle / trust tagline */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 0.65,
                  transition: {
                    duration: 1.4,
                    delay: 2.3
                  }
                }}
                exit={{ opacity: 0, transition: { duration: 0.4 } }}
                className="mt-10 flex items-center gap-1.5 text-[9px] text-[#fbf8f5] tracking-widest font-mono uppercase"
              >
                <span>TRUSTED FAMILY JEWELLERS</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#cb9742]"></span>
                <span>ESTD 1993</span>
              </motion.div>

            </div>

            {/* Subtle progress underline meter */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-zinc-800/80 overflow-hidden">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ duration: 3.4, delay: 0.6, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-[#cb9742] to-transparent"
              />
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>

      {/* BACKGROUND DECORATIVE ELEMENTS (Atmospheric luxury shadows/gold orbs) */}
      <div className="absolute top-[10%] left-[-200px] w-[500px] h-[500px] rounded-full bg-[#1e40af]/10 blur-3xl pointer-events-none animate-luxury-drift"></div>
      <div className="absolute top-[50%] right-[-200px] w-[600px] h-[600px] rounded-full bg-[#dfba73]/10 blur-3xl pointer-events-none animate-luxury-drift-reverse"></div>
      <div className="absolute bottom-[10%] left-[-150px] w-[450px] h-[450px] rounded-full bg-[#0f4c81]/10 blur-3xl pointer-events-none animate-luxury-drift"></div>

      {/* 1. TOP PREMIUM ANNOUNCEMENT BLOCK */}
      <div id="announcement-bar" className="bg-gradient-to-r from-[#03112c] via-[#0b244d] to-[#03112c] text-[#fbf8f5] py-2.5 px-4 text-center text-xs tracking-[0.2em] uppercase border-b border-[#dfba73]/30 font-serif-luxury flex justify-center items-center gap-2 overflow-hidden shadow-sm">
        <span className="text-[#cb9742] opacity-100 text-[10px] tracking-normal font-sans animate-pulse">✦</span>
        <span className="text-yellow-105/95 font-medium">Crafting Royal Handcrafted Legacies Since 1993 • 100% Gov. HUID Pure Gold & GIA Certified Diamonds</span>
        <span className="text-[#cb9742] opacity-100 text-[10px] tracking-normal font-sans animate-pulse">✦</span>
      </div>

      {/* 2. NAVIGATION BAR */}
      <header id="nav-header" className="sticky top-0 z-40 bg-[#faf8f5]/90 backdrop-blur-md border-b border-[#dfba73]/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between md:grid md:grid-cols-3 relative">
          
          {/* 1. Desktop Navigation Links (Left Column) */}
          <nav id="nav-desktop" className="hidden md:flex items-center space-x-6 justify-start">
            <a href="#heritage-story" className="text-[#5c4a3b] hover:text-[#cb9742] transition-colors uppercase text-[10px] sm:text-xs tracking-widest font-semibold shrink-0">Our Legacy</a>
            <a href="#curator-section" className="text-[#5c4a3b] hover:text-[#cb9742] transition-colors uppercase text-[10px] sm:text-xs tracking-widest font-semibold shrink-0">Exquisite Dresser</a>
            <a href="#catalog-section" className="text-[#5c4a3b] hover:text-[#cb9742] transition-colors uppercase text-[10px] sm:text-xs tracking-widest font-semibold shrink-0">Collections</a>
            <a href="#showroom-section" className="text-[#5c4a3b] hover:text-[#cb9742] transition-colors uppercase text-[10px] sm:text-xs tracking-widest font-semibold shrink-0">Our Showroom</a>
          </nav>

          {/* Mobile Menu Toggle Button (Mobile Left Slot) */}
          <div className="md:hidden flex items-center shrink-0">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              id="mobile-menu-toggle"
              className="p-1.5 text-[#2a231d] hover:text-[#cb9742] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* 2. Brand Aesthetics / Centered Logo (Center Column) */}
          <div className="flex justify-center items-center flex-1">
            <a href="#hero-section" id="nav-logo" className="flex items-center gap-3.5 sm:gap-4.5 group focus:outline-none justify-center text-center">
              <MJLogoIcon className="w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 lg:w-26 lg:h-26 overflow-visible transition-all duration-300 group-hover:scale-110" />
              <div className="flex flex-col select-none text-left">
                <span className="bg-gradient-to-r from-[#9e7028] via-[#eecf94] to-[#cb9742] bg-clip-text text-transparent font-serif-luxury text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-[0.25em] leading-none uppercase">MILAP</span>
                <span className="text-[#03112c]/90 text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] tracking-[0.52em] font-sans font-black leading-none uppercase mt-1.5 md:mt-2.5 block">JEWELLERS</span>
              </div>
            </a>
          </div>

          {/* 3. Nav Right CTAs (Right Column) */}
          <div className="hidden md:flex items-center justify-end space-x-4">
            <a 
              href="#showroom-section" 
              className="px-4 py-1.5 text-[10px] sm:text-xs uppercase tracking-widest border border-[#dcb165] hover:bg-[#2a231d] hover:text-[#faf8f5] hover:border-[#1e1915] text-[#cb9742] rounded-none font-semibold transition-all duration-300 shrink-0"
            >
              Visit Showroom
            </a>
            <a 
              href="tel:+919930839406" 
              className="flex items-center gap-1.5 text-xs text-[#2a231d] hover:text-[#cb9742] font-semibold tracking-wider transition-colors shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-[#cb9742]" />
              VIP Support
            </a>
          </div>

          {/* Mobile Phone Direct Call Trigger (Mobile Right Slot to keep perfect symmetry) */}
          <div className="md:hidden flex items-center justify-end shrink-0">
            <a 
              href="tel:+919930839406" 
              className="p-1.5 text-[#2a231d] hover:text-[#cb9742]"
              aria-label="Call Support"
            >
              <Phone className="w-4 h-4 text-[#cb9742]" />
            </a>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div id="nav-mobile" className="md:hidden bg-[#faf8f5] border-t border-[#dfba73]/10 py-4 px-6 space-y-4 shadow-lg absolute left-0 right-0 z-50">
            <a 
              href="#heritage-story" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-semibold tracking-wider text-[#2a231d] hover:text-[#cb9742] uppercase"
            >
              Our Legacy
            </a>
            <a 
              href="#curator-section" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-semibold tracking-wider text-[#2a231d] hover:text-[#cb9742] uppercase"
            >
              Exquisite Dresser
            </a>
            <a 
              href="#catalog-section" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-semibold tracking-wider text-[#2a231d] hover:text-[#cb9742] uppercase"
            >
              Collections Catalog
            </a>
            <a 
              href="#showroom-section" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-semibold tracking-wider text-[#2a231d] hover:text-[#cb9742] uppercase"
            >
              Our Showroom
            </a>
            <div className="pt-4 border-t border-[#dfba73]/10 flex flex-col gap-3">
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsWhatsAppBoxOpen(true);
                }} 
                className="w-full text-center py-2.5 bg-[#2a231d] text-[#eecf94] text-xs font-bold tracking-widest uppercase rounded-none hover:bg-black"
              >
                Inquire via WhatsApp
              </button>
              <a 
                href="tel:+919930839406"
                className="flex items-center justify-center gap-2 text-xs font-semibold py-2 text-[#5c4a3b]"
              >
                <Phone className="w-3.5 h-3.5 text-[#cb9742]" />
                Call Atelier Hotline
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SHOWCASE PATTERN (Slider with gold background trims) */}
      <section id="hero-section" className="relative bg-[#030e25] text-[#faf8f5] overflow-hidden min-h-[70vh] sm:min-h-[80vh] flex items-center">
        {/* Carousel Slide Render */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <MotionSafeImage 
              key={heroIndex}
              src={HERO_SLIDES[heroIndex].primaryImage} 
              fallbackSrc={HERO_SLIDES[heroIndex].fallbackImage}
              alt="Royal jewelry mockup showcase" 
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 0.32, scale: 1.05 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-[#010714] via-[#041230]/90 to-[#020b1e]/98 mix-blend-multiply"></div>
          
          {/* Real-time delicate golden lines framing */}
          <div className="absolute inset-x-8 inset-y-12 border border-[#dfba73]/15 pointer-events-none hidden md:block"></div>
          <div className="absolute inset-x-12 inset-y-16 border border-[#dfba73]/5 pointer-events-none hidden md:block"></div>

          {/* Majestic Large MJ Watermark Crest in Hero Background with lowered J */}
          <div className="absolute right-4 bottom-8 lg:right-28 lg:bottom-16 w-72 h-72 sm:w-[420px] sm:h-[420px] md:w-[500px] md:h-[500px] pointer-events-none opacity-[0.05] sm:opacity-[0.07] select-none text-[#dfba73] mix-blend-screen hidden sm:block">
            <svg 
              viewBox="0 0 100 100" 
              className="w-full h-full text-[#eed6a4]"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer circular gold border */}
              <circle cx="50" cy="55" r="33" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="50" cy="55" r="29" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" fill="none" />
              
              {/* Elegant Royal Crown */}
              <path 
                d="M38 21.5C38 21.5 45 22.5 50 22.5C55 22.5 62 21.5 62 21.5L64.5 26.5C64.5 26.5 57 25 50 25C43 25 35.5 26.5 35.5 26.5L38 21.5Z" 
                fill="currentColor" 
              />
              <path 
                d="M38 21.5 L36 12 L43.5 17.5 L50 9 L56.5 17.5 L64 12 L62 21.5 Z" 
                fill="currentColor" 
              />
              <circle cx="36" cy="11.5" r="1.5" fill="currentColor" />
              <circle cx="50" cy="8.2" r="1.8" fill="currentColor" />
              <circle cx="64" cy="11.5" r="1.5" fill="currentColor" />
              
              {/* Stylized letters M and J with J slightly downward for interlocking signature style */}
              <g fill="currentColor">
                {/* Letter M */}
                <path d="M33 66 L33 46 H35.5 L42.5 59.5 L49.5 46 H52 L52 66 H49.5 L49.5 51 L43.5 62.5 H41.5 L35.5 51 L35.5 66 H33 Z" />
                {/* Letter J slightly down */}
                <path d="M54.5 49 H61 V51 H59 L59 66 C59 70.5 55.5 72.5 51.5 72.5 C48 72.5 45.5 70.5 45.5 68" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </g>
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Slide Information */}
            <div className="lg:col-span-7 justify-center flex flex-col min-h-[400px] sm:min-h-[350px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={heroIndex}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 16 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6"
                >
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/15 border border-emerald-500/35 rounded-full text-emerald-400 text-xs font-semibold tracking-wider uppercase shadow-[0_0_12px_rgba(16,185,129,0.06)] select-none">
                    <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3px]" />
                    <span>{HERO_SLIDES[heroIndex].highlight}</span>
                  </div>

                  <span className="block text-[#dcb165] text-xs tracking-[0.4em] font-semibold uppercase">
                    {HERO_SLIDES[heroIndex].subtitle}
                  </span>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal font-serif-luxury tracking-wide text-white leading-tight">
                    {HERO_SLIDES[heroIndex].title}
                  </h1>

                  <p className="text-[#ecdab3]/80 text-sm sm:text-base leading-relaxed max-w-xl font-light">
                    {HERO_SLIDES[heroIndex].description}
                  </p>

                  {/* Slider Action Triggers */}
                  <div className="pt-4 flex flex-wrap gap-4 items-center">
                    <a 
                      href="#catalog-section" 
                      className="px-8 py-4 bg-[#cb9742] hover:bg-[#eecf94] text-[#2a231d] font-semibold text-xs uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg active:translate-y-0"
                    >
                      Explore Masterpieces
                    </a>
                    
                    <button 
                      onClick={() => {
                        const matchedPiece = JEWELRY_CATALOG.find(x => x.id === HERO_SLIDES[heroIndex].itemRef);
                        if (matchedPiece) {
                          setSelectedPiece(matchedPiece);
                        }
                      }}
                      className="px-6 py-4 border border-[#ecdab3]/30 hover:border-white text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 active:bg-white/5"
                    >
                      View Details of Piece
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Micro Slider Visual Showcase in Right Frame */}
            <div className="lg:col-span-5 hidden lg:flex flex-col items-center justify-center">
              <div className="p-4 border border-[#dfba73]/30 bg-[#081329]/80 backdrop-blur-md rounded-none w-80 shadow-2xl relative">
                
                {/* Vintage Corner Brackets */}
                <span className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-[#dfba73]/50"></span>
                <span className="absolute top-1 right-1 w-2.5 h-2.5 border-t border-r border-[#dfba73]/50"></span>
                <span className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b border-l border-[#dfba73]/50"></span>
                <span className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-[#dfba73]/50"></span>

                <div className="aspect-square w-full overflow-hidden mb-4 relative z-0">
                  <AnimatePresence mode="wait">
                    <MotionSafeImage 
                      key={heroIndex}
                      src={HERO_SLIDES[heroIndex].primaryImage} 
                      fallbackSrc={HERO_SLIDES[heroIndex].fallbackImage}
                      alt="Active spotlight jewel detail" 
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="absolute inset-0 w-full h-full object-cover rounded-none"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081329] via-transparent to-transparent pointer-events-none z-10"></div>
                </div>

                <div className="text-center relative z-10">
                  <p className="text-[10px] uppercase text-[#dfba73] tracking-widest font-semibold mb-1">Featured Boutique Release</p>
                  <AnimatePresence mode="wait">
                    <motion.p 
                      key={heroIndex}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.4 }}
                      className="font-serif-luxury text-sm text-yellow-50 truncate"
                    >
                      {JEWELRY_CATALOG.find(x => x.id === HERO_SLIDES[heroIndex].itemRef)?.name}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </div>

          </div>

          {/* Slide Indicator Dots */}
          <div className="mt-12 flex items-center justify-start gap-3">
            {HERO_SLIDES.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setHeroIndex(i)} 
                className={`h-1.5 transition-all duration-500 rounded-full ${heroIndex === i ? 'w-10 bg-[#cb9742]' : 'w-2 bg-[#ecdab3]/30 hover:bg-[#ecdab3]/60'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 4. HERITAGE & TRUST STRIP: 3 core pillars */}
      <section id="heritage-story" className="py-20 bg-[#faf8f5] border-b border-[#dfba73]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-[#cb9742] text-xs font-bold tracking-[0.3em] uppercase block">Our Heritage & Promise</span>
            <h2 className="text-3xl sm:text-4xl text-[#2a231d] font-normal tracking-wide font-serif-luxury">
              Legacies of Purity & Timeless Artistry
            </h2>
            <div className="w-16 h-px bg-[#cb9742] mx-auto my-3"></div>
            <p className="text-[#5c4a3b] text-sm leading-relaxed font-light">
              Since 1993, <strong className="font-semibold text-[#2a231d]">Milap Jewellers</strong> has stood for absolute trust, pairing generations of handcrafted karigar artistry with modern diamond certitude.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-2">
            
            <div className="bg-[#fcfaf7] border border-[#dfba73]/10 p-8 hover:border-[#cb9742]/40 transition-all duration-300 shadow-sm relative group">
              <div className="w-12 h-12 rounded-full bg-[#cb9742]/5 border border-[#dfba73]/25 flex items-center justify-center mx-auto mb-6 text-[#cb9742] group-hover:bg-[#cb9742] group-hover:text-[#faf8f5] transition-colors duration-300">
                <Crown className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif-luxury font-medium tracking-wide mb-2 text-[#2a231d]">Traditional Indian Craft</h3>
              <p className="text-[#5c4a3b] text-xs leading-relaxed font-light">
                Hand-forged ornaments utilizing vintage Jadau framing and design details.
              </p>
            </div>

            <div className="bg-[#fcfaf7] border border-[#dfba73]/10 p-8 hover:border-[#cb9742]/40 transition-all duration-300 shadow-sm relative group">
              <div className="w-12 h-12 rounded-full bg-[#cb9742]/5 border border-[#dfba73]/25 flex items-center justify-center mx-auto mb-6 text-[#cb9742] group-hover:bg-[#cb9742] group-hover:text-[#faf8f5] transition-colors duration-300">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif-luxury font-medium tracking-wide mb-2 text-[#2a231d]">100% Guaranteed Purity</h3>
              <p className="text-[#5c4a3b] text-xs leading-relaxed font-light">
                Solid gold featuring verifiable 6-digit BIS HUID laser engravings.
              </p>
            </div>

            <div className="bg-[#fcfaf7] border border-[#dfba73]/10 p-8 hover:border-[#cb9742]/40 transition-all duration-300 shadow-sm relative group">
              <div className="w-12 h-12 rounded-full bg-[#cb9742]/5 border border-[#dfba73]/25 flex items-center justify-center mx-auto mb-6 text-[#cb9742] group-hover:bg-[#cb9742] group-hover:text-[#faf8f5] transition-colors duration-300">
                <Gem className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif-luxury font-medium tracking-wide mb-2 text-[#2a231d]">GIA Certified Diamonds</h3>
              <p className="text-[#5c4a3b] text-xs leading-relaxed font-light">
                Vetted natural diamonds offering strict cut, clarity, and official GIA grading.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE FEATURE: EXQUISITE SHOWROOM LOOKBOOK */}
      <section id="curator-section" className="py-24 bg-gradient-to-b from-[#020916] via-[#041126] to-[#020916] border-t border-[#dfba73]/15 relative overflow-hidden">
        
        {/* Ambient aesthetic gold dust glow behind the section */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#cb9742]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#cb9742]/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 text-[#cb9742] text-xs font-bold tracking-[0.3em] uppercase">
              <Crown className="w-4 h-4" />
              <span>Milap Flagship Experience</span>
            </div>
            <h2 className="text-3xl sm:text-5xl text-[#faf8f5] font-light tracking-wide font-serif-luxury leading-tight">
              Explore Our Landmark Hanuman Nagar Boutique
            </h2>
            <div className="w-20 h-px bg-[#dfba73]/40 mx-auto my-3"></div>
            <p className="text-[#ecdab3]/80 text-xs sm:text-sm font-light leading-relaxed max-w-2xl mx-auto">
              A private preview of our flagship Hanuman Nagar boutique, curated to host families with discretion and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Image Preview Window (Col Span 7) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              
              {/* Featured Active Room Frame */}
              <div className="relative aspect-[16/10] bg-neutral-950 border border-[#dfba73]/30 overflow-hidden shadow-2xl group flex flex-col justify-end">
                
                {/* Slow Zoom On Active Gallery Image */}
                <AnimatePresence mode="wait">
                  <MotionSafeImage 
                    key={activeShowroomIdx}
                    src={SHOWROOM_IMAGES[activeShowroomIdx].image} 
                    fallbackSrc={SHOWROOM_IMAGES[activeShowroomIdx].fallbackImage}
                    alt={SHOWROOM_IMAGES[activeShowroomIdx].title} 
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full object-cover opacity-85"
                  />
                </AnimatePresence>

                {/* Corner Accents */}
                <span className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#dfba73]/40 pointer-events-none"></span>
                <span className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#dfba73]/40 pointer-events-none"></span>
                <span className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#dfba73]/40 pointer-events-none"></span>
                <span className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#dfba73]/40 pointer-events-none"></span>



              </div>

              {/* Showroom Interactive Slider Thumbnails bar */}
              <div className="grid grid-cols-5 gap-2 sm:gap-3">
                {SHOWROOM_IMAGES.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveShowroomIdx(idx)}
                    className={`aspect-[4/3] relative border overflow-hidden transition-all duration-300 focus:outline-none ${activeShowroomIdx === idx ? 'border-[#cb9742] ring-1 ring-[#cb9742] scale-[1.02]' : 'border-white/10 hover:border-[#dfba73]/50 opacity-60 hover:opacity-100'}`}
                  >
                    <SafeImage src={item.image} fallbackSrc={item.fallbackImage} alt={item.title} className="w-full h-full object-cover" />
                    {activeShowroomIdx === idx && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-[#cb9742]"></span>
                      </div>
                    )}
                  </button>
                ))}
              </div>

            </div>

            {/* Privilege & Experience Panel (Col Span 5) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#041126] to-[#0a2044] border border-[#dfba73]/25 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative text-[#faf8f5]">
              
              {/* Gold Ornament Trim top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#cb9742]/40 to-transparent"></div>

              <div className="space-y-6">
                <div>
                  <span className="text-[#cb9742] text-[10px] tracking-[0.2em] uppercase font-bold block mb-1">Store Guide & Consultation</span>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl font-light text-[#faf8f5] tracking-wide border-b border-[#dfba73]/15 pb-4">
                    Kandivali Premium Buying Guide
                  </h3>
                </div>

                {/* Dynamically connected active atelier view section details */}
                <div className="bg-[#cb9742]/5 border border-[#dfba73]/25 p-4 rounded-none">
                  <div className="text-[9px] uppercase font-mono tracking-widest text-[#cb9742] mb-1">
                    Atelier Focus: {SHOWROOM_IMAGES[activeShowroomIdx].category}
                  </div>
                  <h4 className="text-xs uppercase font-semibold text-[#faf8f5] mb-1">
                    {SHOWROOM_IMAGES[activeShowroomIdx].title}
                  </h4>
                  <p className="text-[11px] text-zinc-300 leading-relaxed font-light">
                    {SHOWROOM_IMAGES[activeShowroomIdx].description}
                  </p>
                </div>

                <div className="space-y-5">
                  
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#cb9742]/15 border border-[#dfba73]/30 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#cb9742]" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-semibold text-[#ecdab3] tracking-wider mb-0.5">
                        100% Gov. HUID Hallmark Guarantee
                      </h4>
                      <p className="text-[11px] text-zinc-300 font-light leading-relaxed">
                        Every masterpiece is laser engraved with its unique 6-digit HUID code, verifiable on-site or on the Gov. BIS Care App.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#cb9742]/15 border border-[#dfba73]/30 flex items-center justify-center shrink-0">
                      <Sparkles className="w-3.5 h-3.5 text-[#cb9742]" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-semibold text-[#ecdab3] tracking-wider mb-0.5">
                        In-Store Custom Hand-Sketches
                      </h4>
                      <p className="text-[11px] text-zinc-300 font-light leading-relaxed">
                        Collaborate directly with our master in-store Karigars to hand-sketch or customize ornaments based on family heirlooms.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#cb9742]/15 border border-[#dfba73]/30 flex items-center justify-center shrink-0">
                      <Award className="w-3.5 h-3.5 text-[#cb9742]" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-semibold text-[#ecdab3] tracking-wider mb-0.5">
                        Spectrometer Purity Inspections
                      </h4>
                      <p className="text-[11px] text-zinc-300 font-light leading-relaxed">
                        Inspect raw gold composition under live spectrograph analyzers on-site to ensure certified carat weights.
                      </p>
                    </div>
                  </div>

                </div>

                <div className="bg-black/40 border border-[#dfba73]/15 p-4 rounded-none">
                  <span className="text-[9px] uppercase tracking-widest text-[#cb9742] font-semibold block mb-1">Showroom Landmark</span>
                  <p className="text-[11px] text-zinc-300 leading-relaxed font-light">
                    Located centrally at <strong>Hanuman Nagar, Kandivali East, Mumbai</strong>. Serving generations of local families with transparency.
                  </p>
                </div>

              </div>

              {/* Book an Exclusive Consultation CTA */}
              <div className="pt-6 border-t border-[#dfba73]/15 mt-6 sm:mt-0">
                <button
                  type="button"
                  onClick={() => {
                    const messageText = `Greetings Milap Jewellers! I am exploring your Hanuman Nagar, Kandivali showroom online guide and would love to request personalized buying advice or check stock for your bespoke collection!`;
                    triggerWhatsAppRedirect(messageText);
                  }}
                  className="w-full bg-[#cb9742] hover:bg-[#eecf94] text-black font-semibold text-xs uppercase tracking-widest py-3.5 transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 shrink-0 text-black" />
                  Connect with Kandivali Guide
                </button>
                <span className="text-[9px] text-center text-[#ecdab3]/60 block mt-2 tracking-wider">
                  ✦ Direct concierge support via WhatsApp
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 6. CURATED SHOWCASE CATALOG SECTION */}
      <section id="catalog-section" className="py-20 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-[#cb9742] text-xs font-bold tracking-[0.3em] uppercase block">The Bridal & Antique Showcase</span>
            <h2 className="text-3xl sm:text-4xl text-[#2a231d] font-normal tracking-wide font-serif-luxury">
              Drapes of Gold, Gems & Brilliant Refraction
            </h2>
            <div className="w-16 h-px bg-[#cb9742] mx-auto my-4"></div>
            <p className="text-[#5c4a3b] text-xs sm:text-sm font-light leading-relaxed">
              Browse our handcrafted collections. Click any piece to inspect specifications or begin a direct WhatsApp catalog inquiry.
            </p>
          </div>

          {/* Tab Filter System */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 pb-2 border-b border-[#dfba73]/10">
            {['All', 'Bridal Masterpieces', 'Gold & Antique', 'Silver'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`py-2 px-4 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all duration-300 focus:outline-none ${activeTab === tab ? 'border-[#cb9742] text-[#cb9742] font-bold bg-[#cb9742]/5' : 'border-transparent text-[#5c4a3b] hover:text-[#cb9742]'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Core Catalog Grid */}
          <div id="catalog-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCatalog.map((piece) => (
              <div 
                key={piece.id} 
                className="bg-[#faf8f5] border border-[#dfba73]/10 hover:border-[#cb9742] group overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col justify-between"
              >
                
                {/* Photo frame */}
                <div 
                  onClick={() => setSelectedPiece(piece)}
                  className="aspect-[4/5] bg-neutral-950 w-full overflow-hidden relative cursor-pointer group"
                >
                  <SafeImage 
                    src={piece.image} 
                    fallbackSrc={piece.fallbackImage}
                    alt={piece.name} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Elegant subtle dark tint gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                    <span className="text-[10px] text-[#eecf94] tracking-widest uppercase font-bold mb-1">{piece.detailedSpecs.purity}</span>
                    <span className="text-xs text-white font-serif-luxury font-medium line-clamp-1">{piece.name}</span>
                    <p className="text-[10px] text-zinc-300 italic">Click for detailed carats & inquiry</p>
                  </div>

                  {/* Hot tag corner */}
                  <div className="absolute top-2 left-2 py-0.5 px-2.5 bg-[#2a231d]/90 text-[#eecf94] border border-[#dfba73]/30 text-[9px] uppercase tracking-widest">
                    {piece.id}
                  </div>
                </div>

                {/* Info and action panel */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-[#fdfbf9] space-y-3">
                  
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-[#cb9742] uppercase tracking-[0.15em]">{piece.category}</span>
                    <h3 
                      onClick={() => setSelectedPiece(piece)}
                      className="font-serif-luxury text-base font-semibold text-[#2a231d] hover:text-[#cb9742] transition-colors cursor-pointer leading-tight line-clamp-1"
                    >
                      {piece.name}
                    </h3>
                    <p className="text-xs text-[#5c4a3b] leading-relaxed line-clamp-2 font-light">
                      {piece.description}
                    </p>
                  </div>

                  {/* Specs & WhatsApp Button block */}
                  <div className="pt-3 border-t border-[#dfba73]/10 flex flex-col gap-2.5">
                    
                    <div className="flex justify-between items-center text-[10px] text-[#5c4a3b] font-medium uppercase tracking-wider">
                      <span>Certification:</span>
                      <span className="text-[#cb9742] font-semibold">{piece.detailedSpecs.certification.split('(')[0].split(' ')[0]} Verified</span>
                    </div>

                    <div className="flex gap-2">
                      <button 
                        onClick={() => setSelectedPiece(piece)}
                        className="flex-1 py-2 text-[10px] text-center border border-[#dfba73]/50 hover:bg-[#041e44] hover:text-[#faf8f5] hover:border-[#041e44] uppercase tracking-widest font-bold transition-all duration-300"
                      >
                        Inspect Spec
                      </button>
                      <button 
                        onClick={() => handleProductInquiry(piece)}
                        className="p-2 bg-[#041e44] hover:bg-[#cb9742] text-[#eecf94] hover:text-black transition-colors"
                        title="Direct WhatsApp Inquiry about this product"
                        aria-label="Direct WhatsApp Inquiry"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </button>
                    </div>

                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. REVOLVIING TESTIMONIAL OF MILAP BRIDES */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-[#020b1e] to-[#0a1e3f] border-y border-[#dfba73]/20 text-[#faf8f5] relative overflow-hidden">
        
        {/* Subtle decorative framing */}
        <div className="absolute inset-x-8 inset-y-10 border border-[#dfba73]/10 pointer-events-none hidden md:block"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[#cb9742] text-[10px] font-bold tracking-[0.4em] uppercase block">Voices of Gratitude</span>
            <h2 className="text-3xl text-white font-normal tracking-wide font-serif-luxury">The Milap Brides & Patrons</h2>
            <div className="w-12 h-px bg-[#cb9742] mx-auto my-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-[#0a1b38]/70 backdrop-blur-md p-8 border border-[#dfba73]/25 relative">
              <span className="text-5xl font-serif text-[#cb9742]/25 absolute top-2 left-4">“</span>
              <p className="text-sm italic text-[#ecdab3]/90 leading-relaxed font-light mb-6 z-10 relative">
                My family has been buying traditional jewellery from Milap Jewellers for almost twenty years. For my wedding in Mumbai, they custom crafted a Jadau chocker set based on heirloom designs my grandmother owned. The 22K hallmarked finish was pristine and their transparency regarding diamonds weight was absolute reassuring.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#cb9742]/10 border border-[#cb9742]/30 flex items-center justify-center text-[#cb9742] font-semibold text-xs">
                  AP
                </div>
                <div>
                  <h4 className="font-serif-luxury text-sm font-semibold text-white">Ananya Patel</h4>
                  <span className="text-[10px] text-[#cb9742] uppercase tracking-widest font-semibold block">Bridal Patron, Mumbai</span>
                </div>
              </div>
            </div>

            <div className="bg-[#0a1b38]/70 backdrop-blur-md p-8 border border-[#dfba73]/25 relative">
              <span className="text-5xl font-serif text-[#cb9742]/25 absolute top-2 left-4">“</span>
              <p className="text-sm italic text-[#ecdab3]/90 leading-relaxed font-light mb-6 z-10 relative">
                We booked a personalized virtual digital appointment over WhatsApp to inspect GIA certified solitaire engagement rings. The sales consultant was extremely detailed, presenting diamond certificates under a high-definition loupe camera to explain the VVS inclusions and cut. Masterful execution combined with pure integrity.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#cb9742]/10 border border-[#cb9742]/30 flex items-center justify-center text-[#cb9742] font-semibold text-xs">
                  KS
                </div>
                <div>
                  <h4 className="font-serif-luxury text-sm font-semibold text-white">Kirti Shah</h4>
                  <span className="text-[10px] text-[#cb9742] uppercase tracking-widest font-semibold block">Patron, Gandhidham</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* 9. DETAILED HELPFUL ATELIER FAQ BLOCK */}
      <section id="faq-section" className="py-20 bg-[#f3efe9] border-t border-[#dfba73]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-[#cb9742] text-[10px] font-bold tracking-[0.4em] uppercase block">Atelier Guidelines</span>
            <h2 className="text-3xl text-[#2a231d] font-normal tracking-wide font-serif-luxury">Frequently Vetted Questions</h2>
            <div className="w-12 h-px bg-[#cb9742] mx-auto my-3"></div>
          </div>

          <div className="space-y-4">
            
            <div className="bg-[#faf8f5] p-5 border border-[#dfba73]/15">
              <h3 className="font-serif-luxury font-medium text-sm sm:text-base text-[#2a231d] mb-1">How do I verify the authenticity and purity of Milap Jewellers' gold?</h3>
              <p className="text-xs sm:text-sm text-[#5c4a3b] leading-relaxed font-light">
                All gold items made at our atelier feature BIS (Bureau of Indian Standards) Hallmarks, which include three distinct marks: the BIS logo, the purity grade (e.g. 22K916), and a unique 6-digit alphanumeric HUID (Hallmark Unique Identification) code laser-etched onto the metal structure. You can instantly query this code on the government's BIS Care app before completing purchase.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-5 border border-[#dfba73]/15">
              <h3 className="font-serif-luxury font-medium text-sm sm:text-base text-[#2a231d] mb-1">What is your custom craft duration for bespoke bridal ornaments?</h3>
              <p className="text-xs sm:text-sm text-[#5c4a3b] leading-relaxed font-light">
                For completely new designs (custom CAD blueprints, manual molding, setting, and final stone inspection), it takes between 14 to 28 operational days. Catalog customization (e.g., swapping Morganite pearls for rubies) can be accommodated within 7 to 10 days of purchase confirmation.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-5 border border-[#dfba73]/15">
              <h3 className="font-serif-luxury font-medium text-sm sm:text-base text-[#2a231d] mb-1">Do you support international premium shipping?</h3>
              <p className="text-xs sm:text-sm text-[#5c4a3b] leading-relaxed font-light">
                Yes, we do secure global dispatch of jewelry across North America, the UAE, Great Britain, and Southeast Asia. We wrap our items in tamper-proof airtight security cases and dispatch them exclusively using fully transit-insured logistics networks like BVC Express or Malca-Amit.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-5 border border-[#dfba73]/15">
              <h3 className="font-serif-luxury font-medium text-sm sm:text-base text-[#2a231d] mb-1">Can I trade older family gold ornaments for new Milap creations?</h3>
              <p className="text-xs sm:text-sm text-[#5c4a3b] leading-relaxed font-light">
                Absolutely. We provide direct exchange evaluations. Your family gold is melted down in state-of-the-art crucible chambers under direct digital camera monitoring to maintain 100% transparent weight and karat accuracy before trading.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 10. SHOWROOM LOCATION & CONTACT */}
      <section id="showroom-section" className="py-20 bg-[#faf8f5] border-t border-[#dfba73]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Atelier details */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              
              <div className="space-y-4">
                <span className="text-[#cb9742] text-xs font-bold tracking-[0.3em] uppercase block">Visit Our Atelier</span>
                <h2 className="text-3xl font-normal tracking-wide font-serif-luxury text-[#2a231d]">
                  Where Heritage Meets Craft
                </h2>
                <div className="w-16 h-px bg-[#cb9742]"></div>
                <p className="text-[#5c4a3b] text-sm font-light leading-relaxed">
                  Experience our creation collections live under specialized jewelry-balanced premium lighting. We recommend arranging a prior personal booking to enjoy designated luxury lounge access and custom diamond consultations.
                </p>
              </div>

              {/* Direct Details Grid */}
              <div className="space-y-4">
                
                <div className="flex gap-4 items-start">
                  <div className="p-2 sm:p-3 bg-[#cb9742]/10 text-[#cb9742]">
                    <MapPin className="w-5 h-5 shrink-0" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#cb9742] mb-1">Primary Boutique Showroom</h4>
                    <p className="text-sm font-serif-luxury text-[#2a231d] font-medium leading-tight mb-0.5">MILAP JEWELLERS HEAD ATELIER</p>
                    <p className="text-xs text-[#5c4a3b] font-light">Milap Jewellers, Hanuman Nagar, Kandivali, Mumbai, Maharashtra 400101, India.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2 sm:p-3 bg-[#cb9742]/10 text-[#cb9742]">
                    <Clock className="w-5 h-5 shrink-0" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#cb9742] mb-1">Showroom Hours</h4>
                    <p className="text-xs text-[#5c4a3b] font-light">
                      Tuesday – Sunday: <strong className="font-semibold text-[#2a231d]">11:00 AM – 8:30 PM</strong> <br />
                      Mondays: <strong className="font-semibold text-[#cb 9742] text-[10px]">Closed for Karigar stock inspections</strong>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2 sm:p-3 bg-[#cb9742]/10 text-[#cb9742]">
                    <Mail className="w-5 h-5 shrink-0" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#cb9742] mb-1">Digital Correspondence</h4>
                    <p className="text-xs text-[#5c4a3b] font-light">
                      Email: <a href="mailto:boutique@milapjewellers.com" className="hover:text-[#cb9742] transition-colors font-medium">boutique@milapjewellers.com</a> <br />
                      Support Phone: <a href="tel:+919930839406" className="hover:text-[#cb9742] transition-colors font-semibold">+91 99308 39406</a>
                    </p>
                  </div>
                </div>

              </div>

              {/* Security certification logos */}
              <div className="pt-6 border-t border-[#dfba73]/10 flex flex-wrap gap-4 items-center justify-start text-[#cb9742]/60">
                <span className="text-[9px] uppercase tracking-widest font-semibold block mr-2 text-[#5c4a3b]">Atelier Credentials:</span>
                <span className="text-[10px] border border-[#dfba73]/30 px-2 py-1 font-mono tracking-wider text-xs">BIS HALLMARKED 916</span>
                <span className="text-[10px] border border-[#dfba73]/30 px-2 py-1 font-semibold tracking-wide font-serif text-xs">GIA SPONSOR GEMS</span>
                <span className="text-[10px] border border-[#dfba73]/30 px-2 py-1 font-light tracking-wide text-xs">IGI CERTIFICATE REGISTRY</span>
              </div>

            </div>

            {/* Custom Embedded Map Frame Card */}
            <div className="lg:col-span-7 bg-gradient-to-br from-[#041126] to-[#0d234a] text-[#faf8f5] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group border border-[#dfba73]/30 shadow-2xl">
              
              <div className="absolute top-0 right-0 py-1.5 px-4 bg-[#cb9742] text-black font-semibold text-[9px] uppercase tracking-widest">
                Our Digital Atelier Map
              </div>

              <div className="space-y-4">
                <span className="text-[#cb9742] text-[10px] tracking-widest uppercase font-bold block">Live Navigation & Valet</span>
                <h3 className="text-xl sm:text-2xl font-serif-luxury text-white">Find Our Boutique Outpost Easily</h3>
                <p className="text-xs text-[#ecdab3]/85 leading-relaxed font-light">
                  Our boutique showroom is conveniently located just off the main arterial expressways. We provide <strong>complimentary VIP valet parking</strong> and custom lounge services to make your shopping completely seamless.
                </p>
              </div>

              {/* Beautiful interactive-looking conceptual vector map */}
              <a 
                href="https://maps.app.goo.gl/ZjDQSCdafGk429s89"
                target="_blank"
                rel="noopener noreferrer"
                className="my-6 aspect-video bg-[#020712] rounded-none border border-[#dfba73]/25 overflow-hidden flex flex-col justify-between p-4 relative block group/map hover:border-[#cb9742] transition-colors cursor-pointer"
              >
                {/* Genuine Storefront background photo with custom overlay */}
                <img 
                  src="/images/showroom/milap-showroom-front.png" 
                  alt="Milap Jewellers Storefront" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover/map:opacity-95 transition-opacity duration-500 scale-102 group-hover/map:scale-105 pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Dimmable light gold-tinted backdrop gradient to ensure maximum photo visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/60 z-[1] pointer-events-none group-hover/map:via-black/25 transition-all duration-300"></div>

                {/* Dynamic radar tracking vector overlay mock */}
                <div className="absolute inset-0 opacity-15 pointer-events-none z-[2]" style={{ backgroundImage: 'radial-gradient(circle, #dfba73 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                
                <div className="flex justify-between items-start z-10 relative drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.95)]">
                  <div className="text-[10px] uppercase text-zinc-100 font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    Showroom Online
                  </div>
                  <span className="text-[9px] font-mono text-zinc-100 font-medium">LAT: 19.2131° N | LON: 72.8624° E (Kandivali, Mumbai)</span>
                </div>

                {/* Central luxurious gold marker */}
                <div className="text-center py-6 z-10 relative flex flex-col items-center justify-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
                  <div className="w-12 h-12 rounded-full bg-[#cb9742] text-black border-4 border-[#020712] shadow-xl flex items-center justify-center animate-bounce mb-2 group-hover/map:scale-110 transition-transform">
                    <Crown className="w-5 h-5 shrink-0" />
                  </div>
                  <p className="text-sm font-serif text-white uppercase tracking-widest font-bold group-hover/map:text-[#eecf94] transition-colors">MILAP JEWELLERS SHOWROOM</p>
                  <p className="text-[10px] text-zinc-100 font-normal">Click to open directions in Google Maps</p>
                </div>

                <div className="flex justify-between items-end z-10 relative text-[9px] text-zinc-100 font-mono drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.95)]">
                  <span className="font-medium">© 2026 Mapbox/OpenStreetMap</span>
                  <span className="text-emerald-300 font-semibold">Valet Activated</span>
                </div>
              </a>

              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://maps.app.goo.gl/ZjDQSCdafGk429s89"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[200px] text-center bg-[#cb9742] hover:bg-[#eecf94] text-black text-xs font-bold uppercase tracking-widest py-3.5 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <MapPin className="w-4 h-4 shrink-0" />
                  Get Directions on Google Maps
                </a>
                <button 
                  onClick={() => triggerWhatsAppRedirect("Hi Milap Jewellers! I would love to receive Google Maps landmark pins/locations and address guidelines to navigate to your physical boutique showroom!")} 
                  className="flex-1 min-w-[200px] text-center border border-[#dfba73]/40 hover:border-white text-white text-xs font-bold uppercase tracking-widest py-3.5 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 shrink-0 text-[#cb9742]" />
                  Request Landmarks on WhatsApp
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 10.5 INSTAGRAM SOCIAL ATELIER SECTION */}
      <section className="py-16 bg-gradient-to-b from-[#faf8f5] to-[#f3efe9] border-t border-[#dfba73]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#03112c] via-[#091f42] to-[#041230] text-[#faf8f5] p-8 sm:p-12 border border-[#dfba73]/30 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
            <div className="space-y-2 max-w-xl text-center md:text-left">
              <span className="text-[#cb9742] text-[10px] tracking-[0.3em] font-semibold uppercase block">Join Our Social Atelier</span>
              <h3 className="text-2xl font-serif-luxury text-white">Live Showcases on Instagram</h3>
              <p className="text-[#ecdab3]/75 text-xs sm:text-sm font-light leading-relaxed">
                Daily high-definition videos of raw antique gold handcrafting, new bridal arrivals, and behind-the-scenes karigar artistry.
              </p>
            </div>
            <a 
              href="https://www.instagram.com/milap_jwellers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-[#eecf94] hover:bg-[#cb9742] text-[#2a231d] hover:text-black flex items-center gap-2.5 font-bold uppercase text-xs tracking-widest transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
            >
              <Instagram className="w-4 h-4" />
              Follow @milap_jwellers
            </a>
          </div>
        </div>
      </section>

      {/* 11. IMMERSIVE CATALOG PIECE DETAIL MODAL */}
      {selectedPiece && (
        <div 
          onClick={() => setSelectedPiece(null)} 
          id="product-detail-modal"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 cursor-zoom-out"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="bg-[#faf8f5] border border-[#dfba73]/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-none text-[#2a231d] shadow-2xl relative p-6 sm:p-8 cursor-default"
          >
            {/* Elegant corner ornaments */}
            <span className="absolute top-1.5 left-1.5 w-3 h-3 border-t border-l border-[#dfba73]"></span>
            <span className="absolute top-1.5 right-1.5 w-3 h-3 border-t border-r border-[#dfba73]"></span>
            <span className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b border-l border-[#dfba73]"></span>
            <span className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b border-r border-[#dfba73]"></span>

            {/* Close Button */}
            <button 
              onClick={() => setSelectedPiece(null)} 
              className="absolute top-4 right-4 p-2 bg-[#041e44] text-white hover:bg-[#cb9742]/80 hover:text-black rounded-none transition-colors"
              aria-label="Close modal"
              id="close-modal-button"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch pt-2">
              
              {/* Image side */}
              <div className="md:col-span-5 flex flex-col justify-between">
                <div className="aspect-[4/5] bg-neutral-900 border border-[#dfba73]/15 overflow-hidden w-full relative">
                  <SafeImage 
                    src={selectedPiece.image} 
                    fallbackSrc={selectedPiece.fallbackImage}
                    alt={selectedPiece.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#041e44]/90 text-[#eecf94] border border-[#dfba73]/40 text-[9px] uppercase py-0.5 px-2.5 tracking-widest font-semibold">
                    {selectedPiece.id}
                  </div>
                </div>

                <div className="mt-4 bg-[#faf8f5] p-3 text-[10px] text-zinc-500 text-center uppercase tracking-widest border border-dashed border-[#dfba73]/30">
                  ✦ Premium High-Resolution Lookbooks Available on WhatsApp
                </div>
              </div>

              {/* Data specs side */}
              <div className="md:col-span-7 flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-[#cb9742] uppercase tracking-[0.25em]">{selectedPiece.category}</span>
                    <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal tracking-wide text-[#2a231d]">{selectedPiece.name}</h3>
                    <div className="w-12 h-px bg-[#cb9742] my-2"></div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5c4a3b] leading-relaxed font-light">{selectedPiece.description}</p>

                  <div className="bg-[#fcfaf7] border border-[#dfba73]/15 p-4 space-y-3.5">
                    
                    <h4 className="text-[10px] font-semibold text-[#cb9742] uppercase tracking-[0.2em] border-b border-[#dfba73]/10 pb-1.5 flex items-center gap-1.5">
                      <SlidersHorizontal className="w-3.5 h-3.5" />
                      Atelier Technical Blueprint
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-zinc-500 block text-[9px] uppercase tracking-wider font-semibold">Base Metal</span>
                        <span className="font-medium text-[#2a231d]">{selectedPiece.detailedSpecs.metal}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block text-[9px] uppercase tracking-wider font-semibold">Purity Mark</span>
                        <span className="font-semibold text-emerald-700">{selectedPiece.detailedSpecs.purity}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block text-[9px] uppercase tracking-wider font-semibold">Carat Gem Weight</span>
                        <span className="font-medium text-[#2a231d]">{selectedPiece.detailedSpecs.gemstoneWeights}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block text-[9px] uppercase tracking-wider font-semibold">Total Net Weight</span>
                        <span className="font-medium text-[#2a231d]">{selectedPiece.detailedSpecs.totalWeight}</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#dfba73]/10 text-xs">
                      <span className="text-zinc-500 block text-[9px] uppercase tracking-wider font-semibold">Certification Code</span>
                      <p className="font-semibold text-[#cb9742]">{selectedPiece.detailedSpecs.certification}</p>
                    </div>

                  </div>

                  {/* Design Context paragraph */}
                  <div className="bg-amber-100/10 border-l-2 border-[#cb9742] p-3 text-xs italic text-[#5c4a3b] leading-relaxed">
                    <strong>Artesian Ledger:</strong> &quot;{selectedPiece.designContext}&quot;
                  </div>

                </div>

                {/* Actions bottom */}
                <div className="pt-4 border-t border-[#dfba73]/10 flex flex-col sm:flex-row gap-3 items-center">
                  
                  <div className="sm:text-left text-center w-full sm:w-auto">
                    <span className="text-[9px] text-[#5c4a3b] uppercase tracking-widest block font-semibold leading-none">Curation Pricing</span>
                    <span className="font-serif text-lg font-bold text-[#cb9742] tracking-wider uppercase leading-snug">{selectedPiece.priceEstimate}</span>
                  </div>

                  <div className="flex gap-2 w-full sm:w-auto sm:flex-1 justify-end">
                    
                    <button 
                      onClick={() => handleProductInquiry(selectedPiece)} 
                      className="w-full sm:w-auto bg-[#041e44] hover:bg-[#cb9742] text-[#fdfaf4] hover:text-black text-xs font-bold uppercase tracking-widest px-6 py-3.5 transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" />
                      Inquire Spec On WhatsApp
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      )}



      {/* 12. BOTTOM RIGHT CORNER CUSTOM DETAILED WHATSAPP POPUP & BUTTON */}
      <div id="personalized-whatsapp-root" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Floating Concierge Dialog box */}
        {isWhatsAppBoxOpen && (
          <div 
            onClick={(e) => e.stopPropagation()}
            className="pointer-events-auto bg-[#fefdfb] border border-[#dfba73]/30 w-80 sm:w-96 rounded-none shadow-2xl py-5 px-6 space-y-4 text-left relative animate-fade-in gold-glow"
          >
            {/* Corner vintage trims */}
            <span className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#dfba73]"></span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-[#dfba73]"></span>
            <span className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-[#dfba73]"></span>
            <span className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[#dfba73]"></span>

            {/* Header info */}
            <div className="flex items-center gap-3.5 border-b border-[#dfba73]/10 pb-3">
              <div className="w-10 h-10 rounded-full bg-[#1c2918] text-[#dfba73] flex items-center justify-center border border-[#cb9742]">
                <Crown className="w-5 h-5 text-[#dfba73]" />
              </div>
              <div>
                <h4 className="font-serif-luxury font-bold text-sm text-[#2a231d] uppercase tracking-[0.1em] leading-normal flex items-center gap-1.5">
                  Milap Royal Concierge
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                </h4>
                <p className="text-[10px] text-[#5c4a3b] font-light leading-none">Online & Ready to Style Heirlooms</p>
              </div>
              
              <button 
                onClick={() => setIsWhatsAppBoxOpen(false)} 
                className="absolute top-3 right-3 p-1 text-zinc-500 hover:text-black"
                aria-label="Close concierge box"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-[#5c4a3b] leading-relaxed font-light text-[11px] sm:text-xs">
              Welcome to the Royal Curation Room at Milap Jewellers. Select a personalized prompt below to immediately route your specifications to our boutique advisors via WhatsApp.
            </p>

            {/* Quick CTAs */}
            <div className="space-y-2 pt-1">
              
              <button 
                onClick={() => handleConciergeQuickCta('bridal')}
                className="w-full text-left px-3 py-2.5 bg-[#faf8f5] hover:bg-[#dfba73]/15 border border-[#dfba73]/25 hover:border-[#cb9742] text-[#2a231d] text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex justify-between items-center group cursor-pointer"
              >
                <span className="flex items-center gap-2.5">
                  <Gem className="w-3.5 h-3.5 text-[#cb9742]" />
                  Bridal Lookbook Consultation
                </span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-[#cb9742]" />
              </button>

              <button 
                onClick={() => handleConciergeQuickCta('appointment')}
                className="w-full text-left px-3 py-2.5 bg-[#faf8f5] hover:bg-[#dfba73]/15 border border-[#dfba73]/25 hover:border-[#cb9742] text-[#2a231d] text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex justify-between items-center group cursor-pointer"
              >
                <span className="flex items-center gap-2.5">
                  <Clock className="w-3.5 h-3.5 text-[#cb9742]" />
                  VIP Showroom Slot Book
                </span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-[#cb9742]" />
              </button>

              <button 
                onClick={() => handleConciergeQuickCta('custom')}
                className="w-full text-left px-3 py-2.5 bg-[#faf8f5] hover:bg-[#dfba73]/15 border border-[#dfba73]/25 hover:border-[#cb9742] text-[#2a231d] text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex justify-between items-center group cursor-pointer"
              >
                <span className="flex items-center gap-2.5">
                  <Award className="w-3.5 h-3.5 text-[#cb9742]" />
                  Artisanal Karigar Custom Design
                </span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-[#cb9742]" />
              </button>

            </div>

            {/* Optional message input box */}
            <div className="space-y-1.5 pt-2 border-t border-[#dfba73]/10">
              <label className="block text-[9px] uppercase tracking-widest font-bold text-[#cb9742]" htmlFor="msg-text">
                Or type custom inquiry below
              </label>
              <div className="flex gap-2">
                <input 
                  id="msg-text"
                  type="text" 
                  value={quickContactMsg}
                  onChange={(e) => setQuickContactMsg(e.target.value)}
                  placeholder="Ask about weight, pure gold hallmark..."
                  className="flex-1 bg-white border border-[#dfba73]/30 px-3 py-1.5 text-xs text-[#2a231d] placeholder:text-zinc-400 focus:border-[#cb9742] focus:outline-none"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleConciergeQuickCta('custom-text');
                  }}
                />
                <button 
                  onClick={() => handleConciergeQuickCta('custom-text')}
                  className="bg-[#2a231d] hover:bg-[#cb9742] text-[#eecf94] hover:text-black px-3 text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center shrink-0"
                >
                  Send
                </button>
              </div>
            </div>

            {/* Note */}
            <p className="text-[9px] text-[#5c4a3b]/70 font-mono text-center flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#cb9742] inline-block" />
              100% Secure Redirect. No credentials stored on device.
            </p>

          </div>
        )}

        {/* Pulsing Trigger Circle Button with Side-Pill Label */}
        <div className="flex items-center gap-3">
          {/* Attention-grabbing text pill */}
          {!isWhatsAppBoxOpen && (
            <div 
              onClick={() => setIsWhatsAppBoxOpen(true)}
              className="pointer-events-auto cursor-pointer flex items-center gap-2.5 bg-[#03112c]/95 backdrop-blur-md hover:bg-[#0a224c]/95 text-white border border-[#dfba73]/45 px-4 py-2.5 rounded-full shadow-[0_4px_20px_rgba(3,17,44,0.3)] transition-all duration-300 group hover:scale-[1.03]"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#cb9742] animate-pulse"></div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase font-bold tracking-[0.12em] text-[#eed6a4] leading-tight">Hanuman Nagar Atelier</span>
                <span className="text-[9px] text-zinc-200 font-medium leading-none">VIP WhatsApp Support Online</span>
              </div>
            </div>
          )}

          <button 
            onClick={() => setIsWhatsAppBoxOpen(!isWhatsAppBoxOpen)}
            id="whatsapp-trigger-bubble"
            className="pointer-events-auto h-16 w-16 bg-gradient-to-tr from-[#02120b] via-[#103823] to-[#051c44] hover:from-[#052115] hover:via-[#164d30] hover:to-[#0a2c66] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(16,56,35,0.4)] relative border-2 border-[#dfba73] cursor-pointer group active:scale-95 transition-all duration-300 hover:scale-105"
            title="Milap Royal WhatsApp Concierge Desk"
            aria-label="Toggle WhatsApp Concierge Drawer"
          >
            {/* Pulsing gold-emerald ring visual */}
            <span className="absolute -inset-1 rounded-full border border-[#cb9742]/70 animate-ping opacity-45 pointer-events-none"></span>
            
            {isWhatsAppBoxOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <svg 
                className="w-8 h-8 text-[#faf8f5] group-hover:scale-110 transition-transform duration-300"
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  fill="currentColor"
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.705 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" 
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* 13. BOUTIQUE FOOTER */}
      <footer id="website-footer" className="bg-[#010a1b] text-[#faf8f5] border-t border-[#dfba73]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 text-sm">
            
            {/* Branding Column */}
            <div className="lg:col-span-5 space-y-4">
              <a href="#hero-section" className="flex items-center gap-4 group">
                <MJLogoIcon className="w-16 h-16 sm:w-20 sm:h-20 overflow-visible transition-all duration-300 group-hover:scale-105" />
                <div className="flex flex-col select-none">
                  <span className="bg-gradient-to-r from-[#9e7028] via-[#eecf94] to-[#cb9742] bg-clip-text text-transparent font-serif-luxury text-2xl sm:text-3xl font-black tracking-[0.25em] leading-none uppercase">MILAP</span>
                  <span className="text-[#cb9742] text-[10px] sm:text-[11.5px] tracking-[0.52em] font-sans font-black leading-none uppercase mt-2 block">JEWELLERS</span>
                </div>
              </a>
              <p className="text-[#ecdab3]/75 leading-relaxed font-light text-xs sm:text-sm max-w-sm pt-2">
                Handcrafting memories, diamonds, and traditional heavy gold bridal sets for families across generations. Experience pure 22KT certified integrity.
              </p>
              <div className="flex gap-4 pt-4 text-zinc-400">
                <a 
                  href="https://www.instagram.com/milap_jwellers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#cb9742] transition-colors"
                  aria-label="Instagram Page Link"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="tel:+919930839406" 
                  className="hover:text-[#cb9742] transition-colors"
                  aria-label="VIP Support Hotline Call"
                >
                  <Phone className="w-5 h-5" />
                </a> /
                <span className="text-[#cb9742] text-[10px] tracking-widest font-semibold">ESTABLISHED 1993</span>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-[#cb9742] text-xs font-bold uppercase tracking-widest block font-serif-luxury border-b border-[#dfba73]/10 pb-1.5">Atelier Curations</h4>
              <ul className="space-y-2 text-xs font-light text-[#ecdab3]/80">
                <li><a href="#catalog-section" onClick={() => setActiveTab('Bridal Masterpieces')} className="hover:text-[#cb9742] transition-all">Bridal Masterpieces</a></li>
                <li><a href="#catalog-section" onClick={() => setActiveTab('Gold & Antique')} className="hover:text-[#cb9742] transition-all">Antique Gold Curations</a></li>
                <li><a href="#catalog-section" onClick={() => setActiveTab('Silver')} className="hover:text-[#cb9742] transition-all">Sterling Silver Curations</a></li>
                <li><a href="#showroom-section" className="hover:text-[#cb9742] transition-all">Official Showroom Outposts</a></li>
              </ul>
            </div>

            {/* Outpost Locations Column */}
            <div className="lg:col-span-4 space-y-3 pb-2 text-xs">
              <h4 className="text-[#cb9742] text-xs font-bold uppercase tracking-widest block font-serif-luxury border-b border-[#dfba73]/10 pb-1.5">Showroom Outposts</h4>
              <p className="text-[#ecdab3]/80 leading-relaxed font-light">
                <strong className="font-semibold text-white">Mumbai Outpost:</strong> <br />
                Milap Jewellers, Hanuman Nagar, Kandivali, Mumbai, Maharashtra 400101, India.
              </p>
              <p className="text-[#ecdab3]/80 leading-relaxed font-light">
                <strong className="font-semibold text-white">Gandhidham Outpost:</strong> <br />
                Milap Plaza, Main High Street, Sector 12, Gandhidham, Gujarat, India.
              </p>
              <div className="pt-2">
                <span className="text-[#cb9742] font-semibold tracking-wider font-mono uppercase text-[9px] block">BIS LICENSE NUMBER:</span>
                <span className="text-zinc-500 font-mono text-[10px]">MLP-916-IND-83719</span>
              </div>
            </div>

          </div>

          {/* Bottom Copyright Strip */}
          <div className="mt-12 pt-8 border-t border-[#dfba73]/10 text-center flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs text-zinc-500">
            <p>© 2026 Milap Jewellers. All Historic Designs and Blueprints Reserved. Crafted for Absolute Purity.</p>
            <div className="flex gap-4">
              <a href="#announcement-bar" className="hover:text-[#cb9742] transition-colors">Purity Regulations</a>
              <a href="#announcement-bar" className="hover:text-[#cb9742] transition-colors">Privacy Charter</a>
              <a href="#announcement-bar" className="hover:text-[#cb9742] transition-colors">VIP Terms</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
