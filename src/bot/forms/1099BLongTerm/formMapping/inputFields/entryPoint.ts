import { Tfield } from "../../../declaration";

const inputs_fields = [
  {
    label: "Quantity",
    inputType: "special",
    expectValue: 1,
    ref: "account_number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[2]/div[1]/div[1]/div[1]/input[1]",
    id: "QuickEntry-cell2-input-idx-1",
    dataTestId: "QuickEntry-cell2-input-idx-1",
    inputIndex: 12,
  },
  {
    label: "Description of Property",
    inputType: "text",
    ref: "description_of_property",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[3]/div[1]/div[1]/div[1]/input[1]",
    id: "QuickEntry-cell3-input-idx-1",
    dataTestId: "QuickEntry-cell3-input-idx-1",
    inputIndex: 13,
  },
  {
    label: "Date Acquired",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[4]/div[1]/div[1]/div[1]/input[1]",
    id: "QuickEntry-cell5-input-idx-1",
    dataTestId: "QuickEntry-cell5-input-idx-1",
    inputIndex: 14,
  },
  {
    label: "Date Sold",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[5]/div[1]/div[1]/div[1]/input[1]",
    id: "QuickEntry-cell6-input-idx-1",
    dataTestId: "QuickEntry-cell6-input-idx-1",
    inputIndex: 15,
  },
  {
    label: "Sales Price",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[6]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-QuickEntry-cell7-input-idx-1-label",
    dataTestId: "QuickEntry-cell7-input-idx-1-input",
    inputIndex: 16,
  },
  {
    label: "Cost or Basis",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[7]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-QuickEntry-cell8-input-idx-1-label",
    dataTestId: "QuickEntry-cell8-input-idx-1-input",
    inputIndex: 17,
  },
  {
    label: "Wash Sale (-1 to disallow all)",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[8]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-QuickEntry-cell9-input-idx-1-label",
    dataTestId: "QuickEntry-cell9-input-idx-1-input",
    inputIndex: 18,
  },
  {
    label: "Basis rptd",
    ref: "basis_is_reported_to_irs",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[9]/div[1]/div[1]/div[1]/input[1]",
    id: "QuickEntry-cell10-input-idx-1",
    dataTestId: "QuickEntry-cell10-input-idx-1",
    inputIndex: 19,
  },
  {
    label: "Summary from attached statement",
    inputType: "checkbox",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[10]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "QuickEntry-7-idx-1",
    dataTestId: "QuickEntry-7-idx-1",
    inputIndex: 20,
  },
  {
    label: "Expense of Sale",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[11]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-QuickEntry-cell12-input-idx-1-label",
    dataTestId: "QuickEntry-cell12-input-idx-1-input",
    inputIndex: 21,
  },
  {
    label: "1=taxpayer, 2=spouse",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[12]/div[1]/div[1]/div[1]/input[1]",
    id: "QuickEntry-cell13-input-idx-1",
    dataTestId: "QuickEntry-cell13-input-idx-1",
    inputIndex: 22,
  },
  {
    label: "Quantity",
    inputType: "special",
    expectValue: 1,
    ref: "account_number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[2]/div[1]/div[1]/div[1]/input[1]",
    id: "QuickEntry-cell2-input-idx-1",
    dataTestId: "QuickEntry-cell2-input-idx-1",
    inputIndex: 12,
  },
  {
    label: "Description of Property",
    inputType: "text",
    ref: "description_of_property",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[3]/div[1]/div[1]/div[1]/input[1]",
    id: "QuickEntry-cell3-input-idx-1",
    dataTestId: "QuickEntry-cell3-input-idx-1",
    inputIndex: 13,
  },
  {
    label: "Date Acquired",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[4]/div[1]/div[1]/div[1]/input[1]",
    id: "QuickEntry-cell5-input-idx-1",
    dataTestId: "QuickEntry-cell5-input-idx-1",
    inputIndex: 14,
  },
  {
    label: "Date Sold",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[5]/div[1]/div[1]/div[1]/input[1]",
    id: "QuickEntry-cell6-input-idx-1",
    dataTestId: "QuickEntry-cell6-input-idx-1",
    inputIndex: 15,
  },
  {
    label: "Sales Price",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[6]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-QuickEntry-cell7-input-idx-1-label",
    dataTestId: "QuickEntry-cell7-input-idx-1-input",
    inputIndex: 16,
  },
  {
    label: "Cost or Basis",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[7]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-QuickEntry-cell8-input-idx-1-label",
    dataTestId: "QuickEntry-cell8-input-idx-1-input",
    inputIndex: 17,
  },
  {
    label: "Wash Sale (-1 to disallow all)",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[8]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-QuickEntry-cell9-input-idx-1-label",
    dataTestId: "QuickEntry-cell9-input-idx-1-input",
    inputIndex: 18,
  },
  {
    label: "Basis rptd",
    ref: "basis_is_reported_to_irs",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[9]/div[1]/div[1]/div[1]/input[1]",
    id: "QuickEntry-cell10-input-idx-1",
    dataTestId: "QuickEntry-cell10-input-idx-1",
    inputIndex: 19,
  },
  {
    label: "Summary from attached statement",
    inputType: "checkbox",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[10]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "QuickEntry-7-idx-1",
    dataTestId: "QuickEntry-7-idx-1",
    inputIndex: 20,
  },
  {
    label: "Expense of Sale",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[11]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-QuickEntry-cell12-input-idx-1-label",
    dataTestId: "QuickEntry-cell12-input-idx-1-input",
    inputIndex: 21,
  },
  {
    label: "1=taxpayer, 2=spouse",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[12]/div[1]/div[1]/div[1]/input[1]",
    id: "QuickEntry-cell13-input-idx-1",
    dataTestId: "QuickEntry-cell13-input-idx-1",
    inputIndex: 22,
  },
];

const fields = [...inputs_fields];

export function getEntryPointInputFields() {
  const arr = fields.filter((field) => {
    if ((field as Tfield).ref) {
      return field;
    }
  });
  return arr;
}
