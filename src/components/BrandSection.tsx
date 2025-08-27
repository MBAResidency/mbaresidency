const BrandSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            MBA
          </h2>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Mind Body Aaram
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default BrandSection;