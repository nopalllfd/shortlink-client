import { Zap, Link2, Users } from 'lucide-react';

const features = [
  {
    title: 'Easy Create',
    description: 'Instantly generate high-performance short links with a single click or through our API.',
    image: '/assets/features/create.svg',
    accent: 'bg-blue-500',
    glow: 'bg-blue-400',
  },
  {
    title: 'Custom Slugs',
    description: 'Maintain brand authority with readable and memorable custom URLs.',
    image: '/assets/features/slug.svg',
    accent: 'bg-indigo-500',
    glow: 'bg-indigo-400',
  },
  {
    title: 'Team Ready',
    description: 'Collaborate with your entire organization through shared workspaces.',
    image: '/assets/features/teamup.svg',
    accent: 'bg-orange-500',
    glow: 'bg-orange-400',
  },
];
function Features() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-32">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Architectural Features
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">Built for Enterprise Precision</h2>

          <p className="mt-6 text-lg leading-8 text-slate-500">
            Everything you need to create, manage, and analyze links with exceptional speed, reliability, and complete operational control.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                className="
    group
    relative
    overflow-hidden
    rounded-3xl
    border
    border-slate-200
    bg-white
    p-8
    transition-all
    duration-500
    hover:-translate-y-2
    hover:shadow-[0_30px_60px_-15px_rgba(15,23,42,0.15)]
  "
              >
                {/* Glow */}
                <div
                  className={`
      absolute
      -top-20
      -right-20
      h-48
      w-48
      rounded-full
      blur-3xl
      opacity-10
      ${feature.glow}
    `}
                />

                {/* Number */}
                <span className="absolute top-8 right-8 text-sm font-bold text-slate-200">0{index + 1}</span>

                {/* SVG Illustration */}
                <div className="relative z-10 flex justify-center">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="
        h-40
        object-contain
        transition-transform
        duration-500
        group-hover:scale-105
      "
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 mt-8">
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900">{feature.title}</h3>

                  <p className="mt-4 leading-8 text-slate-500">{feature.description}</p>

                  <div className="mt-8 flex items-center gap-3">
                    <div className={`h-1.5 w-12 rounded-full ${feature.accent}`} />

                    <span className="text-sm font-medium text-slate-400">Learn More</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
