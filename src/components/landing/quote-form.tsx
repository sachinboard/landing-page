import { useRef, useState } from "react";
import { CheckCircle2, Loader2, ShieldCheck } from "lucide-react";

import { supabase } from "@/integrations/supabase/client";
import {
  BUDGET_OPTIONS,
  BUSINESS,
  SIGNAGE_OPTIONS,
  TIMELINE_OPTIONS,
} from "@/lib/business";
import { getAttribution, trackEvent } from "@/lib/tracking";
import { PhoneLink, WhatsAppButton } from "@/components/landing/cta";
import { cn } from "@/lib/utils";

type Field =
  | "fullName"
  | "phone"
  | "businessName"
  | "signageRequirement"
  | "businessLocation"
  | "email"
  | "timeline"
  | "budget";

type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;

const EMPTY: Values = {
  fullName: "",
  phone: "",
  businessName: "",
  signageRequirement: "",
  businessLocation: "",
  email: "",
  timeline: "",
  budget: "",
};

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (values.fullName.trim().length < 2) errors.fullName = "Please enter your full name.";
  const digits = values.phone.replace(/\D/g, "");
  if (digits.length < 10) errors.phone = "Enter a valid phone number with at least 10 digits.";
  if (values.businessName.trim().length < 2) errors.businessName = "Please enter your business name.";
  if (!values.signageRequirement) errors.signageRequirement = "Please select what you need.";
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Enter a valid email address, or leave this blank.";
  return errors;
}

const inputClass =
  "mt-1.5 block w-full rounded-md border border-input bg-background px-3 py-3 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-brand-deep focus:outline-none";

