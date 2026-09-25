import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    image:
      'https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'FinTech Analytics Dashboard',
    description:
      'Real-time financial analytics platform with predictive AI insights and automated reporting.',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'Web App',
  },
  {
    image:
      'https://images.pexels.com/photos/270283/pexels-photo-270283.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'HealthSync Mobile App',
    description:
      'Cross-platform health tracking app with wearable integration and AI-powered recommendations.',
    tags: ['React Native', 'Express', 'SQL'],
    category: 'Mobile App',
  },
  {
    image:
      'https://images.pexels.com/photos/16675632/pexels-photo-16675632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'ShopSphere E-Commerce',
    description:
      'Headless e-commerce platform with AI-driven product search and automated CI/CD pipeline.',
    tags: ['React', 'MongoDB', 'CI/CD'],
    category: 'E-Commerce',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-primary-50/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-primary-700 text-xs font-semibold mb-4 shadow-sm">
            <ArrowUpRight className="w-3.5 h-3.5" />
            Our Work
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-900">
            Projects That <span className="text-gradient">Deliver Results</span>
          </h2>
          <p className="mt-4 text-ink-500 text-lg">
            A glimpse of products we've engineered for startups and enterprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-2xl hover:shadow-primary-900/15 hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[11px] font-bold text-primary-700">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-ink-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-primary-50 text-primary-700 text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}