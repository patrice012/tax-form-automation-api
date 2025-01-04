const quick_entry_gambling_winnings_and_losses = [
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
    label: "Gross Winnings",
    inputType: "number",
    ref: "state_and_local",
    custom: "table",
    fields: [
      {
        label: "1",
        ref: "state",
        inputType: "number",
        xpath:
          " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[4]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
      },
      {
        label: "2",
        ref: "state",
        inputType: "number",
        xpath:
          " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[4]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
      },
    ],
  },
  {
    label: "Federal Withholding",
    inputType: "number",
    ref: "state_and_local",
    custom: "table",
    fields: [
      {
        label: "1",
        ref: "state",
        inputType: "number",
        xpath:
          " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[5]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
      },
      {
        label: "2",
        ref: "state",
        inputType: "number",
        xpath:
          " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[5]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
      },
    ],
  },
  {
    label: "State Withholding",
    inputType: "number",
    ref: "state_and_local",
    custom: "table",
    fields: [
      {
        label: "1",
        ref: "state",
        inputType: "number",
        xpath:
          " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[6]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
      },
      {
        label: "2",
        ref: "state",
        inputType: "number",
        xpath:
          " //body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[6]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
      },
    ],
  },
];
