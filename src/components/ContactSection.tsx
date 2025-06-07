
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-light mb-16 text-center tracking-tight">
          Let's Connect
        </h2>
        <Card className="p-8 md:p-12 text-center">
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in discussing new opportunities, innovative projects, 
            or simply connecting with fellow technologists. Let's explore how we can 
            create something remarkable together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="px-8 py-3 text-base hover:scale-105 transition-all duration-200"
              onClick={() => window.open("mailto:dhana.sekhar@example.com")}
            >
              Send Email
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-base hover:scale-105 transition-all duration-200"
              onClick={() => window.open("https://linkedin.com", "_blank")}
            >
              LinkedIn Profile
            </Button>
          </div>
        </Card>
        <div className="text-center mt-12 text-muted-foreground">
          <p className="font-mono text-sm">
            © 2024 Dhana Sekhar Dandugula. Built with precision and care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
