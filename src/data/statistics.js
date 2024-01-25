import boxTick from "../assets/svgs/box-tick.svg";
import greenGraph from "../assets/svgs/green-graph.svg";

import rotate from "../assets/svgs/3d-rotate.svg";
import redGraph from "../assets/svgs/red-graph.svg";

import shoppingCart from "../assets/svgs/shopping-cart.svg";
import coin from "../assets/svgs/coin.svg";

export const statistics = [
  {
    id: 0,
    icon: boxTick,
    graph: greenGraph,
    type: "Total Order",
    amount: 350,
    account: "profit",
    percentage: 23.5,
    color: "var(--color-success)",
    backgroundColor: "var(--color-success-12)",
  },
  {
    id: 1,
    icon: rotate,
    graph: redGraph,
    type: "Total Refund",
    amount: 270,
    account: "loss",
    percentage: 23.5,
    color: "var(--color-error)",
    backgroundColor: "var(--color-error-12)",
  },
  {
    id: 2,
    icon: shoppingCart,
    graph: redGraph,
    type: "Average Sales",
    amount: 1567,
    account: "loss",
    percentage: 23.5,
    color: "var(--color-error)",
    backgroundColor: "var(--color-error-12)",
  },
  {
    id: 4,
    icon: coin,
    graph: greenGraph,
    type: "Total Income",
    amount: "$350,000",
    account: "profit",
    percentage: 23.5,
    color: "var(--color-success)",
    backgroundColor: "var(--color-success-12)",
  },
];
