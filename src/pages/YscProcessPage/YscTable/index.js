import { Button, Table, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { dataSourceYsc } from "../../../dummyData";
import "./ysctable.scss";
function YscTable() {
  const [dataSource, setDataSource] = useState([]);
  const [editingRow, setEditingRow] = useState(null);
  const [searchedText, setSearchedText] = useState("");
  const [form] = Form.useForm();

  useEffect(() => {
    const data = [];
    for (let index = 0; index < 7; index++) {
      data.push({
        key: `${index}`,
        name: `Name ${index}`,
        address: `Address ${index}`,
      });
    }
    setDataSource(data);
  }, []);
  const columns = [
    {
      title: "Seri No",
      dataIndex: "seriNo",
      filteredValue: [searchedText],
      onFilter: (value, record) => {
        return (
          String(record.seriNo).toLowerCase().includes(value.toLowerCase()) ||
          String(record.cinsi).toLowerCase().includes(value.toLowerCase()) ||
          String(record.yer).toLowerCase().includes(value.toLowerCase())
        );
      },
      render: (text, record) => {
        if (editingRow === record.key) {
          return (
            <Form.Item
              name="seriNo"
              rules={[
                {
                  required: true,
                  message: "Please enter your name",
                },
              ]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Cinsi",
      dataIndex: "cinsi",
      render: (text, record) => {
        if (editingRow === record.key) {
          return (
            <Form.Item name="cinsi">
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Yer",
      dataIndex: "yer",
      render: (text, record) => {
        if (editingRow === record.key) {
          return (
            <Form.Item name="yer">
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Son Bakım Tarihi",
      dataIndex: "sonbakim",
      render: (text, record) => {
        if (editingRow === record.key) {
          return (
            <Form.Item name="sonbakim">
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Sonraki Bakım Tarihi",
      dataIndex: "sonrakibakim",
      render: (text, record) => {
        if (editingRow === record.key) {
          return (
            <Form.Item name="sonrakibakim">
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Actions",
      render: (_, record) => {
        return (
          <>
            <Button
              type="link"
              onClick={() => {
                setEditingRow(record.key);
                form.setFieldsValue({
                  seriNo: record.seriNo,
                  cinsi: record.cinsi,
                  yer: record.yer,
                  sonbakim: record.sonbakim,
                  sonrakibakim: record.sonrakibakim,
                });
              }}
            >
              Edit
            </Button>
            <Button type="link" htmlType="submit">
              Save
            </Button>
          </>
        );
      },
    },
  ];
  const onFinish = (values) => {
    const updatedDataSource = [...dataSource];
    updatedDataSource.splice(editingRow, 1, { ...values, key: editingRow });
    setDataSource(updatedDataSource);
    setEditingRow(null);
  };
  return (
    <div className="ysc-table-container">
      <Input.Search
        style={{ width: "20%", marginBottom: "0.5rem" }}
        placeholder="Search here..."
        onChange={(e) => {
          setSearchedText(e.target.value);
        }}
      />
      <Form form={form} onFinish={onFinish}>
        <Table columns={columns} dataSource={dataSourceYsc}></Table>
      </Form>
    </div>
  );
}

export default YscTable;
