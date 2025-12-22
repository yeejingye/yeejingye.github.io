import { PageLayout } from "@/components/layout/PageLayout";
import { ExternalLink } from "lucide-react";

const publications = [
  {
    year: "2025",
    title: "Real-time object detection and localization for airport aprons",
    venue: "Seventeenth International Conference on Digital Image Processing (ICDIP 2025)",
    note: "B. Wani, J. Yee, D. Eckertz, T. Seidenberg, R. Dumitrescu",
    link: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/13709/137091Y/Real-time-object-detection-and-localization-for-airport-aprons/10.1117/12.3072877.full",
  },
  {
    year: "2025",
    title: "Locally hosted conversational process mining for production data via graph-based retrieval-augmented generation (GraphRAG)",
    venue: "Journal of Mechanical Engineering (JMechE)",
    note: "S. Wu, C.Y. Low, J. Yee, T. Schmieg, Y.H.P. Manurung",
    link: "https://ir.uitm.edu.my/id/eprint/126913/1/126913.pdf",
  },
  {
    year: "2025",
    title: "Quantifying spasticity: developing a data-driven approach through the modified Ashworth scale and simulated spasticity model",
    venue: "Journal of Mechanical Engineering (JMechE)",
    note: "N.A. Othman, N.A. Che Zakaria, K. Johar, F.A. Hanapiah, N. Mohamad Hashim, C.Y. Low, J. Yee",
    link: "https://ir.uitm.edu.my/id/eprint/110093/1/110093.pdf",
  },
  {
    year: "2024",
    title: "Advancements in Spasticity Management: A Design Framework with PID Integration for Upper Limb Spasticity Training Device (ULSTraD)",
    venue: "2024 2nd International Conference on Mechatronics, Control and Robotics (ICMCR)",
    note: "N.A. Othman, N.A. Che Zakaria, C.Y. Low, N. Mohamad Hashim, K. Johar, M.A. Mohd Zohadi, J. Yee, F.A. Hanapiah",
    link: "https://ieeexplore.ieee.org/iel7/10481806/10481837/10481838.pdf",
  },
  {
    year: "2024",
    title: "ULSMeD: Assisted Measurement Device for Quantitative Evaluation of Upper Limb Spasticity",
    venue: "2024 2nd International Conference on Mechatronics, Control and Robotics (ICMCR)",
    note: "K. Johar, N.A. Che Zakaria, W.N. Wan Zakaria, N.A. Othman, C.Y. Low, J. Yee, N. Mohamad Hashim, F.A. Hanapiah",
    link: "https://ieeexplore.ieee.org/iel7/10481806/10481837/10481865.pdf",
  },
  {
    year: "2023",
    title: "Clinical Spasticity Assessment Assisted by Machine Learning Methods and Rule-Based Decision",
    venue: "Diagnostics",
    note: "J. Yee, C.Y. Low, N. Mohamad Hashim, N.A. Che Zakaria, K. Johar, N.A. Othman, H.H. Chieng, F.A. Hanapiah",
    link: "https://www.mdpi.com/2075-4418/13/4/739",
  },
  {
    year: "2022",
    title: "Quantifying the performance of wireless data acquisition system to assess upper limb spasticity",
    venue: "2022 IEEE 5th International Symposium in Robotics and Manufacturing Automation (ROMA)",
    note: "N.A. Othman, N.A. Che Zakaria, F.A. Hanapiah, N. Mohamad Hashim, K. Johar, C.Y. Low, J. Yee",
    link: "https://ieeexplore.ieee.org/abstract/document/9915667/",
  },
  {
    year: "2022",
    title: "Velocity-Dependent Analysis During Spasticity Assessment",
    venue: "2022 IEEE 5th International Symposium in Robotics and Manufacturing Automation (ROMA)",
    note: "K. Johar, N.A. Che Zakaria, F.A. Hanapiah, N. Mohamad Hashim, N.A. Othman, C.Y. Low, J. Yee",
    link: "https://ieeexplore.ieee.org/abstract/document/9915672/",
  },
  {
    year: "2022",
    title: "User Interface Design for Upper Limb Spasticity Smart Diagnosis System",
    venue: "Proceedings of the 11th International Conference on Robotics, Vision, Signal Processing and Power Applications: Enhancing Research and Innovation through the Fourth Industrial Revolution",
    note: "Z.Y. Hoe, C.Y. Low, J. Yee, C.T. Koh, N. Mohamad Hashim, F.A. Hanapiah, N.A. Che Zakaria, K. Johar, N.A. Othman",
    link: "https://link.springer.com/chapter/10.1007/978-981-16-8129-5_120",
  },
  {
    year: "2021",
    title: "Elucidating Factors Influencing Machine Learning Algorithm Prediction in Spasticity Assessment: A Prospective Cross Sectional Observational Study",
    venue: "Movement Disorders",
    note: "N. Mohamad Hashim, J. Yee, N.A. Othman, K. Johar, C.Y. Low, F.A. Hanapiah, N.A. Che Zakaria",
    link: "https://www.researchgate.net/profile/Armando-Armas-Salazar-2/publication/366385878_Role_of_the_Stereotactic_Dentatotomy_for_the_management_of_Movement_Disorders/links/639e125f095a6a7774396063/Role-of-the-Stereotactic-Dentatotomy-for-the-management-of-Movement-Disorders.pdf",
  },
  {
    year: "2021",
    title: "Systematic development of machine for abnormal muscle activity detection",
    venue: "2021 IEEE 17th International Conference on Automation Science and Engineering (CASE)",
    note: "J. Yee, C.Y. Low, N. Mohamad Hashim, F.A. Hanapiah, C.T. Koh, N.A. Che Zakaria, K. Johar, N.A. Othman",
    link: "https://ieeexplore.ieee.org/iel7/9551387/9551265/09551525.pdf",
  },
  {
    year: "2021",
    title: "Data-Driven Model for Upper Limb Spasticity Detection",
    venue: "International Journal of Integrated Engineering",
    note: "J. Yee, C.Y. Low, N. Mohamad Hashim, F.A. Hanapiah, W.S. Soh, N.A. Che Zakaria, M.N. Nemah, L. Asmar, M. Rabe, S. von Enzberg, R. Dumitrescu",
    link: "https://penerbit.uthm.edu.my/ojs/index.php/ijie/article/download/3800/4211",
  },
  {
    year: "2020",
    title: "Verification of Mathematical Model for Upper Limb Spasticity with Clinical Data",
    venue: "IOP Conference Series: Materials Science and Engineering",
    note: "J. Yee, C.Y. Low, P. Ong, W.S. Soh, F.A. Hanapiah, N.A. Che Zakaria, S. von Enzberg, L. Asmar, R.s Dumitrescu",
    link: "https://iopscience.iop.org/article/10.1088/1757-899X/824/1/012013/pdf",
  },
  {
    year: "2020",
    title: "Data science platform for smart diagnosis of upper limb spasticity",
    venue: "Procedia Manufacturing",
    note: "J. Yee, C.Y. Low, C.T. Koh, S. von Enzberg, M. Rabe, A. Wegel, L. Asmar, F.A. Hanapiah, N. Mohamad Hashim, N.A. Che Zakaria",
    link: "https://www.sciencedirect.com/science/article/pii/S2351978920321855/pdf?md5=877e77f624a0120cac4d2f07851deb5b&pid=1-s2.0-S2351978920321855-main.pdf",
  },
  {
    year: "2018",
    title: "PLC System to Optimize Training Device of Upper Limb Spasticity",
    venue: "Journal of Mechanical Engineering (JMechE)",
    note: "N.A. Othman, N.A. Che Zakaria, M.H. Mohd Ramli, F.A. Hanapiah, J. Yee, C.Y. Low, K. Takashi",
    link: "https://ir.uitm.edu.my/id/eprint/36333/1/36333.pdf",
  },
  {
    year: "2018",
    title: "Framework for the agile development of innovative Product-Service-Systems for existing physical rehabilitation systems",
    venue: "Procedia Manufacturing",
    note: "L. Asmar, M. Rabe, C.Y. Low, J. Yee, A. Kühn, R. Dumitrescu",
    link: "https://www.sciencedirect.com/science/article/pii/S2351978918305663/pdf?md5=ae79dd863ee765b2411f03c65ff96942&pid=1-s2.0-S2351978918305663-main.pdf",
  },
  {
    year: "2017",
    title: "Modelling and Control of Robotic Leg as Assistive Device",
    venue: "Journal of Physics: Conference Series",
    note: "J. Yee, B.A. Md Zain",
    link: "https://iopscience.iop.org/article/10.1088/1742-6596/914/1/012042/pdf",
  },
  {
    year: "2017",
    title: "System-level design of a cloud-based training device for upper limb spasticity rehabilitation",
    venue: "2017 IEEE 3rd International Symposium on Robotics and Manufacturing Automation (ROMA)",
    note: "J. Yee, C.Y. Low, F.A. Hanapiah, N.A. Che Zakaria, U. Mohammad, R. Abd Rahman",
    link: "https://ieeexplore.ieee.org/abstract/document/8231732/",
  },
  {
    year: "2017",
    title: "Specification of principle solution for a smart factory exemplified by active structure",
    venue: "2017 IEEE 3rd International Symposium on Robotics and Manufacturing Automation (ROMA)",
    note: "U. Mohammad, C.Y. Low, J. Yee, R. Abd Rahman",
    link: "https://ieeexplore.ieee.org/abstract/document/8231731/",
  },
];

