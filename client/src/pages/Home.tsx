import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Activity,
  Zap,
  AlertCircle,
  Move,
  Brain,
  Moon,
  Heart,
  Shield,
  Baby,
  Users,
  Award,
  Clock,
  Star,
  ArrowRight,
  Phone
} from "lucide-react";
import logoImage from "@/assets/logo.jpg";
import doctorImage from "@/assets/doctor.jpg";

export default function Home() {
  const stats = [
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "1000+", label: "Patients Treated", icon: Users },
    { number: "10+", label: "Specialized Services", icon: Activity },
    { number: "4.9/5", label: "Patient Rating", icon: Star },
  ];

  const services = [
    {
      title: "Orthopedic Physiotherapy",
      description: "Low back, neck, knee, shoulder, ankle pain and post-surgical rehab",
      icon: Activity,
      id: "orthopedic"
    },
    {
      title: "Neurological Physiotherapy",
      description: "Stroke, spinal cord injury, vertigo, nerve injuries, Parkinsonism",
      icon: Brain,
      id: "neuro-physio"
    },
    {
      title: "Cardio pulmonary rehabilitation",
      description: "Post CABG, valve replacement, post–heart attack recovery and COPD",
      icon: Heart,
      id: "cardiac"
    },
    {
      title: "Sports Injury Rehab",
      description: "Injury prevention exercises",
      icon: Move,
      id: "sports"
    },
    {
      title: "Geriatric Physiotherapy",
      description: "Osteoporosis and Balance disorder",
      icon: Shield,
      id: "geriatric"
    },
    {
      title: "Pain Management & Functional Restoration",
      description: "Specialized approach for chronic and acute pain conditions",
      icon: Activity,
      id: "pain-management"
    },
    {
      title: "Women's Health",
      description: "Pelvic Floor Rehabilitation, Antenatal and postnatal exercise program",
      icon: Heart,
      id: "womens-health"
    },
    {
      title: "Pediatrics",
      description: "Cerebral Palsy, Muscular Dystrophy, Autism",
      icon: Baby,
      id: "pediatrics"
    },
  ];

  const whyChooseUs = [
    {
      title: "Expert Care",
      description: "Led by Dr. Raja with over 5 years of specialized experience",
      icon: Award,
    },
    {
      title: "Evidence based treatment approach",
      description: "By utilizing a comprehensive range of evidence-based techniques and modern equipment,",
      icon: Activity,
    },
    {
      title: "Patient-Centered",
      description: "Personalized treatment plans tailored to your unique needs",
      icon: Users,
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "Dr. Raja's expertise and compassionate care helped me manage my migraines effectively. Highly recommended!",
    },
    {
      name: "Rajesh Kumar",
      rating: 5,
      text: "The clinic staff is professional and caring. Dr. Raja took time to explain my condition thoroughly.",
    },
    {
      name: "Anita Reddy",
      rating: 5,
      text: "Excellent treatment for my father's stroke recovery. The follow-up care has been exceptional.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[500px] flex items-center bg-gradient-to-br from-accent/30 to-background pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <div className="flex flex-col items-center space-y-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img
                src={logoImage}
                alt="RAJA Health Care Logo"
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-background"
                data-testid="img-logo-hero"
              />
            </div>

            <div className="max-w-3xl space-y-6">
              <div className="space-y-4">
                <div className="flex flex-col items-center gap-4">
                  <Badge variant="secondary" className="px-4 py-1.5 text-sm font-semibold bg-primary/10 text-primary border-primary/20 animate-pulse">
                    <Clock className="w-4 h-4 mr-2" />
                    Home Visits Available
                  </Badge>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight" data-testid="text-hero-headline">
                    Leading Health Care in Salem
                  </h1>
                </div>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  Your Partner in Health Care Wellness
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to Raja Health Care Clinic, where we believe in a holistic approach to your health and well-being.
                Our team of dedicated physiotherapists is committed to helping you overcome pain, recover from injury,
                and achieve your maximum physical potential through personalized and evidence-based treatment plans.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/book-appointment" data-testid="link-hero-book">
                  <Button size="lg" className="text-base px-8 shadow-lg w-full sm:w-auto">
                    Book Appointment
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/services" data-testid="link-hero-services">
                  <Button size="lg" variant="outline" className="text-base px-8 w-full sm:w-auto">
                    View Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 md:py-16 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-stat-${index}`}>
                  <CardContent className="p-8 text-center space-y-2">
                    <Icon className="w-8 h-8 mx-auto text-primary mb-3" />
                    <div className="text-4xl md:text-5xl font-bold text-primary" data-testid={`text-stat-number-${index}`}>
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base uppercase tracking-wide text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold font-serif">
            Welcome to Excellence in Health Care
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our patient-centered approach combines hands-on therapy, customized exercise programs,
            and innovative techniques like manual lymphatic drainage and electrotherapy to stimulate
            your body's natural healing mechanisms.
          </p>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 md:py-24 bg-accent/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif">Our Specialized Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive care for all your health care needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} className="hover-elevate transition-all duration-300 group" data-testid={`card-service-${index}`}>
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <Link href="/services" data-testid={`link-service-${service.id}`}>
                      <button className="text-primary font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" data-testid="link-all-services">
              <Button variant="outline" size="lg" className="px-8">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Home Sessions Feature Section */}
      <section className="py-20 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <Card className="bg-gradient-to-r from-primary to-primary/90 text-white border-none shadow-2xl relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none"></div>

            <CardContent className="p-8 md:p-16 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <Badge variant="outline" className="text-white border-white/30 px-3 py-1">New Service</Badge>
                    <h2 className="text-3xl md:text-5xl font-bold font-serif leading-tight">
                      Physiotherapy Sessions Available at home
                    </h2>
                    <p className="text-xl text-white/90 leading-relaxed max-w-xl">
                      Experience professional, expert care in the comfort and privacy of your own home.
                      Our dedicated team brings the same high-quality clinical expertise directly to your doorstep.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Moon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-bold">Maximum Comfort</div>
                        <div className="text-white/70 text-sm">Treat in your own environment</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-bold">Flexible Scheduling</div>
                        <div className="text-white/70 text-sm">Sessions that fit your routine</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link href="/book-appointment">
                      <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl w-full sm:w-auto">
                        Book Home Visit
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 w-full sm:w-auto">
                        Inquire Now
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="relative group lg:block hidden">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-white/20 to-transparent rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center p-8">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                        <Activity className="w-10 h-10 text-white" />
                      </div>
                      <div className="text-2xl font-bold font-serif">Home Physiotherapy Sessions</div>
                      <div className="text-white/60">Expert rehabilitation brought to you</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif">Why Choose RAJA Health Care</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center space-y-4" data-testid={`feature-${index}`}>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Doctor Preview */}
      <section className="py-20 md:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif">About Dr. Raja</h2>
                    <p className="text-xl text-primary font-semibold">Chief Medical Officer</p>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Dr. Raja is the driving force and clinical director behind Raja health care clinic,
                    a practice founded on the principle that everyone deserves an active, pain-free life.
                    With over 5 years of experience in physiotherapy department , he has dedicated his
                    career to providing personalized, holistic care to the Patients.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Stroke Specialist</Badge>
                    <Badge variant="secondary">Sports Injuries</Badge>
                    <Badge variant="secondary">Movement Disorders</Badge>
                  </div>
                  <Link href="/doctor" data-testid="link-doctor-profile">
                    <Button className="mt-4">
                      View Full Profile
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
                <div className="order-first md:order-last">
                  <div className="text-center md:text-right">
                    <div className="rounded-2xl overflow-hidden shadow-xl max-w-sm ml-auto">
                      <img
                        src={doctorImage}
                        alt="Dr. Raja"
                        className="w-full h-auto object-cover"
                        data-testid="img-doctor-home"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif">What Our Patients Say</h2>
            <p className="text-lg text-muted-foreground">Trusted by thousands of patients</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-testimonial-${index}`}>
                <CardContent className="p-8 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="pt-4 border-t">
                    <div className="font-semibold">{testimonial.name}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-12 bg-primary/10 border-y">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Clock className="w-10 h-10 text-primary flex-shrink-0" />
              <div>
                <div className="font-semibold text-lg">Clinic Hours</div>
                <div className="text-sm text-muted-foreground">Mon-Sun: 9:00 AM - 9:00 PM</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-10 h-10 text-primary flex-shrink-0" />
              <div>
                <div className="font-semibold text-lg">Emergency Contact</div>
                <a href="tel:+917695991173" className="text-primary font-medium hover:underline" data-testid="link-emergency-phone">
                  +91 76959 91173
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/20">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold font-serif">
            Take the First Step Towards Better Health
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Schedule your consultation today and experience compassionate, expert health care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-appointment" data-testid="link-final-book">
              <Button size="lg" className="text-base px-8 shadow-lg w-full sm:w-auto">
                Book Appointment Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact" data-testid="link-final-contact">
              <Button size="lg" variant="outline" className="text-base px-8 w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
