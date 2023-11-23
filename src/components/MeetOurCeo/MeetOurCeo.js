import React from "react";
import "./MeetOurCeo.css";
import CEOPhoto from "../../accets/Images/CEO-photo/CEO-Photo.png";
import { Link } from "react-router-dom";

import photoGalleryOne from "../../accets/Images/aboutTeacherJack/photoGalleryOne.jpg";
import photoGalleryTwo from "../../accets/Images/aboutTeacherJack/photoGalleryTwo.jpg";
import photoGalleryThree from "../../accets/Images/aboutTeacherJack/photoGalleryThree.jpg";
import photoGalleryFour from "../../accets/Images/aboutTeacherJack/photoGalleryFour.jpg";
import photoGalleryFive from "../../accets/Images/aboutTeacherJack/photoGalleryFive.jpg";
import photoGallerySix from "../../accets/Images/aboutTeacherJack/photoGallerySix.jpg";
import photoGallerySaven from "../../accets/Images/aboutTeacherJack/photoGallerySaven.jpg";
import photoGalleryEight from "../../accets/Images/aboutTeacherJack/photoGalleryEight.jpg";
import photoGalleryNine from "../../accets/Images/aboutTeacherJack/photoGalleryNine.jpg";
import photoGalleryTen from "../../accets/Images/aboutTeacherJack/photoGalleryTen.jpg";
import photoGalleryeleven from "../../accets/Images/aboutTeacherJack/photoGalleryeleven.jpg";
import photoGalleryTwelve from "../../accets/Images/aboutTeacherJack/photoGalleryTwelve.JPG";
import photoGallerythirteen from "../../accets/Images/aboutTeacherJack/photoGallerythirteen.JPG";
import photoGalleryForthen from "../../accets/Images/aboutTeacherJack/photoGalleryForthen.JPG";
import photoGalleryFifteen from "../../accets/Images/aboutTeacherJack/photoGalleryFifteen.jpg";
import photoGallerySixtin from "../../accets/Images/aboutTeacherJack/photoGallerySixtin.jpg";
import photoGallerySaventeen from "../../accets/Images/aboutTeacherJack/photoGallerySaventeen.jpg";
import MeonLogonLake from "../../accets/Images/aboutTeacherJack/MeonLogonLake.jpg";

// import BatchTwoPhotoOne from "../../accets/Images/aboutTeacherJack/Batch 2/BatchTwoPhotoOne.JPG";
// import BatchTwoPhotoTwo from "../../accets/Images/aboutTeacherJack/Batch 2/BatchTwoPhotoTwo.JPG";
// import BatchTwoPhotoThree from "../../accets/Images/aboutTeacherJack/Batch 2/BatchTwoPhotoThree.JPG";
// import BatchTwoPhotoFour from "../../accets/Images/aboutTeacherJack/Batch 2/BatchTwoPhotoFour.JPG";
// import BatchTwoPhotoFive from "../../accets/Images/aboutTeacherJack/Batch 2/BatchTwoPhotoFive.JPG";
// import BatchTwoPhotoSix from "../../accets/Images/aboutTeacherJack/Batch 2/BatchTwoPhotoSix.JPG";
// import BatchTwoPhotoSaven from "../../accets/Images/aboutTeacherJack/Batch 2/BatchTwoPhotoSaven.JPG";
// import BatchTwoPhotoEight from "../../accets/Images/aboutTeacherJack/Batch 2/BatchTwoPhotoEight.JPG";
// import BatchTwoPhotoNine from "../../accets/Images/aboutTeacherJack/Batch 2/BatchTwoPhotoNine.JPG";
// import BatchTwoPhotoTen from "../../accets/Images/aboutTeacherJack/Batch 2/BatchTwoPhotoTen.jpg";
// import BatchTwoPhotoEleven from "../../accets/Images/aboutTeacherJack/Batch 2/BatchTwoPhotoEleven.JPG";

