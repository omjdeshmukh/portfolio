import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IExperience {
  company: string;
  location: string;
  role: string;
  period: string;
  domain: string;
  type: string;
  bullets: string[];
  techStack: string[];
}

export interface IEducation {
  degree: string;
  period: string;
  university: string;
  percentage?: string;
  description: string;
}

export interface IProfile extends Document {
  fullName: string;
  preferredName: string;
  title: string;
  secondaryTitle: string;
  yearsOfExperience: string;
  primaryLocation: string;
  openToRelocation: boolean;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  bio: string;
  highlights: string[];
  experience: IExperience[];
  education: IEducation[];
  certifications: string[];
  languages: string[];
  updatedAt: Date;
}

const ExperienceSchema = new Schema<IExperience>(
  {
    company: { type: String, required: true },
    location: { type: String, required: true },
    role: { type: String, required: true },
    period: { type: String, required: true },
    domain: { type: String, required: true },
    type: { type: String, required: true },
    bullets: [{ type: String }],
    techStack: [{ type: String }],
  },
  { _id: false }
);

const EducationSchema = new Schema<IEducation>(
  {
    degree: { type: String, required: true },
    period: { type: String, required: true },
    university: { type: String, required: true },
    percentage: { type: String },
    description: { type: String, required: true },
  },
  { _id: false }
);

const ProfileSchema = new Schema<IProfile>(
  {
    fullName: { type: String, required: true },
    preferredName: { type: String, default: 'Om' },
    title: { type: String, required: true },
    secondaryTitle: { type: String, required: true },
    yearsOfExperience: { type: String, default: '4.8+' },
    primaryLocation: { type: String, default: 'Nagpur, India' },
    openToRelocation: { type: Boolean, default: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    github: { type: String, required: true },
    linkedin: { type: String, required: true },
    bio: { type: String, required: true },
    highlights: [{ type: String }],
    experience: [ExperienceSchema],
    education: [EducationSchema],
    certifications: [{ type: String }],
    languages: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

export const Profile: Model<IProfile> =
  mongoose.models.Profile || mongoose.model<IProfile>('Profile', ProfileSchema);

export default Profile;
