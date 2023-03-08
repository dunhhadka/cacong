import React from "react";
import "./HeaderStyle.css";
import P1 from "../images/imageheader.jpg";
import L1 from "../images/logo.jpg"
import FormRegister from "../form/FormRegister";
import ButtonRegister from "../form/ButtonRegister";
import ButtonHeader from "./ButtonHeader";
export default function HeaderApp() {
  return (
    <div>
      <div className="header_box">
        {/* <img src={L1} className="logo"/> */}
        <ButtonHeader/>
      </div>
      <div className="body">
        <div className="title">
          <div className="text3">THUỐC ĐIỀU KINH CA CÔNG</div>
          <div className="text4">Phụ nữ là để yêu thương</div>
        </div>
        <div className="iamgeheader">
          <div className="address_form">
            <div>
              <img src={P1} alt="" srcset="" className="iamge_header" />
              <h4>
                Mục tiêu của tôi là giúp 10 triệu gia đình có cuộc sống thành công,
                hạnh phúc , bình an trong từng khoảnh khăsc cuộc sống
              </h4>
              <h2>
                GIÚP BẠN CÓ 1 CUỘC SỐNG HÔN NHÂN <br />
                HẠNH PHÚC HƠN
              </h2>
              <div className="btn_address">
              <ButtonRegister myProp={"ĐĂNG KÍ NGAY"}/>
              </div>
            </div>
            <FormRegister />
          </div>
          
        </div>
      </div>
    </div>
  );
}
