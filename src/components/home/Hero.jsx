function Hero() {
  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="w-full max-w-5xl text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
          Shorten URLs. <span className="text-blue-600">Share Easily.</span>
        </h1>

        <p className="mt-6 text-slate-500 text-lg leading-8 max-w-3xl mx-auto">
          Create short, memorable links for your team communications.
          <br />
          Transform long, cumbersome URLs into powerful digital assets that drive engagement.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <button className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-200 hover:bg-blue-700 transition">
            Get Started
          </button>

          <button className="px-8 py-4 rounded-xl border border-slate-200 bg-white text-blue-600 font-semibold hover:bg-slate-50 transition">
            Learn More
          </button>
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl shadow-slate-200/60 p-4 max-w-3xl mx-auto">
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="url"
              placeholder="https://very-long-architectural-url.com/asset-id-99238-x1"
              className="flex-1 px-4 py-4 outline-none text-slate-500 placeholder:text-slate-400"
            />

            <button type="submit" className="px-8 py-4 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 transition">
              Shorten
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Hero;
