import { Check } from 'lucide-react';

function Descriptions() {
  const features = ['Geographic Distribution Maps', 'Device & Browser Breakdown', 'UTM Parameter Tracking'];

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(59,130,246,0.06),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Illustration */}
          <div className="order-1">
            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-slate-50
                p-6
                shadow-[0_30px_60px_-15px_rgba(15,23,42,0.12)]
              "
            >
              {/* Glow */}
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-400 opacity-10 blur-3xl" />

              <img
                src="/assets/description/analytics-dashboard.svg"
                alt="Analytics Dashboard"
                className="
                  relative
                  z-10
                  w-full
                  object-contain
                  transition-transform
                  duration-700
                  hover:scale-[1.02]
                "
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-2 max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Data Driven Insights
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Observe your link architecture in real-time.</h2>

            {/* Description */}
            <p className="mt-8 text-lg leading-8 text-slate-500">
              Every click is a valuable signal. Gain deep visibility into where your traffic originates, who is engaging with your content, and how
              your campaigns perform across different regions and devices.
            </p>

            {/* Features */}
            <ul className="mt-10 space-y-5">
              {features.map((item) => (
                <li
                  key={item}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-slate-100
                    bg-slate-50
                    p-4
                    transition-all
                    duration-300
                    hover:border-blue-100
                    hover:bg-white
                    hover:shadow-md
                  "
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                    <Check size={16} strokeWidth={3} />
                  </div>

                  <span className="font-medium text-slate-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Descriptions;
