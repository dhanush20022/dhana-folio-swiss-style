
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-light mb-16 text-center tracking-tight">
          About Me
        </h2>
        <Card className="p-8 md:p-12 hover:shadow-lg transition-shadow duration-300">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              I'm a certified Pega CSSA with a passion for transforming complex business 
              challenges into elegant, automated solutions. My expertise spans across 
              low-code platforms, Generative AI, and Natural Language Processing.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              With years of experience in enterprise automation, I've helped organizations 
              streamline their processes while maintaining the human touch that makes 
              technology truly meaningful. I believe in building systems that don't just 
              work—they inspire.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              When I'm not architecting solutions, you'll find me exploring the latest 
              developments in AI, mentoring fellow developers, or contributing to 
              open-source projects that push the boundaries of what's possible.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
