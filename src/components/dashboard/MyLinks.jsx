import { Search, Link2, Copy, Trash2, Calendar, BarChart3, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

// import { useSelector } from "react-redux";

function MyLinks() {
  // Nanti ambil dari Redux
  // const { links, totalActive, currentPage, totalPages } = useSelector(
  //   (state) => state.link
  // );

  const totalActive = 124;
  const currentPage = 1;
  const totalPages = 5;

  const links = [
    {
      id: 1,
      shortUrl: 'shrt.lnk/aB3x9',
      originalUrl: 'https://www.architecturaldigest.com/story/modern-minimalist-home-design',
      clicks: '1.2K',
      createdAt: 'Oct 24, 2023',
    },
    {
      id: 2,
      shortUrl: 'shrt.lnk/v9Pq2',
      originalUrl: 'https://medium.com/design-ethics/the-future-of-headless-cms',
      clicks: '842',
      createdAt: 'Oct 21, 2023',
    },
    {
      id: 3,
      shortUrl: 'shrt.lnk/zR4t1',
      originalUrl: 'https://github.com/frameworks/modern-stack-documentation-guide',
      clicks: '2.4K',
      createdAt: 'Oct 19, 2023',
    },
    {
      id: 4,
      shortUrl: 'shrt.lnk/mL5k8',
      originalUrl: 'https://dribbble.com/shots/21435678-fintech-dashboard-concept',
      clicks: '341',
      createdAt: 'Oct 15, 2023',
    },
  ];

  return (
    <section className="max-w-3xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">My Links</h2>
          <p className="text-slate-500 mt-1">Manage and track your shortened digital assets.</p>
        </div>

        <div className="text-right">
          <p className="uppercase tracking-[0.2em] text-xs font-semibold text-slate-400">Total Active</p>
          <p className="text-4xl font-bold text-blue-600">{totalActive}</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-8">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

        <input
          type="text"
          placeholder="Search by name or URL..."
          className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-12 pr-12 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <Filter size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" />
      </div>

      {/* Links */}
      <div className="space-y-4">
        {links.map((link) => (
          <div key={link.id} className="bg-white border border-slate-200 rounded-2xl p-5 flex justify-between items-center">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <Link2 size={14} />
                {link.shortUrl}
              </div>

              <p className="mt-1 text-slate-500 truncate">{link.originalUrl}</p>

              <div className="flex items-center gap-4 mt-3 text-sm font-semibold tracking-wider text-slate-400 uppercase">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {link.createdAt}
                </span>

                <span className="flex items-center gap-1">
                  <BarChart3 size={14} />
                  {link.clicks} Clicks
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 ml-4">
              <button className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition">
                <Copy size={18} className="text-slate-600" />
              </button>

              <button className="text-slate-400 hover:text-red-500 transition">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-10">
        <button className="flex items-center gap-1 text-slate-500 hover:text-slate-700">
          <ChevronLeft size={16} />
          Prev Page
        </button>

        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-md bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">{currentPage}</span>

          <span className="text-slate-500">of</span>

          <span className="font-medium">{totalPages}</span>
        </div>

        <button className="flex items-center gap-1 text-slate-500 hover:text-slate-700">
          Next
          <ChevronRight size={16} />
        </button>
      </div>
    </section>
  );
}

export default MyLinks;
