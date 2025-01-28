import { Tfield } from './declaration';

const inputs_fields = [
  {
    label: 'Name of payer',
    ref: 'payers_name',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit52-53',
    dataTestId: 'OSIEdit52-53',
  },
  {
    label: 'Federal identification number',
    ref: 'payers_tin',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit8-33-taxid',
    dataTestId: 'OSIEdit8-33-taxid',
  },
  {
    label: 'tax id dropdown',
    inputType: 'select',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]/div[1]/select[1]',
    id: 'OSIEdit8-33-taxid_choice',
    dataTestId: 'OSIEdit8-33-taxid_choice',
  },
  {
    label: 'Street address',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit11-39',
    dataTestId: 'OSIEdit11-39',
  },
  {
    label: 'OSIEdit140-41',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[5]/div[1]/span[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit140-41',
    dataTestId: 'OSIEdit140-41',
  },
  {
    label: 'OSIEdit138-43',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[5]/div[1]/span[1]/div[2]/div[1]/div[1]/input[1]',
    id: 'OSIEdit138-43',
    dataTestId: 'OSIEdit138-43',
  },
  {
    label: 'OSIEdit139-45',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[5]/div[1]/span[1]/div[3]/div[1]/div[1]/input[1]',
    id: 'OSIEdit139-45',
    dataTestId: 'OSIEdit139-45',
  },
  {
    label: 'Foreign address',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[6]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox5-48',
    dataTestId: 'OSICheckBox5-48',
  },
  {
    label: 'OSIEdit75-60',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/span[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit75-60',
    dataTestId: 'OSIEdit75-60',
  },
  {
    label: 'OSIEdit82-62',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/span[1]/div[2]/div[1]/div[1]/input[1]',
    id: 'OSIEdit82-62',
    dataTestId: 'OSIEdit82-62',
  },
  {
    label: 'Select dropdown',
    inputType: 'select',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/span[1]/div[3]/div[1]/div[1]/div[1]/select[1]',
    id: 'OSIEdit83-64-65',
    dataTestId: 'OSIEdit83-64-65',
  },
  {
    label: 'Phone number',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[8]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit135-35',
    dataTestId: 'OSIEdit135-35',
  },
  {
    label: 'Spouse',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox7-155',
    dataTestId: 'OSICheckBox7-155',
  },
  {
    label: 'OSIEdit73-135',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit73-135',
    dataTestId: 'OSIEdit73-135',
  },
  {
    label: '(1) Gross distribution',
    ref: 'gross_income',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSICtrlE2-118-label',
    dataTestId: 'OSICtrlE2-118-input',
  },
  {
    label: 'OSIEdit66-166',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit66-166',
    dataTestId: 'OSIEdit66-166',
  },
  {
    label: '(2a) Taxable amount',
    ref: 'taxable_amount',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[5]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSICtrlE13-137-label',
    dataTestId: 'OSICtrlE13-137-input',
  },
  {
    label: 'OSIEdit67-168',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[5]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit67-168',
    dataTestId: 'OSIEdit67-168',
  },
  {
    label: '(2b) Taxable amount not determined',
    ref: 'taxable_amount_not_determined',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[6]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox29-190',
    dataTestId: 'OSICheckBox29-190',
  },
  {
    label: 'Total distribution',
    ref: 'total_distribution',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[6]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox31-194',
    dataTestId: 'OSICheckBox31-194',
  },
  {
    label: '(3) Capital gain included in taxable amount',
    ref: 'capital_gain',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[7]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSICtrlE17-121-label',
    dataTestId: 'OSICtrlE17-121-input',
  },
  {
    label: 'OSIEdit68-170',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[7]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit68-170',
    dataTestId: 'OSIEdit68-170',
  },
  {
    label: '(4) Federal income tax withheld',
    ref: 'federal_income_tax_withheld',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[8]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSICtrlE85-140-label',
    dataTestId: 'OSICtrlE85-140-input',
  },
  {
    label: 'OSIEdit74-172',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[8]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit74-172',
    dataTestId: 'OSIEdit74-172',
  },
  {
    label:
      '(5) Employee contributions/Designated Roth contributions or insurance premiums',
    ref: 'employee_contributions_designated_roth_contributions_or_insurance_premiums',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[9]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSICtrlE25-124-label',
    dataTestId: 'OSICtrlE25-124-input',
  },
  {
    label: 'OSIEdit76-174',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[9]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit76-174',
    dataTestId: 'OSIEdit76-174',
  },
  {
    label: '(6) Net unrealized appreciation in securities',
    ref: 'net_unrealized_appreciation_in_employers_securities',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[10]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSICtrlE86-143-label',
    dataTestId: 'OSICtrlE86-143-input',
  },
  {
    label: 'OSIEdit100-176',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[10]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit100-176',
    dataTestId: 'OSIEdit100-176',
  },
  {
    label: '(7) Distribution code #1 (Click on arrow to select from list)',
    ref: 'distribution_code',
    inputType: 'select',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[11]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/select[1]',
    id: 'OSIEdit27-127-128',
    dataTestId: 'OSIEdit27-127-128',
  },
  {
    label: 'Select dropdown',
    inputType: 'select',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[12]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/select[1]',
    id: 'OSIEdit89-146-147',
    dataTestId: 'OSIEdit89-146-147',
  },
  {
    label: '(7) IRA/SEP/SIMPLE',
    ref: 'ira_sep_simple',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[13]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox2-159',
    dataTestId: 'OSICheckBox2-159',
  },
  {
    label: '(8) Other distribution',
    ref: 'other',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[14]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSICtrlE32-130-label',
    dataTestId: 'OSICtrlE32-130-input',
  },
  {
    label: 'OSIEdit91-149',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[15]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit91-149',
    dataTestId: 'OSIEdit91-149',
  },
  {
    label: '(9a) Total distribution percentage (.xxxx or 1=100%)',
    ref: 'percentage_of_total_distribution',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[16]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit10-133',
    dataTestId: 'OSIEdit10-133',
  },
  {
    label: '(9b) Total employee contributions',
    ref: 'total_employee_contributions',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[17]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSICtrlE95-151-label',
    dataTestId: 'OSICtrlE95-151-input',
  },
  {
    label: 'OSIEdit101-178',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[17]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit101-178',
    dataTestId: 'OSIEdit101-178',
  },
  {
    label: '(10) Amount allocable to IRR within 5 years',
    ref: 'amount_allocable_to_IRR_within_5_years',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[18]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSICtrlE16-180-label',
    dataTestId: 'OSICtrlE16-180-input',
  },
  {
    label: '(11) First year of designated Roth contributions',
    ref: 'first_year_of_desig_roth_contrib',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[19]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit21-162',
    dataTestId: 'OSIEdit21-162',
  },
  {
    label: 'expanded detail input',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSICtrlE128-268-label',
    dataTestId: 'OSICtrlE128-268-input',
  },
  {
    label: 'OSIEdit133-280',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit133-280',
    dataTestId: 'OSIEdit133-280',
  },
  {
    label: 'expanded detail input',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSICtrlE129-271-label',
    dataTestId: 'OSICtrlE129-271-input',
  },
  {
    label: 'OSIEdit134-282',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit134-282',
    dataTestId: 'OSIEdit134-282',
  },
  {
    label: 'expanded detail input',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSICtrlE160-306-label',
    dataTestId: 'OSICtrlE160-306-input',
  },
  {
    label: 'expanded detail input',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSICtrlE161-309-label',
    dataTestId: 'OSICtrlE161-309-input',
  },
  {
    label: '(14) State Tax Withheld [Override]',
    ref: 'state_tax_withheld',
    custom: 'table',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIInPlaceGrid2-338-input-idx-0',
    dataTestId: 'OSIInPlaceGrid2-338-input-idx-0',
  },
  {
    label: '(15) St',
    inputType: 'text',
    ref: 'state',
    custom: 'table',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIInPlaceGrid2-341-input-idx-0',
    dataTestId: 'OSIInPlaceGrid2-341-input-idx-0',
  },
  {
    label: '(15) State Identification Number',
    inputType: 'number',
    custom: 'table',
    ref: 'payers_state_number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[3]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIInPlaceGrid2-344-input-idx-0',
    dataTestId: 'OSIInPlaceGrid2-344-input-idx-0',
  },
  {
    label: '(16) State Distribution [Override]',
    ref: 'state_distribution',
    custom: 'table',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[4]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIInPlaceGrid2-347-input-idx-0',
    dataTestId: 'OSIInPlaceGrid2-347-input-idx-0',
  },
  {
    label: '(17) Local Tax Withheld [Override]',
    inputType: 'number',
    ref: 'local_tax_withheld',
    custom: 'table',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[5]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIInPlaceGrid2-350-input-idx-0',
    dataTestId: 'OSIInPlaceGrid2-350-input-idx-0',
  },
  {
    label: '(18) Name of Locality',
    inputType: 'text',
    ref: 'name_of_locality',
    custom: 'table',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[6]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIInPlaceGrid2-353-input-idx-0',
    dataTestId: 'OSIInPlaceGrid2-353-input-idx-0',
  },
  {
    label: '(19) Local Distribution [Override]',
    inputType: 'number',
    ref: 'local_distribution',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[7]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIInPlaceGrid2-356-input-idx-0',
    dataTestId: 'OSIInPlaceGrid2-356-input-idx-0',
  },
  {
    label: 'State ID verified?',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[1]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox43-329',
    dataTestId: 'OSICheckBox43-329',
  },
  {
    label: 'Corrected',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox39-478',
    dataTestId: 'OSICheckBox39-478',
  },
  {
    label: 'FATCA filing requirement',
    ref: 'FATCA_filing_requirement',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox9-462',
    dataTestId: 'OSICheckBox9-462',
  },
  {
    label: 'Nonstandard (altered, typed or handwritten)',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox3-458',
    dataTestId: 'OSICheckBox3-458',
  },
  {
    label: 'Name of in care of addressee',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit136-467',
    dataTestId: 'OSIEdit136-467',
  },
  {
    label: 'Name control [Override]',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit9-465',
    dataTestId: 'OSIEdit9-465',
  },
  {
    label: 'Name',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[6]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit147-493',
    dataTestId: 'OSIEdit147-493',
  },
  {
    label: 'Street address',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[6]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit150-495',
    dataTestId: 'OSIEdit150-495',
  },
  {
    label: 'Apartment number',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[6]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit148-497',
    dataTestId: 'OSIEdit148-497',
  },
  {
    label: 'OSIEdit153-499',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[6]/div[1]/section[1]/div[4]/div[1]/span[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit153-499',
    dataTestId: 'OSIEdit153-499',
  },
  {
    label: 'OSIEdit151-501',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[6]/div[1]/section[1]/div[4]/div[1]/span[1]/div[2]/div[1]/div[1]/input[1]',
    id: 'OSIEdit151-501',
    dataTestId: 'OSIEdit151-501',
  },
  {
    label: 'OSIEdit152-503',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[6]/div[1]/section[1]/div[4]/div[1]/span[1]/div[3]/div[1]/div[1]/input[1]',
    id: 'OSIEdit152-503',
    dataTestId: 'OSIEdit152-503',
  },
  {
    label: 'Foreign address',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[6]/div[1]/section[1]/div[5]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox19-506',
    dataTestId: 'OSICheckBox19-506',
  },
  {
    label: 'OSIEdit12-514',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[6]/div[1]/section[1]/div[6]/div[1]/section[1]/div[1]/div[1]/span[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit12-514',
    dataTestId: 'OSIEdit12-514',
  },
  {
    label: 'OSIEdit5-516',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[6]/div[1]/section[1]/div[6]/div[1]/section[1]/div[1]/div[1]/span[1]/div[2]/div[1]/div[1]/input[1]',
    id: 'OSIEdit5-516',
    dataTestId: 'OSIEdit5-516',
  },
  {
    label: 'Select dropdown',
    inputType: 'select',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[6]/div[1]/section[1]/div[6]/div[1]/section[1]/div[1]/div[1]/span[1]/div[3]/div[1]/div[1]/div[1]/select[1]',
    id: 'OSIEdit6-518-519',
    dataTestId: 'OSIEdit6-518-519',
  },
  {
    label: 'Compensation not reported on 1099',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox32-543',
    dataTestId: 'OSICheckBox32-543',
  },
  {
    label: 'Employee performed services while residing in the U.S.',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[7]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox35-547',
    dataTestId: 'OSICheckBox35-547',
  },
  {
    label: 'Country code if work not performed while residing in the U.S.',
    inputType: 'select',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[7]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/select[1]',
    id: 'OSIEdit125-537-538',
    dataTestId: 'OSIEdit125-537-538',
  },
  {
    label: "Foreign employer's tax identification number",
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[7]/div[1]/section[1]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit126-540',
    dataTestId: 'OSIEdit126-540',
  },
  {
    label: 'Account number',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[8]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit15-475',
    dataTestId: 'OSIEdit15-475',
  },
  {
    label: 'Taxable amount (-1=none) (2a) [Override]',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[9]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText75-449-561-562',
    dataTestId: 'OSICtrlE14-472-input',
  },
  {
    label: 'Capital gain (included in box 2a) (-1=none) (3) [Override]',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[10]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText5-451-563-564',
    dataTestId: 'OSICtrlE7-469-input',
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
