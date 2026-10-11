'use client';

import React, { useState } from 'react';
import { SkillCategory, SkillItem } from '../../types';

interface SkillsSectionProps {
  initialCategories: SkillCategory[];
}

export default function SkillsSection({ initialCategories }: SkillsSectionProps) {
  const [categories, setCategories] = useState<SkillCategory[]>(initialCategories);
  const [searchQuery, setSearchQuery] = useState('');
  const [newMockSkillName, setNewMockSkillName] = useState('');
  const [newMockSkillLevel, setNewMockSkillLevel] = useState(85);

  const handleAddMockSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMockSkillName.trim()) return;

    const newSkill: SkillItem = {
      name: newMockSkillName.trim(),
      level: newMockSkillLevel,
      ratingText: `${newMockSkillLevel}% • Custom Slot`,
      isMockSlot: true,
    };

    setCategories((prev) =>
      prev.map((cat) => {
        if (cat.title.includes('Mock Spaces')) {
          return {
            ...cat,
            items: [...cat.items, newSkill],
          };
        }
        return cat;
      })
    );

    setNewMockSkillName('');
  };

  const filteredCategories = categories
    .map((category) => {
      const filteredItems = category.items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
      );
      return {
        ...category,
        items: filteredItems,
      };
    })
    .filter((category) => category.items.length > 0);

  return (
    <section id="skills" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Technical Mastery & Mock Stacks</div>
          <h2 className="section-title font-formal">
            Skills Arsenal & <span className="text-gradient">Tech Stack Mock Spaces</span>
          </h2>
          <p className="section-desc">
            Production-tested frameworks and development practices, alongside interactive mock spaces to test and showcase emerging architectural stacks.
          </p>
        </div>

        {/* Live Search & Filter Bar */}
        <div style={{ maxWidth: '540px', margin: '0 auto 40px auto', position: 'relative' }}>
          <span style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)', fontSize: '1.1rem' }}>
            🔍
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Type to filter skills (e.g. Next.js, React, TypeScript, WCAG, Mock)..."
            aria-label="Filter skills by keyword"
            style={{
              width: '100%',
              padding: '14px 20px 14px 48px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              fontSize: '0.95rem',
              outline: 'none',
              transition: 'all 0.2s ease',
            }}
          />
        </div>

        {/* Categories Grid */}
        <div className="skills-grid">
          {filteredCategories.map((cat, idx) => {
            const isMockCategory = cat.title.includes('Mock Spaces');

            return (
              <div
                key={idx}
                className={`skill-card card-glint ${isMockCategory ? 'mock-category-card' : ''}`}
              >
                <div className="skill-card-header">
                  <div className="skill-cat-icon">{cat.icon}</div>
                  <div>
                    <h3 className="skill-cat-title font-formal">{cat.title}</h3>
                    {isMockCategory && (
                      <span className="mock-badge" style={{ marginTop: '4px' }}>
                        ✦ Interactive Mock Stack Slot
                      </span>
                    )}
                  </div>
                </div>

                <div className="skill-items-list">
                  {cat.items.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-bar-row">
                      <div className="skill-label-row">
                        <span className={`skill-name ${skill.isMockSlot ? 'mock-skill-text' : ''}`}>
                          {skill.isMockSlot ? `✦ ${skill.name}` : skill.name}
                        </span>
                        <span className="skill-level-pill">
                          {skill.ratingText}
                        </span>
                      </div>
                      <div className="skill-track">
                        <div
                          className={`skill-fill ${skill.isMockSlot ? 'mock-fill' : ''}`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interactive Add Custom Mock Slot Form inside Mock Space */}
                {isMockCategory && (
                  <form onSubmit={handleAddMockSkill} className="add-mock-slot-box">
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      + Add Custom Mock Tech Stack Slot
                    </span>
                    <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                      <input
                        type="text"
                        value={newMockSkillName}
                        onChange={(e) => setNewMockSkillName(e.target.value)}
                        placeholder="e.g. Rust / GraphQL / Kafka..."
                        className="mock-input"
                      />
                      <button type="submit" className="btn btn-sm btn-primary" style={{ padding: '8px 12px' }}>
                        Add
                      </button>
                    </div>
                  </form>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .skill-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 28px;
          backdrop-filter: blur(12px);
          transition: all var(--transition-normal);
          display: flex;
          flex-direction: column;
        }
        .skill-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-glow);
          box-shadow: var(--shadow-md);
        }
        .mock-category-card {
          border: 1.5px dashed rgba(245, 158, 11, 0.45);
          background: rgba(245, 158, 11, 0.02);
        }
        .skill-card-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-subtle);
        }
        .skill-cat-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(99, 102, 241, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
        }
        .skill-cat-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .skill-items-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .skill-bar-row {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .skill-label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .skill-name {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-secondary);
        }
        .mock-skill-text {
          color: #f59e0b;
        }
        .skill-level-pill {
          font-size: 0.76rem;
          font-family: var(--font-mono);
          color: var(--accent-cyan);
        }
        .skill-track {
          width: 100%;
          height: 6px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.08);
          overflow: hidden;
        }
        .skill-fill {
          height: 100%;
          border-radius: var(--radius-full);
          background: var(--gradient-primary);
          transition: width 0.6s ease;
        }
        .mock-fill {
          background: var(--gradient-gold);
        }
        .add-mock-slot-box {
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px dashed rgba(245, 158, 11, 0.3);
        }
        .mock-input {
          flex: 1;
          padding: 8px 12px;
          background: var(--bg-input);
          border: 1px solid rgba(245, 158, 11, 0.4);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-size: 0.85rem;
          outline: none;
        }
        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 680px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
