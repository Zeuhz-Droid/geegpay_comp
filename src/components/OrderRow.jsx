import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import styled from "styled-components";
import Table from "./Table";
import { useState } from "react";

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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 100;
  background-color: var(--color-grey-900);
  opacity: 0.8;
  filter: blur(0.2px);
  transform: ${({ invoice }) => (invoice ? "scale(1)" : "scale(0)")};
`;

const Invoice = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 200;

  display: ${({ invoice }) => (invoice ? "flex" : "none")};
  align-items: center;
  justify-content: center;

  .invoice {
    font-size: 1.2rem;
    padding: 4rem 2rem;
    color: var(--color-grey-500);
    background-color: var(--color-white);
    border-radius: var(--border-radius-lg);
    border: 2px solid var(--color-grey-50);

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.5rem;

    & > div {
      display: grid;
      grid-template-columns: 6rem 1fr;
      align-items: center;
    }

    .name,
    .date,
    .amount,
    .status {
      font-size: 1.4rem;
      display: inline-block;
    }

    & .status {
      text-align: center;
      width: max-content;
      padding: 0.3rem 1.5rem;
      color: var(--color-white);
      border-radius: var(--border-radius-md);
      background-color: ${({ status }) =>
        status === "Paid" ? "var(--color-success)" : "var(--color-error)"};
    }

    .button {
      padding: 0.6rem 1.5rem;
      font-size: 1.5rem;
      color: var(--color-white);
      background-color: var(--color-red);
      border: 1px solid var(--color-red);
      border-radius: var(--border-radius-md);
      transition: opacity var(--general-timing) linear;
      margin-top: auto;

      &:hover {
        opacity: 1;
      }
    }
  }
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
        <div className="invoice" onClick={showInvoice}>
          <HiOutlineDocumentArrowDown />
          View
        </div>
      </Table.Row>
      <Invoice invoice={invoice} status={order.status}>
        <div className="invoice">
          <div>
            <div>Name:</div>
            <div className="name">{order.name}</div>
          </div>
          <div>
            <div>Date:</div>
            <div className="date">{order.date}</div>
          </div>
          <div>
            <div>Amount:</div>
            <div className="amount">{order.amount}</div>
          </div>
          <div>
            <div>Status:</div>
            <div className="status">{order.status}</div>
          </div>
          <button onClick={hideInvoice} className="button">
            Close
          </button>
        </div>
      </Invoice>
      <Overlay invoice={invoice} />
    </StyledOrder>
  );
}

export default OrderRow;
