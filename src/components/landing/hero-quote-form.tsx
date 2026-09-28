import { useRef, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

import { supabase } from "@/integrations/supabase/client";
import { HERO_SIGNAGE_TYPES } from "@/lib/business";
import { getAttribution, trackEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";

type Field = "fullName" | "phone" | "email" | "brand" | "size" | "signageType";
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>> & { terms?: string | undefined };

const EMPTY: Values = { fullName: "", phone: "", email: "", brand: "", size: "", signageType: "" };

const fieldClass =
  "mt-1.5 block w-full rounded-md border border-input bg-background px-3 py-2.5 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-brand-deep focus:outline-none";
const labelClass = "block text-sm font-bold text-ink";

export function HeroQuoteForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [accepted, setAccepted] = useState(true);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const startedRef = useRef(false);
  const honeypotRef = useRef<HTMLInputElement>(null);

  function update(field: Field, value: string) {
    if (!startedRef.current) {
      startedRef.current = true;
      trackEvent("quote_form_started", { location: "hero_form" });
    }
    setValues((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting" || status === "success") return;

    const next: Errors = {};
    if (values.fullName.trim().length < 2) next.fullName = "Please enter your name.";
    const digits = values.phone.replace(/\D/g, "");
    if (digits.length < 10 || values.phone.trim().length > 20)
      next.phone = "Enter a valid phone number with at least 10 digits.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next.email = "Enter a valid email address.";
    if (values.brand.trim().length < 2) next.brand = "Please enter your brand name.";
    if (!values.signageType) next.signageType = "Please choose a signage type.";
    if (!accepted) next.terms = "Please accept the terms and conditions to continue.";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const firstField = Object.keys(next)[0]!;
      document.getElementById(firstField === "terms" ? "heroTerms" : `hero-${firstField}`)?.focus();
      return;
    }

    if (honeypotRef.current?.value) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    trackEvent("quote_form_submitted", {
      location: "hero_form",
      requirement: values.signageType,
    });

    const { error } = await supabase.from("quote_leads").insert({
      full_name: values.fullName.trim(),
      phone: values.phone.trim(),
      email: values.email.trim(),
      business_name: values.brand.trim(),
      signage_requirement: values.signageType,
      size_ft: values.size.trim() || null,
      page_url: window.location.href,
      referrer: document.referrer || null,
      ...getAttribution(),
    });

    if (error) {
      console.error(error);
      setStatus("error");
      return;
    }

    setStatus("success");
    trackEvent("lead_success", { location: "hero_form", requirement: values.signageType });
  }

  if (status === "success") {
    return (
      <div className="rounded-xl bg-background p-6 text-center shadow-2xl sm:p-8">
        <CheckCircle2 aria-hidden="true" className="mx-auto size-12 text-brand-deep" />
        <h2 className="font-display mt-4 text-2xl text-ink" role="status">
          Thank you - your request is in
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Our team will review your requirement and get back to you with advice and a quotation.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-background p-5 shadow-2xl sm:p-6">
      <h2 className="font-display text-xl text-ink sm:text-2xl">Get a Quote</h2>
      <p className="mt-1.5 text-sm text-muted-foreground">
        Share a few details and we will come back with pricing and design advice.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="min-w-0 sm:col-span-2">
          <label htmlFor="hero-fullName" className={labelClass}>
            Name <span className="text-destructive">*</span>
          </label>
          <input
            id="hero-fullName"
            name="fullName"
            autoComplete="name"
            value={values.fullName}
            onChange={(event) => update("fullName", event.target.value)}
            aria-invalid={errors.fullName ? true : undefined}
            aria-describedby={errors.fullName ? "hero-fullName-error" : undefined}
            className={cn(fieldClass, errors.fullName && "border-destructive")}
          />
          <FieldError id="hero-fullName-error" message={errors.fullName} />
        </div>

        <div className="min-w-0 sm:col-span-2">
          <label htmlFor="hero-phone" className={labelClass}>
            Phone number <span className="text-destructive">*</span>
          </label>
          <input
            id="hero-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="10-digit mobile number"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? "hero-phone-error" : undefined}
            className={cn(fieldClass, errors.phone && "border-destructive")}
          />
          <FieldError id="hero-phone-error" message={errors.phone} />
        </div>

        <div className="min-w-0 sm:col-span-2">
          <label htmlFor="hero-email" className={labelClass}>
            Email <span className="text-destructive">*</span>
          </label>
          <input
            id="hero-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "hero-email-error" : undefined}
            className={cn(fieldClass, errors.email && "border-destructive")}
          />
          <FieldError id="hero-email-error" message={errors.email} />
        </div>

        <div className="min-w-0">
          <label htmlFor="hero-brand" className={labelClass}>
            Brand <span className="text-destructive">*</span>
          </label>
          <input
            id="hero-brand"
            name="brand"
            autoComplete="organization"
            value={values.brand}
            onChange={(event) => update("brand", event.target.value)}
            aria-invalid={errors.brand ? true : undefined}
            aria-describedby={errors.brand ? "hero-brand-error" : undefined}
            className={cn(fieldClass, errors.brand && "border-destructive")}
          />
          <FieldError id="hero-brand-error" message={errors.brand} />
        </div>

        <div className="min-w-0">
          <label htmlFor="hero-size" className={labelClass}>
            Size (ft) <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <input
            id="hero-size"
            name="size"
            inputMode="text"
            placeholder="e.g. 8 x 3"
            value={values.size}
            onChange={(event) => update("size", event.target.value)}
            className={fieldClass}
          />
        </div>

        <div className="min-w-0 sm:col-span-2">
          <label htmlFor="hero-signageType" className={labelClass}>
            Type <span className="text-destructive">*</span>
          </label>
          <select
            id="hero-signageType"
            name="signageType"
            value={values.signageType}
            onChange={(event) => update("signageType", event.target.value)}
            aria-invalid={errors.signageType ? true : undefined}
            aria-describedby={errors.signageType ? "hero-signageType-error" : undefined}
            className={cn(
              fieldClass,
              !values.signageType && "text-muted-foreground",
              errors.signageType && "border-destructive",
            )}
          >
            <option value="">Select a type</option>
            {HERO_SIGNAGE_TYPES.map((option) => (
              <option key={option} value={option} className="text-foreground">
                {option}
              </option>
            ))}
          </select>
          <FieldError id="hero-signageType-error" message={errors.signageType} />
        </div>

        {/* Honeypot - hidden from users, filled only by bots. */}
        <div aria-hidden="true" className="hidden">
          <label htmlFor="hero_company_website">Company website</label>
          <input
            ref={honeypotRef}
            id="hero_company_website"
            name="hero_company_website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="heroTerms" className="flex items-start gap-2.5 text-sm text-ink">
            <input
              id="heroTerms"
              name="terms"
              type="checkbox"
              checked={accepted}
              onChange={(event) => {
                setAccepted(event.target.checked);
                setErrors((previous) => ({ ...previous, terms: undefined }));
              }}
              aria-invalid={errors.terms ? true : undefined}
              aria-describedby={errors.terms ? "hero-terms-error" : undefined}
              className="mt-0.5 size-4 shrink-0 accent-brand-deep"
            />
            <span>
              I agree to the terms and conditions and consent to being contacted about this signage
              enquiry. <span className="text-destructive">*</span>
            </span>
          </label>
          <FieldError id="hero-terms-error" message={errors.terms} />
        </div>

        <div className="sm:col-span-2">
          {status === "error" && (
            <p
              role="alert"
              className="mb-3 rounded-md bg-destructive/10 p-3 text-sm text-destructive"
            >
              Sorry, we couldn&apos;t send your request just now. Please try again or message us on
              WhatsApp.
            </p>
          )}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand px-6 py-3.5 text-base font-bold text-brand-foreground transition-colors hover:bg-brand/85 disabled:pointer-events-none disabled:opacity-60"
          >
            {status === "submitting" && <Loader2 aria-hidden="true" className="size-4 animate-spin" />}
            {status === "submitting" ? "Sending…" : "Get a Quote"}
          </button>
        </div>
      </form>
    </div>
  );
}

function FieldError({ id, message }: { id: string; message?: string | undefined }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-sm font-medium text-destructive">
      {message}
    </p>
  );
}
