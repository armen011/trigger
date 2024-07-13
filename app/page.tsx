import FirstSection from "./Components/FirstSection";
import SecondSection from "./Components/SecondSection";
import ThirdSection from "./Components/ThirdSection";

const HomePage = () => {
  return (
    <main className="w-full flex flex-col">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </main>
  );
};
export default HomePage;
