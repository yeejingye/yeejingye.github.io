import { PageLayout } from "@/components/layout/PageLayout";
import { PersonalArchive } from "@/components/archive/PersonalArchive";
import { EducationList } from "@/components/education/EducationList";
import { education } from "@/utils/education";
import { WorkList } from "@/components/work/WorkList";
import { work } from "@/utils/work";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container-prose">
          <h1 className="animate-fade-up">About Me</h1>
        </div>
      </section>

      {/* Who I Am */}
      <section className="pb-16 md:pb-24">
        <div className="container-prose space-y-8">
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
            <p className="text-lg leading-relaxed">
              I’m Yee Jingye (庾敬業), from a small city called Temerloh in Malaysia 🇲🇾. 
              A child of God, saved by grace through faith.
            </p>
            <p className="text-lg leading-relaxed">
              I’m currently a researcher at Fraunhofer IEM in Germany, working on applied AI
              and advanced systems engineering. I hold a PhD in mechanical engineering, with a dissertation focused 
              on applying machine learning to biomedical problems.
            </p>
            <p className="text-lg leading-relaxed">
              I’m driven by a deep curiosity about how things work and why they matter. My path spans 
              academic research, applied engineering, and quiet reflection, shaping how I approach 
              complex problems today.
            </p>
            <p className="text-lg leading-relaxed">
              I value patience, integrity, and the humility to keep learning—qualities I try to bring 
              to both technical work and everyday conversations.
            </p>
            <p className="text-lg leading-relaxed">
              Outside of work, I value depth over breadth and substance over appearance. I find meaning 
              in thoughtful books, inspiring films, long walks, and conversations that challenge my assumptions.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-prose">
        <hr className="border-border/50" />
      </div>

      {/* How I Think & Work */}
      <section className="py-16 md:py-24">
        <div className="container-prose space-y-8">
          <h2 className="text-muted-foreground font-normal">How I Think & Work</h2>
          
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              My approach to research starts with asking what lies beneath the problem at hand. I believe many
              challenges are symptoms rather than root causes, and that meaningful solutions require patience,
              careful analysis, and a willingness to slow down before acting. Practical impact matters more to
              me than theory alone, and I favour steady, iterative progress over over-optimisation.
            </p>

            <p className="text-lg leading-relaxed">
              I care deeply about the broader impact of technology on society. Development without inner human
              development is incomplete—a perspective reflected in models that value human well-being alongside
              technical and economic progress. In collaboration, I’m a quiet specialist: I listen first, look
              for gaps I can fill, and value clear communication and sincerity over forceful opinions.
            </p>
            <p className="text-lg leading-relaxed">
              I don’t expect to be fully understood. What matters to me is sincerity—in intent, in dialogue,
              and in the work itself.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-prose">
        <hr className="border-border/50" />
      </div>

      {/* Work Experience */}
      <section className="py-16 md:py-24">
        <div className="container-prose space-y-8">
          <h2 className="text-muted-foreground font-normal">Work Experience</h2>
          <WorkList items={work} />
        </div>
      </section>

      {/* Divider */}
      <div className="container-prose">
        <hr className="border-border/50" />
      </div>

      {/* Education */}
      <section className="py-16 md:py-24">
        <div className="container-prose space-y-8">
          <h2 className="text-muted-foreground font-normal">Education</h2>
          <EducationList items={education} />
        </div>
      </section>

      {/* Divider */}
      <div className="container-prose">
        <hr className="border-border/50" />
      </div>

      {/* Personal Archive */}
      <div className="container-prose">
        <PersonalArchive />
      </div>

      {/* Divider */}
      <div className="container-prose">
        <hr className="border-border/50" />
      </div>

      {/* Closing */}
      <section className="py-16 md:py-24">
        <div className="container-prose space-y-8">
          <p className="font-serif text-xl italic text-muted-foreground leading-relaxed">
            If you've made it this far, perhaps there's something here that resonates. 
            I'd be glad to connect and learn about what drives your work.
          </p>
          
          <Button asChild variant="hero-outline" size="lg">
            <Link to="/contact">
              Let's Connect
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
