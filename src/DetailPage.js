import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./DetailPage.css";

function DetailPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="detail-page">
      <div className="main-container">
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span class="sr-only">Open sidebar</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        <aside
          id="logo-sidebar"
          className="fixed top-0 left-0 z-40 w-20 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  className="flex flex-col items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    class="w-6 h-6 mt-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-col items-center p-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <img style={{color:"white"}} src="/images/user_icon.png" alt="profilePic" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-col items-center p-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <img
                    style={{ width: "500px", height: "32px", objectFit: "cover" }}
                    src="/images/car_icon.png"
                    alt="car_icon"
                  />
                  <span className="text-sm">Car</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-col items-center p-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {/* <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg> */}
                  <img
                    style={{ width: "500px", height: "32px", objectFit: "cover" }}
                    src="/images/vip_icon.png"
                    alt="vip_icon"
                  />
                  <span className="text-sm">VIP</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-col items-center p-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {/* <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg> */}
                  <img style={{ width: "500px", height: "32px", objectFit: "cover" }}
                    src="/images/dashboard_icon.png"
                    alt="dashboard_icon"/>
                  <span className="text-sm">Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-col items-center p-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {/* <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                  </svg> */}
                  <img style={{ width: "500px", height: "32px", objectFit: "cover" }}
                    src="/images/pay_icon.png"
                    alt="pay_icon"/>
                  <span className="text-sm">Pay</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <div className="right-container">
          <div className="header">
            <div className="searchbar">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>

              <form>
                <input
                  type="text"
                  id="carname"
                  name="carname"
                  placeholder="ค้นหาป้ายทะเบียน"
                />
              </form>

              <svg
                id="lens"
                class="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <div className="img-group">
              <img id="img1" src="/images/cat.jpg" alt="cat" />
              <img id="img2" src="/images/cat.jpg" alt="cat" />
              <img id="img3" src="/images/cat.jpg" alt="cat" />
              <div className="mini-img-group">
                <img id="mini-img1" src="/images/cat.jpg" alt="cat" />
                <img id="mini-img2" src="/images/cat.jpg" alt="cat" />
                <img id="mini-img3" src="/images/cat.jpg" alt="cat" />
                <img id="mini-img4" src="/images/cat.jpg" alt="cat" />
              </div>
            </div>
          </div>

          <div className="info">
            <table border="1" className="info-table">
              <thead>
                <tr>
                  <th>คันที่</th>
                  <th>เลขทะเบียนรถ</th>
                  <th>วันที่</th>
                  <th>เวลาเข้า</th>
                  <th>เวลาออก</th>
                  <th>ระยะเวลาการจอด</th>
                  <th>ค่าบริการ (บาท)</th>
                  <th>หมายเหตุ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                </tr>
                <tr>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                </tr>
                <tr>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                </tr>
                <tr>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                </tr>
                <tr>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                </tr>
                <tr>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                </tr>
                <tr>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                </tr>
                <tr>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                </tr>
                <tr>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                </tr>
                <tr>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                  <td>Row, Col</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
