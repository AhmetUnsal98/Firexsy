import React, { useState } from "react";
import "./subetable.scss";
import { Table, Input } from "antd";
import { dataSourceSube } from "../../../dummyData";
import { AiFillEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { motion } from "framer-motion";
const SubeTable = () => {
  const [searchedText, setSearchedText] = useState("");
  const columns = [
    {
      key: "1",
      title: "Şube İsmi",
      dataIndex: "subeisim",
    },
    {
      key: "2",
      title: "Yetkili Kişi",
      dataIndex: "yetkili",
      filteredValue: [searchedText],
      onFilter: (value, record) => {
        return (
          String(record.subeisim).toLowerCase().includes(value.toLowerCase()) ||
          String(record.yetkili).toLowerCase().includes(value.toLowerCase())
        );
      },
    },
    {
      key: "3",
      title: "",
      render: () => {
        return (
          <>
            <FaTrashAlt
              color="#E30000"
              size={20}
              style={{ cursor: "pointer" }}
            />
            <AiFillEdit
              color="gray"
              size={20}
              style={{ cursor: "pointer", marginLeft: "0.4rem" }}
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
      <div className="costumer-table-upper">
        <Input.Search
          style={{ width: "40%", marginBottom: "0.5rem" }}
          placeholder="Search here..."
          onChange={(e) => {
            setSearchedText(e.target.value);
          }}
        />
        <button className="sube-table-add-new-sube-button">
          <span className="yeni-sube-ekle">Yeni Şube Ekle</span>
        </button>
      </div>

      <Table
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="education"
        columns={columns}
        dataSource={dataSourceSube}
        pagination={{
          pageSize: 6,
        }}
      />
    </motion.div>
  );
};

export default SubeTable;
