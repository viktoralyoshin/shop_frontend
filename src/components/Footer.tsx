import Image from 'next/image';
const Footer = () => {
  return (
    <section className="flex items-center w-full h-10 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Image src="/logo.svg" alt="logo" width={48} height={48} />
        <h1 className="text-2xl font-semibold">Shop</h1>
      </div>
    </section>
  );
};

export default Footer;
