interface Props {
  children: React.ReactNode;
}

const CardsContainer = ({ children }: Props) => {
  return (
    <section className="flex justify-center items-center flex-wrap gap-6 p-4">
      {children}
    </section>
  );
};

export default CardsContainer;
