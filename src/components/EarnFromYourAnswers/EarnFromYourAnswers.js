import React from "react";
import "./EarnFromYourAnswers.css";
import dataSendPhotoThree from "../../accets/Images/dataSendPhotoThree.png";

const EarnFromYourAnswers = () => {
  return (
    <div className="earn-from-your-answer-parent-div">
      <h3 className="earn-from-your-answer">
        ট্রেইনিং শেষে আমাদের সাথে যে কাজগুলো করার সুযোগ আছে{" "}
      </h3>
      <div className="earnFromYourAnswers-grid-div">
        <div className="earnFromYourAnswers-text-div">
          {/* <h3 className="earn-from-your-answer">
            ট্রেইনিং শেষে আমাদের সাথে যে কাজ গুলো করার সুযোগ আছে{" "}
          </h3> */}
          <p className="earnFromYourAnswers-p">✅ Affiliate Marketing</p>
          <p className="earnFromYourAnswers-p">
            ✅ Writing & Translation / Content development
            {/* <br />
            <span className="eBook">
              eBook Writing / Content development / Proofreading.
            </span> */}
          </p>
          <p className="earnFromYourAnswers-p">
            ✅ Data Digging/ Data Entry / Research work.
          </p>
          <p className="earnFromYourAnswers-p">✅ Marketing.</p>
          <p className="earnFromYourAnswers-p">✅ Transcription.</p>
          <p className="earnFromYourAnswers-p">✅ Audio Voice-over.</p>
          <p className="earnFromYourAnswers-p">✅ Video Editing.</p>
          <p className="earnFromYourAnswers-p">✅ Telemarketing + CRM. </p>
          <p className="earnFromYourAnswers-p">✅ Graphic Design.</p>
          <p className="earnFromYourAnswers-p">✅ Web Design & Development.</p>
          <p className="earnFromYourAnswers-p">
            ✅ Search Engine Optimization (SEO).
          </p>
          <p className="earnFromYourAnswers-p">✅ Customer Support</p>
          <p className="earnFromYourAnswers-p">
            ✅ Youtube/Facebook Content Making.
          </p>
          <p className="earnFromYourAnswers-p">✅ Thumbnail design.</p>
          <p className="earnFromYourAnswers-p">
            ✅ Authentication & Verification.
          </p>
          <p className="earnFromYourAnswers-p">✅ HR Management.</p>
          <p className="earnFromYourAnswers-p">✅ Business Development.</p>
          <p className="earnFromYourAnswers-p">✅ Project Management.</p>
        </div>
        <div className="earnFromYourAnswers-img-div">
          <img className="dateSendPhoto" src={dataSendPhotoThree} alt="" />
        </div>
      </div>
    </div>
  );
};

export default EarnFromYourAnswers;
