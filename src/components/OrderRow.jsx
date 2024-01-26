import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import styled from "styled-components";
import Table from "./Table";

const StyledOrder = styled.div`
  font-size: 1.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-200);

    @media (max-width: 900px) {
      width: 118%;
    }
  }

  .merchant {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .img {
    width: 3rem;
    height: 3rem;
    border-radius: var(--border-radius-half);
  }

  .name {
    color: var(--color-grey-700);
  }

  .date {
    color: var(--color-grey-400);
  }

  .amount {
    font-weight: 600;
    color: var(--color-grey-900);
  }

  .invoice {
    & > svg {
      margin-right: 1rem;
    }
  }

  @media (max-width: 900px) {
    .merchant {
      gap: 1rem;
    }
  }
`;

const Status = styled.div`
  color: ${({ status }) =>
    status === "Paid" ? "var(--color-success)" : "var(--color-error)"};
`;

function OrderRow({ order }) {
  return (
    <StyledOrder>
      <Table.Row>
        <div className="merchant">
          <img className="img" src={order.img} alt={order.name} />
          <div className="name">{order.name}</div>
        </div>
        <div className="date">{order.date}</div>
        <div className="amount">{order.amount}</div>
        <Status status={order.status}>{order.status}</Status>
        <div className="invoice">
          <HiOutlineDocumentArrowDown />
          View
        </div>
      </Table.Row>
    </StyledOrder>
  );
}

export default OrderRow;
