import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Shield, Users, Award, Building2 } from "lucide-react";
import receptionImage from "@assets/generated_images/Clinic_reception_area_33a4318c.png";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We treat every patient with empathy and understanding, ensuring comfort and trust in their care journey.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We are committed to the highest standards of medical care with continuous learning and improvement.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We believe in transparent and ethical medical practices, putting patient welfare first always.",
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "We work collaboratively to provide the best possible outcomes for our patients through coordinated care.",
    },
  ];

  const milestones = [
    { year: "2021", event: "Clinic Established in Arisipalayam, Salem" },
    { year: "2022", event: "Expanded with Evidence-Based Treatment Protocols" },
    { year: "2023", event: "Reached 500+ Patients Treated" },
    { year: "2024", event: "Reached 1000+ Patients Treated & Advanced Services" },
    { year: "2025", event: "Celebrated 5 Years of Clinical Excellence" },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-accent/30 to-background">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold font-serif" data-testid="text-about-title">
            About RAJA Health Care Clinic
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A dedicated health care center committed to providing exceptional, compassionate care
            for a wide range of rehabilitation needs.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="hover-elevate transition-all duration-300" data-testid="card-mission">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold font-serif">Our Mission</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  To provide exceptional, evidence-based care with professionalism and compassion,
                  restoring movement and quality of life through personalized treatment plans.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300" data-testid="card-vision">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold font-serif">Our Vision</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  To be the most trusted physical therapy clinic dedicated to enhancing quality of life
                  and promoting lifelong wellness for our community.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300" data-testid="card-values">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold font-serif">Our Values</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Compassion, excellence, integrity, and teamwork form the foundation of everything
                  we do, ensuring the best outcomes for our patients.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Values */}
          <div className="space-y-4 mb-8">
            <h3 className="text-3xl md:text-4xl font-bold font-serif text-center mb-12">
              The Values That Guide Us
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="flex gap-6" data-testid={`value-${index}`}>
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Facility */}
      <section className="py-20 md:py-24 bg-accent/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-10 h-10 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold font-serif">Our Facility</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our clinic in Arisipalayam, Salem, is designed to provide a comfortable and welcoming
                environment for our patients. We are equipped with the latest technology for accurate
                diagnosis and effective treatment.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">
                    State-of-the-art equipment for comprehensive health care assessments
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">
                    Comfortable consultation rooms ensuring privacy and patient comfort
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-base text-muted-foreground">
                    Accessibility features ensuring care for all patients
                  </p>
                </div>
              </div>
            </div>

            <div className="order-first lg:order-last">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={receptionImage}
                  alt="Modern clinic reception area"
                  className="w-full h-auto object-cover"
                  data-testid="img-facility"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section className="py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-serif">Our Journey</h2>
            <div className="w-24 h-1 bg-primary/20 mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic">
              A commitment to excellence, one patient at a time.
            </p>
          </div>

          <div className="relative">
            {/* Centered Line - Hidden on small screens, absolute on larger */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2 rounded-full"></div>

            <div className="space-y-12 md:space-y-24">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  data-testid={`milestone-${index}`}
                >
                  {/* Content Card Area */}
                  <div className="w-full md:w-1/2 flex justify-center px-0 md:px-12">
                    <Card className="w-full hover-elevate transition-all duration-500 border-primary/5 hover:border-primary/20 group overflow-hidden bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-8 space-y-4 relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-primary/10 transition-colors"></div>
                        <div className="md:hidden text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                        <p className="text-lg font-medium leading-relaxed relative z-10">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Year Marker Area */}
                  <div className="relative flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-background border-4 border-primary/10 flex items-center justify-center shadow-xl z-10 hover:border-primary/40 transition-colors duration-500">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-lg">
                        <span className="md:hidden">✓</span>
                        <div className="hidden md:block">{(index + 1).toString().padStart(2, '0')}</div>
                      </div>
                    </div>
                  </div>

                  {/* Year Text for alternating layout */}
                  <div className="hidden md:block w-1/2 px-12">
                    <div className={`text-6xl font-black opacity-5 font-serif select-none ${index % 2 === 0 ? "text-left" : "text-right"
                      }`}>
                      {milestone.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Approach */}
      <section className="py-20 md:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-6">
          <Users className="w-16 h-16 mx-auto text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold font-serif">
            Our Patient-Centered Approach
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At RAJA Health Care Clinic, we believe that effective health care requires a
            collaborative approach. We work closely with each patient to understand their unique
            needs and concerns, developing personalized treatment plans that address not just the
            symptoms, but the whole person.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our team is dedicated to staying at the forefront of rehabilitation science and bringing
            the latest advancements in treatment to our practice, ensuring our patients receive the
            most effective and innovative care available.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-12">
            Accreditations & Certifications
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover-elevate transition-all duration-300" data-testid="card-cert-1">
              <CardContent className="p-8 space-y-4">
                <Shield className="w-12 h-12 mx-auto text-primary" />
                <h3 className="text-xl font-semibold">Medical Council Registered</h3>
                <p className="text-sm text-muted-foreground">
                  Fully registered with the Medical Council of India
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate transition-all duration-300" data-testid="card-cert-2">
              <CardContent className="p-8 space-y-4">
                <Award className="w-12 h-12 mx-auto text-primary" />
                <h3 className="text-xl font-semibold">Board Certified</h3>
                <p className="text-sm text-muted-foreground">
                  Board certified in Physiotherapy & Rehabilitation
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate transition-all duration-300" data-testid="card-cert-3">
              <CardContent className="p-8 space-y-4">
                <Building2 className="w-12 h-12 mx-auto text-primary" />
                <h3 className="text-xl font-semibold">Clinical Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Committed to the highest standards of care
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
