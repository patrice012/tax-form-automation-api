import { Tfield } from "./declaration";

const inputs_fields = [
  {
    label: "Social security benefits (SSA-1099, box 5) ",
    inputType: "number",
    ref: "net_benefits",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE3-770-label",
    dataTestId: "OSICtrlE3-770-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE4-773-label",
    dataTestId: "OSICtrlE4-773-input",
  },
  {
    label: "OSIEdit69-809",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit69-809",
    dataTestId: "OSIEdit69-809",
  },
  {
    label: "OSIEdit72-811",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit72-811",
    dataTestId: "OSIEdit72-811",
  },
  {
    label: "Medicare premiums paid (SSA-1099) ",
    ref: "benefits_paid",
    inputType: "number",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE40-779-label",
    dataTestId: "OSICtrlE40-779-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE42-782-label",
    dataTestId: "OSICtrlE42-782-input",
  },
  {
    label: "OSIEdit73-813",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit73-813",
    dataTestId: "OSIEdit73-813",
  },
  {
    label: "OSIEdit74-815",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit74-815",
    dataTestId: "OSIEdit74-815",
  },
  {
    label: "OSIEdit45-821",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit45-821",
    dataTestId: "OSIEdit45-821",
  },
  {
    label: "OSIEdit46-823",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit46-823",
    dataTestId: "OSIEdit46-823",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE117-825-label",
    dataTestId: "OSICtrlE117-825-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[5]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE144-828-label",
    dataTestId: "OSICtrlE144-828-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[5]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE145-831-label",
    dataTestId: "OSICtrlE145-831-input",
  },
  {
    label: "OSIEdit164-834",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[5]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit164-834",
    dataTestId: "OSIEdit164-834",
  },
  {
    label: "OSIEdit165-836",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[5]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit165-836",
    dataTestId: "OSIEdit165-836",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[6]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE7-797-label",
    dataTestId: "OSICtrlE7-797-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[6]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE8-800-label",
    dataTestId: "OSICtrlE8-800-input",
  },
  {
    label:
      "Voluntary federal income tax withheld (SSA-1099, box 6 / RRB-1099, box 10)",
    inputType: "number",
    ref: "federal_income_tax_withheld",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[7]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE5-791-label",
    dataTestId: "OSICtrlE5-791-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[7]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE6-794-label",
    dataTestId: "OSICtrlE6-794-input",
  },
  {
    label: "OSIEdit75-817",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[7]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit75-817",
    dataTestId: "OSIEdit75-817",
  },
  {
    label: "OSIEdit76-819",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[7]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit76-819",
    dataTestId: "OSIEdit76-819",
  },
  {
    label: "OSIEdit25-803",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[8]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit25-803",
    dataTestId: "OSIEdit25-803",
  },
  {
    label: "OSIEdit26-805",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[8]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit26-805",
    dataTestId: "OSIEdit26-805",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE124-173-label",
    dataTestId: "OSICtrlE124-173-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE125-176-label",
    dataTestId: "OSICtrlE125-176-input",
  },
  {
    label: "OSIEdit128-197",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit128-197",
    dataTestId: "OSIEdit128-197",
  },
  {
    label: "OSIEdit129-199",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit129-199",
    dataTestId: "OSIEdit129-199",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE70-67-label",
    dataTestId: "OSICtrlE70-67-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE71-70-label",
    dataTestId: "OSICtrlE71-70-input",
  },
  {
    label: "OSIEdit93-141",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit93-141",
    dataTestId: "OSIEdit93-141",
  },
  {
    label: "OSIEdit95-145",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit95-145",
    dataTestId: "OSIEdit95-145",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE48-103-label",
    dataTestId: "OSICtrlE48-103-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE49-106-label",
    dataTestId: "OSICtrlE49-106-input",
  },
  {
    label: "OSIEdit77-125",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit77-125",
    dataTestId: "OSIEdit77-125",
  },
  {
    label: "OSIEdit87-133",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit87-133",
    dataTestId: "OSIEdit87-133",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE59-369-label",
    dataTestId: "OSICtrlE59-369-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE60-372-label",
    dataTestId: "OSICtrlE60-372-input",
  },
  {
    label: "OSIEdit98-375",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit98-375",
    dataTestId: "OSIEdit98-375",
  },
  {
    label: "OSIEdit100-377",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit100-377",
    dataTestId: "OSIEdit100-377",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE63-363-label",
    dataTestId: "OSICtrlE63-363-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[2]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE64-366-label",
    dataTestId: "OSICtrlE64-366-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[5]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE15-91-label",
    dataTestId: "OSICtrlE15-91-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[5]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE16-94-label",
    dataTestId: "OSICtrlE16-94-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[6]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE1-55-label",
    dataTestId: "OSICtrlE1-55-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[6]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE2-58-label",
    dataTestId: "OSICtrlE2-58-input",
  },
  {
    label: "OSIEdit84-127",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[6]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit84-127",
    dataTestId: "OSIEdit84-127",
  },
  {
    label: "OSIEdit88-135",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[6]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit88-135",
    dataTestId: "OSIEdit88-135",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[7]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE17-97-label",
    dataTestId: "OSICtrlE17-97-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[7]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE18-100-label",
    dataTestId: "OSICtrlE18-100-input",
  },
  {
    label: "OSIEdit91-137",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[7]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit91-137",
    dataTestId: "OSIEdit91-137",
  },
  {
    label: "OSIEdit92-139",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[7]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit92-139",
    dataTestId: "OSIEdit92-139",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[8]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE78-73-label",
    dataTestId: "OSICtrlE78-73-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[8]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE79-76-label",
    dataTestId: "OSICtrlE79-76-input",
  },
  {
    label: "OSIEdit94-143",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[8]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit94-143",
    dataTestId: "OSIEdit94-143",
  },
  {
    label: "OSIEdit96-147",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[8]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit96-147",
    dataTestId: "OSIEdit96-147",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[9]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE56-109-label",
    dataTestId: "OSICtrlE56-109-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[9]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE57-112-label",
    dataTestId: "OSICtrlE57-112-input",
  },
  {
    label: "OSIEdit86-131",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[9]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit86-131",
    dataTestId: "OSIEdit86-131",
  },
  {
    label: "OSIEdit90-159",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[9]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit90-159",
    dataTestId: "OSIEdit90-159",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[10]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE32-401-label",
    dataTestId: "OSICtrlE32-401-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[10]/div[1]/div[1]/div[2]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE68-404-label",
    dataTestId: "OSICtrlE68-404-input",
  },
  {
    label: "OSIEdit114-407",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[10]/div[1]/div[1]/div[2]/div[2]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit114-407",
    dataTestId: "OSIEdit114-407",
  },
  {
    label: "OSIEdit115-409",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[10]/div[1]/div[1]/div[2]/div[2]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit115-409",
    dataTestId: "OSIEdit115-409",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[10]/div[1]/div[1]/div[2]/div[4]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE118-411-label",
    dataTestId: "OSICtrlE118-411-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[10]/div[1]/div[1]/div[2]/div[4]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE119-414-label",
    dataTestId: "OSICtrlE119-414-input",
  },
  {
    label: "OSIEdit152-417",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[10]/div[1]/div[1]/div[2]/div[4]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit152-417",
    dataTestId: "OSIEdit152-417",
  },
  {
    label: "OSIEdit153-419",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[10]/div[1]/div[1]/div[2]/div[4]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit153-419",
    dataTestId: "OSIEdit153-419",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[11]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE120-161-label",
    dataTestId: "OSICtrlE120-161-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[11]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE121-164-label",
    dataTestId: "OSICtrlE121-164-input",
  },
  {
    label: "OSIEdit130-201",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[11]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit130-201",
    dataTestId: "OSIEdit130-201",
  },
  {
    label: "OSIEdit131-203",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[11]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit131-203",
    dataTestId: "OSIEdit131-203",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[12]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE80-79-label",
    dataTestId: "OSICtrlE80-79-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[12]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE81-82-label",
    dataTestId: "OSICtrlE81-82-input",
  },
  {
    label: "OSIEdit101-149",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[12]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit101-149",
    dataTestId: "OSIEdit101-149",
  },
  {
    label: "OSIEdit103-153",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[12]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit103-153",
    dataTestId: "OSIEdit103-153",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[13]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE82-85-label",
    dataTestId: "OSICtrlE82-85-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[13]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE83-88-label",
    dataTestId: "OSICtrlE83-88-input",
  },
  {
    label: "OSIEdit102-151",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[13]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit102-151",
    dataTestId: "OSIEdit102-151",
  },
  {
    label: "OSIEdit104-155",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[13]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit104-155",
    dataTestId: "OSIEdit104-155",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[14]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE140-221-label",
    dataTestId: "OSICtrlE140-221-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[14]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE141-224-label",
    dataTestId: "OSICtrlE141-224-input",
  },
  {
    label: "OSIEdit154-239",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[14]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit154-239",
    dataTestId: "OSIEdit154-239",
  },
  {
    label: "OSIEdit155-241",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[14]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit155-241",
    dataTestId: "OSIEdit155-241",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[15]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE126-179-label",
    dataTestId: "OSICtrlE126-179-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[15]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE127-182-label",
    dataTestId: "OSICtrlE127-182-input",
  },
  {
    label: "OSIEdit134-209",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[15]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit134-209",
    dataTestId: "OSIEdit134-209",
  },
  {
    label: "OSIEdit135-211",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[15]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit135-211",
    dataTestId: "OSIEdit135-211",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[16]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE9-185-label",
    dataTestId: "OSICtrlE9-185-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[16]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE10-188-label",
    dataTestId: "OSICtrlE10-188-input",
  },
  {
    label: "OSIEdit132-205",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[16]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit132-205",
    dataTestId: "OSIEdit132-205",
  },
  {
    label: "OSIEdit133-207",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[16]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit133-207",
    dataTestId: "OSIEdit133-207",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[17]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE122-167-label",
    dataTestId: "OSICtrlE122-167-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[17]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE123-170-label",
    dataTestId: "OSICtrlE123-170-input",
  },
  {
    label: "OSIEdit136-213",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[17]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit136-213",
    dataTestId: "OSIEdit136-213",
  },
  {
    label: "OSIEdit137-215",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[17]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit137-215",
    dataTestId: "OSIEdit137-215",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[18]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE146-233-label",
    dataTestId: "OSICtrlE146-233-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[18]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE147-236-label",
    dataTestId: "OSICtrlE147-236-input",
  },
  {
    label: "OSIEdit156-243",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[18]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit156-243",
    dataTestId: "OSIEdit156-243",
  },
  {
    label: "OSIEdit157-245",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[18]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit157-245",
    dataTestId: "OSIEdit157-245",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[19]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE11-61-label",
    dataTestId: "OSICtrlE11-61-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[19]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE12-64-label",
    dataTestId: "OSICtrlE12-64-input",
  },
  {
    label: "OSIEdit85-129",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[19]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit85-129",
    dataTestId: "OSIEdit85-129",
  },
  {
    label: "OSIEdit89-157",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[19]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit89-157",
    dataTestId: "OSIEdit89-157",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[20]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE38-191-label",
    dataTestId: "OSICtrlE38-191-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[20]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE39-194-label",
    dataTestId: "OSICtrlE39-194-input",
  },
  {
    label: "OSIEdit138-217",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[20]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit138-217",
    dataTestId: "OSIEdit138-217",
  },
  {
    label: "OSIEdit139-219",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[20]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit139-219",
    dataTestId: "OSIEdit139-219",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[21]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE41-115-label",
    dataTestId: "OSICtrlE41-115-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[21]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE58-118-label",
    dataTestId: "OSICtrlE58-118-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[22]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE143-230-label",
    dataTestId: "OSICtrlE143-230-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[22]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE142-227-label",
    dataTestId: "OSICtrlE142-227-input",
  },
  {
    label: "OSIEdit158-247",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[22]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit158-247",
    dataTestId: "OSIEdit158-247",
  },
  {
    label: "OSIEdit159-249",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[22]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit159-249",
    dataTestId: "OSIEdit159-249",
  },
  {
    label: "OSIEdit61-121",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[23]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit61-121",
    dataTestId: "OSIEdit61-121",
  },
  {
    label: "OSIEdit62-123",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[23]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit62-123",
    dataTestId: "OSIEdit62-123",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[24]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE97-251-label",
    dataTestId: "OSICtrlE97-251-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[24]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE99-254-label",
    dataTestId: "OSICtrlE99-254-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE148-905-label",
    dataTestId: "OSICtrlE148-905-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE149-908-label",
    dataTestId: "OSICtrlE149-908-input",
  },
  {
    label: "OSIEdit160-917",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit160-917",
    dataTestId: "OSIEdit160-917",
  },
  {
    label: "OSIEdit161-919",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit161-919",
    dataTestId: "OSIEdit161-919",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE150-911-label",
    dataTestId: "OSICtrlE150-911-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE151-914-label",
    dataTestId: "OSICtrlE151-914-input",
  },
  {
    label: "OSIEdit162-921",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit162-921",
    dataTestId: "OSIEdit162-921",
  },
  {
    label: "OSIEdit163-923",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit163-923",
    dataTestId: "OSIEdit163-923",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE51-564-label",
    dataTestId: "OSICtrlE51-564-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE52-567-label",
    dataTestId: "OSICtrlE52-567-input",
  },
  {
    label: "OSIEdit105-596",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit105-596",
    dataTestId: "OSIEdit105-596",
  },
  {
    label: "OSIEdit108-602",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit108-602",
    dataTestId: "OSIEdit108-602",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE53-570-label",
    dataTestId: "OSICtrlE53-570-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE54-573-label",
    dataTestId: "OSICtrlE54-573-input",
  },
  {
    label: "OSIEdit106-598",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit106-598",
    dataTestId: "OSIEdit106-598",
  },
  {
    label: "OSIEdit109-604",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit109-604",
    dataTestId: "OSIEdit109-604",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE43-588-label",
    dataTestId: "OSICtrlE43-588-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE44-591-label",
    dataTestId: "OSICtrlE44-591-input",
  },
  {
    label: "OSIEdit107-600",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/div[4]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit107-600",
    dataTestId: "OSIEdit107-600",
  },
  {
    label: "OSIEdit110-606",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "OSIEdit110-606",
    dataTestId: "OSIEdit110-606",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[5]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE50-694-label",
    dataTestId: "OSICtrlE50-694-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[5]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE27-682-label",
    dataTestId: "OSICtrlE27-682-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[5]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE28-685-label",
    dataTestId: "OSICtrlE28-685-input",
  },
  {
    label: "expanded detail input",
    inputType: "text",
    xpath:
      "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/section[1]/div[5]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
    id: "field-OSICtrlE29-688-label",
    dataTestId: "OSICtrlE29-688-input",
  },
];
;

const fields = [...inputs_fields];

export function getInputFields() {
  const arr = fields.filter((field) => {
    if ((field as Tfield).ref) {
      return field;
    }
  });
  return arr;
}
