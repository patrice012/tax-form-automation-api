import { Tfield } from './declaration';

const inputs_fields = [
  {
    label: 'Name of payer',
    ref: 'payers_name',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit33-367',
    dataTestId: 'OSIEdit33-367',
  },
  {
    label: 'Identification number',
    ref: 'payers_tin',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit14-389-taxid',
    dataTestId: 'OSIEdit14-389-taxid',
  },
  {
    label: 'tax id dropdown',
    inputType: 'select',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]/div[1]/select[1]',
    id: 'OSIEdit14-389-taxid_choice',
    dataTestId: 'OSIEdit14-389-taxid_choice',
  },
  {
    label: 'Name control',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit15-391',
    dataTestId: 'OSIEdit15-391',
  },
  {
    label: 'Address',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit16-393',
    dataTestId: 'OSIEdit16-393',
  },
  {
    label: 'City',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit17-395',
    dataTestId: 'OSIEdit17-395',
  },
  {
    label: 'State',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[6]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit18-397',
    dataTestId: 'OSIEdit18-397',
  },
  {
    label: 'ZIP code',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit19-399',
    dataTestId: 'OSIEdit19-399',
  },
  {
    label: 'Phone number',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[8]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit20-401',
    dataTestId: 'OSIEdit20-401',
  },
  {
    label: '1=spouse, 2=allocate ("allocate" reserved for state refunds only)',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit31-24',
    dataTestId: 'OSIEdit31-24',
  },
  {
    label: 'If allocating, percentage to allocate to taxpayer (.xxxxxx)',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText10-19-33-34',
    dataTestId: 'OSICtrlE10-21-input',
  },
  {
    label: '1=delete this year, 2=delete next year',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit13-26',
    dataTestId: 'OSIEdit13-26',
  },
  {
    label: 'Total received (1)',
    ref: 'unemployment_compensation',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText3-63-81-82',
    dataTestId: 'OSICtrlE3-65-input',
  },
  {
    label: '2024 overpayment repaid',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText4-61-83-84',
    dataTestId: 'OSICtrlE4-68-input',
  },
  {
    label: 'Government program contributions reduction (non-itemizers)',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText40-59-85-86',
    dataTestId: 'OSICtrlE40-71-input',
  },
  {
    label: 'Income tax refunds, credits or offsets (2)',
    ref: 'state_or_local_income_tax_refunds_credits_offsets',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText33-150-185-186',
    dataTestId: 'OSICtrlE34-152-input',
  },
  {
    label: 'Refunds attributable to post-2023 ES/extension payments',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText7-148-187-188',
    dataTestId: 'OSICtrlE7-155-input',
  },
  {
    label: 'City or local income tax refund',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox7-165',
    dataTestId: 'OSICheckBox7-165',
  },
  {
    label: 'Property tax refunds',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText5-146-191-192',
    dataTestId: 'OSICtrlE5-158-input',
  },
  {
    label: 'Tax year for box 2 if not 2023 (3)',
    ref: 'box_2_tax_year',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[5]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText11-144-193-194',
    dataTestId: 'OSICtrlE11-161-input',
  },
  {
    label: 'Federal income tax withheld (4)',
    ref: 'federal_income_tax_withheld',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText6-43-195-196',
    dataTestId: 'OSICtrlE6-49-input',
  },
  {
    label: 'RTAA payments (5)',
    ref: 'RTAA_payments',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText43-41-197-198',
    dataTestId: 'OSICtrlE43-52-input',
  },
  {
    label: 'Federal taxable amount',
    ref: 'taxable_grants',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText12-124-133-134',
    dataTestId: 'OSICtrlE32-131-input',
  },
  {
    label: 'State taxable amount, if different (-1=none)',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText32-126-135-136',
    dataTestId: 'OSICtrlE12-128-input',
  },
  {
    label: 'Agriculture payments (7)',
    ref: 'agriculture_payments',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[6]/div[1]/section[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText45-92-111-112',
    dataTestId: 'OSICtrlE45-109-input',
  },
  {
    label: 'Agriculture payments are from a conservation reserve program',
    inputType: 'checkbox',
    ref: 'is_trade_or_business_income',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[6]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox5-103',
    dataTestId: 'OSICheckBox5-103',
  },
  {
    label: 'Market gain (9)',
    ref: 'market_gain',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[6]/div[1]/section[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText44-94-113-114',
    dataTestId: 'OSICtrlE44-106-input',
  },
  {
    label: 'Farm activity or number',
    inputType: 'select',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[6]/div[1]/section[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/select[1]',
    id: 'OSIEdit8-98-99',
    dataTestId: 'OSIEdit8-98-99',
  },
  {
    label: 'Box 2 is trade or business income (8)',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[7]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox3-46',
    dataTestId: 'OSICheckBox3-46',
  },
  {
    label: 'State income tax withheld',
    ref: 'state_tax_withheld',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText2-219-267-268',
    dataTestId: 'OSICtrlE2-225-input',
  },
  {
    label: "Payer's state identification number",
    ref: 'payers_state_number',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit9-223',
    dataTestId: 'OSIEdit9-223',
  },
  {
    label: 'State ID verified?',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox22-243',
    dataTestId: 'OSICheckBox22-243',
  },
  {
    label: 'Corrected',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox1-298',
    dataTestId: 'OSICheckBox1-298',
  },
  {
    label: 'Name',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit22-321',
    dataTestId: 'OSIEdit22-321',
  },
  {
    label: 'Address',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit23-323',
    dataTestId: 'OSIEdit23-323',
  },
  {
    label: 'Apartment number',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit21-319',
    dataTestId: 'OSIEdit21-319',
  },
  {
    label: 'City',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit24-325',
    dataTestId: 'OSIEdit24-325',
  },
  {
    label: 'State',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit25-327',
    dataTestId: 'OSIEdit25-327',
  },
  {
    label: 'ZIP code',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[3]/div[1]/section[1]/div[6]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit26-329',
    dataTestId: 'OSIEdit26-329',
  },
  {
    label: 'Foreign address',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[3]/div[1]/section[1]/div[7]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox17-332',
    dataTestId: 'OSICheckBox17-332',
  },
  {
    label: 'OSIEdit141-333',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[3]/div[1]/section[1]/div[8]/div[1]/section[1]/div[1]/div[1]/span[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit141-340',
    dataTestId: 'OSIEdit141-340',
  },
  {
    label: 'OSIEdit111-335',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[3]/div[1]/section[1]/div[8]/div[1]/section[1]/div[1]/div[1]/span[1]/div[2]/div[1]/div[1]/input[1]',
    id: 'OSIEdit111-342',
    dataTestId: 'OSIEdit111-342',
  },
  {
    label: 'Select dropdown',
    inputType: 'select',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[3]/div[1]/section[1]/div[8]/div[1]/section[1]/div[1]/div[1]/span[1]/div[3]/div[1]/div[1]/div[1]/select[1]',
    id: 'OSIEdit96-344-345',
    dataTestId: 'OSIEdit96-344-345',
  },
  {
    label: 'Account number',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit30-295',
    dataTestId: 'OSIEdit30-295',
  },
];
const fields = [...inputs_fields];

export function getInputFields() {
  const arr = fields.filter((field) => {
    if ((field as Tfield).ref) {
      return field;
    }
  });
  return arr;
}
