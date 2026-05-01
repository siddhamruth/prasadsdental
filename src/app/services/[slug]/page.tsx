import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const services: Record<string, {
  title: string;
  metaTitle: string;
  metaDesc: string;
  heroDesc: string;
  content: string[];
  benefits: string[];
  faqQ: string;
  faqA: string;
}> = {
  "smile-makeover": {
    title: "Smile Makeover",
    metaTitle: "Smile Makeover in Guntur | 7-Day Transformation | Prasad's Dental",
    metaDesc: "Get a complete smile makeover in Guntur in just 7 days. Dr. Prasad combines veneers, whitening, and bonding for natural, stunning results. Call 09398615727.",
    heroDesc: "Transform your entire smile in as little as 7 days with our comprehensive smile correction program combining the latest aesthetic dentistry techniques.",
    content: [
      "A smile makeover at Prasad's Dental Clinic is a personalized combination of cosmetic dental treatments designed to dramatically improve the appearance of your smile. Dr. Prasad evaluates your facial structure, skin tone, lip line, and dental proportions to create a smile that's uniquely yours.",
      "Our smile makeover process typically involves digital smile design, where you can preview your new smile before treatment begins. Depending on your needs, we may combine porcelain veneers, teeth whitening, dental bonding, gum contouring, and orthodontic adjustments.",
      "What sets our smile makeovers apart in Guntur is the speed and comfort. Most transformations are completed within 5-7 days, and every procedure is performed using painless techniques. Whether you have stained, chipped, gapped, or misaligned teeth, we can craft a beautiful, natural-looking result.",
    ],
    benefits: [
      "Complete smile transformation in 5-7 days",
      "Digital preview before treatment starts",
      "100% painless procedures",
      "Natural-looking, customized results",
      "Combines multiple treatments for best outcome",
      "Affordable payment options available",
    ],
    faqQ: "How much does a smile makeover cost in Guntur?",
    faqA: "Smile makeover costs at Prasad's Dental Clinic in Guntur range from ₹5,000 for basic whitening and bonding to ₹1,50,000+ for comprehensive veneer-based transformations. We offer a free consultation where Dr. Prasad provides a detailed, personalized cost estimate. EMI options available.",
  },
  "painless-root-canal": {
    title: "Painless Root Canal",
    metaTitle: "Painless Root Canal in Guntur | Zero Pain Guarantee | Prasad's Dental",
    metaDesc: "Get a completely painless root canal treatment in Guntur. Modern anesthesia, advanced equipment, and gentle care by Dr. Prasad. Call 09398615727.",
    heroDesc: "Save your natural tooth with our advanced painless root canal treatment. Modern anesthesia and gentle techniques ensure you feel absolutely nothing.",
    content: [
      "Root canal treatment has an undeserved reputation for being painful. At Prasad's Dental Clinic in Guntur, we've completely eliminated the discomfort using modern local anesthesia, rotary endodontic instruments, and a gentle approach that prioritizes your comfort.",
      "The procedure involves removing infected pulp tissue from inside your tooth, cleaning and disinfecting the canals, and sealing them to prevent reinfection. With our advanced techniques, the entire process is no more uncomfortable than getting a simple filling.",
      "Dr. Prasad has performed hundreds of successful root canals in Guntur, saving teeth that would otherwise need extraction. We use digital X-rays for precise diagnosis, apex locators for accurate canal measurement, and biocompatible filling materials for long-lasting results.",
    ],
    benefits: [
      "100% painless — modern anesthesia techniques",
      "Save your natural tooth instead of extraction",
      "Single-visit treatment available",
      "Digital X-ray guided precision",
      "High success rate with modern equipment",
      "Post-treatment crown for full restoration",
    ],
    faqQ: "Is root canal really painless at your clinic?",
    faqA: "Root canal treatment at our Guntur clinic costs between ₹3,000 for a single-canal front tooth and ₹8,000 for a multi-canal molar. Post-treatment crown (recommended) costs ₹3,000-₹15,000 depending on material (PFM or Zirconia). Free consultation available.",
  },
  "dental-implants": {
    title: "Dental Implants",
    metaTitle: "Dental Implants in Guntur | Permanent Tooth Replacement | Prasad's Dental",
    metaDesc: "Premium dental implants in Guntur by Dr. Prasad. Titanium implants with natural-looking crowns. Permanent solution for missing teeth. Call 09398615727.",
    heroDesc: "Replace missing teeth permanently with precision-placed titanium implants that look, feel, and function exactly like your natural teeth.",
    content: [
      "Dental implants are the gold standard for replacing missing teeth. At Prasad's Dental Clinic in Guntur, we place titanium implant posts directly into your jawbone, where they fuse naturally to create a permanent, rock-solid foundation for your new teeth.",
      "Unlike dentures that can slip or bridges that require grinding adjacent teeth, implants are standalone replacements that preserve your jawbone and surrounding teeth. Each implant is topped with a custom-crafted porcelain crown that matches your natural teeth perfectly.",
      "Dr. Prasad uses guided implant surgery with 3D imaging for precise placement, ensuring optimal results and faster healing. Whether you need a single tooth replaced or full-mouth rehabilitation with multiple implants, we deliver lasting, beautiful results.",
    ],
    benefits: [
      "Permanent solution — implants last a lifetime",
      "Natural look and feel",
      "Preserves jawbone and facial structure",
      "No damage to adjacent teeth",
      "Guided surgery for precision placement",
      "Full mouth implant options available",
    ],
    faqQ: "How much do dental implants cost in Guntur?",
    faqA: "Single dental implants at Prasad's Dental Clinic start from ₹20,000 including the implant post. With a zirconia crown, the total ranges from ₹30,000-₹50,000. Full mouth rehabilitation (All-on-4/All-on-6) ranges from ₹2,00,000-₹4,50,000. Free implant consultation available. EMI options offered.",
  },
  "teeth-whitening": {
    title: "Instant Teeth Whitening",
    metaTitle: "Teeth Whitening in Guntur | Instant Results | Prasad's Dental Clinic",
    metaDesc: "Professional teeth whitening in Guntur — brighten your smile by several shades in one session. Safe, instant, painless. At Prasad's Dental Clinic. Call 09398615727.",
    heroDesc: "Reverse years of staining in a single painless session. Our professional in-office whitening delivers dramatic, instant results that DIY kits can't match.",
    content: [
      "Professional teeth whitening at Prasad's Dental Clinic in Guntur uses advanced whitening systems that are far more effective and safer than over-the-counter products. In just one session lasting about 45 minutes, your teeth can be brightened by 3-8 shades.",
      "Our whitening process is carefully controlled by Dr. Prasad to protect your enamel and gums while delivering maximum brightness. We use professional-grade whitening gels activated by specialized light to break down deep stains from coffee, tea, wine, tobacco, and aging.",
      "The results are instant and dramatic. You'll walk out of our Guntur clinic with a visibly brighter, more confident smile. We also provide take-home maintenance kits to keep your results lasting longer.",
    ],
    benefits: [
      "Instant visible results in one session",
      "3-8 shades brighter",
      "Safe, enamel-friendly process",
      "Professional-grade results",
      "Take-home maintenance kit included",
      "No sensitivity with our gentle technique",
    ],
    faqQ: "How long does teeth whitening last?",
    faqA: "Professional in-office teeth whitening at our Guntur clinic costs between ₹3,000 and ₹10,000 depending on the whitening system used. Take-home whitening kits are available from ₹1,500. Results last 6-12 months with proper care. Book a free consultation.",
  },
  "porcelain-veneers": {
    title: "Porcelain Veneers",
    metaTitle: "Porcelain Veneers in Guntur | Natural Smile Design | Prasad's Dental",
    metaDesc: "Transform your smile with porcelain veneers in Guntur. Ultra-thin, natural-looking, and custom-designed by Dr. Prasad. Call 09398615727 for consultation.",
    heroDesc: "Ultra-thin porcelain shells custom-crafted to transform the shape, color, and alignment of your teeth for a flawless, natural-looking smile.",
    content: [
      "Porcelain veneers are one of the most popular cosmetic dentistry treatments at our Guntur clinic. These ultra-thin shells of dental porcelain are bonded to the front surface of your teeth, instantly correcting imperfections like chips, cracks, gaps, stains, and minor misalignment.",
      "Dr. Prasad uses digital smile design technology to plan your veneer treatment, so you can see your expected results before we begin. Each veneer is custom-crafted in a dental lab to match your desired shade, shape, and size, ensuring results that look completely natural.",
      "The procedure requires minimal tooth preparation — often just 0.3-0.5mm of enamel — making it one of the most conservative cosmetic treatments available. Most patients receive their final veneers within 5-7 days.",
    ],
    benefits: [
      "Instant correction of chips, gaps, and stains",
      "Ultra-thin — minimal tooth preparation",
      "Custom shade and shape matching",
      "Stain-resistant porcelain material",
      "Results in 5-7 days",
      "10-15 year lifespan with proper care",
    ],
    faqQ: "How long do porcelain veneers last?",
    faqA: "Porcelain veneers at Prasad's Dental Clinic in Guntur cost ₹8,000-₹25,000 per tooth, depending on the porcelain type and complexity. A full smile makeover with 6-8 veneers typically ranges from ₹60,000-₹2,00,000. Free consultation with digital smile preview included.",
  },
  "invisible-aligners": {
    title: "Invisible Aligners",
    metaTitle: "Invisible Aligners in Guntur | Clear Braces Alternative | Prasad's Dental",
    metaDesc: "Straighten teeth discreetly with invisible aligners in Guntur. No metal braces, no discomfort. Custom treatment by Dr. Prasad. Call 09398615727.",
    heroDesc: "Straighten your teeth invisibly with custom clear aligners. No metal wires, no brackets — just a clear, comfortable path to a perfectly aligned smile.",
    content: [
      "Invisible aligners are the modern alternative to traditional metal braces. At Prasad's Dental Clinic in Guntur, we use clear, custom-made aligner trays that gradually move your teeth into perfect alignment without anyone noticing you're wearing them.",
      "Your treatment begins with a 3D digital scan of your teeth, which we use to create a precise treatment plan showing exactly how your teeth will move at each stage. You'll receive a series of custom aligners, each worn for about two weeks before moving to the next set.",
      "Aligners are removable for eating, drinking, and brushing, making them far more convenient than fixed braces. Most treatments are completed within 6-18 months, depending on the complexity of your case.",
    ],
    benefits: [
      "Nearly invisible — no one notices them",
      "Removable for eating and brushing",
      "Comfortable — no metal irritation",
      "3D planned treatment for predictable results",
      "Typically 6-18 months treatment time",
      "Fewer clinic visits than traditional braces",
    ],
    faqQ: "Are invisible aligners effective for crooked teeth?",
    faqA: "Clear aligner treatment in Guntur costs between ₹80,000 and ₹2,50,000 depending on case complexity and aligner brand. Treatment duration is typically 6-18 months. We offer a free 3D smile simulation during consultation. EMI plans available.",
  },
  "dental-crowns": {
    title: "Dental Crowns & Bridges",
    metaTitle: "Dental Crowns & Bridges in Guntur | Prasad's Dental Clinic",
    metaDesc: "Restore damaged or missing teeth with custom dental crowns and bridges in Guntur. Natural-looking, durable results by Dr. Prasad. Call 09398615727.",
    heroDesc: "Custom-crafted crowns and bridges that restore damaged or missing teeth with natural-looking, durable results built to last.",
    content: [
      "Dental crowns and bridges are reliable solutions for restoring teeth that are damaged, decayed, or missing. At Prasad's Dental Clinic, we use premium materials including zirconia and porcelain to create restorations that look and function like natural teeth.",
      "A dental crown completely covers a weakened tooth, restoring its strength, shape, and appearance. Bridges span the gap left by missing teeth, using adjacent teeth as anchors. Both are permanently cemented for stability and comfort.",
      "We use digital impressions for a precise fit, eliminating the discomfort of traditional impression putty. Most crown and bridge treatments are completed within 3-5 days at our Guntur clinic.",
    ],
    benefits: ["Premium zirconia and porcelain materials", "Natural look and comfortable fit", "Digital impressions — no messy putty", "Completed in 3-5 days", "Strengthens and protects damaged teeth", "Long-lasting — 10-15 years with care"],
    faqQ: "What is the difference between a crown and a bridge?",
    faqA: "Dental crown costs at our Guntur clinic: PFM (porcelain-fused-to-metal) crowns from ₹3,000, ceramic crowns from ₹6,000, zirconia crowns from ₹8,000-₹15,000. Bridges are priced per unit. Free consultation to determine the best option for you.",
  },
  "kids-dentistry": {
    title: "Kids Dentistry",
    metaTitle: "Kids Dentist in Guntur | Gentle Pediatric Dental Care | Prasad's Dental",
    metaDesc: "Gentle, child-friendly dental care in Guntur. Building healthy smiles from childhood. Fun, pain-free visits at Prasad's Dental Clinic. Call 09398615727.",
    heroDesc: "Gentle, fun dental care designed to build healthy habits early. We make dental visits enjoyable so your child grows up loving their smile.",
    content: [
      "Children deserve a dental experience that's positive, gentle, and even fun. At Prasad's Dental Clinic in Guntur, our pediatric dental care is designed to make every child feel comfortable and safe while building lifelong oral health habits.",
      "Dr. Prasad uses child-friendly communication, gentle techniques, and a warm clinic environment to ensure stress-free visits. We offer preventive care including fluoride treatments, dental sealants, and cavity prevention education for both children and parents.",
      "For children who need treatment, we use painless techniques and, when necessary, conscious sedation to ensure complete comfort. Early dental care prevents problems later — we recommend first visits by age 1 or when the first tooth appears.",
    ],
    benefits: ["Gentle, child-friendly approach", "Painless treatments with modern techniques", "Preventive care — fluoride and sealants", "Education for children and parents", "Fun, stress-free clinic environment", "First visit recommended by age 1"],
    faqQ: "At what age should my child first visit the dentist?",
    faqA: "We recommend first dental visits by age 1 or when the first tooth appears. Pediatric checkups and fluoride treatment start from ₹500. Sealants, fillings, and other treatments are priced affordably. We focus on making dental visits fun and stress-free for children.",
  },
  "braces": {
    title: "Clear Braces",
    metaTitle: "Clear Braces in Guntur | Modern Orthodontic Treatment | Prasad's Dental",
    metaDesc: "Get clear braces in Guntur for effective teeth alignment with minimal visibility. Expert orthodontic care by Dr. Prasad. Call 09398615727.",
    heroDesc: "Modern clear braces for effective teeth alignment with minimal visibility. Straighten your smile confidently.",
    content: [
      "Clear braces offer the effectiveness of traditional orthodontic treatment with significantly improved aesthetics. At Prasad's Dental Clinic in Guntur, we use tooth-colored ceramic brackets and wires that blend naturally with your teeth.",
      "Clear braces work the same way as metal braces — applying gentle, consistent pressure to move teeth into their correct positions. The key difference is visibility: clear braces are much less noticeable, making them ideal for adults and image-conscious teenagers.",
      "Dr. Prasad creates customized treatment plans using digital orthodontic planning to ensure efficient, predictable tooth movement. Regular adjustment visits are scheduled every 4-6 weeks, with most treatments completing in 12-24 months.",
    ],
    benefits: ["Tooth-colored — minimal visibility", "Effective for complex cases", "Digital treatment planning", "Regular progress monitoring", "Suitable for all ages", "12-24 month typical treatment"],
    faqQ: "Are clear braces as effective as metal braces?",
    faqA: "Clear/ceramic braces at Prasad's Dental Clinic in Guntur cost ₹35,000-₹70,000 for full treatment. Metal braces are available from ₹25,000. Treatment duration is typically 12-24 months. Monthly adjustment visits are included. EMI options available.",
  },
  "teeth-cleaning": {
    title: "Teeth Cleaning & Polishing",
    metaTitle: "Teeth Cleaning in Guntur | Professional Dental Cleaning | Prasad's Dental",
    metaDesc: "Professional teeth cleaning and polishing in Guntur. Remove plaque, tartar, and stains. Prevent gum disease. At Prasad's Dental Clinic. Call 09398615727.",
    heroDesc: "Professional deep cleaning to remove plaque, tartar, and stubborn stains. Essential for healthy gums and a fresh, bright smile.",
    content: [
      "Regular professional teeth cleaning is essential for maintaining oral health and preventing gum disease. At Prasad's Dental Clinic in Guntur, our thorough cleaning process removes plaque and tartar that brushing alone cannot reach.",
      "Our cleaning procedure includes ultrasonic scaling to remove hardened tartar, hand scaling for precision cleaning below the gumline, and polishing with professional-grade paste to remove surface stains and smooth tooth surfaces.",
      "We recommend professional cleaning every 6 months. Regular cleanings prevent cavities, gum disease, and bad breath while keeping your smile looking its best. Each session takes about 30-45 minutes and is completely painless.",
    ],
    benefits: ["Removes plaque and tartar buildup", "Prevents gum disease and cavities", "Polishing removes surface stains", "Painless 30-45 minute session", "Recommended every 6 months", "Fresher breath and healthier gums"],
    faqQ: "How often should I get professional cleaning?",
    faqA: "Professional teeth cleaning and polishing at our Guntur clinic costs ₹500-₹2,000 per session. Deep cleaning (scaling and root planing) for gum disease may cost more. We recommend professional cleaning every 6 months.",
  },
  "laser-gum-treatment": {
    title: "Laser Gum Treatment",
    metaTitle: "Laser Gum Treatment in Guntur | Minimally Invasive | Prasad's Dental",
    metaDesc: "Advanced laser gum treatment in Guntur for gum disease, reshaping, and cosmetic corrections. Minimally invasive, fast healing. Call 09398615727.",
    heroDesc: "Advanced laser therapy for gum disease treatment, reshaping, and cosmetic corrections with minimal discomfort and faster healing.",
    content: [
      "Laser gum treatment represents the most advanced approach to treating gum disease and performing cosmetic gum procedures. At our Guntur clinic, we use dental lasers for precise, minimally invasive gum treatments.",
      "Laser therapy offers significant advantages over traditional gum surgery: less bleeding, reduced swelling, faster healing, and minimal discomfort. The laser precisely targets diseased tissue while preserving healthy gum tissue.",
      "We use laser treatment for gum disease (periodontitis), gummy smile correction, crown lengthening, and frenectomy procedures. Most patients experience minimal downtime and can return to normal activities the same day.",
    ],
    benefits: ["Minimally invasive — no scalpel", "Less bleeding and swelling", "Faster healing than traditional surgery", "Precise treatment targeting", "Minimal discomfort", "Same-day return to activities"],
    faqQ: "Is laser gum treatment painful?",
    faqA: "Laser gum treatment costs vary based on the extent of gum disease and area treated, typically ranging from ₹3,000-₹15,000. Cosmetic gum contouring for gummy smiles starts from ₹5,000. Free gum health assessment during consultation.",
  },
  "wisdom-tooth-extraction": {
    title: "Wisdom Tooth Extraction",
    metaTitle: "Wisdom Tooth Removal in Guntur | Safe & Painless | Prasad's Dental",
    metaDesc: "Safe, painless wisdom tooth extraction in Guntur. Expert surgical removal of impacted wisdom teeth by Dr. Prasad. Call 09398615727.",
    heroDesc: "Safe, efficient removal of problematic wisdom teeth using modern surgical techniques with complete pain management.",
    content: [
      "Wisdom teeth often cause problems when they don't have enough room to emerge properly. At Prasad's Dental Clinic in Guntur, we perform safe, painless wisdom tooth extractions using modern surgical techniques and advanced anesthesia.",
      "Impacted or partially erupted wisdom teeth can cause pain, infection, damage to adjacent teeth, and cyst formation. Dr. Prasad uses digital X-rays and sometimes CBCT scans to precisely plan the extraction for optimal safety.",
      "Our extractions are performed under local anesthesia with the option of conscious sedation for anxious patients. Most patients recover within 3-5 days with minimal discomfort when following our post-operative care instructions.",
    ],
    benefits: ["Painless extraction under anesthesia", "Digital X-ray guided procedure", "Sedation option for anxious patients", "Quick 3-5 day recovery", "Prevents future dental problems", "Post-operative care guidance"],
    faqQ: "How long is the recovery after wisdom tooth removal?",
    faqA: "Simple wisdom tooth extraction at our Guntur clinic costs ₹1,000-₹2,500. Surgical extraction of impacted wisdom teeth ranges from ₹3,000-₹8,000 depending on complexity. Includes post-operative care guidance. Same-day evaluation available.",
  },
  "cavity-fillings": {
    title: "Cavity Fillings",
    metaTitle: "Tooth Fillings in Guntur | Tooth-Colored Composite | Prasad's Dental",
    metaDesc: "Seamless tooth-colored cavity fillings in Guntur. Preserve natural tooth structure with composite fillings. At Prasad's Dental Clinic. Call 09398615727.",
    heroDesc: "Tooth-colored composite fillings that restore cavities seamlessly while preserving maximum natural tooth structure.",
    content: [
      "When caught early, cavities can be treated quickly and conservatively with tooth-colored composite fillings. At Prasad's Dental Clinic in Guntur, we use modern composite materials that match your natural tooth color perfectly.",
      "Unlike traditional silver amalgam fillings, our tooth-colored composites bond directly to your tooth structure, providing better support and a more natural appearance. The filling is virtually invisible — no one will know you had dental work done.",
      "The procedure is completely painless with modern anesthesia and typically completed in a single 20-30 minute visit. We focus on minimally invasive dentistry, removing only the decay while preserving as much healthy tooth structure as possible.",
    ],
    benefits: ["Tooth-colored — virtually invisible", "Preserves natural tooth structure", "Single 20-30 minute visit", "Painless with modern anesthesia", "Strong bonding to tooth", "Mercury-free and biocompatible"],
    faqQ: "Are tooth-colored fillings as durable as silver ones?",
    faqA: "Tooth-colored composite fillings at Prasad's Dental Clinic cost ₹500-₹3,000 per tooth depending on cavity size and location. The procedure takes just 20-30 minutes. We use mercury-free, biocompatible materials.",
  },
  "tooth-bonding": {
    title: "Tooth Bonding",
    metaTitle: "Dental Bonding in Guntur | Fix Chips & Gaps | Prasad's Dental Clinic",
    metaDesc: "Quick cosmetic dental bonding in Guntur to fix chips, cracks, gaps, and discoloration. Same-day results by Dr. Prasad. Call 09398615727.",
    heroDesc: "Quick, affordable cosmetic fix for chips, cracks, gaps, and discoloration using tooth-colored composite bonding material.",
    content: [
      "Dental bonding is one of the quickest and most affordable cosmetic dental treatments available. At our Guntur clinic, we use tooth-colored composite resin to repair imperfections and enhance your smile in a single visit.",
      "Bonding can fix a variety of cosmetic issues: chipped or cracked teeth, small gaps between teeth, misshapen teeth, discoloration that doesn't respond to whitening, and exposed tooth roots from gum recession.",
      "The procedure requires no anesthesia in most cases and can be completed in 30-60 minutes per tooth. Dr. Prasad sculpts and polishes the bonding material to perfectly match your natural teeth for seamless results.",
    ],
    benefits: ["Same-day results in one visit", "No anesthesia needed usually", "Affordable cosmetic solution", "Natural tooth-color matching", "30-60 minutes per tooth", "Preserves natural tooth structure"],
    faqQ: "How long does dental bonding last?",
    faqA: "Dental bonding at our clinic costs ₹1,500-₹5,000 per tooth. Most bonding procedures are completed in a single 30-60 minute visit without anesthesia. Affordable alternative to veneers for minor cosmetic improvements.",
  },
  "dentures": {
    title: "Dentures",
    metaTitle: "Dentures in Guntur | Custom-Fitted & Natural Looking | Prasad's Dental",
    metaDesc: "Custom-fitted dentures in Guntur for comfortable, natural-looking tooth replacement. Full and partial options by Dr. Prasad. Call 09398615727.",
    heroDesc: "Custom-fitted removable dentures crafted for comfort, natural appearance, and reliable function in daily life.",
    content: [
      "Modern dentures are far more comfortable and natural-looking than you might expect. At Prasad's Dental Clinic in Guntur, we create custom-fitted dentures using high-quality materials that restore your smile and confidence.",
      "We offer both full dentures for patients missing all teeth and partial dentures for those missing several teeth. Each denture is custom-made from precise impressions of your mouth, ensuring a comfortable, secure fit.",
      "Our denture materials — including high-quality acrylic, flexible nylon, and chrome-cobalt frameworks — are selected based on your specific needs and budget. We also offer implant-supported dentures for enhanced stability.",
    ],
    benefits: ["Custom-fitted for comfort", "Natural-looking appearance", "Full and partial options", "Multiple material choices", "Implant-supported option available", "Easy maintenance and care"],
    faqQ: "How long does it take to get dentures?",
    faqA: "Full dentures at Prasad's Dental Clinic in Guntur start from ₹8,000. Flexible/BPS dentures range from ₹15,000-₹30,000. Partial dentures (acrylic) from ₹5,000. Cast partial dentures from ₹12,000. Implant-supported dentures available for enhanced stability.",
  },
  "sedation-dentistry": {
    title: "Sedation Dentistry",
    metaTitle: "Sedation Dentistry in Guntur | Anxiety-Free Treatment | Prasad's Dental",
    metaDesc: "Overcome dental anxiety with sedation dentistry in Guntur. Laughing gas sedation for comfortable, stress-free dental treatment. Call 09398615727.",
    heroDesc: "Overcome dental anxiety with gentle sedation. Stay relaxed and comfortable throughout your treatment while remaining fully conscious.",
    content: [
      "Dental anxiety is real, and we understand it. At Prasad's Dental Clinic in Guntur, we offer conscious sedation using nitrous oxide (laughing gas) to help anxious patients receive the dental care they need in complete comfort.",
      "Nitrous oxide sedation is safe, effective, and wears off quickly. You breathe it through a small mask, feel deeply relaxed within minutes, and can respond to instructions throughout the procedure. After treatment, the effects dissipate rapidly so you can drive home.",
      "Sedation dentistry is ideal for patients with dental phobia, sensitive gag reflex, difficulty sitting still for long periods, or those undergoing lengthy procedures. Dr. Prasad monitors your comfort level throughout.",
    ],
    benefits: ["Safe nitrous oxide sedation", "Remain conscious and responsive", "Effects wear off quickly", "Ideal for anxious patients", "Can be used for any procedure", "No needles for sedation delivery"],
    faqQ: "Is sedation dentistry safe?",
    faqA: "Nitrous oxide (laughing gas) sedation is available at our Guntur clinic as an add-on to any procedure. The additional cost is typically ₹1,000-₹3,000 per session. It's ideal for anxious patients and is completely safe with no lingering effects.",
  },
  "full-mouth-rehabilitation": {
    title: "Full Mouth Rehabilitation",
    metaTitle: "Full Mouth Rehabilitation in Guntur | Complete Dental Restoration | Prasad's",
    metaDesc: "Comprehensive full mouth rehabilitation in Guntur combining implants, crowns, veneers, and bite correction. Complete restoration by Dr. Prasad. Call 09398615727.",
    heroDesc: "Comprehensive restoration of your entire mouth combining implants, crowns, veneers, and bite correction for a complete dental transformation.",
    content: [
      "Full mouth rehabilitation is a comprehensive treatment program that restores all your teeth to optimal function, health, and aesthetics. At Prasad's Dental Clinic in Guntur, Dr. Prasad designs customized rehabilitation plans for patients with extensive dental problems.",
      "This treatment is ideal for patients with multiple missing teeth, severely worn or damaged teeth, bite problems, or those who have neglected dental care for years. We combine multiple treatments — implants, crowns, bridges, veneers, and orthodontics — into a coordinated plan.",
      "Dr. Prasad begins with a thorough evaluation including digital X-rays, bite analysis, and photographs. A phased treatment plan is created to systematically restore each area of your mouth, with each phase building on the previous one.",
    ],
    benefits: ["Comprehensive — addresses all dental issues", "Customized phased treatment plan", "Combines multiple specialties", "Restores function and aesthetics", "Improves bite and jaw alignment", "Life-changing results"],
    faqQ: "How long does full mouth rehabilitation take?",
    faqA: "Full mouth rehabilitation costs vary significantly based on the combination of treatments needed — typically ranging from ₹1,00,000 to ₹5,00,000+. Dr. Prasad provides a comprehensive evaluation and phased treatment plan during a free consultation. EMI options available.",
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDesc,
    alternates: { canonical: `https://prasadsdental.com/services/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) notFound();

  return (
    <main className="bg-[var(--surface)] text-[var(--ink)]">
      {/* Hero */}
      <section className="bg-[var(--ink)] px-6 py-24 text-white lg:px-10">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-sm text-white/60 transition hover:text-white"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
            All Services
          </Link>
          <h1 className="mt-6 font-serif-display text-5xl tracking-[-0.04em] sm:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            {service.heroDesc}
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-[var(--accent)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--accent-dark)]"
          >
            Book Appointment
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="font-serif-display text-3xl tracking-[-0.04em] text-[var(--ink)] sm:text-4xl">
              {service.title} in Guntur
            </h2>
            {service.content.map((p, i) => (
              <p key={i} className="mt-6 text-lg leading-8 text-[var(--ink-soft)]">
                {p}
              </p>
            ))}
          </div>

          <div className="space-y-8">
            {/* Benefits */}
            <div className="rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_15px_40px_rgba(63,47,31,0.06)]">
              <h3 className="text-lg font-semibold text-[var(--ink)]">Key Benefits</h3>
              <ul className="mt-4 space-y-3">
                {service.benefits.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-[var(--ink-soft)]">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ */}
            <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--cream)] p-8">
              <h3 className="text-lg font-semibold text-[var(--ink)]">Common Question</h3>
              <p className="mt-3 font-medium text-[var(--ink)]">{service.faqQ}</p>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{service.faqA}</p>
            </div>

            {/* CTA */}
            <div className="rounded-[2rem] bg-[var(--accent)] p-8 text-white">
              <h3 className="text-lg font-semibold">Ready to Get Started?</h3>
              <p className="mt-2 text-sm text-white/80">
                Call us at <a href="tel:09398615727" className="font-bold underline">09398615727</a> or book online.
              </p>
              <a
                href="/contact"
                className="mt-4 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)] transition hover:-translate-y-0.5"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby areas for local SEO */}
      <section className="border-t border-[var(--line)] bg-white px-6 py-12 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm text-[var(--muted)]">
            Prasad&apos;s Dental Clinic offers {service.title.toLowerCase()} for patients in Guntur, Pattabipuram, Tenali, Mangalagiri, Vijayawada, Narasaraopet, and surrounding areas in Andhra Pradesh.
          </p>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            name: service.title,
            description: service.metaDesc,
            howPerformed: "By qualified dentist using modern equipment",
            preparation: "Consultation and examination required",
            provider: {
              "@type": "Dentist",
              name: "Prasad's Dental Clinic",
              telephone: "+919398615727",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Stambalagaruvu, Pattabipuram",
                addressLocality: "Guntur",
                addressRegion: "Andhra Pradesh",
                postalCode: "522006",
                addressCountry: "IN",
              },
            },
          }),
        }}
      />
    </main>
  );
}
