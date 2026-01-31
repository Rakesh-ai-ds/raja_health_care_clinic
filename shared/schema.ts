import { z } from "zod";

// User Schema
export const userSchema = z.object({
  id: z.string(),
  username: z.string(),
  password: z.string(),
});

export type User = z.infer<typeof userSchema>;
export type InsertUser = Omit<User, "id">;


// Appointment Booking Schema
export const appointmentSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  preferredDate: z.string().min(1, "Please select a date"),
  preferredTime: z.enum(["morning", "afternoon", "evening"], {
    required_error: "Please select a preferred time",
  }),
  service: z.string().min(1, "Please select a service"),
  reason: z.string().optional(),
});

export type Appointment = z.infer<typeof appointmentSchema>;

// Contact Form Schema
export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type Contact = z.infer<typeof contactSchema>;

// Services data
export const servicesData = [
  {
    id: "orthopedic",
    title: "Orthopedic Physiotherapy",
    description: "Low back, neck, knee, shoulder, ankle pain and post-surgical rehab",
    icon: "activity",
  },
  {
    id: "neurological",
    title: "Neurological Physiotherapy",
    description: "Stroke, spinal cord injury, vertigo, nerve injuries, Parkinsonism",
    icon: "brain",
  },
  {
    id: "cardiac",
    title: "Cardio pulmonary rehabilitation",
    description: "Post CABG, valve replacement, post–heart attack recovery and COPD",
    icon: "heart-pulse",
  },
  {
    id: "sports-injury",
    title: "Sports Injury Rehab",
    description: "Injury prevention exercises",
    icon: "move",
  },
  {
    id: "geriatric",
    title: "Geriatric Physiotherapy",
    description: "Osteoporosis and Balance disorder",
    icon: "shield",
  },
  {
    id: "pain-management",
    title: "Pain Management",
    description: "Specialized approach for chronic and acute pain conditions",
    icon: "activity",
  },
  {
    id: "pediatrics",
    title: "Pediatrics",
    description: "Cerebral Palsy, Muscular Dystrophy, Autism",
    icon: "baby",
  },
  {
    id: "womens-health",
    title: "Women's Health",
    description: "Pelvic Floor Rehabilitation, Antenatal and postnatal exercise program",
    icon: "heart",
  },
  {
    id: "home-session",
    title: "Home Physiotherapy Session",
    description: "Professional care at your home doorstep",
    icon: "home",
  },
] as const;
