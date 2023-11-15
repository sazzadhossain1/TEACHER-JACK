import React from "react";
import "./NeedToConsult.css";
import { Link } from "react-router-dom";

const NeedToConsult = () => {
  return (
    <div className="NeedToConsult_parent_div">
      <div>
        <h1 className="NeedToConsult-heading">
          কোন বিষয়ে দক্ষতা ডেভেলপ করবেন তা এখনও বুঝতে পারছেন না ?
        </h1>
        <p className="if_you_dont_Un">
          যদি বুঝতে না পারেন যে আপনার কোন পথে এগুনো উচিৎ বা আপনি কনফিউসড থাকেন,
          তাহলে আপনার শিক্ষাগত যোগ্যতা কি, বয়স কত, লেখাপড়া কোথায় করেছেন, <br />
          স্মার্টফোন ব্যবহার করেন কিনা, কম্পিউটার ব্যবহার করেন কিনা, পূর্বে কোন
          ধরণের ট্রেইনিং নিয়েছেন কি না ইত্যাদি ডিটেইলস দিয়ে আমাদের ই-মেইল করুন{" "}
          <br /> এই ই-মেইলে teacherjackonline@gmail.com. আপনার অবস্থা বুঝে
          সাজেশন দেবো কোন পথে এগোলে আপনার জন্য ভালো হবে।
        </p>
      </div>
      <Link
        to="https://www.facebook.com/groups/3127566597539398?_rdc=1&_rdr"
        target="_blank"
      >
        <button className="NeedToConsult-btn">
          Facebook Group - এ Join করুন।
        </button>
      </Link>
    </div>
  );
};

export default NeedToConsult;
