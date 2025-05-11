import "./Searchpage.css";
import { motion } from "framer-motion";
import { useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

import heritageData from "../../data/heritageData";
const places = Object.values(heritageData);

function MainContent() {
  const [searchResults, setSearchResults] = useState([]);
  const search = () => {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const category = document.getElementById("category").value;
    const filtered = places.filter(
      (place) =>
        place.name.toLowerCase().includes(query) &&
        (!category || place.category === category)
    );
    setSearchResults(filtered);
  };
  return (
    <motion.div
      className="search-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="searchContainer">
        <h1 className="title">TÌM KIẾM ĐỊA ĐIỂM</h1>
        <div className="filters-horizontal">
          <div className="input-group">
            <label htmlFor="searchInput">Tên địa điểm</label>
            <input
              type="text"
              id="searchInput"
              placeholder="Nhập tên địa điểm"
              className="search-input"
            />
          </div>
          <div className="input-group">
            <label htmlFor="category">Danh mục</label>
            <select id="category" className="category-select">
              <option value="">Tất cả</option>
              <option value="price">Giá</option>
              <option value="culture">Lễ hội</option>
              <option value="distance">Khoảng cách</option>
              <option value="time">Thời gian di chuyển</option>
            </select>
          </div>
          <div className="input-group">
            <label>Điểm khởi hành</label>
            <select className="departure-select">
              <option value="">Tất cả</option>
              <option value="LC01">Hà Nội</option>
            </select>
          </div>
          <div className="input-group">
            <label>Điểm đến</label>
            <select className="destination-select">
              <option value="">Tất cả</option>
              <option value="LC01">Hà Nội</option>
              <option value="LC02">Hạ Long</option>
              <option value="LC03">Hải Phòng</option>
              <option value="LC04">Ninh Bình</option>
              <option value="LC05">Huế</option>
              <option value="LC06">Đà Nẵng</option>
              <option value="LC07">Nha Trang</option>
              <option value="LC08">Đà Lạt</option>
              <option value="LC09">Thành phố Hồ Chí Minh</option>
              <option value="LC10">Điện Biên</option>
            </select>
          </div>
          <div className="input-group">
            <label>Ngày đi</label>
            <input type="date" className="date-input" />
          </div>
          <div className="input-group">
            <label>Dòng tour</label>
            <select className="tour-select">
              <option value="">Chọn dòng tour</option>
              <option value="luxury">Cao cấp</option>
              <option value="standard">Tiêu chuẩn</option>
              <option value="budget">Tiết kiệm</option>
              <option value="best-price">Giá tốt</option>
            </select>
          </div>
          <div className="input-group">
            <label>Phương tiện</label>
            <select className="transport-select">
              <option value="">Chọn phương tiện</option>
              <option value="car">Ô tô</option>
              <option value="train">Tàu hỏa</option>
              <option value="plane">Máy bay</option>
            </select>
          </div>
          <button onClick={search} className="apply-button">
            Tìm kiếm
          </button>
        </div>
      </div>

      <div className="heritage-list">
        {searchResults.map((heritage) => (
          <Link to={`/tour_detail/${heritage.id}`}>
            <motion.div
              key={heritage.id}
              className="heritage-card"
              whileHover={{ scale: 1.05 }}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={heritage.image}
                alt={heritage.name}
                className="heritage-image"
              />
              <h3>{heritage.name}</h3>
              <p>{heritage.intro}</p>
              <p>
                <strong>Giá tour:</strong> {heritage.price}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

function SearchPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* <NavBar /> */}
      <MainContent />
      {/* <Footer /> */}
    </motion.div>
  );
}

export default SearchPage;
