import { useNavigate } from 'react-router';

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_50%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-32">
        <div className="mx-auto w-full max-w-5xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Enterprise Link Management
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Shorten URLs.
            <br />
            <span className="text-blue-600">Share With Confidence.</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-500 sm:text-lg">
            Create branded short links, track engagement, and manage every URL from a single powerful platform designed for teams and modern
            businesses.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() => navigate('/dashboard')}
              className="
                rounded-2xl
                bg-blue-600
                px-8
                py-4
                font-semibold
                text-white
                shadow-lg
                shadow-blue-200
                transition-all
                hover:-translate-y-1
                hover:bg-blue-700
              "
            >
              Get Started
            </button>

            <button
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-8
                py-4
                font-semibold
                text-slate-700
                transition-all
                hover:border-slate-300
                hover:shadow-md
              "
            >
              Learn More
            </button>
          </div>

          {/* Demo Form */}
          <div className="mx-auto mt-16 max-w-4xl">
            <div
              className="
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-4
                shadow-[0_30px_60px_-15px_rgba(15,23,42,0.12)]
              "
            >
              <form className="flex flex-col gap-3 lg:flex-row">
                <input
                  type="url"
                  placeholder="https://very-long-architectural-url.com/asset-id-99238-x1"
                  className="
                    flex-1
                    rounded-2xl
                    border
                    border-slate-100
                    px-5
                    py-4
                    text-slate-600
                    outline-none
                    transition
                    focus:border-blue-300
                  "
                />

                <button
                  type="submit"
                  onClick={() => navigate('/dashboard')}
                  className="
                    rounded-2xl
                    bg-blue-600
                    px-8
                    py-4
                    font-semibold
                    text-white
                    transition-all
                    hover:bg-blue-700
                  "
                >
                  Shorten URL
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
