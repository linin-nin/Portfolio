import Biography from "@/components/biography/Biography";
import Hero from "@/components/hero/hero";
import Bounded from "@/components/Bounded";

export default function Home() {
  return (
    <Bounded>
      <Hero/>
      <Biography/>
    </Bounded>
  );
}