const MeetOurCeo = () => {
  return (
    <div className="ceo-main-parent-div">
      <div className="meetOurCeo-grid-div">
        {/* <div className="first-ceo-img-div">
          <img src={CEOPhoto} alt="" />
        </div> */}
        <div className="meetOurCeo-text-div">
          <h3 className="teacher-jack-ceo">TEACHER JACK</h3>
          <p className="ceo-expert-p">Trainer, IT Business Person</p>
          <div className="p_photo_grid_div">
            <div>
              <p className="ceo-text-p">
                Zakir Hossain is one of the most prominent Information
                Technology Businessperson, an Author and a Trainer. He is TESOL
                Certified, ELT Teacher. He also provides training on information
                technology related subjects to students in many different
                countries. Zakir Hossain (Jack) is experienced and has taught
                students from China, South Korea, Mexico, Bangladesh, Canada and
                the United States of America over the last 8 years. He is
                friendly, helpful, open minded and affordable. He goes the extra
                mile to ensure student understanding of the lessons. He travels
                a lot and interacts with people from different background. He is
                knowledgeable and knows exactly which student requires what
                level of training. He is easily reachable and is always ready to
                mentor his trainees.
              </p>
            </div>
            <div className="first-ceo-img-div">
              <img src={CEOPhoto} alt="" />
            </div>
          </div>

          <div className="about_zakir_sir_p_div">
            <p className="ceo-text-p">
              Zakir Hossain completed his ‘O Level’ under The University of
              Cambridge. Zakir completed his B.Sc in Management Information
              System (MIS) and M.A in English Language Teaching (ELT) from the
              USA. His childhood was quite cheerful. He kept busy with social
              work from the early stages of his life. He excelled in his school
              studies and always came out in flying colors.
            </p>
            <p className="ceo-text-p">
              Zakir is working as the Chief Executive Officer of an
              international Information Technology company{" "}
              <Link target="_blank" className="link" to="https://abaacorp.com/">
                Abaacorp.com
              </Link>{" "}
              Limited. Zakir is also the Chief Executive Officer and Founder of
              a SAAS company <br />
              <Link
                className="link"
                target="_blank"
                to="https://tripshiptask.com/"
              >
                TripShipTask.com
              </Link>
              . He is also heading a training organization under the banner of
              &nbsp;
              <Link
                className="link"
                target="_blank"
                to="https://bd.teacherjackonline.com/"
              >
                teacherjackonline.com
              </Link>
              .
            </p>
          </div>
          <p className="zakir_sir_email">
            Email: zakir.hossain@tripshiptask.com
            <span> or teacherjackonline@gmail.com</span>
          </p>
          <br />

          <p>
            <Link
              target="_blank"
              className="media_link"
              to="https://web.facebook.com/ZakirHossainShow/?_rdc=1&_rdr"
            >
              https://www.facebook.com/ZakirHossainShow/
            </Link>
            <br />
            <Link
              target="_blank"
              className="media_link"
              to="https://www.youtube.com/@zakirhossainshow"
            >
              https://www.youtube.com/@zakirhossainshow
            </Link>
            <br />
          </p>
          <br />
          <p>
            <Link
              target="_blank"
              className="media_link"
              to="https://web.facebook.com/TeacherJackOnline?_rdc=1&_rdr"
            >
              https://www.facebook.com/TeacherJackOnline
            </Link>
            <br />
            <Link
              target="_blank"
              className="media_link"
              to="https://www.youtube.com/@TeacherJackOnline"
            >
              https://www.youtube.com/@TeacherJackOnline
            </Link>
          </p>
          <br />

          <div className="about_teacher_jack_photo_gallery_div">
            <img
              className="about_teacher_gallery_img"
              src={photoGalleryTwo}
              alt=""
            />

            <img
              className="about_teacher_gallery_img"
              src={photoGalleryFour}
              alt=""
            />
            <img
              className="about_teacher_gallery_img"
              src={photoGalleryFive}
              alt=""
            />
            <img
              className="about_teacher_gallery_img"
              src={photoGallerySix}
              alt=""
            />
            <img
              className="about_teacher_gallery_img"
              src={photoGallerySaven}
              alt=""
            />
            <img
              className="about_teacher_gallery_img"
              src={photoGalleryEight}
              alt=""
            />
            <img
              className="about_teacher_gallery_img"
              src={photoGalleryNine}
              alt=""
            />
            <img
              className="about_teacher_gallery_img"
              src={photoGalleryTen}
              alt=""
            />
            <img
              className="about_teacher_gallery_img"
              src={photoGalleryeleven}
              alt=""
            />
            <img
              className="about_teacher_gallery_img"
              src={photoGalleryTwelve}
              alt=""
            />
            <img
              className="about_teacher_gallery_img"
              src={photoGallerythirteen}
              alt=""
            />
            <img
              className="about_teacher_gallery_img"
              src={photoGalleryForthen}
              alt=""
            />
            <img
              className="about_teacher_gallery_img"
              src={photoGalleryFifteen}
              alt=""
            />
            <img
              className="about_teacher_gallery_img"
              src={photoGallerySixtin}
              alt=""
            />
            <img
              className="about_teacher_gallery_img"
              src={photoGallerySaventeen}
              alt=""
            />

            {/*  */}
            <img
              className="about_teacher_gallery_img long_hight_photo"
              src={photoGalleryOne}
              alt=""
            />
            <img
              className="about_teacher_gallery_img long_hight_photo"
              src={photoGalleryThree}
              alt=""
            />
            <img
              className="about_teacher_gallery_img long_hight_photo"
              src={MeonLogonLake}
              alt=""
            />
          </div>

          <Link to="/">
            <button className="ceo-learn-more-btn">Back to Home</button>
          </Link>
        </div>
        <div className="second-ceo-img-div">
          <img src={CEOPhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MeetOurCeo;