export function QuoteForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const startedRef = useRef(false);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const openedAtRef = useRef(Date.now());

  function update(field: Field, value: string) {
    if (!startedRef.current) {
      startedRef.current = true;
      trackEvent("quote_form_started");
    }
    setValues((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting" || status === "success") return;

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const first = document.getElementById(Object.keys(nextErrors)[0]!);
      first?.focus();
      return;
    }

    // Spam protection: hidden honeypot field + minimum time-on-form.
    if (honeypotRef.current?.value || Date.now() - openedAtRef.current < 2500) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    trackEvent("quote_form_submitted", { requirement: values.signageRequirement });

    const attribution = getAttribution();
    const { error } = await supabase.from("quote_leads").insert({
      full_name: values.fullName.trim(),
      phone: values.phone.trim(),
      business_name: values.businessName.trim(),
      signage_requirement: values.signageRequirement,
      business_location: values.businessLocation.trim() || null,
      email: values.email.trim() || null,
      project_timeline: values.timeline || null,
      budget_range: values.budget || null,
      page_url: window.location.href,
      referrer: document.referrer || null,
      ...attribution,
    });

    if (error) {
      console.error(error);
      setStatus("error");
      return;
    }

    setStatus("success");
    trackEvent("lead_success", { requirement: values.signageRequirement });
  }

  if (status === "success") {
    return (
      <section id="quote" className="bg-background">
        <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 md:py-24">
          <CheckCircle2 aria-hidden="true" className="mx-auto size-14 text-brand-deep" />
          <h2 className="font-display mt-5 text-3xl sm:text-4xl" role="status">
            Thank you — your request is in
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Our team will get in touch on the phone number you shared to understand your signage
            requirement and prepare a quotation. If it is urgent, message or call us directly.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton location="success_screen" variant="dark" className="px-6 py-3.5 text-base" />
            <PhoneLink location="success_screen" className="px-4 py-3 text-base text-ink" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
        <h2 className="font-display text-3xl sm:text-4xl">
          Get a Custom Quote for Your Business Signage
        </h2>
        <p className="mt-4 text-base text-muted-foreground">
          Tell us what you need and our professional team will call you for tele-consultation and a free quotation.
          Takes under a minute.
        </p>
        <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-brand-deep">
          <ShieldCheck aria-hidden="true" className="size-4 shrink-0" />
          ISO 9001:2005 certified · 5-year warranty · 2,000+ projects delivered
        </p>

        <form onSubmit={handleSubmit} noValidate className="mt-8 grid gap-5 sm:grid-cols-2">
          <TextField
            id="fullName"
            label="Full name"
            required
            autoComplete="name"
            value={values.fullName}
            error={errors.fullName}
            onChange={(value) => update("fullName", value)}
          />
          <TextField
            id="phone"
            label="Phone number"
            required
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="10-digit mobile number"
            value={values.phone}
            error={errors.phone}
            onChange={(value) => update("phone", value)}
          />
          <TextField
            id="businessName"
            label="Business name"
            required
            autoComplete="organization"
            value={values.businessName}
            error={errors.businessName}
            onChange={(value) => update("businessName", value)}
          />
          <SelectField
            id="signageRequirement"
            label="Signage requirement"
            required
            placeholder="Select the type of signage"
            options={[...SIGNAGE_OPTIONS]}
            value={values.signageRequirement}
            error={errors.signageRequirement}
            onChange={(value) => update("signageRequirement", value)}
          />
          <TextField
            id="businessLocation"
            label="Business location"
            optional
            placeholder="Area / city"
            autoComplete="address-level2"
            value={values.businessLocation}
            onChange={(value) => update("businessLocation", value)}
          />
          <TextField
            id="email"
            label="Email"
            optional
            type="email"
            inputMode="email"
            autoComplete="email"
            value={values.email}
            error={errors.email}
            onChange={(value) => update("email", value)}
          />
          <SelectField
            id="timeline"
            label="Project timeline"
            optional
            placeholder="Select a timeline"
            options={[...TIMELINE_OPTIONS]}
            value={values.timeline}
            onChange={(value) => update("timeline", value)}
          />
          <SelectField
            id="budget"
            label="Budget range"
            optional
            placeholder="Select a budget range"
            options={[...BUDGET_OPTIONS]}
            value={values.budget}
            onChange={(value) => update("budget", value)}
          />

          {/* Honeypot — hidden from users, filled only by bots. */}
          <div aria-hidden="true" className="hidden">
            <label htmlFor="company_website">Company website</label>
            <input
              ref={honeypotRef}
              id="company_website"
              name="company_website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="sm:col-span-2">
            {status === "error" && (
              <p role="alert" className="mb-4 rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                Sorry, we couldn&apos;t send your request just now. Please try again, or message us on
                WhatsApp at {BUSINESS.phoneDisplay}.
              </p>
            )}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand px-6 py-4 text-base font-bold text-brand-foreground transition-colors hover:bg-brand/85 disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
            >
              {status === "submitting" && (
                <Loader2 aria-hidden="true" className="size-4 animate-spin" />
              )}
              {status === "submitting" ? "Sending…" : "Get a Free Quote"}
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              We use your details only to contact you about this signage enquiry.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

function FieldLabel({
  id,
  label,
  required,
  optional,
}: {
  id: string;
  label: string;
  required?: boolean | undefined;
  optional?: boolean | undefined;
}) {
  return (
    <label htmlFor={id} className="block text-sm font-bold text-ink">
      {label}
      {required && (
        <span className="text-destructive" aria-hidden="true">
          {" "}
          *
        </span>
      )}
      {optional && <span className="font-normal text-muted-foreground"> (optional)</span>}
    </label>
  );
}

function TextField({
  id,
  label,
  value,
  onChange,
  error,
  required,
  optional,
  ...rest
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string | undefined;
  required?: boolean | undefined;
  optional?: boolean | undefined;
  type?: string | undefined;
  inputMode?: "tel" | "email" | "text" | undefined;
  placeholder?: string | undefined;
  autoComplete?: string | undefined;
}) {
  return (
    <div className="min-w-0">
      <FieldLabel id={id} label={label} required={required} optional={optional} />
      <input
        id={id}
        name={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(inputClass, error && "border-destructive")}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  placeholder,
  error,
  required,
  optional,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
  error?: string | undefined;
  required?: boolean | undefined;
  optional?: boolean | undefined;
}) {
  return (
    <div className="min-w-0">
      <FieldLabel id={id} label={label} required={required} optional={optional} />
      <select
        id={id}
        name={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(inputClass, !value && "text-muted-foreground", error && "border-destructive")}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option} className="text-foreground">
            {option}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
