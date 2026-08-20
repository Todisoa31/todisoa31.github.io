import Navbar from '@/src/components/navbar';
import PageAccueil from '@/src/components/page';

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent font-sans">
      <Navbar />

      <main className="mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <PageAccueil />
      </main>
    </div>
  );
}
