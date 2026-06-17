import { Check } from 'lucide-react';

function Descriptions() {
  const features = ['Geographic Distribution Maps', 'Device & Browser Breakdown', 'UTM Parameter Tracking'];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div>
            <img src="/assets/home/laptop.png" alt="Analytics Dashboard" className="w-full rounded-2xl shadow-2xl" />
          </div>

          {/* Content */}
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Data Driven Insights</p>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight text-slate-900">Observe your link architecture in real-time.</h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Every click is a data point. Our dashboard provides surgical precision into where your traffic originates, who is engaging, and how your
              team communications are performing across the globe.
            </p>

            <ul className="mt-10 space-y-5">
              {features.map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white">
                    <Check size={14} strokeWidth={3} />
                  </div>

                  <span className="text-lg font-medium text-slate-800">{item}</span>
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
