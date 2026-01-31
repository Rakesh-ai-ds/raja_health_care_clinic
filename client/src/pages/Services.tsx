import { Card, CardContent } from "@/components/ui/card";
import {
  Activity,
  Zap,
  AlertCircle,
  Move,
  Brain,
  Moon,
  Baby,
  Shield,
  HeartPulse,
  Heart,
  Stethoscope,
  Target,
  CheckCircle2,
  Users
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Activity,
      title: "Orthopedic Physiotherapy",
      description: "Comprehensive care for musculoskeletal conditions and post-surgical recovery.",
      points: [
        "Low Back Pain",
        "Neck Pain",
        "Shoulder Pain",
        "Knee Pain",
        "Ankle Pain",
        "Post-Traumatic Rehabilitation",
        "Post-Surgical Rehabilitation",
        "Osteoarthritis",
        "Ergonomic advice",
        "ACL and Other Knee Ligament Injuries"
      ],
      id: "orthopedic"
    },
    {
      icon: Brain,
      title: "Neurological Physiotherapy",
      description: "Specialized rehabilitation for neurological disorders and nervous system injuries.",
      points: [
        "Stroke Management",
        "Head & Spinal Cord Injury",
        "Spinal disc Diseases",
        "Vertigo Management",
        "Peripheral Nerve Injuries",
        "Parkinsonism and Other Movement Disorders",
        "Facial Palsy"
      ],
      id: "neurological"
    },
    {
      icon: HeartPulse,
      title: "Cardio pulmonary rehabilitation",
      description: "Heart and lung focused rehabilitation following surgeries or respiratory conditions.",
      points: [
        "Post CABG (Coronary Artery Bypass Grafting)",
        "Post Valve Replacement",
        "Post Heart Attack",
        "Bronchial Asthma",
        "Chronic obstructive pulmonary disease (COPD)"
      ],
      id: "cardio-pulmonary"
    },
    {
      icon: Move,
      title: "Sports Injury Rehab",
      description: "Advanced recovery programs for athletes to ensure safe return to performance.",
      points: [
        "Throwing Injuries (Shoulder & Elbow)",
        "Ankle Injuries",
        "Acute Muscle Strains",
        "Ligament Sprains",
        "Chronic Overuse Tendon Injuries",
        "Joint Instability"
      ],
      id: "sports"
    },
    {
      icon: Shield,
      title: "Geriatric Physiotherapy",
      description: "Physiotherapy for the geriatric population to improve the quality of life.",
      points: [
        "Our Geriatric physiotherapists utilize a holistic approach, combining exercises, manual therapy, and other therapeutic techniques to address age-related conditions.",
        "Treatment plans are tailored to individual needs to help adults regain and maintain their physical abilities."
      ],
      id: "geriatric"
    },
    {
      icon: Heart,
      title: "Women's Health",
      description: "Dedicated care for women through different life stages.",
      points: [
        "Pelvic Floor Rehabilitation",
        "Antenatal and postnatal exercise program"
      ],
      id: "womens-health"
    },
    {
      icon: Activity,
      title: "Pain Management & Functional Restoration",
      description: "Specialized non-surgical interventions for complex pain conditions.",
      points: [
        "Specialized interventions for chronic pain",
        "Post-stroke complications and spinal cord injuries",
        "Musculoskeletal disorders management",
        "Goal of restoring movement and reducing discomfort"
      ],
      id: "pain-management"
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Specialized physiotherapy care for children.",
      points: [
        "Cerebral Palsy",
        "Muscular Dystrophy",
        "Autism",
        "Developmental delays"
      ],
      id: "pediatrics"
    },
  ];

  const approach = [
    {
      title: "Personalized Therapy Plans",
      description: "Customized rehabilitation programs designed to address neurological, orthopedic, and post-surgical recovery needs for maximum functional restoration.",
      icon: Target
    },
    {
      title: "Pain Management & Functional Restoration",
      description: "Specialized non-surgical interventions for chronic pain, post-stroke complications, spinal cord injuries, and musculoskeletal disorders to restore movement and reduce discomfort.",
      icon: Activity
    }
  ];

  const goals = [
    "Managing acute and chronic conditions.",
    "Rehabilitating injuries and the effects of diseases and disabilities.",
    "Improving and maintaining optimal physical performance and overall quality of life.",
    "Educating patients to prevent reoccurrence of any injuries."
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-accent/30 to-background">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold font-serif" data-testid="text-services-title">
            Our Specialized Services
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive health care tailored to your specific needs. Explore our specialized
            programs designed to assess, treat, and rehabilitate a wide range of conditions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-service-${index}`}>
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="space-y-4 flex-1">
                        <h3 className="text-xl md:text-2xl font-bold font-serif">{service.title}</h3>
                        <p className="text-base font-medium text-foreground/80">
                          {service.description}
                        </p>
                        <ul className="space-y-2">
                          {service.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-base text-muted-foreground">
                              <CheckCircle2 className="w-5 h-5 text-primary/60 mt-0.5 flex-shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 md:py-24 bg-accent/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif">How We Heal</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our clinic utilizes advanced therapeutic strategies for lasting recovery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {approach.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border-primary/20">
                  <CardContent className="p-8 flex gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold font-serif">{item.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ultimate Goal Section */}
      <section className="py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <Card className="bg-primary text-primary-foreground overflow-hidden">
            <CardContent className="p-12 md:p-16 space-y-8 relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold font-serif">Ultimate Goal of Our Clinic</h2>
                <div className="w-24 h-1 bg-primary-foreground/30 mx-auto"></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {goals.map((goal, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 group hover:bg-white/20 transition-all">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-lg">{index + 1}</span>
                    </div>
                    <p className="text-lg font-medium leading-tight pt-1">
                      {goal}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-primary/5 to-accent/20">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold font-serif">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Schedule a health care consultation to discuss your needs and explore the best
            treatment options for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/book-appointment" data-testid="link-services-book">
              <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover-elevate active-elevate-2 transition-all duration-300 shadow-md w-full sm:w-auto">
                Book Appointment
              </button>
            </a>
            <a href="/contact" data-testid="link-services-contact">
              <button className="px-8 py-3 border border-border bg-background font-semibold rounded-lg hover-elevate active-elevate-2 transition-all duration-300 w-full sm:w-auto">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
