import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ISkillItem {
  name: string;
  level: number;
  ratingText: string;
}

export interface ISkillCategory extends Document {
  title: string;
  icon: string;
  items: ISkillItem[];
}

const SkillItemSchema = new Schema<ISkillItem>(
  {
    name: { type: String, required: true },
    level: { type: Number, required: true },
    ratingText: { type: String, required: true },
  },
  { _id: false }
);

const SkillCategorySchema = new Schema<ISkillCategory>(
  {
    title: { type: String, required: true, unique: true },
    icon: { type: String, required: true },
    items: [SkillItemSchema],
  },
  {
    timestamps: true,
  }
);

export const SkillCategory: Model<ISkillCategory> =
  mongoose.models.SkillCategory ||
  mongoose.model<ISkillCategory>('SkillCategory', SkillCategorySchema);

export default SkillCategory;
