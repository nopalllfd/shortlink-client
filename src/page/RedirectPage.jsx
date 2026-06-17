import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { checkSlug } from '../redux/slice/linkSlice';
import { baseUrl } from '../utils/env';

function RedirectPage() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const processRedirect = async () => {
      try {
        await dispatch(checkSlug(slug)).unwrap();

        window.location.replace(`${baseUrl}/${slug}`);
      } catch (error) {
        console.log('Slug tidak valid (data.data false), masuk ke halaman notfound', error);
        navigate('/notfound', { replace: true });
      }
    };

    if (slug) {
      processRedirect();
    }
  }, [slug, dispatch, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 font-sans">
      <div className="w-full max-w-md rounded-2xl bg-white p-10 text-center shadow-md border border-slate-100">
        <div className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-blue-500"></div>

        <h2 className="mb-2 text-2xl font-semibold text-slate-800 tracking-tight">Menghubungkan...</h2>
        <p className="text-sm leading-relaxed text-slate-500">
          Mohon tunggu sebentar, kami sedang menyiapkan pengalihan aman ke halaman tujuan Anda.
        </p>
      </div>
    </div>
  );
}

export default RedirectPage;
