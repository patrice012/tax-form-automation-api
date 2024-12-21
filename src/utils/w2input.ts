const employerInformation_e_file = [
  {
    label: "(b) Employer identification number (EIN)",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/section[1]/div[1]/div[1]/span[1]/div[2]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Employer state ID no.",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "State ID verified",
    inputType: "checkbox",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(c) Name of employer",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Street address",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "City",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[4]/div[1]/section[1]/div[2]/div[1]/span[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "State",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[4]/div[1]/section[1]/div[2]/div[1]/span[1]/div[2]/div[1]/div[1]/input[1]",
  },
  {
    label: "ZIP code",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[4]/div[1]/section[1]/div[2]/div[1]/span[1]/div[3]/div[1]/div[1]/input[1]",
  },
  {
    label: "Foreign address",
    inputType: "checkbox",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[4]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Region",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[4]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/span[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Postal Code",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[4]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/span[1]/div[2]/div[1]/div[1]/input[1]",
  },
  {
    label: "Country",
    inputType: "select",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/section[1]/div[4]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/span[1]/div[3]/div[1]/div[1]/div[1]/select[1]",
  },
];

const w2_wages_withholdings = [
  {
    label: "Spouse W-2",
    inputType: "checkbox",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(1) Wages, tips, etc.",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(1) Wages, tips, etc. - Prior Year Amount",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(2) Federal income tax withheld",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(2) Federal income tax withheld - Prior Year Amount",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(3) Social security wages",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(3) Social security wages - Prior Year Amount",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(4) Social security tax withheld",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(4) Social security tax withheld - Prior Year Amount",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(5) Medicare wages and tips",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[5]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(5) Medicare wages and tips - Prior Year Amount",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[5]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(6) Medicare tax withheld",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[6]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(6) Medicare tax withheld - Prior Year Amount",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[6]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(7) Social security tips",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[7]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(7) Social security tips - Prior Year Amount",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[7]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(8) Allocated tips",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[8]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(8) Allocated tips - Prior Year Amount",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[8]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(10) Dependent care benefits",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[9]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(10) Dependent care benefits - Prior Year Amount",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[9]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(11) Nonqualified plans",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[10]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(11) Nonqualified plans - Prior Year Amount",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[10]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
];

const box12_fields = [
  {
    label: "12a Code",
    inputType: "select",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/select[1]",
  },
  {
    label: "12a Amount",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "12a Year of Prior USERRA Contribution",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "12a Prior Year Amount",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "12b Code",
    inputType: "select",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/select[1]",
  },
  {
    label: "12b Amount",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "12b Year of Prior USERRA Contribution",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "12b Prior Year Amount",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "12c Code",
    inputType: "select",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/select[1]",
  },
  {
    label: "12c Amount",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "12c Year of Prior USERRA Contribution",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "12c Prior Year Amount",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "12d Code",
    inputType: "select",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/select[1]",
  },
  {
    label: "12d Amount",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "12d Year of Prior USERRA Contribution",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "12d Prior Year Amount",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Additional box 12 items",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[5]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
];

const box12_additional_fields = [
  {
    label: 'If "P" above, move name or number (3903)',
    inputType: "select",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[5]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/select[1]",
  },
  {
    label: 'If "T" above, eligible child name or number (8839)',
    inputType: "select",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[5]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/select[1]",
  },
  {
    label: 'If "L" above, employee business expense schedule name or number',
    inputType: "select",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[5]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/select[1]",
  },
  {
    label: 'If "L" above, amount attributable to meals',
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[5]/div[1]/section[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: 'If "F" above, amount contributed to Roth IRA',
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[5]/div[1]/section[1]/div[5]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: 'If "S" above, amount contributed to Roth IRA',
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[5]/div[1]/section[1]/div[6]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Elect to include nontaxable combat pay in earned income for EIC",
    inputType: "checkbox",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[5]/div[1]/section[1]/div[7]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label:
      "Elect to include nontaxable combat pay in earned income for 2441 (DCB)",
    inputType: "checkbox",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[5]/div[1]/section[1]/div[8]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "403(b) participant qualifying for the 15 years of service rule",
    inputType: "checkbox",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[5]/div[1]/section[1]/div[9]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
];

const box13_fields = [
  {
    label: "Statutory employee",
    inputType: "checkbox",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[6]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Schedule C name or number, if statutory employee",
    inputType: "select",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[6]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/select[1]",
  },
  {
    label: "Retirement plan",
    inputType: "checkbox",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[6]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Third party sick pay",
    inputType: "checkbox",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[6]/div[1]/section[1]/div[4]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
];

const box14_fields = [
  {
    label: "RRTA compensation",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "RRTA compensation - Prior Year Amount",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "RRTA Tier I withholding",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "RRTA Tier I withholding - Prior Year Amount",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "RRTA Tier II withholding",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "RRTA Tier II withholding - Prior Year Amount",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "RRTA medicare tax",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "RRTA medicare tax - Prior Year Amount",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "RRTA additional medicare tax",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[5]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "RRTA additional medicare tax - Prior Year Amount",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[5]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Ministers housing allowance (SE only)",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[6]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Ministers housing allowance - Prior Year Amount",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[6]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Union dues",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[7]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Union dues - Prior Year Amount",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[7]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Other",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[8]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Other - Prior Year Amount",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[2]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[8]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
];

const state_and_local_fields = [
  {
    label: "(16) State wages, if different",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(16) State wages - Prior Year Amount",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(17) State income tax withheld",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(17) State income tax withheld - Prior Year Amount",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(18) Local wages, if different",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(18) Local wages - Prior Year Amount",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(19) Local income tax withheld",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(19) Local income tax withheld - Prior Year Amount",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
];

const electronic_filing_fields_w_2_state_local = [
  {
    label: "(15) St",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(15) Employer's State ID Number",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[2]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(16) State Wages, Tips, etc. [Override]",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[3]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(17) State Income Tax [Override]",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[4]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(18) Local Wages, Tips, etc. [Override]",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[5]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(19) Local Income Tax [Override]",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[6]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(20) Locality Name",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[4]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[7]/div[1]/div[1]/div[1]/input[1]",
  },
];

const electronic_filing_fields_w_2 = [
  {
    label: "Corrected W-2",
    inputType: "checkbox",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Nonstandard W-2 (altered, typed or handwritten)",
    inputType: "checkbox",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Agent for employer indicator",
    inputType: "checkbox",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Name control [Override]",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Name of in care of addressee",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
];

const employee_information_fields = [
  {
    label: "Taxpayer ID verified",
    inputType: "checkbox",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[6]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(a) Social security number [Override]",
    inputType: "number",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[6]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(d) Control number, if any",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[6]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(e) Name",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[6]/div[1]/section[1]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "(f) Street address",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[6]/div[1]/section[1]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Apartment number",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[6]/div[1]/section[1]/div[6]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "City",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[6]/div[1]/section[1]/div[6]/div[1]/section[1]/div[2]/div[1]/span[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "State",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[6]/div[1]/section[1]/div[6]/div[1]/section[1]/div[2]/div[1]/span[1]/div[2]/div[1]/div[1]/input[1]",
  },
  {
    label: "ZIP code",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[6]/div[1]/section[1]/div[6]/div[1]/section[1]/div[2]/div[1]/span[1]/div[3]/div[1]/div[1]/input[1]",
  },
  {
    label: "Foreign address",
    inputType: "checkbox",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[6]/div[1]/section[1]/div[6]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Region",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[6]/div[1]/section[1]/div[6]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/span[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Postal Code",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[6]/div[1]/section[1]/div[6]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/span[1]/div[2]/div[1]/div[1]/input[1]",
  },
  {
    label: "Country",
    inputType: "select",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[6]/div[1]/section[1]/div[6]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/span[1]/div[3]/div[1]/div[1]/div[1]/select[1]",
  },
];

const foreign_employer_fields = [
  {
    label: "Compensation not reported on W-2",
    inputType: "checkbox",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[7]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Employee performed services while residing in US",
    inputType: "checkbox",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[7]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
  {
    label: "Country code if work not performed while residing in US",
    inputType: "select",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[7]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/select[1]",
  },
  {
    label: "Foreign employer's tax identification number",
    inputType: "text",
    xpath:
      " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[3]/div[1]/section[1]/div[5]/div[1]/section[1]/div[7]/div[1]/section[1]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
  },
];
