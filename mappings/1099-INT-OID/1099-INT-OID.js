const quick_entry_interest_income = [
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
          "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[2]/div[1]/div[1]/div[1]/input[1]",
      },
      {
        label: "2",
        ref: "state",
        inputType: "string",
        xpath:
          "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[2]/div[1]/div[1]/div[1]/input[1]",
      },
    ],
  },

  {
    label: "1=taxpayer, 2=spouse",
    inputType: "number",
    ref: "state_and_local",
    custom: "table",
    fields: [
      {
        label: "1",
        ref: "state",
        inputType: "number",
        xpath:
          "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/div[1]/div[1]/div[1]/input[1]",
      },
      {
        label: "2",
        ref: "state",
        inputType: "number",
        xpath:
          "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[3]/div[1]/div[1]/div[1]/input[1]",
      },
    ],
  },
  {
    label: "Banks, S&L, etc.",
    inputType: "number",
    ref: "state_and_local",
    custom: "table",
    fields: [
      {
        label: "1",
        ref: "state",
        inputType: "number",
        xpath:
          "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[4]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
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
    label: "Seller-financed mortgage",
    inputType: "number",
    ref: "state_and_local",
    custom: "table",
    fields: [
      {
        label: "1",
        ref: "state",
        inputType: "number",
        xpath:
          "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[5]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
      },
      {
        label: "2",
        ref: "state",
        inputType: "number",
        xpath:
          "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[5]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
      },
    ],
  },

  {
    label: "U.S. Bonds, T-bills",
    inputType: "number",
    ref: "state_and_local",
    custom: "table",
    fields: [
      {
        label: "1",
        ref: "state",
        inputType: "number",
        xpath:
          "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[6]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
      },
      {
        label: "2",
        ref: "state",
        inputType: "number",
        xpath:
          "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[6]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
      },
    ],
  },
  {
    label: "Total Municipal Bonds",
    inputType: "number",
    ref: "state_and_local",
    custom: "table",
    fields: [
      {
        label: "1",
        ref: "state",
        inputType: "number",
        xpath:
          "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[7]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
      },
      {
        label: "2",
        ref: "state",
        inputType: "number",
        xpath:
          "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[7]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
      },
    ],
  },
  {
    label: "In-state Municipal Bonds",
    inputType: "number",
    ref: "state_and_local",
    custom: "table",
    fields: [
      {
        label: "1",
        ref: "state",
        inputType: "number",
        xpath:
          "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[8]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
      },
      {
        label: "2",
        ref: "state",
        inputType: "number",
        xpath:
          "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[8]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]",
      },
    ],
  },
];
