import { useParams } from "react-router-dom";
import { useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import heritageData from "../../data/heritageData";
import "./Booking.css";

function Booking() {
  const { id } = useParams();
  const tour = id ? heritageData[id.toUpperCase()] : undefined;

  const [bookingInfo, setBookingInfo] = useState({
    tourType: "",
    transport: "",
    people: 1,
    restaurant: "",
    guide: "",
  });

  const handleChange = (field, value) => {
    setBookingInfo({ ...bookingInfo, [field]: value });
  };

  const handleSubmit = () => {
    console.log("Thông tin đặt tour:", bookingInfo);

    // Lấy lịch sử cũ từ localStorage
    const history = JSON.parse(localStorage.getItem("bookingHistory")) || [];

    // Tạo thông tin đặt tour mới
    const newBooking = {
      tourName: tour.name,
      date: new Date().toLocaleDateString(),
      bookingDetails: bookingInfo,
    };

    // Lưu lại lịch sử mới
    history.push(newBooking);
    localStorage.setItem("bookingHistory", JSON.stringify(history));

    alert("Bạn đã đặt tour thành công!");

    // Reset form
    setBookingInfo({
      tourType: "",
      transport: "",
      people: 1,
      restaurant: "",
      guide: "",
    });
  };

  if (!tour) {
    return (
      <div>
        <NavBar />
        <div className="booking-container">
          <h2 className="booking-title">Tour không tồn tại</h2>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <div className="booking-container">
        <h2 className="booking-title">Đặt Tour: {tour.name}</h2>
        <img src={tour.image} alt={tour.name} className="booking-image" />

        <form className="booking-form">
          <div>
            <label>Loại tour:</label>
            <select
              value={bookingInfo.tourType}
              onChange={(e) => handleChange("tourType", e.target.value)}
            >
              <option value="">--Chọn--</option>
              <option>Trong nước</option>
              <option>Quốc tế</option>
              <option>Trải nghiệm</option>
            </select>
          </div>

          <div>
            <label>Phương tiện:</label>
            <select
              value={bookingInfo.transport}
              onChange={(e) => handleChange("transport", e.target.value)}
            >
              <option value="">--Chọn--</option>
              <option>Xe khách</option>
              <option>Máy bay</option>
              <option>Tàu hỏa</option>
            </select>
          </div>

          <div>
            <label>Số người:</label>
            <input
              type="number"
              min="1"
              value={bookingInfo.people}
              onChange={(e) => handleChange("people", e.target.value)}
            />
          </div>

          <div>
            <label>Nhà hàng:</label>
            <select
              value={bookingInfo.restaurant}
              onChange={(e) => handleChange("restaurant", e.target.value)}
            >
              <option value="">--Chọn--</option>
              <option>Nhà hàng A</option>
              <option>Nhà hàng B</option>
              <option>Nhà hàng C</option>
            </select>
          </div>

          <div>
            <label>Hướng dẫn viên:</label>
            <select
              value={bookingInfo.guide}
              onChange={(e) => handleChange("guide", e.target.value)}
            >
              <option value="">--Chọn--</option>
              <option>HDV Anh Văn</option>
              <option>HDV Tiếng Trung</option>
              <option>HDV Tiếng Nhật</option>
            </select>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="booking-button"
          >
            Xác nhận đặt tour
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
