ALTER TABLE public.quote_leads ADD COLUMN IF NOT EXISTS size_ft text;
ALTER TABLE public.quote_leads ALTER COLUMN phone DROP NOT NULL;

DROP POLICY IF EXISTS "Anyone can submit a quote request" ON public.quote_leads;

CREATE POLICY "Anyone can submit a quote request"
  ON public.quote_leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(trim(full_name)) BETWEEN 2 AND 120
    AND (phone IS NULL OR length(trim(phone)) BETWEEN 8 AND 20)
    AND length(trim(business_name)) BETWEEN 2 AND 160
    AND length(trim(signage_requirement)) BETWEEN 2 AND 120
    AND (size_ft IS NULL OR length(trim(size_ft)) <= 60)
  );