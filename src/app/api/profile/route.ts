import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Profile } from '@/models/Profile';
import { Project } from '@/models/Project';
import { SkillCategory } from '@/models/Skill';
import { experienceData, educationData, additionalInfoData } from '@/data/experience';
import { projectsData } from '@/data/projects';
import { skillsData } from '@/data/skills';

export async function GET() {
  try {
    await connectToDatabase();

    const profileDoc = await Profile.findOne().sort({ createdAt: -1 }).lean();
    const projectsDocs = await Project.find().lean();
    const skillsDocs = await SkillCategory.find().lean();

    if (profileDoc) {
      return NextResponse.json({
        source: 'mongodb',
        profile: profileDoc,
        projects: projectsDocs.length > 0 ? projectsDocs : projectsData,
        skills: skillsDocs.length > 0 ? skillsDocs : skillsData,
      });
    }

    // Fallback if not yet seeded
    return NextResponse.json({
      source: 'local-fallback',
      profile: {
        fullName: 'Omprakash Deshmukh',
        preferredName: 'Om',
        title: 'Senior Software Engineer | Full-Stack Developer',
        secondaryTitle: 'Ex-GlobalLogic • Bushel • eTeam • The JavaScript Shop',
        experience: experienceData,
        education: educationData,
        additionalInfo: additionalInfoData,
      },
      projects: projectsData,
      skills: skillsData,
    });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : 'Database offline';
    return NextResponse.json({
      source: 'local-fallback',
      dbStatus: 'offline',
      error: errMsg,
      projects: projectsData,
      skills: skillsData,
      experience: experienceData,
    });
  }
}
