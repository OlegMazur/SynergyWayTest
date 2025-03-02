export interface Company {
  id: string;
  ticker: string;
  name: string;
  lei: string | null;
  legal_name: string;
  stock_exchange: string;
  sic: number;
  short_description: string;
  long_description: string;
  ceo: string;
  company_url: string;
  business_address: string;
  mailing_address: string;
  business_phone_no: string;
  hq_address1: string;
  hq_address2: string | null;
  hq_address_city: string;
  hq_address_postal_code: string;
  entity_legal_form: string | null;
  cik: string;
  latest_filing_date: string; // ISO формат (YYYY-MM-DD)
  hq_state: string;
  hq_country: string;
  inc_state: string;
  inc_country: string;
  employees: number;
  entity_status: string | null;
  sector: string;
  industry_category: string;
  industry_group: string;
  template: string;
  standardized_active: boolean;
  first_fundamental_date: string; // ISO формат (YYYY-MM-DD)
  last_fundamental_date: string; // ISO формат (YYYY-MM-DD)
  first_stock_price_date: string; // ISO формат (YYYY-MM-DD)
  last_stock_price_date: string; // ISO формат (YYYY-MM-DD)
  thea_enabled: boolean;
  legacy_sector: string;
  legacy_industry_category: string;
  legacy_industry_group: string;
}
