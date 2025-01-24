import { Tfield } from "../declaration";

const inputs_fields = [
  {
    label: "Quantity",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit157-130",
    dataTestId: "OSIEdit157-130",
  },
  {
    label: "Description of property",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit93-91",
    dataTestId: "OSIEdit93-91",
  },
  {
    label: "Date acquired (negative date=various)",
    ref: "date_acquired",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit2-95",
    dataTestId: "OSIEdit2-95",
  },
  {
    label: "Date sold (negative date=various)",
    ref: "date_sold",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit3-97",
    dataTestId: "OSIEdit3-97",
  },
  {
    label: "Sales price",
    ref: "proceeds",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[6]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSIText352-25-235-236",
    dataTestId: "OSICtrlE356-153-input",
  },
  {
    label: "Cost or other basis (do not reduce by depreciation)",
    ref: "cost_basis",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[7]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSIText9-23-237-238",
    dataTestId: "OSICtrlE9-156-input",
  },
  {
    label: "AMT cost or other basis (if different, -1=none)",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[8]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSIText10-21-239-240",
    dataTestId: "OSICtrlE10-159-input",
  },
  {
    label: "Cost or other basis",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[9]/div[1]/section[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSIText353-209-216-217",
    dataTestId: "OSICtrlE168-211-input",
  },
  {
    label: "AMT cost or other basis",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[9]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSIText168-207-218-219",
    dataTestId: "OSICtrlE357-214-input",
  },
  {
    label: "Expenses of sale or exchange",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[10]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSIText172-19-241-242",
    dataTestId: "OSICtrlE172-162-input",
  },
  {
    label: "1=short-term, 2=long-term [Override]",
    ref: "short_term_gain_loss",
    inputType: "special",
    expectValue: 1,
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[11]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit4-99",
    dataTestId: "OSIEdit4-99",
  },
  {
    label: "1=short-term, 2=long-term [Override]",
    ref: "long_term_gain_loss",
    inputType: "special",
    expectValue: 2,
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[11]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit4-99",
    dataTestId: "OSIEdit4-99",
  },
  {
    label: "Taxpayer",
    inputType: "radio",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[12]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIRadioButton7-194",
    dataTestId: "OSIRadioButton7-194",
  },
  {
    label: "Spouse",
    inputType: "radio",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[12]/div[1]/div[1]/fieldset[1]/div[1]/div[2]/div[1]/input[1]",
    id: "OSIRadioButton8-197",
    dataTestId: "OSIRadioButton8-197",
  },
  {
    label: "Joint",
    inputType: "radio",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[12]/div[1]/div[1]/fieldset[1]/div[1]/div[3]/div[1]/input[1]",
    id: "OSIRadioButton9-200",
    dataTestId: "OSIRadioButton9-200",
  },
  {
    label: "Amortizable asset",
    inputType: "checkbox",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[13]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSICheckBox83-166",
    dataTestId: "OSICheckBox83-166",
  },
  {
    label: "Nontaxable to federal",
    inputType: "checkbox",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[14]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSICheckBox6-60",
    dataTestId: "OSICheckBox6-60",
  },
  {
    label: "Nontaxable to state",
    inputType: "checkbox",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[15]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSICheckBox114-64",
    dataTestId: "OSICheckBox114-64",
  },
  {
    label: "Disposition from K-1 supplemental information",
    inputType: "checkbox",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[16]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSICheckBox9-117",
    dataTestId: "OSICheckBox9-117",
  },
  {
    label: "Disposition of domestic production activity asset",
    inputType: "checkbox",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[17]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSICheckBox22-127",
    dataTestId: "OSICheckBox22-127",
  },
  {
    label: "Related party loss",
    inputType: "checkbox",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[18]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSICheckBox106-68",
    dataTestId: "OSICheckBox106-68",
  },
  {
    label: "Securities trader transaction",
    inputType: "checkbox",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[19]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSICheckBox160-72",
    dataTestId: "OSICheckBox160-72",
  },
  {
    label: "Investment for 4797 or noninvestment for Schedule D",
    inputType: "checkbox",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[20]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSICheckBox7-76",
    dataTestId: "OSICheckBox7-76",
  },
  {
    label: "Elected farm or fishing income (Schedule J)",
    inputType: "checkbox",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[21]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSICheckBox100-80",
    dataTestId: "OSICheckBox100-80",
  },
  {
    label: "Inherited property with stepped up basis",
    inputType: "checkbox",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[22]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSICheckBox16-88",
    dataTestId: "OSICheckBox16-88",
  },
  {
    label: "Subject to net investment income tax: 1=yes, 2=no",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[23]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit58-151",
    dataTestId: "OSIEdit58-151",
  },
  {
    label: "Subject to Section 461 limitation of business losses: 1=yes, 2=no",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[24]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit267-138",
    dataTestId: "OSIEdit267-138",
  },
  {
    label: "Percentage of source income (.xxxx or 1=100%) (PY/NR) [Override]",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[25]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSIText250-33-249-250",
    dataTestId: "OSICtrlE251-135-input",
  },
  {
    label: "1=delete this year, 2=delete next year",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[26]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSIText48-35-261-262",
    dataTestId: "OSICtrlE95-132-input",
  },
  {
    label: "Financial institution",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit234-277",
    dataTestId: "OSIEdit234-277",
  },
  {
    label: "Account number",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit233-275",
    dataTestId: "OSIEdit233-275",
  },
  {
    label: "Description",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit232-273",
    dataTestId: "OSIEdit232-273",
  },
];

const fields = [...inputs_fields];

export function getGeneralInformationInputFields() {
  const arr = fields.filter((field) => {
    if ((field as Tfield).ref) {
      return field;
    }
  });
  return arr;
}
