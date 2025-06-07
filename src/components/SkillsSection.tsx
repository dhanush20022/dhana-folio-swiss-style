
import { Card } from "@/components/ui/card";

const SkillsSection = () => {
  const skills = [
    {
      category: "Low-Code Platforms",
      items: ["Pega PRPC", "Pega Marketing", "Pega Customer Service", "Decision Management"]
    },
    {
      category: "AI & Machine Learning",
      items: ["Generative AI", "Natural Language Processing", "Machine Learning", "AI Ethics"]
    },
    {
      category: "Architecture & Design",
      items: ["Enterprise Architecture", "System Design", "API Design", "Microservices"]
    },
    {
      category: "Technologies",
      items: ["Java", "Python", "REST APIs", "Cloud Platforms", "DevOps"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-light mb-16 text-center tracking-tight">
          Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-medium mb-4 text-foreground">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
