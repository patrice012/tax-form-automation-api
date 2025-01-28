import { Tfield } from './declaration';

const fields = [
  {
    label: '(b) Employer identification number (EIN)',
    ref: 'employer_fed_id_number',
    dataTestId: 'OSIEdit44-39-taxid',
    id: 'OSIEdit44-39-taxid',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/section[1]/div[1]/div[1]/span[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'Employer state ID no.',
    inputType: 'text',
    dataTestId: 'OSICtrlE1-34-input',
    id: 'field-OSIText_1-32-81-82',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'State ID verified',
    inputType: 'checkbox',
    dataTestId: 'OSICheckBox22-42',
    id: 'OSICheckBox22-42',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(c) Name of employer',
    ref: 'employer_name',
    dataTestId: 'OSIEdit135-37',
    id: 'OSIEdit135-37',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'Street address',
    ref: 'employer_address',
    dataTestId: 'OSIEdit2-52',
    id: 'OSIEdit2-52',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'City',
    ref: 'employer_city',
    dataTestId: 'OSIEdit140-54',
    id: 'OSIEdit140-54',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[4]/div[1]/section[1]/div[2]/div[1]/span[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'State',
    ref: 'employer_state',
    dataTestId: 'OSIEdit138-56',
    id: 'OSIEdit138-56',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[4]/div[1]/section[1]/div[2]/div[1]/span[1]/div[2]/div[1]/div[1]/input[1]',
  },
  {
    label: 'ZIP code',
    ref: 'employer_zip_code',
    dataTestId: 'OSIEdit139-58',
    id: 'OSIEdit139-58',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[4]/div[1]/section[1]/div[2]/div[1]/span[1]/div[3]/div[1]/div[1]/input[1]',
  },
  {
    label: 'Foreign address',
    dataTestId: 'OSICheckBox17-61',
    id: 'OSICheckBox17-61',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[4]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'Region',
    inputType: 'text',
    dataTestId: 'OSIEdit141-69',
    id: 'OSIEdit141-69',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[4]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/span[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'Postal Code',
    dataTestId: 'OSIEdit111-71',
    id: 'OSIEdit111-71',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[4]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/span[1]/div[2]/div[1]/div[1]/input[1]',
  },
  {
    label: 'Country',
    inputType: 'select',
    dataTestId: 'OSIEdit96-73-74',
    id: 'OSIEdit96-73-74',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[4]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/span[1]/div[3]/div[1]/div[1]/div[1]/select[1]',
  },
  {
    label: 'Spouse W-2',
    dataTestId: 'OSICheckBox24-90',
    id: 'OSICheckBox24-90',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(1) Wages, tips, etc.',
    dataTestId: 'OSICtrlE235-531-input',
    id: 'field-OSICtrlE235-531-label',
    ref: 'wage_income',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(1) Wages, tips, etc. - Prior Year Amount',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(2) Federal income tax withheld',
    dataTestId: 'OSICtrlE236-534-input',
    id: 'field-OSICtrlE236-534-label',
    ref: 'federal_tax_withheld',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(2) Federal income tax withheld - Prior Year Amount',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(3) Social security wages',
    ref: 'social_security_wages',
    dataTestId: 'OSICtrlE237-537-input',
    id: 'field-OSICtrlE237-537-label',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(3) Social security wages - Prior Year Amount',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(4) Social security tax withheld',
    ref: 'social_security_tax_withheld',
    dataTestId: 'OSICtrlE238-540-input',
    id: 'field-OSICtrlE238-540-label',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(4) Social security tax withheld - Prior Year Amount',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(5) Medicare wages and tips',
    ref: 'medicare_wages_and_tips',
    dataTestId: 'OSICtrlE239-543-input',
    id: 'field-OSICtrlE239-543-label',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[5]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(5) Medicare wages and tips - Prior Year Amount',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[5]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(6) Medicare tax withheld',
    ref: 'medicare_tax_withheld',
    dataTestId: 'OSICtrlE240-546-input',
    id: 'field-OSICtrlE240-546-label',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[6]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(6) Medicare tax withheld - Prior Year Amount',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[6]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(7) Social security tips',
    ref: 'social_security_tips',
    dataTestId: 'OSICtrlE241-549-input',
    id: 'field-OSICtrlE241-549-label',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[7]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(7) Social security tips - Prior Year Amount',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[7]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(8) Allocated tips',
    dataTestId: 'OSICtrlE242-552-input',
    id: 'field-OSICtrlE242-552-label',
    ref: 'allocated_tips',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[8]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(8) Allocated tips - Prior Year Amount',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[8]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(10) Dependent care benefits',
    ref: 'dependent_care_benefits',
    dataTestId: 'OSICtrlE243-555-input',
    id: 'field-OSICtrlE243-555-label',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[9]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(10) Dependent care benefits - Prior Year Amount',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[9]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(11) Nonqualified plans',
    ref: 'nonqualified_plans',
    dataTestId: 'OSICtrlE244-558-input',
    id: 'field-OSICtrlE244-558-label',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[10]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(11) Nonqualified plans - Prior Year Amount',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[10]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '12a',
    inputType: 'mixed',
    ref: 'box12a',
    fields: [
      {
        label: 'Code',
        inputType: 'select',
        dataTestId: 'OSIEdit60-431-432',
        id: 'OSIEdit60-431-432',
        xpath:
          '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/select[1]',
      },
      {
        label: 'Amount',
        dataTestId: 'OSICtrlE61-434-input',
        id: 'field-OSICtrlE61-434-label',
        inputType: 'number',
        xpath:
          '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
      },
      {
        label: 'Year of Prior USERRA Contribution',
        dataTestId: 'OSIEdit62-437',
        id: 'OSIEdit62-437',
        inputType: 'number',
        xpath:
          '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]',
      },
      {
        label: 'Prior Year Amount',
        dataTestId: 'OSIEdit19-439',
        id: 'OSIEdit19-439',
        inputType: 'number',
        xpath:
          '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]',
      },
    ],
  },
  {
    label: '12b',
    inputType: 'mixed',
    ref: 'box12b',
    fields: [
      {
        label: ' Code',
        dataTestId: 'OSIEdit57-423-424',
        id: 'OSIEdit57-423-424',
        inputType: 'select',
        xpath:
          '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/select[1]',
      },
      {
        label: 'Amount',
        dataTestId: 'OSICtrlE58-426-input',
        id: 'field-OSICtrlE58-426-label',
        inputType: 'number',
        xpath:
          '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
      },
      {
        label: 'Year of Prior USERRA Contribution',
        dataTestId: 'OSIEdit59-429',
        id: 'OSIEdit59-429',
        inputType: 'number',
        xpath:
          '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]',
      },
      {
        label: 'Prior Year Amount',
        dataTestId: 'OSIEdit104-441',
        id: 'OSIEdit104-441',
        inputType: 'number',
        xpath:
          '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]',
      },
    ],
  },
  {
    label: '12c',
    inputType: 'mixed',
    ref: 'box12c',
    fields: [
      {
        label: ' Code',
        dataTestId: 'OSIEdit28-415-416',
        id: 'OSIEdit28-415-416',
        inputType: 'select',
        xpath:
          '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/select[1]',
      },
      {
        label: ' Amount',
        dataTestId: 'OSICtrlE38-418-input',
        id: 'field-OSICtrlE38-418-label',
        inputType: 'number',
        xpath:
          '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
      },
      {
        label: ' Year of Prior USERRA Contribution',
        dataTestId: 'OSIEdit39-421',
        id: 'OSIEdit39-421',
        inputType: 'number',
        xpath:
          '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]',
      },
      {
        label: ' Prior Year Amount',
        dataTestId: 'OSIEdit120-443',
        id: 'OSIEdit120-443',
        inputType: 'number',
        xpath:
          '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]',
      },
    ],
  },
  {
    label: '12d',
    inputType: 'mixed',
    ref: 'box12d',
    fields: [
      {
        label: ' Code',
        dataTestId: 'OSIEdit25-407-408',
        id: 'OSIEdit25-407-408',
        inputType: 'select',
        xpath:
          '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/select[1]',
      },
      {
        label: 'Amount',
        dataTestId: 'OSICtrlE26-410-input',
        id: 'field-OSICtrlE26-410-label',
        inputType: 'number',
        xpath:
          '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
      },
      {
        label: 'Year of Prior USERRA Contribution',
        dataTestId: 'OSIEdit27-413',
        id: 'OSIEdit27-413',
        inputType: 'number',
        xpath:
          '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]',
      },
      {
        label: 'Prior Year Amount',
        dataTestId: 'OSIEdit124-445',
        id: 'OSIEdit124-445',
        inputType: 'number',
        xpath:
          '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]',
      },
    ],
  },
  {
    label: 'If "P" above, move name or number (3903)',
    inputType: 'select',
    dataTestId: 'OSIEdit4-323-325',
    id: 'OSIEdit4-323-325',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[5]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/select[1]',
  },
  {
    label: 'If "T" above, eligible child name or number (8839)',
    dataTestId: 'OSIEdit8-327-328',
    id: 'OSIEdit8-327-328',
    inputType: 'select',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[5]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/select[1]',
  },
  {
    label: 'If "L" above, employee business expense schedule name or number',
    dataTestId: 'OSIEdit9-331-332',
    id: 'OSIEdit9-331-332',
    inputType: 'select',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[5]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/select[1]',
  },
  {
    label: 'If "L" above, amount attributable to meals',
    dataTestId: 'OSICtrlE18-335-input',
    id: 'field-OSIText4-315-374-375',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[5]/div[1]/section[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'If "F" above, amount contributed to Roth IRA',
    dataTestId: 'OSICtrlE214-356-input',
    id: 'field-OSIText162-309-378-379',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[5]/div[1]/section[1]/div[5]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'If "S" above, amount contributed to Roth IRA',
    dataTestId: 'OSICtrlE213-353-input',
    id: 'field-OSIText161-311-380-381',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[5]/div[1]/section[1]/div[6]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'Elect to include nontaxable combat pay in earned income for EIC',
    dataTestId: 'OSICheckBox8-339',
    id: 'OSICheckBox8-339',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[5]/div[1]/section[1]/div[7]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label:
      'Elect to include nontaxable combat pay in earned income for 2441 (DCB)',
    dataTestId: 'OSICheckBox11-343',
    id: 'OSICheckBox11-343',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[5]/div[1]/section[1]/div[8]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '403(b) participant qualifying for the 15 years of service rule',
    dataTestId: 'OSICheckBox14-347',
    id: 'OSICheckBox14-347',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[5]/div[1]/section[1]/div[9]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'Statutory employee',
    dataTestId: 'OSICheckBox3-482',
    id: 'OSICheckBox3-482',
    ref: 'statutory_employee',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[6]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'Schedule C name or number, if statutory employee',
    dataTestId: 'OSIEdit121-493-494',
    id: 'OSIEdit121-493-494',
    inputType: 'select',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[6]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/select[1]',
  },
  {
    label: 'Retirement plan',
    dataTestId: 'OSICheckBox13-486',
    id: 'OSICheckBox13-486',
    ref: 'retirement_plan',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[6]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'Third party sick pay',
    dataTestId: 'OSICheckBox15-490',
    id: 'OSICheckBox15-490',
    ref: 'third_party_sick_pay',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[6]/div[1]/section[1]/div[4]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'RRTA compensation',
    dataTestId: 'OSICtrlE178-206-input',
    id: 'field-OSICtrlE178-206-label',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'RRTA compensation - Prior Year Amount',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'RRTA Tier I withholding',
    dataTestId: 'OSICtrlE66-153-input',
    id: 'field-OSICtrlE66-153-label',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'RRTA Tier I withholding - Prior Year Amount',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'RRTA Tier II withholding',
    dataTestId: 'OSICtrlE56-150-input',
    id: 'field-OSICtrlE56-150-label',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'RRTA Tier II withholding - Prior Year Amount',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'RRTA medicare tax',
    dataTestId: 'OSICtrlE173-193-input',
    id: 'field-OSICtrlE173-193-label',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'RRTA medicare tax - Prior Year Amount',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'RRTA additional medicare tax',
    dataTestId: 'OSICtrlE161-190-input',
    id: 'field-OSICtrlE161-190-label',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[5]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'RRTA additional medicare tax - Prior Year Amount',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[5]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'Ministers housing allowance (SE only)',
    dataTestId: 'OSICtrlE52-147-input',
    id: 'field-OSICtrlE52-147-label',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[6]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'Ministers housing allowance - Prior Year Amount',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[6]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'Union dues',
    dataTestId: 'OSICtrlE101-171-input',
    id: 'field-OSICtrlE101-171-label',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[7]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'Union dues - Prior Year Amount',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[7]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'Other',
    inputType: 'number',
    dataTestId: 'OSICtrlE20-144-input',
    id: 'field-OSICtrlE20-144-label',
    ref: 'other',
    custom: 'popup',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[8]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'Other - Prior Year Amount',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[8]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(16) State wages, if different',
    dataTestId: 'OSICtrlE168-638-input',
    id: 'field-OSICtrlE168-638-label',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(16) State wages - Prior Year Amount',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(17) State income tax withheld',
    dataTestId: 'OSICtrlE169-641-input',
    id: 'field-OSICtrlE169-641-label',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(17) State income tax withheld - Prior Year Amount',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(18) Local wages, if different',
    dataTestId: 'OSICtrlE170-644-input',
    id: 'field-OSICtrlE170-644-label',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(18) Local wages - Prior Year Amount',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(19) Local income tax withheld',
    dataTestId: 'OSICtrlE171-647-input',
    id: 'field-OSICtrlE171-647-label',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(19) Local income tax withheld - Prior Year Amount',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'electronic_filing_fields_w_2_state_local',
    inputType: 'table',
    ref: 'state_and_local',
    custom: 'table',
    fields: [
      {
        label: '(15) St',
        ref: 'state',
        dataTestId: 'OSIInPlaceGrid4-1838-input-idx-0',
        id: 'OSIInPlaceGrid4-1838-input-idx-0',
        inputType: 'number',
        xpath:
          '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[1]/div[1]/div[1]/div[1]/input[1]',
      },
      {
        label: "(15) Employer's State ID Number",
        dataTestId: 'OSIInPlaceGrid4-1841-input-idx-0',
        id: 'OSIInPlaceGrid4-1841-input-idx-0',
        ref: 'employer_state_id_number',
        inputType: 'text',
        xpath:
          '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[2]/div[1]/div[1]/div[1]/input[1]',
      },
      {
        label: '(16) State Wages, Tips, etc. [Override]',
        dataTestId: 'OSIInPlaceGrid4-1844-input-idx-0',
        id: 'OSIInPlaceGrid4-1844-input-idx-0',
        ref: 'state_wages_and_tips',
        inputType: 'number',
        xpath:
          '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[3]/div[1]/div[1]/div[1]/input[1]',
      },
      {
        label: '(17) State Income Tax [Override]',
        dataTestId: 'OSIInPlaceGrid4-1847-input-idx-0',
        id: 'OSIInPlaceGrid4-1847-input-idx-0',
        ref: 'state_income_tax',
        inputType: 'number',
        xpath:
          '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[4]/div[1]/div[1]/div[1]/input[1]',
      },
      {
        label: '(18) Local Wages, Tips, etc. [Override]',
        dataTestId: 'OSIInPlaceGrid4-1850-input-idx-0',
        id: 'OSIInPlaceGrid4-1850-input-idx-0',
        ref: 'local_wages_and_tips',
        inputType: 'number',
        xpath:
          '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[5]/div[1]/div[1]/div[1]/input[1]',
      },
      {
        label: '(19) Local Income Tax [Override]',
        dataTestId: 'OSIInPlaceGrid4-1853-input-idx-0',
        id: 'OSIInPlaceGrid4-1853-input-idx-0',
        ref: 'local_income_tax',
        inputType: 'number',
        xpath:
          '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[6]/div[1]/div[1]/div[1]/input[1]',
      },
      {
        label: '(20) Locality Name',
        dataTestId: 'OSIInPlaceGrid4-1856-input-idx-0',
        id: 'OSIInPlaceGrid4-1856-input-idx-0',
        ref: 'locality_name',
        inputType: 'text',
        xpath:
          '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[7]/div[1]/div[1]/div[1]/input[1]',
      },
    ],
  },
  {
    label: 'Corrected W-2',
    dataTestId: 'OSICheckBox9-1870',
    id: 'OSICheckBox9-1870',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'Nonstandard W-2 (altered, typed or handwritten)',
    dataTestId: 'OSICheckBox5-1866',
    id: 'OSICheckBox5-1866',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'Agent for employer indicator',
    dataTestId: 'OSICheckBox23-1878',
    id: 'OSICheckBox23-1878',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'Name control [Override]',
    dataTestId: 'OSIEdit3-1873',
    id: 'OSIEdit3-1873',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'Name of in care of addressee',
    dataTestId: 'OSIEdit136-1875',
    id: 'OSIEdit136-1875',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'Taxpayer ID verified',
    dataTestId: 'OSICheckBox16-1902',
    id: 'OSICheckBox16-1902',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[6]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(a) Social security number [Override]',
    dataTestId: 'OSIEdit29-1899-taxid',
    id: 'OSIEdit29-1899-taxid',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[6]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(d) Control number, if any',
    dataTestId: 'OSIEdit33-1897',
    id: 'OSIEdit33-1897',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[6]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(e) Name',
    dataTestId: 'OSIEdit147-1893',
    id: 'OSIEdit147-1893',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[6]/div[1]/section[1]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: '(f) Street address',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[6]/div[1]/section[1]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'Apartment number',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[6]/div[1]/section[1]/div[6]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'City',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[6]/div[1]/section[1]/div[6]/div[1]/section[1]/div[2]/div[1]/span[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'State',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[6]/div[1]/section[1]/div[6]/div[1]/section[1]/div[2]/div[1]/span[1]/div[2]/div[1]/div[1]/input[1]',
  },
  {
    label: 'ZIP code',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[6]/div[1]/section[1]/div[6]/div[1]/section[1]/div[2]/div[1]/span[1]/div[3]/div[1]/div[1]/input[1]',
  },
  {
    label: 'Foreign address',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[6]/div[1]/section[1]/div[6]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'Region',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[6]/div[1]/section[1]/div[6]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/span[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'Postal Code',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[6]/div[1]/section[1]/div[6]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/span[1]/div[2]/div[1]/div[1]/input[1]',
  },
  {
    label: 'Country',
    inputType: 'select',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[6]/div[1]/section[1]/div[6]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/span[1]/div[3]/div[1]/div[1]/div[1]/select[1]',
  },
  {
    label: 'Compensation not reported on W-2',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'Employee performed services while residing in US',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[7]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'Country code if work not performed while residing in US',
    inputType: 'select',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[7]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/select[1]',
  },
  {
    label: "Foreign employer's tax identification number",
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[7]/div[1]/section[1]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
];

export function getInputFields() {
  const arr = fields.filter((field) => {
    if ((field as Tfield).ref) {
      return field;
    }
  });
  return arr;
}
