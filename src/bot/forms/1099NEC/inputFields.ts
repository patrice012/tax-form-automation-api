import { Tfield } from '../declaration';

const inputs_fields = [
  {
    label: 'Other income (Click on button to expand)',
    inputType: 'number',
    id: 'field-OSICtrlE82-85-label',
    dataTestId: 'OSICtrlE82-85-input',
    inputIndex: 75,
    ref: 'nonemployee_compensation',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[14]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
  {
    label: 'Federal income tax withheld [Adjust]',
    inputType: 'number',
    id: 'field-OSICtrlE51-564-label',
    dataTestId: 'OSICtrlE51-564-input',
    inputIndex: 125,
    ref: 'federal_income_tax_withheld',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
  },
];

const state_tax_withheld = [
  {
    label: 'State income tax withheld [Adjust]',
    inputType: 'mixed',
    ref: 'state_tax_withheld',
    fields: [
      {
        label: 'State income tax withheld [Adjust]',
        inputType: 'number',
        id: 'field-OSICtrlE53-570-label',
        dataTestId: 'OSICtrlE53-570-input',
        inputIndex: 129,
        xpath:
          '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
      },

      {
        label: 'State income tax withheld [Adjust]',
        inputType: 'number',
        id: 'field-OSICtrlE54-573-label',
        dataTestId: 'OSICtrlE54-573-input',
        inputIndex: 130,
        xpath:
          '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
      },
    ],
  },
];

const fields = [...inputs_fields, ...state_tax_withheld];

export function getInputFields() {
  const arr = fields.filter((field) => {
    if ((field as Tfield).ref) {
      return field;
    }
  });
  return arr;
}
