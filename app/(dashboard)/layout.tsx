import Header from "@/components/layouts/Header";
import Aside from "@/components/layouts/Aside";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full min-w-full bg-main-bg flex">
      <Aside />
      <div className="flex flex-col w-full">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}
