import styled from "styled-components";
import Table from "./Table";
import { orders } from "../data/orders";
import OrderRow from "./OrderRow";
import { useState } from "react";

const StyledOrders = styled.div`
  grid-row: 2 / -1;
  height: max-content;

  background-color: var(--color-white);
  border-radius: var(--border-radius-lg);
  overflow: hidden;

  .heading-ph {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    font-size: 1.8rem;
    padding: 1.5rem;
  }

  .see-all {
    cursor: pointer;
    font-weight: 400;
    color: var(--color-primary);

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 1200px) {
    grid-column: 1 / -1;
    grid-row: 3 / 4;
  }
`;

function Orders() {
  const [showAll, setShowAll] = useState();

  const filteredOrders = orders.slice(0, (showAll && orders.length) || 5);

  return (
    <StyledOrders>
      <div className="heading-ph">
        <span>Last Orders</span>
        <span className="see-all" onClick={() => setShowAll((prev) => !prev)}>
          {showAll ? "See Less" : "See All"}
        </span>
      </div>
      <Table columns="minmax(16rem, 2fr) minmax(10rem, 1fr) minmax(8rem, 1fr) minmax(6rem, 1fr) minmax(8rem, 1fr)">
        <Table.Header>
          <div>Name</div>
          <div>Date</div>
          <div>Amount</div>
          <div>Status</div>
          <div>Invoice</div>
        </Table.Header>
        {console.log(filteredOrders)}
        <Table.Body
          data={filteredOrders}
          render={(order) => <OrderRow order={order} key={order.id} />}
        />
      </Table>
    </StyledOrders>
  );
}

export default Orders;
