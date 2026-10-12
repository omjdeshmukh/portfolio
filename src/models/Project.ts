import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProject extends Document {
  projectId: string;
  title: string;
  company: string;
  category: string;
  period: string;
  image: string;
  summary: string;
  impact: string;
  techStack: string[];
  metrics: string[];
  architectureDetails: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
}

const ProjectSchema = new Schema<IProject>(
  {
    projectId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    company: { type: String, required: true },
    category: { type: String, required: true },
    period: { type: String, required: true },
    image: { type: String, required: true },
    summary: { type: String, required: true },
    impact: { type: String, required: true },
    techStack: [{ type: String }],
    metrics: [{ type: String }],
    architectureDetails: [{ type: String }],
    liveDemoUrl: { type: String },
    githubUrl: { type: String },
  },
  {
    timestamps: true,
  }
);

export const Project: Model<IProject> =
  mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);

export default Project;
