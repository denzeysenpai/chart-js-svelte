import * as model from "./model";

const Data1: model.PieData = {
  title: "Number of birthdays per month",
  data: [
    {
      label: "January",
      value: 10,
    },
    {
      label: "February",
      value: 8,
    },
    {
      label: "March",
      value: 12,
    },
    {
      label: "April",
      value: 7,
    },
    {
      label: "May",
      value: 9,
    },
    {
      label: "June",
      value: 5,
    },
    {
      label: "July",
      value: 11,
    },
    {
      label: "August",
      value: 4,
    },
    {
      label: "September",
      value: 6,
    },
    {
      label: "October",
      value: 3,
    },
    {
      label: "November",
      value: 2,
    },
    {
      label: "December",
      value: 7,
    },
  ],
};


const Data2 : model.PieData= {
    title: "Purchases",
    data: [
        {
            label: "BP-MIRA",
            value: 999.99
        },{
            label: "BP-BEN",
            value: 1909.99
        },{
            label: "BP-DAVE",
            value: 889.99
        },{
            label: "BP-JADE",
            value: 2789.99
        },{
            label: "BP-NOEL",
            value: 789.99
        },
    ]
}

export let monthsData = Data1
export let purchasesData = Data2