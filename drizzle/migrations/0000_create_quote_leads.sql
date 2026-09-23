CREATE TABLE public.quote_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  full_name text NOT NULL,
  phone text NOT NULL,
  business_name text NOT NULL,
  signage_requirement text NOT NULL,
  business_location text,
  email text,
  project_timeline text,
  budget_range text,
  page_url text,
  referrer text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  utm_term text,
  gclid text,
  fbclid text
);

GRANT INSERT ON public.quote_leads TO anon;
GRANT INSERT ON public.quote_leads TO authenticated;
GRANT ALL ON public.quote_leads TO service_role;

ALTER TABLE public.quote_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a quote request"
  ON public.quote_leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(trim(full_name)) BETWEEN 2 AND 120
    AND length(trim(phone)) BETWEEN 8 AND 20
    AND length(trim(business_name)) BETWEEN 2 AND 160
    AND length(trim(signage_requirement)) BETWEEN 2 AND 120
  );

CREATE INDEX quote_leads_created_at_idx ON public.quote_leads (created_at DESC);