import "./Tour.css";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import heritageData from "../../data/heritageData";

function Detail({ id }) {
  const data = heritageData[id];
  if (!data) return <div>Không tìm thấy thông tin</div>;

  return (
    <div className="product-detail-container">
      <h2 className="product-detail-cap">{data.name}</h2>
      <div className="product-image-container">
        <div className="image-container">
          <img className="image-detail" src={data.image} alt={data.name} />
        </div>
        <div class="name-price-container">
          <div class="product-description">
            <h2>Description</h2>
            <p>{data.intro}</p>
          </div>
          <strong>Giá tour:</strong> {data.price}
          <div class="order-purchase-container">
            <div class="order-button-container">
              <Link to={`/booking/${id}`}>
                <p className="order-button">Đặt tour ngay</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tour() {
  const { id } = useParams(); // lấy từ đường dẫn

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* <NavBar /> */}
      <Detail id={id} />
      {/* <Footer /> */}
    </motion.div>
  );
}

export default Tour;
