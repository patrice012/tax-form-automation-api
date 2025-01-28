import { Tfield } from './declaration';

const inputs_fields = [
  {
    label: 'Name of payer',
    ref: 'payers_name',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit19-141',
    dataTestId: 'OSIEdit19-141',
  },
  {
    label: 'OSIEdit7-131',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit7-131',
    dataTestId: 'OSIEdit7-131',
  },
  {
    label: 'OSIEdit4-129',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit4-129',
    dataTestId: 'OSIEdit4-129',
  },
  {
    label: 'OSIEdit31-173',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/span[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit31-173',
    dataTestId: 'OSIEdit31-173',
  },
  {
    label: 'Select dropdown',
    inputType: 'select',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/span[1]/div[2]/div[1]/div[1]/div[1]/select[1]',
    id: 'OSIEdit32-175-176',
    dataTestId: 'OSIEdit32-175-176',
  },
  {
    label: 'OSIEdit33-178',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/span[1]/div[3]/div[1]/div[1]/input[1]',
    id: 'OSIEdit33-178',
    dataTestId: 'OSIEdit33-178',
  },
  {
    label: 'Foreign address',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[5]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox1-134',
    dataTestId: 'OSICheckBox1-134',
  },
  {
    label: 'OSIEdit11-157',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[6]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/span[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit11-157',
    dataTestId: 'OSIEdit11-157',
  },
  {
    label: 'OSIEdit12-159',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[6]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/span[1]/div[2]/div[1]/div[1]/input[1]',
    id: 'OSIEdit12-159',
    dataTestId: 'OSIEdit12-159',
  },
  {
    label: 'Select dropdown',
    inputType: 'select',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[6]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/span[1]/div[3]/div[1]/div[1]/div[1]/select[1]',
    id: 'OSIEdit13-161-162',
    dataTestId: 'OSIEdit13-161-162',
  },
  {
    label: 'Foreign phone number',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[7]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox6-144',
    dataTestId: 'OSICheckBox6-144',
  },
  {
    label: 'OSIEdit9-137',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[8]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit9-137',
    dataTestId: 'OSIEdit9-137',
  },
  {
    label: 'Federal identification number',
    ref: 'payers_tin',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[9]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit10-139-taxid',
    dataTestId: 'OSIEdit10-139-taxid',
  },
  {
    label: 'tax id dropdown',
    inputType: 'select',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[9]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]/div[1]/select[1]',
    id: 'OSIEdit10-139-taxid_choice',
    dataTestId: 'OSIEdit10-139-taxid_choice',
  },
  {
    label: 'OSIEdit34-147',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[10]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit34-147',
    dataTestId: 'OSIEdit34-147',
  },
  {
    label: '1=spouse, 2=joint',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit52-292',
    dataTestId: 'OSIEdit52-292',
  },
  {
    label: '(1) Rents',
    ref: 'rents',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText58-324-368-369',
    dataTestId: 'OSICtrlE44-326-input',
  },
  {
    label: '(2) Royalties',
    ref: 'royalties',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText57-322-370-371',
    dataTestId: 'OSICtrlE54-329-input',
  },
  {
    label: '(3) Other income',
    ref: 'other_income',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText56-320-372-373',
    dataTestId: 'OSICtrlE55-332-input',
  },
  {
    label: '(4) Federal income tax withheld',
    ref: 'federal_income_tax_withheld',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText9-302-374-375',
    dataTestId: 'OSICtrlE16-363-input',
  },
  {
    label: '(5) Fishing boat proceeds',
    ref: 'fishing_boat_proceeds',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText54-318-376-377',
    dataTestId: 'OSICtrlE57-335-input',
  },
  {
    label: '(6) Medical and health care payments',
    ref: 'medical_and_health_care_payments',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[6]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText53-316-378-379',
    dataTestId: 'OSICtrlE58-338-input',
  },
  {
    label: '(7) Payer made direct sales of $5,000 or more',
    ref: 'box_7_checkbox',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[7]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox10-342',
    dataTestId: 'OSICheckBox10-342',
  },
  {
    label: '(8) Substitute payments in lieu of dividends or interest',
    ref: 'substitute_payments_in_lieu_of_dividends_or_interest',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[8]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText52-314-380-381',
    dataTestId: 'OSICtrlE59-345-input',
  },
  {
    label: '(9) Crop insurance proceeds',
    ref: 'crop_insurance_proceeds',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[9]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText51-312-382-383',
    dataTestId: 'OSICtrlE60-348-input',
  },
  {
    label: '(10) Gross proceeds paid to an attorney',
    ref: 'gross_proceeds_paid_to_an_attorney',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[10]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText50-310-384-385',
    dataTestId: 'OSICtrlE61-351-input',
  },
  {
    label: '(11) Fish purchased for resale',
    ref: 'fish_purchased_for_resale',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[11]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText14-300-386-387',
    dataTestId: 'OSICtrlE17-366-input',
  },
  {
    label: '(12) Section 409A deferrals',
    ref: 'section_409A_deferrals',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[12]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText49-308-388-389',
    dataTestId: 'OSICtrlE62-354-input',
  },
  {
    label: '(13) Excess golden parachute payments',
    ref: 'excess_golden_parachute',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[13]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText48-306-390-391',
    dataTestId: 'OSICtrlE63-357-input',
  },
  {
    label: '(14) Nonqualified deferred compensation',
    ref: 'nonqualified_deferred_compensation',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[14]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText42-304-392-393',
    dataTestId: 'OSICtrlE64-360-input',
  },
  {
    label: '(1) Nonemployee compensation',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText3-401-412-413',
    dataTestId: 'OSICtrlE3-403-input',
  },
  {
    label: '(2) Payer made direct sales of $5,000 or more',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox3-410',
    dataTestId: 'OSICheckBox3-410',
  },
  {
    label: '(4) Federal income tax withheld',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText55-399-414-415',
    dataTestId: 'OSICtrlE56-406-input',
  },
  {
    label: 'State tax withheld',
    ref: 'state_tax_withheld',
    custom: 'table',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIInPlaceGrid1-260-input-idx-0',
    dataTestId: 'OSIInPlaceGrid1-260-input-idx-0',
  },
  {
    label: 'State',
    inputType: 'select',
    custom: 'table',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[2]/div[1]/div[1]/div[1]/div[1]/select[1]',
    id: 'OSIInPlaceGrid1-263-idx-0',
    dataTestId: 'OSIInPlaceGrid1-263-idx-0',
  },
  {
    label: "Payer's state no.",
    ref: 'payers_state_number',
    custom: 'table',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[3]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIInPlaceGrid1-266-input-idx-0',
    dataTestId: 'OSIInPlaceGrid1-266-input-idx-0',
  },
  {
    label: 'State income',
    ref: 'state_income',
    custom: 'table',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[4]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIInPlaceGrid1-269-input-idx-0',
    dataTestId: 'OSIInPlaceGrid1-269-input-idx-0',
  },
  {
    label: 'State ID verified?',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox22-247',
    dataTestId: 'OSICheckBox22-247',
  },
  {
    label: 'Corrected',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox2-17',
    dataTestId: 'OSICheckBox2-17',
  },
  {
    label: 'Recipient is business',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox7-57',
    dataTestId: 'OSICheckBox7-57',
  },
  {
    label: 'SSNEINApplied ForForeign USLAFCPNot ApplicableTax Exempt',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit14-48-taxid',
    dataTestId: 'OSIEdit14-48-taxid',
  },
  {
    label: 'tax id dropdown',
    inputType: 'select',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]/div[1]/select[1]',
    id: 'OSIEdit14-48-taxid_choice',
    dataTestId: 'OSIEdit14-48-taxid_choice',
  },
  {
    label: 'OSIEdit50-44',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit50-44',
    dataTestId: 'OSIEdit50-44',
  },
  {
    label: 'OSIEdit27-46',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[4]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit27-46',
    dataTestId: 'OSIEdit27-46',
  },
  {
    label: 'OSIEdit15-50',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[5]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit15-50',
    dataTestId: 'OSIEdit15-50',
  },
  {
    label: 'OSIEdit5-84',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/span[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit5-84',
    dataTestId: 'OSIEdit5-84',
  },
  {
    label: 'Select dropdown',
    inputType: 'select',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/span[1]/div[2]/div[1]/div[1]/div[1]/select[1]',
    id: 'OSIEdit6-86-87',
    dataTestId: 'OSIEdit6-86-87',
  },
  {
    label: 'OSIEdit8-89',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/span[1]/div[3]/div[1]/div[1]/input[1]',
    id: 'OSIEdit8-89',
    dataTestId: 'OSIEdit8-89',
  },
  {
    label: 'Foreign address',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[7]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox17-53',
    dataTestId: 'OSICheckBox17-53',
  },
  {
    label: 'OSIEdit141-68',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[8]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/span[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit141-68',
    dataTestId: 'OSIEdit141-68',
  },
  {
    label: 'OSIEdit111-70',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[8]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/span[1]/div[2]/div[1]/div[1]/input[1]',
    id: 'OSIEdit111-70',
    dataTestId: 'OSIEdit111-70',
  },
  {
    label: 'Select dropdown',
    inputType: 'select',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[8]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/span[1]/div[3]/div[1]/div[1]/div[1]/select[1]',
    id: 'OSIEdit96-72-73',
    dataTestId: 'OSIEdit96-72-73',
  },
  {
    label: 'OSIEdit2-14',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit2-14',
    dataTestId: 'OSIEdit2-14',
  },
  {
    label: 'FATCA filing requirement',
    ref: 'FATCA_filing_requirement',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox8-21',
    dataTestId: 'OSICheckBox8-21',
  },
  {
    label: 'TIN not.',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[5]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox9-25',
    dataTestId: 'OSICheckBox9-25',
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
