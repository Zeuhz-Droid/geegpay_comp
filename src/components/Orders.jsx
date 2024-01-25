import styled from "styled-components";
import Table from "./Table";
import { orders } from "../data/orders";
import OrderRow from "./OrderRow";

const StyledOrders = styled.div`
  grid-row: 2 / -1;

  background-color: var(--color-white);
  border-radius: var(--border-radius-lg);

  .heading-ph {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
  }

  .see-all {
    cursor: pointer;
    color: var(--color-primary);

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Orders() {
  return (
    <StyledOrders>
      <div className="heading-ph">
        <span>Last Orders</span>
        <span className="see-all">See All</span>
      </div>
      <Table columns="2fr 1fr 1fr 1fr 1fr">
        <Table.Header>
          <div>Name</div>
          <div>Date</div>
          <div>Amount</div>
          <div>Status</div>
          <div>Invoice</div>
        </Table.Header>

        <Table.Body
          data={orders}
          render={(order) => <OrderRow order={order} key={order.id} />}
        />
      </Table>
    </StyledOrders>
  );
}

export default Orders;