const talks = [
  {
    year: "2024",
    title: "Industrie 4.0 & Digital Transformation",
    venue: "Innovation Lab, Universiti Tun Hussein Onn Malaysia",
    note: "Guest Lecture",
  },
];

const Publications = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-2xl space-y-4">
            <h1 className="animate-fade-up">Publications & Lectures</h1>
            <p 
              className="text-lg text-muted-foreground animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              Written and spoken contributions to the broader conversation. 
              Ideas shared with the hope they'll be useful to others.
            </p>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="pb-16 md:pb-24">
        <div className="container-wide">
          <h2 className="text-lg font-semibold mb-8">Publications</h2>
          
          <div className="space-y-1">
            {publications.map((pub, index) => (
              <a
                key={pub.title}
                href={pub.link}
                className="block py-5 border-b border-border/50 hover:bg-secondary/30 -mx-4 px-4 transition-colors group animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 50}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                  <span className="text-sm text-muted-foreground font-medium w-16 flex-shrink-0">
                    {pub.year}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2">
                      <h3 className="font-medium group-hover:text-primary transition-colors">
                        {pub.title}
                      </h3>
                      <ExternalLink className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {pub.venue}
                    </p>
                    {pub.note && (
                      <p className="text-xs text-primary mt-2 font-medium">
                        {pub.note}
                      </p>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Talks */}
      <section className="pb-20 md:pb-32">
        <div className="container-wide">
          <h2 className="text-lg font-semibold mb-8">Lectures & Presentations</h2>
          
          <div className="space-y-1">
            {talks.map((talk, index) => (
              <div
                key={talk.title}
                className="py-5 border-b border-border/50 animate-fade-up"
                style={{ animationDelay: `${(index + publications.length + 2) * 50}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                  <span className="text-sm text-muted-foreground font-medium w-16 flex-shrink-0">
                    {talk.year}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium">{talk.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {talk.venue}
                    </p>
                    {talk.note && (
                      <p className="text-xs text-primary mt-2 font-medium">
                        {talk.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Publications;
