import React from "react";
import "./BuyerUpload.css";
import HeaderComponent from "../Header/HeaderComponent";
import { Table } from "antd";

function BuyerUpload() {
  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "User Login",
      key: "userLogin",
      dataIndex: "userLogin",
    },
    {
      title: "Ticket Details",
      dataIndex: "ticketDetails",
      key: "ticketDetails",
    },
    {
      title: "Account Type",
      key: "accountType",
      dataIndex: "accountType",
    },
    {
      title: "Amount",
      key: "amount",
      dataIndex: "amount",
      render: (text, record) => <span style={{ color: "green" }}>₹{text}</span>,
    },
    {
      title: "Convenience fee",
      key: "convenienceFee",
      dataIndex: "convenienceFee",
      render: (text, record) => <span style={{ color: "green" }}>₹{text}</span>,
    },
    {
      title: "Total",
      key: "total",
      dataIndex: "total",
      render: (text, record) =>
        record.key === "Total" ? (
          <span style={{ color: "green" }}>₹{text}</span>
        ) : (
          <span style={{ color: "green" }}>
            ₹{record.amount + record.convenienceFee}
          </span>
        ),
    },
  ];

  const data = [
    // Define sample data
    {
      key: "TR001",
      date: "10/3/2024",
      userLogin: 9654784578 ,
      ticketDetails: "Pdf (2)",
      accountType: "IOB96A300029Q",
      amount: 400,
      convenienceFee: 20,
      total: 470,
    },
    {
      key: "TR002",
      date: "10/3/2024",
      userLogin: 9654784578 ,
      ticketDetails: "Jpg (2)",
      accountType: "Upi@010gpay",
      amount: 450,
      convenienceFee: 20,
      total: 470,
    },
    {
      key: "TR003",
      date: "10/3/2024",
      userLogin: 9654784578 ,
      ticketDetails: "PDF (2)",
      accountType: "IOB96A300029Q",
      amount: 400,
      convenienceFee: 10,
      total: 475,
    },
  ];

  const totalAmountSum = data.reduce((acc, item) => acc + item.amount, 0);
  const totalAmountSub = data.reduce((acc, item) => acc - item.amount, 0);
  const totalConvenienceFeeSum = data.reduce(
    (acc, item) => acc + item.convenienceFee,
    0
  );
  const totalConvenienceFeeSub = data.reduce(
    (acc, item) => acc - item.convenienceFee,
    0
  );
  const totalSumBuyer = totalAmountSum + totalConvenienceFeeSum; // Calculate the total sum of Amount and Convenience fee to add
  const totalSumUploder = totalAmountSub - totalConvenienceFeeSub; // Calculate the total sum of Amount and Convenience fee to subtract

  const dataWithTotalRowBuyer = [
    ...data,
    {
      key: "Total Amount",
      amount: totalAmountSum,
      convenienceFee: totalConvenienceFeeSum,
      total: totalSumBuyer,
    },
  ];
  const dataWithTotalRowUploder = [
    ...data,
    {
      key: "Total Amount",
      amount: totalAmountSub,
      convenienceFee: totalConvenienceFeeSub,
      total: totalSumUploder,
    },
  ];

  return (
    <>
      {/* <HeaderComponent /> */}
      <div className="buyer-section">
        <h3 className="payment-title">Payment</h3>
        <h6 className="payment-title">Buyer Payment</h6>
        <Table columns={columns} dataSource={dataWithTotalRowBuyer} />
        <hr></hr>
      </div>
      <div className="uploder-section">
        <h6 className="payment-title">Uploader Payment</h6>
        <Table columns={columns} dataSource={dataWithTotalRowUploder} />
      </div>
    </>
  );
}

export default BuyerUpload;
