import GhlEstimateForm from "@/components/GhlEstimateForm";

interface LeadFormProps {
  heading?: string;
  subheading?: string;
  dark?: boolean;
}

export default function LeadForm({
  heading = "Get Your Free Estimate",
  subheading = "Tell us about your property and project. We will follow up to arrange a free, written estimate.",
  dark = true,
}: LeadFormProps) {
  const sectionClass = dark ? "bg-[#1A1A1A]" : "bg-[#F2F0ED]";
  const headingClass = dark ? "text-white" : "text-[#1A1A1A]";
  const subheadingClass = dark ? "text-white/75" : "text-muted";

  return (
    <section id="estimate-form" className={`${sectionClass} scroll-mt-20 py-16 md:py-20`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className={`mb-3 font-heading text-3xl font-extrabold md:text-4xl ${headingClass}`}>
            {heading}
          </h2>
          <p className={subheadingClass}>{subheading}</p>
        </div>
        <GhlEstimateForm className="shadow-xl ring-1 ring-black/5" />
      </div>
    </section>
  );
}
