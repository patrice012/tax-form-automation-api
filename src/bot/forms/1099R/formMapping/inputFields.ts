const inputs_fields = [
  {
    label: "Name of payer",
    ref: "payers_name",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Federal identification number",
    ref: "payers_tin",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "tax id dropdown",
    inputType: "select",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]/div[1]/select[1]",
  },
  {
    label: "Street address",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "OSIEdit140-41",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[5]/div[1]/span[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "OSIEdit138-43",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[5]/div[1]/span[1]/div[2]/div[1]/div[1]/input[1]",
  },
  {
    label: "OSIEdit139-45",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[5]/div[1]/span[1]/div[3]/div[1]/div[1]/input[1]",
  },
  {
    label: "Foreign address",
    inputType: "checkbox",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[6]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "OSIEdit75-60",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/span[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "OSIEdit82-62",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/span[1]/div[2]/div[1]/div[1]/input[1]",
  },
  {
    label: "Select dropdown",
    inputType: "select",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/span[1]/div[3]/div[1]/div[1]/div[1]/select[1]",
  },
  {
    label: "Phone number",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[8]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Spouse",
    inputType: "checkbox",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "OSIEdit73-135",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(1) Gross distribution",
    ref: "gross_income",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "OSIEdit66-166",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(2a) Taxable amount",
    ref: "taxable_amount",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[5]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "OSIEdit67-168",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[5]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(2b) Taxable amount not determined",
    ref: "taxable_amount_not_determined",
    inputType: "checkbox",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[6]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Total distribution",
    ref: "total_distribution",
    inputType: "checkbox",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[6]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(3) Capital gain included in taxable amount",
    ref: "capital_gain",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[7]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "OSIEdit68-170",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[7]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(4) Federal income tax withheld",
    ref: "federal_income_tax_withheld",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[8]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "OSIEdit74-172",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[8]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label:
      "(5) Employee contributions/Designated Roth contributions or insurance premiums",
    ref: "employee_contributions_designated_roth_contributions_or_insurance_premiums",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[9]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "OSIEdit76-174",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[9]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(6) Net unrealized appreciation in securities",
    ref: "net_unrealized_appreciation_in_employers_securities",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[10]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "OSIEdit100-176",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[10]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(7) Distribution code #1 (Click on arrow to select from list)",
    ref: "distribution_code",
    inputType: "select",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[11]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/select[1]",
  },
  {
    label: "Select dropdown",
    inputType: "select",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[12]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/select[1]",
  },
  {
    label: "(7) IRA/SEP/SIMPLE",
    ref: "ira_sep_simple",
    inputType: "checkbox",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[13]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(8) Other distribution",
    ref: "other",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[14]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "OSIEdit91-149",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[15]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(9a) Total distribution percentage (.xxxx or 1=100%)",
    ref: "percentage_of_total_distribution",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[16]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(9b) Total employee contributions",
    ref: "total_employee_contributions",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[17]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "OSIEdit101-178",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[17]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(10) Amount allocable to IRR within 5 years",
    ref: "amount_allocable_to_IRR_within_5_years",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[18]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(11) First year of designated Roth contributions",
    ref: "first_year_of_desig_roth_contrib",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[19]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "OSIEdit133-280",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "OSIEdit134-282",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(14) State Tax Withheld [Override]",
    ref: "state_tax_withheld",
    custom: "table",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(15) St",
    inputType: "text",
    ref: "state",
    custom: "table",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[2]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(15) State Identification Number",
    inputType: "number",
    custom: "table",
    ref: "payers_state_number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[3]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(16) State Distribution [Override]",
    ref: "state_distribution",
    custom: "table",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[4]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(17) Local Tax Withheld [Override]",
    inputType: "number",
    ref: "local_tax_withheld",
    custom: "table",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[5]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(18) Name of Locality",
    inputType: "text",
    ref: "name_of_locality",
    custom: "table",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[6]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(19) Local Distribution [Override]",
    inputType: "number",
    ref: "local_distribution",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[7]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "State ID verified?",
    inputType: "checkbox",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[1]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Corrected",
    inputType: "checkbox",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "FATCA filing requirement",
    ref: "FATCA_filing_requirement",
    inputType: "checkbox",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Nonstandard (altered, typed or handwritten)",
    inputType: "checkbox",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Name of in care of addressee",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Name control [Override]",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Name",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[6]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Street address",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[6]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Apartment number",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[6]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "OSIEdit153-499",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[6]/div[1]/section[1]/div[4]/div[1]/span[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "OSIEdit151-501",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[6]/div[1]/section[1]/div[4]/div[1]/span[1]/div[2]/div[1]/div[1]/input[1]",
  },
  {
    label: "OSIEdit152-503",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[6]/div[1]/section[1]/div[4]/div[1]/span[1]/div[3]/div[1]/div[1]/input[1]",
  },
  {
    label: "Foreign address",
    inputType: "checkbox",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[6]/div[1]/section[1]/div[5]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "OSIEdit12-514",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[6]/div[1]/section[1]/div[6]/div[1]/section[1]/div[1]/div[1]/span[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "OSIEdit5-516",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[6]/div[1]/section[1]/div[6]/div[1]/section[1]/div[1]/div[1]/span[1]/div[2]/div[1]/div[1]/input[1]",
  },
  {
    label: "Select dropdown",
    inputType: "select",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[6]/div[1]/section[1]/div[6]/div[1]/section[1]/div[1]/div[1]/span[1]/div[3]/div[1]/div[1]/div[1]/select[1]",
  },
  {
    label: "Compensation not reported on 1099",
    inputType: "checkbox",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Employee performed services while residing in the U.S.",
    inputType: "checkbox",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[7]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Country code if work not performed while residing in the U.S.",
    inputType: "select",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[7]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/select[1]",
  },
  {
    label: "Foreign employer's tax identification number",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[7]/div[1]/section[1]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Account number",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[8]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Taxable amount (-1=none) (2a) [Override]",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[9]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Capital gain (included in box 2a) (-1=none) (3) [Override]",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[10]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]",
  },
];

const fields = [...inputs_fields];

type Tfield = {
  label: string;
  inputType: string;
  xpath?: string;
  ref?: string;
  custom?: string;
  fields?: {
    label: string;
    inputType: string;
    xpath: string;
  };
};

export function getInputFields() {
  const arr = fields.filter((field) => {
    if ((field as Tfield).ref) {
      return field;
    }
  });
  return arr;
}
