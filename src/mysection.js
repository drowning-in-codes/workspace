import Myheading from "./myHeading";
import Section from "./Section";

export default function Page() {
  return (
    <section>
      <Section>
        <Myheading level={1}>1 level heading</Myheading>
        <Myheading level={1}>1 level heading</Myheading>
      </Section>
      <Section>
        <Myheading level={2}>2 level heading</Myheading>
        <Myheading level={2}>2 level heading</Myheading>
      </Section>
    </section>
  );
}
