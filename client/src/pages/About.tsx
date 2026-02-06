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

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-accent/30 to-background">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold font-serif" data-testid="text-about-title">
            About Raja Health Care Clinic
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


      {/* Team Approach */}
      <section className="py-20 md:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-6">
          <Users className="w-16 h-16 mx-auto text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold font-serif">
            Our Patient-Centered Approach
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Raja Health Care Clinic, we believe that effective health care requires a
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
