import { PageLayout } from "@/components/layout/PageLayout";

export default function Privacy() {
  return (
    <PageLayout>
      <article className="container-prose py-16 md:py-24 space-y-8 [&_h2]:text-2xl [&_a]:underline [&_a]:underline-offset-4">
        <header className="space-y-4">
          <h1>Privacy / Datenschutz</h1>
          <p className="text-sm text-muted-foreground">Last updated: 7 October 2026</p>
          <p>This notice explains how personal information is handled when you visit yeejingye.com or contact me.</p>
        </header>
        <section className="space-y-3">
          <h2>Who is responsible</h2>
          <p>Yee, Jingye<br />Neuhäuser Str. 68D<br />33102 Paderborn<br />Germany</p>
          <p>Jingye Yee (Yee, Jingye) is responsible for this personal portfolio. For privacy questions or requests, email <a href="mailto:yeejingye@gmail.com">yeejingye@gmail.com</a>.</p>
        </section>
        <section className="space-y-3">
          <h2>Hosting and technical data</h2>
          <p>This website is hosted on GitHub Pages, provided by GitHub, Inc., USA. Delivering a page necessarily involves processing your IP address and request information. GitHub states that it logs and stores visitors’ IP addresses for security purposes, including when visitors are not signed in.</p>
          <p>The purpose is to provide a reliable, secure website. The legal basis for processing for these purposes is Article 6(1)(f) GDPR: the legitimate interest in delivering and protecting this website. I do not receive a visitor analytics dashboard or individual hosting logs through this site.</p>
          <p>GitHub controls retention of its security logs. Its published Pages documentation does not specify a fixed retention period. Details of GitHub’s processing, retention criteria and international transfer safeguards are available in the <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">GitHub Privacy Statement</a>. Hosting may involve processing outside the European Economic Area.</p>
        </section>
        <section className="space-y-3">
          <h2>Cookies, analytics and fonts</h2>
          <p>This website does not load Google Analytics, advertising tags or tracking pixels. The application does not set cookies or use local storage for visitor tracking. Fonts, images and application assets are served from this website rather than requested from Google Fonts.</p>
          <p>No optional tracking is offered, so there is no analytics consent banner. Ordinary hosting requests and security logs still occur as described above.</p>
        </section>
        <section className="space-y-3">
          <h2>When you contact me</h2>
          <p>Email links open your email application; this website has no contact form. If you email me, I process your email address, your message and any information you choose to include to answer your enquiry. My published contact address uses Google’s Gmail service, so correspondence is also processed by my email provider.</p>
          <p>The legal basis is Article 6(1)(f) GDPR, my legitimate interest in responding to correspondence, or Article 6(1)(b) when your enquiry concerns a contract or steps you request before a contract. Messages are kept for as long as needed to handle the enquiry and any follow-up, and longer only where legal retention requirements or the establishment, exercise or defence of legal claims require it. Please avoid sending unnecessary sensitive information.</p>
          <p>For Google’s processing and international transfer information, see <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google’s Privacy Policy</a> and <a href="https://policies.google.com/privacy/frameworks" target="_blank" rel="noopener noreferrer">data transfer frameworks</a>.</p>
        </section>
        <section className="space-y-3">
          <h2>External links</h2>
          <p>Links to publications, LinkedIn, GitHub, Google Scholar and Spotify are ordinary links, not embedded widgets. Those services are contacted when you follow a link and have their own privacy policies. This site limits referrer information sent to other websites to its origin.</p>
        </section>
        <section className="space-y-3">
          <h2>Your rights</h2>
          <p>Subject to the conditions in the GDPR, you may request access to, correction or deletion of your personal data, restriction of processing and data portability. You may object to processing based on legitimate interests on grounds relating to your particular situation. Where processing is based on consent, you may withdraw that consent at any time without affecting earlier lawful processing.</p>
          <p>You can contact me at the address above. You may also lodge a complaint with a supervisory authority, particularly in the EU country of your habitual residence, workplace or the alleged infringement. German authorities are listed by the <a href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html" target="_blank" rel="noopener noreferrer">Federal Commissioner for Data Protection</a>.</p>
          <p>You are not required to provide personal information through a form to browse this site. Technical request information is needed to deliver pages. This website does not make automated decisions or profile visitors.</p>
        </section>
      </article>
    </PageLayout>
  );
}
