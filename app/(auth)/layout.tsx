

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-full flex items-center justify-center">{children}</div>
  );
}
