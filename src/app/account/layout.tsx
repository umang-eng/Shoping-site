import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import AccountNav from '@/components/layout/account-nav';

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12">
                <aside className="md:w-1/4 lg:w-1/5">
                    <AccountNav />
                </aside>
                <div className="flex-1">
                    {children}
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
