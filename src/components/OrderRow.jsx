import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import styled from "styled-components";
import Table from "./Table";
import { useState } from "react";
import Invoice from "./Invoice";

const StyledOrder = styled.div`
  font-size: 1.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-200);

    @media (max-width: 900px) {
      width: 138%;
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

  .invoiceIcon {
    cursor: pointer;
    transition: scale var(--general-timing) linear;
    &:hover {
      scale: 1.03;
    }
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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 200;
  opacity: 0.9;
  background-color: var(--color-grey-900);
  filter: blur(0.2px);
  transform: ${({ invoice }) => (invoice ? "scale(1)" : "scale(0)")};
`;

const Status = styled.div`
  color: ${({ status }) =>
    status === "Paid" ? "var(--color-success)" : "var(--color-error)"};
`;

function OrderRow({ order }) {
  const [invoice, setInvoice] = useState();

  function showInvoice() {
    document.body.style.overflow = "hidden";
    setInvoice(true);
  }

  function hideInvoice() {
    document.body.style.overflow = "auto";
    setInvoice(false);
  }

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
        <div className="invoiceIcon" onClick={showInvoice}>
          <HiOutlineDocumentArrowDown />
          View
        </div>
      </Table.Row>
      <Invoice order={order} invoice={invoice} hideInvoice={hideInvoice} />
      <Overlay invoice={invoice} />
    </StyledOrder>
  );
}

export default OrderRow;
