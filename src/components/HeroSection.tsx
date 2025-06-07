
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-in">
          <div className="mb-8 flex justify-center">
            <Avatar className="h-32 w-32 md:h-40 md:w-40 ring-4 ring-primary/10">
              <AvatarImage 
                src="/lovable-uploads/d13e715e-7f15-40a8-9f53-859c717d49cc.png" 
                alt="Dhana Sekhar Dandugula"
                className="object-cover"
              />
              <AvatarFallback className="text-2xl md:text-3xl font-medium">
                DS
              </AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            Hi, I'm{" "}
            <span className="font-medium">Dhana Sekhar Dandugula</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Pega CSSA | GenAI Innovator | Low-Code Architect
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Building scalable, intelligent systems that merge automation with human insight.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="group px-8 py-3 text-base hover:scale-105 transition-all duration-200"
            >
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group px-8 py-3 text-base hover:scale-105 transition-all duration-200"
              onClick={() => window.open("https://linkedin.com", "_blank")}
            >
              Connect on LinkedIn
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
