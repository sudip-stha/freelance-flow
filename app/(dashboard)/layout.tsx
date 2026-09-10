import Header from "@/components/layouts/Header";
import Aside from "@/components/layouts/Aside";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full bg-main-bg flex">
      <Aside />
      <div className="flex flex-col min-w-0 flex-1">
        <Header />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
