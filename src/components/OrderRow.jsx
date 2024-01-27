import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import styled from "styled-components";
import Table from "./Table";
import { useState } from "react";
import Button from "./Button";
import { useOutsideClick } from "../hooks/useOutsideClick";

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

const Invoice = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 500;

  display: ${({ invoice }) => (invoice ? "flex" : "none")};
  align-items: center;
  justify-content: center;

  .card {
    font-weight: 600;
    width: 25%;
    perspective: 150rem;
    -moz-perspective: 150rem;
    position: relative;
    height: 55rem;

    &:hover .invoice_front {
      transform: rotateY(-180deg);
    }

    &:hover .invoice_back {
      transform: rotateY(0);
    }

    @media (max-width: 900px) {
      width: 90%;
    }
  }

  .invoice {
    font-size: 1.2rem;
    padding: 1.5rem;
    color: var(--color-grey-400);
    background-color: var(--color-white);
    border-radius: var(--border-radius-sm);
    border: 2px solid var(--color-grey-50);

    height: 55rem;
    transition: all 0.8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
    box-shadow: 0 1.5rem 4rem var(--color-grey-500);

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.5rem;
  }

  .invoice_back {
    transform: rotateY(180deg);
  }

  .invoice_img-container {
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: grayscale(100%);
    backdrop-filter: blur(2px);
    background-blend-mode: screen;
    background-color: var(--color-grey-700);
    border-top-left-radius: var(--border-radius-sm);
    border-top-right-radius: var(--border-radius-sm);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    overflow: hidden;

    display: grid;
    place-content: center;
    gap: 3rem;
  }

  .invoice_img {
    width: 20rem;
    height: 20rem;
    object-fit: cover;
  }

  .invoice_back-img {
    border-radius: var(--border-radius-lg);
    overflow: hidden;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .invoice_back-heading {
    text-transform: uppercase;
    font-size: 3rem;
    color: var(--color-grey-900);
    text-align: center;
  }

  .invoice_details {
    /* align-self: center; */
    display: grid;
    align-items: center;
    grid-template-columns: 8rem 20rem;
  }

  .invoice_name,
  .invoice_date,
  .invoice_amount,
  .invoice_status {
    align-self: flex-start;
    font-size: 1.6rem;

    color: var(--color-grey-900);
    display: inline-block;
  }

  .invoice_status {
    text-align: center;
    width: max-content;
    padding: 0.3rem 1.5rem;
    color: var(--color-white);
    border-radius: var(--border-radius-md);
    background-color: ${({ status }) =>
      status === "Paid" ? "var(--color-success)" : "var(--color-error)"};
  }

  .invoice_back .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    gap: 2rem;
  }

  .pulsate {
    display: block;
    animation: pulsate var(--longer-timing) linear infinite;
  }
`;

const Status = styled.div`
  color: ${({ status }) =>
    status === "Paid" ? "var(--color-success)" : "var(--color-error)"};
`;

function OrderRow({ order }) {
  const [invoice, setInvoice] = useState();
  const ref = useOutsideClick(setInvoice);

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
      <Invoice invoice={invoice} status={order.status}>
        <div className="card" ref={ref}>
          <div className="invoice invoice_front">
            <div className="invoice_img-container">
              <div className="invoice_bg-img"></div>
              <img className="invoice_img" src={order.img} alt={order.name} />
            </div>
            <div className="invoice_details">
              <div>Name:</div>
              <div className="invoice_name">{order.name}</div>
            </div>
            <div className="invoice_details">
              <div>Date:</div>
              <div className="invoice_date">{order.date}</div>
            </div>
            <div className="invoice_details">
              <div>Amount:</div>
              <div className="invoice_amount">{order.amount}</div>
            </div>
            <div className="invoice_details">
              <div>Status:</div>
              <div className="invoice_status">{order.status}</div>
            </div>
            <Button className="pulsate">Click Me !</Button>
          </div>
          <div className="invoice invoice_back">
            <div className="invoice_back-heading">Fooled you !</div>
            <div className="invoice_back-img">
              <img src={order.backimg} alt="boooo !" />
            </div>

            <div className="buttons">
              <Button
                color={"var(--color-white)"}
                bgcolor={"var(--color-purple)"}
              >
                Download Invoice
              </Button>
              <Button
                color={"var(--color-white)"}
                bgcolor={"var(--color-red)"}
                onClick={hideInvoice}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </Invoice>
      <Overlay invoice={invoice} />
    </StyledOrder>
  );
}

export default OrderRow;
