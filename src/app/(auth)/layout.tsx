const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="h-screen bg-[url('/background.jpg')] bg-cover flex justify-end">
      {children}
    </main>
  );
};

export default AuthLayout;
