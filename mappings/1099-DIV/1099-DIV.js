const quick_entry_pensions_ira_distributions = [
  {
    label: "Name of Payer",
    inputType: "string",
    ref: "state_and_local",
    custom: "table",
    fields: [
      {
        label: "1",
        ref: "state",
        inputType: "string",
        xpath:
          " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[2]/div[1]/div[1]/div[1]/input[1]",
      },
      {
        label: "2",
        ref: "state",
        inputType: "string",
        xpath:
          " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[2]/div[1]/div[1]/div[1]/input[1]",
      },
    ],
  },

  {
    label: "Spouse",
    inputType: "checkbox",
    ref: "state_and_local",
    custom: "table",
    fields: [
      {
        label: "1",
        ref: "state",
        inputType: "checkbox",
        xpath:
          " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
      },
      {
        label: "2",
        ref: "state",
        inputType: "checkbox",
        xpath:
          " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[3]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
      },
    ],
  },
  {
    label: "Distribution Code #1",
    inputType: "select",
    ref: "state_and_local",
    custom: "table",
    fields: [
      {
        label: "1",
        ref: "state",
        inputType: "select",
        xpath:
          " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[4]/div[1]/div[1]/div[1]/div[1]/select[1]",
      },
      {
        label: "2",
        ref: "state",
        inputType: "select",
        xpath:
          " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[4]/div[1]/div[1]/div[1]/div[1]/select[1]",
      },
    ],
  },
  {
    label: "Distribution Code #2",
    inputType: "select",
    ref: "state_and_local",
    custom: "table",
    fields: [
      {
        label: "1",
        ref: "state",
        inputType: "select",
        xpath:
          " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[5]/div[1]/div[1]/div[1]/div[1]/select[1]",
      },
      {
        label: "2",
        ref: "state",
        inputType: "select",
        xpath:
          " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[5]/div[1]/div[1]/div[1]/div[1]/select[1]",
      },
    ],
  },
  {
    label: "IRA/SEP/SIMPLE",
    inputType: "checkbox",
    ref: "state_and_local",
    custom: "table",
    fields: [
      {
        label: "1",
        ref: "state",
        inputType: "checkbox",
        xpath:
          " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[6]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
      },
      {
        label: "2",
        ref: "state",
        inputType: "checkbox",
        xpath:
          " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[6]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
      },
    ],
  },
  {
    label: "State(s)",
    inputType: "text",
    ref: "state_and_local",
    custom: "table",
    fields: [
      {
        label: "1",
        ref: "state",
        inputType: "text",
        xpath:
          " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[7]/div[1]/div[1]/div[1]/input[1]",
      },
      {
        label: "2",
        ref: "state",
        inputType: "text",
        xpath:
          " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[7]/div[1]/div[1]/div[1]/input[1]",
      },
    ],
  },

  {
    label: "Gross Distribution",
    inputType: "number",
    ref: "state_and_local",
    custom: "table",
    fields: [
      {
        label: "1",
        ref: "state",
        inputType: "number",
        xpath:
          " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[8]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
      },
      {
        label: "2",
        ref: "state",
        inputType: "number",
        xpath:
          " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[8]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
      },
    ],
  },
  {
    label: "Taxable Amount",
    inputType: "number",
    ref: "state_and_local",
    custom: "table",
    fields: [
      {
        label: "1",
        ref: "state",
        inputType: "number",
        xpath:
          " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[9]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
      },
      {
        label: "2",
        ref: "state",
        inputType: "number",
        xpath:
          " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[9]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
      },
    ],
  },
  {
    label: "Federal Income Tax Withholding",
    inputType: "number",
    ref: "state_and_local",
    custom: "table",
    fields: [
      {
        label: "1",
        ref: "state",
        inputType: "number",
        xpath:
          " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[10]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
      },
      {
        label: "2",
        ref: "state",
        inputType: "number",
        xpath:
          " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[10]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
      },
    ],
  },
  {
    label: "State Income Tax Withholding",
    inputType: "number",
    ref: "state_and_local",
    custom: "table",
    fields: [
      {
        label: "1",
        ref: "state",
        inputType: "number",
        xpath:
          " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[11]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
      },
      {
        label: "2",
        ref: "state",
        inputType: "number",
        xpath:
          " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[11]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
      },
    ],
  },
];
