import React, { useState, useEffect } from "react";
import PageCotainer from "../../components/page-container/PageCotainer";
import { ChevronLeftIcon, ChevronRightIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

function ListVipPage() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // สร้างข้อมูลเริ่มต้นโดยใช้ฟังก์ชัน generateInitialData
    setData(generateInitialData());
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  // ฟังก์ชันสร้างข้อมูลเริ่มต้น
  const generateInitialData = () => {
    return mockData.map((item, index) => ({
      ...item,
      displayId: index + 1  // เพิ่ม displayId สำหรับแสดงลำดับ
    }));
  };

  // const tableHeader = [
  //   { label: "ลำดับ" },
  //   { label: "เลขทะเบียนรถ" },
  //   { label: "จังหวัด" },
  //   { label: "ชื่อ-นามสกุล" },
  //   { label: "อีเมล" },
  //   { label: "หมายเลขโทรศัพท์" },
  //   { label: "แก้ไขข้อมูล" },
  // ];

  const mockData = [
    {
      id: 1,
      licensePlate: "1กก 1234",
      province: "กรุงเทพมหานคร",
      name: "สมชาย ใจดี",
      email: "somchai@gmail.com",
      phoneNumber: "081-123-4567",
      edit: "แก้ไข",
    },
    {
      id: 2,
      licensePlate: "2ขข 5678",
      province: "กรุงเทพมหานคร",
      name: "สมหญิง แสนสวย",
      email: "somying@gmail.com",
      phoneNumber: "086-987-6543",
      edit: "แก้ไข",
    },
    {
      id: 3,
      licensePlate: "3คค 9101",
      province: "เชียงใหม่",
      name: "วิชัย เรืองแสง",
      email: "vichai@gmail.com",
      phoneNumber: "089-555-1234",
      edit: "แก้ไข",
    },
    {
      id: 4,
      licensePlate: "4งง 2345",
      province: "นครปฐม",
      name: "มานะ ทรงชัย",
      email: "mana@gmail.com",
      phoneNumber: "084-321-9876",
      edit: "แก้ไข",
    },
    {
      id: 5,
      licensePlate: "5จจ 6789",
      province: "นครราชสีมา",
      name: "จิตรา แสนดี",
      email: "chittra@gmail.com",
      phoneNumber: "082-654-7890",
      edit: "แก้ไข",
    },
    {
      id: 6,
      licensePlate: "6ฉฉ 1012",
      province: "ภูเก็ต",
      name: "ประยุทธ์ ปลอดภัย",
      email: "prayoot@gmail.com",
      phoneNumber: "085-123-6547",
      edit: "แก้ไข",
    },
    {
      id: 7,
      licensePlate: "7ชช 2345",
      province: "กรุงเทพมหานคร",
      name: "อนุชา ยอดเยี่ยม",
      email: "anucha@gmail.com",
      phoneNumber: "083-654-9870",
      edit: "แก้ไข",
    },
    {
      id: 8,
      licensePlate: "8ซซ 4567",
      name: "จริยา อ่อนหวาน",
      email: "jariya@gmail.com",
      province: "เชียงราย",
      phoneNumber: "087-234-6789",
      edit: "แก้ไข",
    },
    {
      id: 9,
      licensePlate: "9ญญ 7890",
      province: "ชลบุรี",
      name: "พิมพ์ใจ รักดี",
      email: "pimmy@gmail.com",
      phoneNumber: "089-123-4321",
      edit: "แก้ไข",
    },
    {
      id: 10,
      licensePlate: "10ฎฎ 1234",
      province: "นครนายก",
      name: "สุนทร ขันติ",
      email: "sunthorn@gmail.com",
      phoneNumber: "082-789-1234",
      edit: "แก้ไข",
    },
  ];

  const mockDataApi = {
    pageSize: 10,
    rows: 508,
  };

  const pageCount = Math.ceil(mockDataApi.rows / mockDataApi.pageSize);

  const getCurrentRowRange = () => {
    const startRange = (page - 1) * mockDataApi.pageSize + 1;
    const endRange = Math.min(page * mockDataApi.pageSize, mockDataApi.rows);
    return `${startRange}-${endRange} of ${mockDataApi.rows}`;
  };

  const handleRowClick = (row) => {
    const [firstName, lastName] = row.name.split(" ");
    setSelectedRow({ ...row, name: firstName, surname: lastName });
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedRow((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === selectedRow.id
          ? { ...selectedRow, name: `${selectedRow.name} ${selectedRow.surname}` }
          : item
      )
    );
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    setData((prevData) => {
      const newData = prevData.filter((item) => item.id !== selectedRow.id);
      // ปรับปรุง displayId หลังจากลบข้อมูล
      return newData.map((item, index) => ({
        ...item,
        displayId: index + 1
      }));
    });
    setIsModalOpen(false);
  };

  return (
    <PageCotainer>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">การจัดการสมาชิก VIP</h1>
        <button className="bg-primary rounded-lg px-7 py-2 text-white">สมัครสมาชิก VIP</button>
      </div>

      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-blue-100">
            {["ลำดับ", "เลขทะเบียนรถ", "จังหวัด", "ชื่อ-นามสกุล", "อีเมล", "หมายเลขโทรศัพท์", "แก้ไขข้อมูล"].map((label) => (
              <th key={label} className="border-b bg-blue-200 px-4 py-3 text-left text-gray-700 text-sm font-thin">
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="h-[430px] overflow-auto">
          {data.map((row) => (
            <tr key={row.id} className="border-b text-gray-700 text-sm font-thin">
              <td className="px-4 py-3">{row.displayId}</td>
              <td className="px-4 py-3">{row.licensePlate}</td>
              <td className="px-4 py-3">{row.province}</td>
              <td className="px-4 py-3">{row.name}</td>
              <td className="px-4 py-3">{row.email}</td>
              <td className="px-4 py-3">{row.phoneNumber}</td>
              <td className="px-4 py-3">
                <button onClick={() => handleRowClick(row)}>
                  <PencilSquareIcon className="w-5 h-5 text-primary" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end items-center mt-4 gap-6">
        <p className="text-sm font-thin">{getCurrentRowRange()}</p>
        <div className="flex gap-3">
          <button onClick={() => setPage((prev) => (prev === 1 ? pageCount : prev - 1))}>
            <ChevronLeftIcon className="w-4 h-4" />
          </button>
          <button onClick={() => setPage((prev) => (prev === pageCount ? 1 : prev + 1))}>
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Modall */}
      {isModalOpen && selectedRow && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-[779px]">

            <div className="w-full flex justify-end">
              <button onClick={() => setIsModalOpen(false)}>
                <XCircleIcon className="w-8 h-8 text-gray-600 hover:text-red-500" />
              </button>
            </div>

            <h2 className="text-3xl font-bold mb-4 pt-6">รายละเอียดสมาชิก VIP</h2>

            <div className="space-y-4">
              <div className=" flex justify-between gap-6">
              <div className=" w-full">
                <label className=" block text-gray-700 mb-2">ชื่อ</label>
                <input
                  type="text"
                  name="name"
                  value={selectedRow.name}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div className=" w-full">
                <label className="block text-gray-700 mb-2">นามสกุล</label>
                <input
                  type="text"
                  name="surname"
                  value={selectedRow.surname}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded"
                />
              </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">เลขทะเบียนรถ</label>
                <input
                  type="text"
                  name="licensePlate"
                  value={selectedRow.licensePlate}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">อีเมล</label>
                <input
                  type="text"
                  name="email"
                  value={selectedRow.email}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">เบอร์ติดต่อ</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={selectedRow.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <button className=" flex gap-1 justify-center items-center py-2 text-black rounded-lg hover:text-red-500" onClick={handleDelete}>
                <TrashIcon className=" w-5 h-5"/>
                <p className=" text-base">ยกเลิกสมาชิก VIP</p>
              </button>
              <div className="flex gap-4">
                <button className="bg-gray-400 px-4 py-2 text-white rounded-lg" onClick={() => setIsModalOpen(false)}>
                  ปิด
                </button>
                <button className="bg-primary px-4 py-2 text-white rounded-lg" onClick={handleSave}>
                  บันทึกการแก้ไข
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageCotainer>
  );
}

export default ListVipPage;
