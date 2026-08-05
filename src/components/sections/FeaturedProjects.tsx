import { getTranslations } from "next-intl/server";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { getFeaturedProjects } from "@/lib/data/projects";

export async function FeaturedProjects() {
  const t = await getTranslations("home.projects");
  const projects = await getFeaturedProjects();

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionTitle
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
          <Button href="/services" variant="outline" className="shrink-0">
            {t("cta")}
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm shadow-black/5"
            >
              <PlaceholderImage label={project.title} className="h-48 w-full" />
              <div className="flex flex-1 flex-col gap-3 p-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-olive">
                  {project.city}, {project.state}
                </span>
                <h3 className="font-heading text-lg font-semibold text-ink">
                  {project.title}
                </h3>
                <div className="mt-auto grid grid-cols-2 gap-3 border-t border-ink/10 pt-4 text-sm">
                  <div>
                    <p className="text-ink/50">{t("rentLabel")}</p>
                    <p className="font-heading font-semibold text-ink">
                      ${project.financials.monthlyRent.toLocaleString("en-US")}
                    </p>
                  </div>
                  <div>
                    <p className="text-ink/50">{t("yieldLabel")}</p>
                    <p className="font-heading font-semibold text-gold">
                      {project.financials.grossYield}%
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
