import { Button, Table, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { dataSourceYsc } from "../../../dummyData";
import { AiFillEdit, AiFillEye } from "react-icons/ai";
import { BsFillPersonPlusFill } from "react-icons/bs";
import "./ysctable.scss";
function YscTable() {
  const [dataSource, setDataSource] = useState([]);
  const [editingRow, setEditingRow] = useState(null);
  const [searchedText, setSearchedText] = useState("");
  const [form] = Form.useForm();

  useEffect(() => {
    const data = dataSourceYsc;
    setDataSource(data);
  }, []);
  const columns = [
    {
      title: "No",
      dataIndex: "key",
    },
    {
      title: "Seri No",
      dataIndex: "serino",
      onFilter: (value, record) => {
        return (
          String(record.costumer).toLowerCase().includes(value.toLowerCase()) ||
          String(record.anayetkili)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(record.telefon).toLowerCase().includes(value.toLowerCase())
        );
      },
      render: (text, record) => {
        if (editingRow === record.key) {
          return (
            <Form.Item name="serino">
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
      title: "Bulunduğu Yer",
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
      title: "Son Bakim Tarihi",
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
      title: "Sonraki Bakim Tarihi",
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
            <AiFillEye
              style={{
                cursor: "pointer",
                marginRight: "1rem",
                color: "#0066f4",
              }}
              size={20}
            />
            <AiFillEdit
              type="link"
              onClick={() => {
                setEditingRow(record.key);
                form.setFieldsValue({
                  serino: record.serino,
                  cinsi: record.cinsi,
                  yer: record.yer,
                  sonbakim: record.sonbakim,
                  sonrakibakim: record.sonrakibakim,
                });
              }}
              style={{ cursor: "pointer", marginRight: "1rem", color: "gray" }}
              size={20}
            />

            <Button type="link" htmlType="submit">
              Kaydet
            </Button>
          </>
        );
      },
    },
  ];
  const onFinish = (values) => {
    console.log(values);
    const updatedDataSource = [...dataSource];
    updatedDataSource.splice(editingRow, 1, { ...values, key: editingRow });
    setDataSource(updatedDataSource);
    setEditingRow(null);
  };
  return (
    <div className="ysc-table-container">
      <div className="ysc-table-upper">
        <Input.Search
          style={{ width: "20%", marginBottom: "0.5rem", marginLeft: "1rem" }}
          placeholder="Search here..."
          onChange={(e) => {
            setSearchedText(e.target.value);
          }}
        />
        <div className="ysc-table-operations-container">
          <button className="ysc-table-add-new-costumer-button">
            <BsFillPersonPlusFill size={15} color="white" />
            <span>Yeni Müşteri Ekle</span>
          </button>
          <select className="ysc-table-add-new-costumer-select">
            <option>İşlemler</option>
            <option>Tümünü Sil</option>
            <option>Seçilenleri Sil</option>
            <option>Tümünü Bakım Yapılacaklara Aktar</option>
            <option>Tümünü Dolum Yapılacaklar Listesine Aktar</option>
            <option>Seçilenlerin Bakım Yapılacaklar Listesine Aktar</option>
            <option>
              Seçilelerin Tümünü Dolum Yapılacaklar Listesine Aktar
            </option>
          </select>
        </div>
      </div>
      <Form size="small" form={form} onFinish={onFinish}>
        <Table
          rowSelection={{ type: "radio" }}
          size="small"
          columns={columns}
          dataSource={dataSource}
        ></Table>
      </Form>
    </div>
  );
}

export default YscTable;
