const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="h-screen bg-[url('/background.png')] bg-cover flex justify-end">
      {children}
    </main>
  );
};

export default AuthLayout;
