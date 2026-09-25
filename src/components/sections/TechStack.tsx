import { Layers } from 'lucide-react';

const technologies = [
  { name: 'JavaScript', color: '#F7DF1E', initials: 'JS' },
  { name: 'React', color: '#61DAFB', initials: 'Re' },
  { name: 'React Native', color: '#61DAFB', initials: 'RN' },
  { name: 'Node.js', color: '#339933', initials: 'No' },
  { name: 'Express', color: '#000000', initials: 'Ex' },
  { name: 'MongoDB', color: '#47A248', initials: 'Mg' },
  { name: 'SQL', color: '#4479A4', initials: 'SQL' },
];

export default function TechStack() {
  return (
    <section id="technologies" className="py-20 lg:py-28 bg-primary-50/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-primary-700 text-xs font-semibold mb-4 shadow-sm">
            <Layers className="w-3.5 h-3.5" />
            Our Stack
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-900">
            Technologies We <span className="text-gradient">Master</span>
          </h2>
          <p className="mt-4 text-ink-500 text-lg">
            A modern, battle-tested toolkit for building products that scale.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-3 p-6 w-36 sm:w-44 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:shadow-primary-900/10 hover:-translate-y-1.5 transition-all duration-300 border border-gray-100"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center font-heading font-bold text-xl transition-transform group-hover:scale-110"
                style={{
                  backgroundColor: `${tech.color}15`,
                  color: tech.color === '#000000' ? '#1F2937' : tech.color,
                }}
              >
                {tech.initials}
              </div>
              <span className="text-sm font-semibold text-ink-800">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}