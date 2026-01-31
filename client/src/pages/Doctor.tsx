import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Award,
  Briefcase,
  ArrowRight,
  Stethoscope
} from "lucide-react";
import doctorImage from "@/assets/doctor.jpg";

export default function Doctor() {
  const expertise = [
    "Stroke",
    "Sports injuries",
    "Movement Disorders",
    "Neuromuscular Disorders",
  ];



  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-accent/30 to-background">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-last lg:order-first">
              <div className="rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
                <img
                  src={doctorImage}
                  alt="Dr. Raja - Neurologist"
                  className="w-full h-auto object-cover"
                  data-testid="img-doctor"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold font-serif" data-testid="text-doctor-name">
                  Dr. Raja
                </h1>
                <p className="text-2xl text-primary font-semibold">Chief Medical Officer</p>
                <p className="text-lg text-muted-foreground">
                  Distinguished Specialist | 5+ Years Experience
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {expertise.slice(0, 4).map((area) => (
                  <Badge key={area} variant="secondary" className="text-sm">
                    {area}
                  </Badge>
                ))}
              </div>

              <Link href="/book-appointment" data-testid="link-doctor-book">
                <Button size="lg" className="mt-4">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Message */}
      <section className="py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <Card className="border-l-4 border-l-primary">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Stethoscope className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold font-serif">A Message from Dr. Raja</h2>
                </div>
                <blockquote className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary/20 pl-6">
                  "At Raja Health Care Clinic, we believe in a holistic approach to your health and well-being.
                  Our team of dedicated physiotherapists is committed to helping you overcome pain, recover from injury,
                  and achieve your maximum physical potential through personalized and evidence-based treatment plans."
                </blockquote>
                <div className="pt-4">
                  <p className="font-semibold">- Dr. Raja</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Dr. Raja */}
      <section className="py-20 md:py-24 bg-accent/20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif">About Dr. Raja</h2>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dr. Raja is the driving force and clinical director behind Raja health care clinic,
              a practice founded on the principle that everyone deserves an active, pain-free life.
              With over 5 years of experience in physiotherapy department , he has dedicated his
              career to providing personalized, holistic care to the Patients.
            </p>
          </div>
        </div>
      </section>



      {/* Areas of Expertise */}
      <section className="py-20 md:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-10 h-10 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold font-serif">Areas of Expertise</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {expertise.map((area, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-expertise-${index}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-3 h-3 rounded-full bg-primary mx-auto mb-3"></div>
                  <p className="font-semibold">{area}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-primary/5 to-accent/20">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold font-serif">
            Experience Expert Health Care
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Schedule your consultation with raja health care clinic today and take the first step towards better mobility and health.
          </p>
          <Link href="/book-appointment" data-testid="link-doctor-cta">
            <Button size="lg" className="text-base px-8 shadow-lg">
              Book Your Appointment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
