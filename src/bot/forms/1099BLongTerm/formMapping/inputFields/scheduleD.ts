import { Tfield } from '../declaration';

const inputs_fields = [
  {
    label:
      'Reported on: blank=Form 1099-B with basis reported to IRS, 1=Form 1099-B but basis not reported to IRS, 2=form other than Form 1099-B (Form 8949)',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText115-310-591-592',
    dataTestId: 'OSICtrlE115-385-input',
  },
  {
    label: 'Summary from attached statement',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox29-412',
    dataTestId: 'OSICheckBox29-412',
  },
  {
    label: 'Adjustment to basis if reported incorrectly on Form 1099-B, box 1e',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText242-308-593-594',
    dataTestId: 'OSICtrlE243-396-input',
  },
  {
    label: 'Federal income tax withheld',
    ref: 'federal_income_tax_withheld',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText164-326-595-596',
    dataTestId: 'OSICtrlE164-360-input',
  },
  {
    label: 'State income tax withheld',
    ref: 'state_tax_withheld',
    inputType: 'number',
    custom: 'popup',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[5]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText1-320-597-598',
    dataTestId: 'OSICtrlE1-368-input',
  },
  {
    label: "Payer's federal identification number",
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[6]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit140-379-taxid',
    dataTestId: 'OSIEdit140-379-taxid',
  },
  {
    label: 'tax id dropdown',
    inputType: 'select',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[6]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]/div[1]/select[1]',
  },
  {
    label: 'Wash sale amount disallowed (-1 to disallow all)',
    ref: 'wash_sale_loss_disallowed',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[7]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText281-296-609-610',
    dataTestId: 'OSICtrlE284-422-input',
  },
  {
    label: 'Accrued market discount adjustment',
    ref: 'accrued_market_discount',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[8]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText165-324-611-612',
    dataTestId: 'OSICtrlE165-363-input',
  },
  {
    label: 'Amount of loss that is nondeductible (-1 to disallow all)',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[9]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText248-302-613-614',
    dataTestId: 'OSICtrlE249-405-input',
  },
  {
    label:
      'District of Columbia Enterprise Zone or qualified community assets amount excluded (-1 to exclude all)',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[10]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText245-304-615-616',
    dataTestId: 'OSICtrlE246-402-input',
  },
  {
    label: 'Other adjustment to gain or loss (-1 for all)',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[11]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText244-306-619-620',
    dataTestId: 'OSICtrlE245-399-input',
  },
  {
    label: '1=purchased option expired, 2=written option expired',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[12]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit13-366',
    dataTestId: 'OSIEdit13-366',
  },
  {
    label: 'Section 1244 stock',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[13]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox14-329',
    dataTestId: 'OSICheckBox14-329',
  },
  {
    label: 'Nonbusiness bad debt',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[14]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox15-333',
    dataTestId: 'OSICheckBox15-333',
  },
  {
    label: 'Unknown Label',
    inputType: 'textarea',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[15]/div[1]/div[1]/div[1]/div[1]/textarea[1]',
  },
  {
    label: 'Explanation of nonbusiness bad debt',
    inputType: 'textarea',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[15]/div[1]/div[1]/div[1]/div[1]/textarea[2]',
  },
  {
    label: 'Personal loss',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[16]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox17-337',
    dataTestId: 'OSICheckBox17-337',
  },
  {
    label: 'Worthless security',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[17]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox104-345',
    dataTestId: 'OSICheckBox104-345',
  },
  {
    label: 'Collectible (art, stamps, coins, precious metals, etc.)(28% rate)',
    ref: 'proceeds_from_collectibles',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[18]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox155-349',
    dataTestId: 'OSICheckBox155-349',
  },
  {
    label: 'Received 1099-B or 1099-S as a nominee',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[19]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox84-435',
    dataTestId: 'OSICheckBox84-435',
  },
  {
    label: 'Form 1099-B, box 2 type of gain or loss reported incorrectly',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[20]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox31-389',
    dataTestId: 'OSICheckBox31-389',
  },
  {
    label:
      'Disposition of foreign partner interest (from Sch P)(Form 8949, code P)',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[21]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox32-393',
    dataTestId: 'OSICheckBox32-393',
  },
  {
    label: 'NAV method gain or loss on money market funds',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[22]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText128-298-625-626',
    dataTestId: 'OSICtrlE128-419-input',
  },
  {
    label: '1=qualified small business stock(exclusion or rollover)',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[23]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit351-580',
    dataTestId: 'OSIEdit351-580',
  },
  {
    label: 'Section 1202 exclusion [Override]',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[23]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText344-572-587-588',
    dataTestId: 'OSICtrlE349-574-input',
  },
  {
    label: 'Section 1045 rollover (1=postpone entire gain or enter amount)',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[23]/div[1]/section[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText343-570-589-590',
    dataTestId: 'OSICtrlE350-577-input',
  },
  {
    label: 'Future transaction (proforma only)',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[24]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox80-353',
    dataTestId: 'OSICheckBox80-353',
  },
  {
    label: 'Rollover to Qualified Opportunity Fund',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[25]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox41-463',
    dataTestId: 'OSICheckBox41-463',
  },
  {
    label: 'Disposition includes previously deferred gain from QOF investment',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[25]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox69-453',
    dataTestId: 'OSICheckBox69-453',
  },
  {
    label: 'Disposition from Section 1231 property',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[25]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox81-474',
    dataTestId: 'OSICheckBox81-474',
  },
  {
    label: 'Amount of QOF gain previously deferred',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[25]/div[1]/section[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText173-442-476-477',
    dataTestId: 'OSICtrlE173-466-input',
  },
  {
    label: '1=short-term, 2=long-term',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[25]/div[1]/section[1]/div[5]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText345-444-478-479',
    dataTestId: 'OSICtrlE352-459-input',
  },
  {
    label: 'Deferred gain',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[25]/div[1]/section[1]/div[6]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText163-446-480-481',
    dataTestId: 'OSICtrlE163-456-input',
  },
  {
    label: 'TIN of QO Fund',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[25]/div[1]/section[1]/div[7]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit79-450',
    dataTestId: 'OSIEdit79-450',
  },
];

const fields = [...inputs_fields];

export function getScheduleDInputFields() {
  const arr = fields.filter((field) => {
    if ((field as Tfield).ref) {
      return field;
    }
  });
  return arr;
}
