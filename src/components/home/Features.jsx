import { Zap, Link2, Users } from 'lucide-react';

const features = [
  {
    title: 'Easy Create',
    description: 'Instantly generate high-performance short links with a single click or through our surgical API endpoints.',
    icon: Zap,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    accent: 'bg-blue-300',
  },
  {
    title: 'Custom Slugs',
    description: 'Maintain brand authority with readable, custom link endings that resonate with your digital audience.',
    icon: Link2,
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    accent: 'bg-indigo-300',
  },
  {
    title: 'Team Ready',
    description: 'Collaborate across departments with shared workspaces, permissions, and unified analytics dashboards.',
    icon: Users,
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    accent: 'bg-orange-300',
  },
];

function Features() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-sm font-bold tracking-[0.25em] uppercase text-blue-600">Architectural Features</span>

        <h2 className="mt-4 text-4xl font-bold text-slate-900">Built for Enterprise Precision</h2>

        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${feature.iconBg}`}>
                  <Icon size={20} className={feature.iconColor} />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-slate-900">{feature.title}</h3>

                <p className="mt-4 text-slate-500 leading-8">{feature.description}</p>

                <div className={`w-10 h-1 rounded-full mt-8 ${feature.accent}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
