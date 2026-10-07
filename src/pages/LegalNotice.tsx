import { PageLayout } from "@/components/layout/PageLayout";

export default function LegalNotice() {
  return (
    <PageLayout>
      <article className="container-prose py-16 md:py-24 space-y-8">
        <h1>Impressum</h1>
        <section className="space-y-3">
          <h2>Website operator</h2>
          <p>Yee, Jingye</p>
          <p>Neuhäuser Str. 68D<br />33102 Paderborn<br />Germany</p>
          <p><a className="underline underline-offset-4" href="mailto:yeejingye@gmail.com">yeejingye@gmail.com</a></p>
        </section>
      </article>
    </PageLayout>
  );
}
