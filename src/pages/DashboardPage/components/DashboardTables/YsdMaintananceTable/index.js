import React, { useState } from "react";
import { Table, Input } from "antd";
import { dataSourceYsdMaintanance } from "../../../../../dummyData";
import { PiFilePlusFill } from "react-icons/pi";
import { motion } from "framer-motion";
const YsdMaintananceTable = () => {
  const [searchedText, setSearchedText] = useState("");
  const columns = [
    {
      key: "1",
      title: "Müşteri",
      dataIndex: "costumer",
    },
    {
      key: "2",
      title: "Şube",
      dataIndex: "sube",
      filteredValue: [searchedText],
      onFilter: (value, record) => {
        return (
          String(record.costumer).toLowerCase().includes(value.toLowerCase()) ||
          String(record.sube).toLowerCase().includes(value.toLowerCase()) ||
          String(record.ysc).toLowerCase().includes(value.toLowerCase())
        );
      },
    },
    {
      key: "3",
      title: "Bakımı Gelmiş YSC Sayısı",
      dataIndex: "ysc",
      sorter: (record1, record2) => {
        return record1.ysc > record2.ysc;
      },
    },

    {
      key: "4",
      title: "İş Emri Oluştur",
      render: () => {
        return (
          <>
            <PiFilePlusFill
              color="#0066f4"
              size={20}
              style={{ cursor: "pointer" }}
            />
          </>
        );
      },
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="education"
      style={{ width: "100%", height: "100%" }}
    >
      <Input.Search
        style={{ width: "20%", marginBottom: "0.5rem" }}
        placeholder="Search here..."
        onChange={(e) => {
          setSearchedText(e.target.value);
        }}
      />
      <Table
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="education"
        columns={columns}
        dataSource={dataSourceYsdMaintanance}
        pagination={{
          pageSize: 6,
        }}
      />
    </motion.div>
  );
};

export default YsdMaintananceTable;
