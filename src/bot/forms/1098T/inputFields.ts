import { Tfield } from '../declaration';

const inputs_fields = [
  {
    label: '1=taxpayer, 2=spouse',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit2-36',
    dataTestId: 'OSIEdit2-36',
  },
  {
    label: 'Dependent number',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit1-28',
    dataTestId: 'OSIEdit1-28',
  },
  {
    label: 'Social security number',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit5-34-taxid',
    dataTestId: 'OSIEdit5-34-taxid',
  },
  {
    label: 'tax id dropdown',
    inputType: 'select',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]/div[1]/select[1]',
    id: 'OSIEdit5-34-taxid_choice',
    dataTestId: 'OSIEdit5-34-taxid_choice',
  },
  {
    label: 'Number of prior years AOC claimed',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit57-162',
    dataTestId: 'OSIEdit57-162',
  },
  {
    label:
      'Student was NOT enrolled at least half-time for at least one academic period that began in 2024 (or the first 3 months of 2025 if the qualified expenses were made in 2024) at an eligible institution in a qualified program',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[4]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox15-173',
    dataTestId: 'OSICheckBox15-173',
  },
  {
    label:
      'Student completed first four years of post-secondary education before 2024',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[4]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox13-165',
    dataTestId: 'OSICheckBox13-165',
  },
  {
    label:
      'Student was convicted, before the end of 2024, of a felony for possession or distribution of a controlled substance',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[4]/div[1]/section[1]/div[4]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox16-177',
    dataTestId: 'OSICheckBox16-177',
  },
  {
    label: 'Force Lifetime Learning Credit (LLC)',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[4]/div[1]/section[1]/div[5]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox14-169',
    dataTestId: 'OSICheckBox14-169',
  },
  {
    label: 'Name',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[5]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit31-115',
    dataTestId: 'OSIEdit31-115',
  },
  {
    label: 'Street address',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[5]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit27-113',
    dataTestId: 'OSIEdit27-113',
  },
  {
    label: 'OSIEdit60-127',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[5]/div[1]/section[1]/div[3]/div[1]/span[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit60-127',
    dataTestId: 'OSIEdit60-127',
  },
  {
    label: 'OSIEdit61-129',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[5]/div[1]/section[1]/div[3]/div[1]/span[1]/div[2]/div[1]/div[1]/input[1]',
    id: 'OSIEdit61-129',
    dataTestId: 'OSIEdit61-129',
  },
  {
    label: 'OSIEdit62-131',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[5]/div[1]/section[1]/div[3]/div[1]/span[1]/div[3]/div[1]/div[1]/input[1]',
    id: 'OSIEdit62-131',
    dataTestId: 'OSIEdit62-131',
  },
  {
    label: 'OSIEdit48-133',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[5]/div[1]/section[1]/div[4]/div[1]/span[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit48-133',
    dataTestId: 'OSIEdit48-133',
  },
  {
    label: 'OSIEdit54-135',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[5]/div[1]/section[1]/div[4]/div[1]/span[1]/div[2]/div[1]/div[1]/input[1]',
    id: 'OSIEdit54-135',
    dataTestId: 'OSIEdit54-135',
  },
  {
    label: 'Select dropdown',
    inputType: 'select',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[5]/div[1]/section[1]/div[4]/div[1]/span[1]/div[3]/div[1]/div[1]/div[1]/select[1]',
    id: 'OSIEdit55-137-138',
    dataTestId: 'OSIEdit55-137-138',
  },
  {
    label: 'Federal ID number',
    ref: 'filers_employer_identification_no',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[5]/div[1]/section[1]/div[5]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit44-125-taxid',
    dataTestId: 'OSIEdit44-125-taxid',
  },
  {
    label: 'tax id dropdown',
    inputType: 'select',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[5]/div[1]/section[1]/div[5]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]/div[1]/select[1]',
    id: 'OSIEdit44-125-taxid_choice',
    dataTestId: 'OSIEdit44-125-taxid_choice',
  },
  {
    label: '2024 Form 1098-T was not received',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[5]/div[1]/section[1]/div[6]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox6-118',
    dataTestId: 'OSICheckBox6-118',
  },
  {
    label: '2024 Form 1098-T received with Box 7 completed',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[5]/div[1]/section[1]/div[7]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox9-141',
    dataTestId: 'OSICheckBox9-141',
  },
  {
    label: '2023 Form 1098-T received with Box 7 completed',
    inputType: 'checkbox',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[5]/div[1]/section[1]/div[8]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSICheckBox8-122',
    dataTestId: 'OSICheckBox8-122',
  },
  {
    label: 'Additional institutions attended (Click on button to expand)',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[6]/div[1]/section[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText54-186-190-191',
    dataTestId: 'OSICtrlE58-188-input',
  },
  {
    label: 'Qualified tuition and fees (net of nontaxable benefits)',
    ref: '1_payments_received_for_qualified_tuition_related_expenses',
    inputType: 'number',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText44-58-70-71',
    dataTestId: 'OSICtrlE47-65-input',
  },
  {
    label: 'Books and supplies required to be purchased from the institution',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[7]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText42-60-72-73',
    dataTestId: 'OSICtrlE46-62-input',
  },
  {
    label: 'Books and supplies not entered above (AOC only)',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[7]/div[1]/section[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText41-56-74-75',
    dataTestId: 'OSICtrlE45-68-input',
  },
  {
    label: '1=AOC, 2=LLC',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[8]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit59-205',
    dataTestId: 'OSIEdit59-205',
  },
  {
    label: 'Total qualified education expenses',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[8]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText53-201-216-217',
    dataTestId: 'OSICtrlE63-207-input',
  },
  {
    label:
      'Tax-free education assistance or refunds received after filing 2023 return',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[8]/div[1]/section[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
    id: 'field-OSIText50-199-218-219',
    dataTestId: 'OSICtrlE64-210-input',
  },
  {
    label: '1=delete this year, 2=delete next year',
    inputType: 'text',
    xpath:
      '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[8]/div[1]/section[1]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]',
    id: 'OSIEdit6-213',
    dataTestId: 'OSIEdit6-213',
  },
];

const student_name = [
  {
    label: 'student_name',
    inputType: 'mixed',
    ref: 'student_name',
    fields: [
      {
        label: 'First name',
        id: 'OSIEdit3-30',
        dataTestId: 'OSIEdit3-30',
        inputIndex: 2,
        inputType: 'text',
        xpath:
          '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]',
      },
      {
        label: 'Last name',
        inputType: 'text',
        id: 'OSIEdit4-32',
        dataTestId: 'OSIEdit4-32',
        inputIndex: 3,
        xpath:
          '//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]',
      },
    ],
  },
];

const fields = [...inputs_fields, ...student_name];

export function getInputFields() {
  const arr = fields.filter((field) => {
    if ((field as Tfield).ref) {
      return field;
    }
  });
  return arr;
}
