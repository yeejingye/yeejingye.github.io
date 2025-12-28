import { PageLayout } from "@/components/layout/PageLayout";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Activity, Database, Plane, Ruler } from "lucide-react";

const projects = [
  {
    title: "Automation of Airport Passenger Boarding Bridge",
    icon: <Plane className="h-4 w-4" />,
    description: "Prototype for automated passenger boarding bridge operation using multi-modal perception for obstacle and aircraft door detection, integrated with robotic actuation.",
    problem: "Conventional passenger boarding bridges rely heavily on manual operation due to safety-critical constraints and highly dynamic apron environments. Achieving reliable automation requires robust perception under varying weather and lighting conditions, accurate aircraft door localisation, and safe integration of perception outputs with robotic actuation on legacy infrastructure.",
    learning: "Perception accuracy alone is insufficient for real-world automation. Handling uncertainty, fusing heterogeneous sensor data, and addressing system-level safety constraints revealed the gap between benchmark computer vision performance and deployable robotic systems.",
    partners: [
      { name: "Paderborn University", logo: "upb.png", href: "https://www.uni-paderborn.de/en/" },
      { name: "Fraunhofer IEM", logo: "fhiem.png", href: "https://www.iem.fraunhofer.de/en.html" },
      { name: "Aerosoft", logo: "aerosoft.png", href: "https://www.aerosoft.com/en/" },
      { name: "Paderborn-Lippstadt Airport", logo: "pad.png", href: "https://www.airport-pad.com/en/" },
    ],
    techStack: [
      { name: "Python", logo: "python.png" },
      { name: "OpenCV", logo: "opencv.png" },
      { name: "Docker", logo: "docker.png" },
      { name: "YOLO", logo: "yolov8.png" },
      { name: "SAM Model" },
    ],
    tags: ["Sensor Fusion", "Computer Vision", "Robotics", "Automation", "Applied AI"],
  },
  {
    title: "Data Insights with Generative AI",
    icon: <Database className="h-4 w-4" />,
    description: "Automated pipeline for extracting structured data from legacy engineering test reports and enabling natural-language querying via a generative AI interface.",
    problem: "Engineering knowledge is often locked in legacy documents with inconsistent structure, making systematic reuse and analysis difficult. The core challenge is to reliably transform semi-structured textual data into a consistent database schema while preserving technical meaning, context, and traceability.",
    learning: "Data engineering and schema design proved as critical as extraction algorithms. Generative AI was only effective when grounded on a well-structured and curated database with explicit handling of ambiguities and domain-specific terminology.",
    partners: [],
    techStack: [
      { name: "Python", logo: "python.png" },
      { name: "PyMuPDF", logo: "pymupdf.png" },
      { name: "Vanna AI", logo: "vannaai.png" },
      { name: "OpenAI", logo: "openai.png" },
      { name: "Streamlit", logo: "streamlit.png" },
      { name: "SQLite", logo: "sqlite.png" },
    ],
    tags: ["NLP", "Data Engineering", "Generative AI", "Industrial AI"],
  },
  {
    title: "Generative AI Framework for CAD Modelling",
    icon: <Ruler className="h-4 w-4" />,
    description: "Research framework for converting natural-language specifications into parametric CAD models using large language models and structured evaluation.",
    problem: "Existing text-to-CAD approaches often fail due to ambiguous language input, limited parametric control, and insufficient evaluation of geometric and functional correctness. A structured framework is required to bridge linguistic intent and formal CAD representations.",
    learning: "Prompt clarification and constraint formalization were more critical than model size for reliable CAD generation. Meaningful evaluation required assessing geometric validity, parametric consistency, functional intent, and downstream engineering usability.",
    partners: [
      { name: "Paderborn University", logo: "upb.png", href: "https://www.uni-paderborn.de/en/" },
    ],
    techStack: [
      { name: "Python", logo: "python.png" },
      { name: "OpenAI", logo: "openai.png" },
      { name: "Agno", logo: "agno.jpg" },
      { name: "CADQuery", logo: "cadquery.png" },
      { name: "NiceGUI", logo: "nicegui.png" },
    ],
    tags: ["CAD Automation", "LLMs", "Engineering Design", "Research"],
  },
  {
    title: "Smart Diagnosis System for Upper Limb Spasticity",
    icon: <Activity className="h-4 w-4" />,
    description: "Clinically validated diagnostic support system integrating multi-modal physiological signals and machine learning for spasticity assessment.",
    problem: "Clinical assessment of upper limb spasticity relies heavily on subjective scales, leading to inter-rater variability and limited reproducibility. The challenge is to integrate heterogeneous physiological and biomechanical signals into a reliable and interpretable classification system that supports clinical judgment.",
    learning: "Clinical acceptance depended on interpretability and validation rather than accuracy alone. Multi-modal signal integration and classical machine learning improved robustness through close collaboration with physicians.",
    partners: [
      { name: "UTHM", logo: "uthm.png", href: "https://www.uthm.edu.my/en/" },
      { name: "UiTM", logo: "uitm.png", href: "https://uitm.edu.my/index.php/en" },
      { name: "innovationlabs.mys", logo: "innolabsmy.png" },
    ],
    techStack: [
      { name: "Python", logo: "python.png" },
      { name: "Pandas", logo: "pandas.png" },
      { name: "Scikit-Learn", logo: "scikitlearn.png" },
      { name: "SHAP", logo: "shap.png" },
      { name: "Qt", logo: "qt.png" },
    ],
    tags: ["Biomedical AI", "Machine Learning", "Clinical Decision Support"],
  },
];


const Projects = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-2xl space-y-4">
            <h1 className="animate-fade-up">Projects</h1>
            <p 
              className="text-lg text-muted-foreground animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              Work that matters to me—selected for depth, not volume. 
              Each project represents a genuine exploration of a problem I cared about solving.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 md:pb-32">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <ProjectCard
                  title={project.title}
                  icon={project.icon}
                  description={project.description}
                  problem={project.problem}
                  learning={project.learning}
                  partners={project.partners}
                  techStack={project.techStack}
                  tags={project.tags}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 border-t border-border/50">
        <div className="container-prose text-center">
          <p className="font-serif text-xl italic text-muted-foreground">
            "Show depth, not volume."
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            These projects represent what I've learned as much as what I've built.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects;
