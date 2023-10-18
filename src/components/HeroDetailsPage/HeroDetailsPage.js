import React from "react";
import "./HeroDetailsPage.css";
import { Link } from "react-router-dom";

const HeroDetailsPage = () => {
  return (
    <div>
      <div className="HeroDetailsPage-parent-div">
        <div className="heroDetailsPage-heading-text-div">
          <h2 className="skills-for-job-program">“Skills for Job Program”</h2>
          <h3 className="who-should">
            Who should participate in our program -
          </h3>
          <h5 className="apni-ki-akjon">আপনি কি একজন</h5>
          <p className="heroDetailsPage-qus">Housewife/HomeMaker (গৃহিণী) ?</p>
          <p className="heroDetailsPage-qus">
            Retired individual (অবসরপ্রাপ্ত ব্যাক্তি) ?
          </p>

          <p className="heroDetailsPage-qus">
            Unemployed Graduate (চাকুরীপ্রার্থী গ্র্যাজুয়েট) ?
          </p>
          <p className="heroDetailsPage-qus">
            {" "}
            Student in high school (হাই স্কুল, কলেজ পড়ুয়া শিক্ষার্থী) ?{" "}
          </p>
          <p className="heroDetailsPage-qus">
            Currently employed but looking for extra $$ (চাকুরীজীবী কিছু বাড়তি
            আয়ের সন্ধানে) ?
          </p>
        </div>

        <p className="heroDetailsPage-single-first-p">
          এবং আপনি চাচ্ছেন আপনার আয়-রোজগার বাড়াতে। তাহলে এই প্রোগ্রামটি আপনার
          জন্য জরুরী। অর্থনৈতিক মুক্তি বা Financial Freedom যাকে বলে – এই
          প্রোগ্রামটির মাধ্যমে আপনি তা পাবেন ইনশাল্লাহ। দেশে হাজারও বই রয়েছে,
          লক্ষ লক্ষ Youtube ভিডিও রয়েছে যেখানে নানা ধরণের আইডিয়া দেয়া হয়, Lesson
          দেয়া হয় – কিছু রয়েছে সত্য আবার কিছু রয়েছে মিথ্যা মিশ্রিত। আপনি যেনো
          সঠিক গাইডলাইনটি পান, সেজন্যই আমার এ উদ্যোগ। আমার যে কোন কথা নেয়ার আগে
          সেগুলো যাচাই করে নেবেন যাতে কোন রকম দ্বিধা ছাড়া আপনি একটি সঠিক
          সিদ্ধান্ত নিজেই নিতে পারেন। আমি চেষ্টা করবো যতটুকু পারি Authentic
          Reference Link দিতে যাতে আপনাদের সুবিধা হয়।
        </p>
        <div className="HeroDetailsPage-second-parent-div">
          <div className="heroDetailsPage-video-grid-container first-cart">
            <div>
              <p className="common-style-p">চাকুরীপ্রার্থী গ্র্যাজুয়েট -</p>
              <p className="heroDetailsPage-p">
                আপনি একজন পড়াশোনা জানা বেকার। যোগ্যতা অনুযায়ী যেমন চাকরি আপনার
                হওয়া উচিত ছিলো তা আপানি পাচ্ছেন না। গত কয়েক বছরেও অনেকের অবস্থা
                উন্নতি হলেও আপনার অবস্থা যেখানে ছিলো ওখানেই আছে। এ সমাজের যে
                আসনটিতে আপনার বসার কথা ছিল সে আসনটিতে আজ অন্য কেউ। কারন আপনি
                আপনার লিমিটেশনগুলো হয়তোবা জানেন না। জানলেও হয়তোবা কিভাবে সেগুলো
                overcome করে ধাপে ধাপে উন্নতি করবেন তা করতে পারছেন না। আপনার
                ব্যক্তিগত এবং এই আর্থ-সামাজিক উন্নতির জন্যই আমার এ-প্রচেষ্টা।
                আপনার ওই সকল লিমিটেশন গুলো চিহ্নিত করা এবং এর পরবর্তীতে এই গুলো
                থেকে মুক্তির উপায় দেখিয়ে দেয়া। আপনাকে সরাসরি আপনার অর্জিত
                ডিগ্রির সাথে সম্পর্কিত না থাকলেও, একটি Process এর মাধ্যমে আপনাকে
                আন্তর্জাতিক মানদণ্ডে দক্ষ করে আর্থিকভাবে স্বাবলম্বী করে তোলাই
                আমার উদ্দেশ্য। বাস্তব প্রতিবেদনঃ
                {/* <Link
              to="https://youtu.be/_Ep1dfk12ec"
              target="blank"
              className="heroDetailsPage-link"
            >
              https://youtu.be/_Ep1dfk12ec
            </Link> */}
              </p>
            </div>
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/_Ep1dfk12ec?si=MjeQqql1xllBPen2"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div className="heroDetailsPage-video-grid-container second-cart">
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/huTkGMnLEU0?si=p8CzFk4Xl5TcAUEd"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <p className="common-style-p">আপনি একজন স্টুডেন্ট –</p>
              <p className="heroDetailsPage-p">
                উন্নত দেশগুলোতে হাই স্কুলের ছাত্রছাত্রীরাও পড়াশোনার পাশাপাশি জব
                করে এবং নিজেকে ভবিষ্যতের জন্য তৈরি করে। আমাদের দেশে সুযোগও কম
                এবং বাব-মায়েরাও সন্তানদের একেবারেই কোন কাজকর্মের সাথে সম্পৃক্ত
                করতে চান না। ফলে ছেলেমেয়েরাও নিজেকে পুরোপুরি গড়ে তুলতে পারে না –
                অনেকভাবেই পরনির্ভরশীল হয়ে বেড়ে ওঠে। আপনি যদি স্কুলে পড়েন – ক্লাস
                সিক্স, সেভেন বা এইটেও পড়েন, এখনই পড়াশোনার পাশাপাশি নিজেকে তৈরি
                করার সুবর্ণ সুযোগ। একটু একটু করে সময় নিয়ে- ৪ মাস, ৬ মাস, ১ বছর –
                যাই লাগে লাগলেও অন্যদের চেয়ে এগিয়ে থাকতে পারেন। যাতে করে বোর্ড
                পরীক্ষা পরবর্তি সময়েই নিজেকে যেকোন চাকরি বা কাজের জন্য নিজেকে
                তৈরি করে ফেলতে পারেন। বাস্তব প্রতিবেদনঃ{" "}
                {/* <Link
              to="https://youtu.be/huTkGMnLEU0"
              target="blank"
              className="heroDetailsPage-link"
            >
              https://youtu.be/huTkGMnLEU0
            </Link> */}
              </p>
            </div>
          </div>
          <div className="heroDetailsPage-video-grid-container third-cart">
            <div>
              <p className="common-style-p">আপনি একজন চাকুরীজীবী -</p>
              <p className="heroDetailsPage-p">
                সারাদিন হাড়ভাঙ্গা খাটুনির পরেও, বেতনের টাকা মাসের ২০ তারিখেই
                শেষ। “চাকরিটার পাশাপাশি অন্য কিছু করতে পারলে খুব ভালো হতো –
                বাড়তি কিছু ইনকাম হতো। কিন্তু কিভাবে? আরেকটা চাকরি তো করা যাচ্ছে
                না – সমইয়ে কুলোচ্ছে না।” তাহলে এই প্রোগ্রামটি আপনার জন্য। চাকরির
                পাশাপাশি শুরু করলেও এমনও হতে পারে যে একদিন আপনার পূর্বের চাকরি
                একেবারেই ছেড়ে দেবেন। আবার অনেকে আছেন এমন ধরণের জব করেন যারা
                তাদের ডিউটিরত অবস্থায় থেকেও সময় বের করতে পারেন - অনেকের হয়তো
                কাজটিই এমন - বসে থাকাই কাজ বা সুপারভাইজার লেভেলের কাজ যাদের
                প্রতিটি মিনিট ব্যাস্ত থাকতে হয় না। বাস্তব প্রতিবেদনঃ
                {/* <Link
              to="https://youtu.be/TOYjuMMrFNg"
              target="blank"
              className="heroDetailsPage-link"
            >
              https://youtu.be/TOYjuMMrFNg
            </Link> */}
              </p>
            </div>

            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/TOYjuMMrFNg?si=Yj77Kt3cGqsJCcMZ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div className="heroDetailsPage-video-grid-container forth-cart">
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/L7-Vhdj7gAw?si=v4myzZdsDrXOsBHb"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <p className="common-style-p">আপনি একজন অবসরপ্রাপ্ত ব্যাক্তি -</p>
              <p className="heroDetailsPage-p">
                সারাটি জীবন যে পরিবারের জন্য কর্মব্যস্ত ছিলেন আজ সে পরিবার-ই
                আপনার চেয়ে বেশি ব্যস্ত। আপনার অফুরন্ত সময় থাকলেও করার মতন কোন
                কাজ নেই। আপনি সারাজীবন যে কাজটিতে সময় দিয়ে দিয়ে এক্সপার্ট হয়ে
                গেছেন সে কাজটিই কেন, শিখতে চায় এমন কাউকে শিখাচ্ছেন না? অথবা আপনি
                ভালো ইংরেজি জানেন, কম্পিউটার সম্পর্কেও ধারনা রাখেন- এতটুকু
                ব্যবহার করেও তো আয়ের রাস্তাটা খোলা রাখা যায়। কিন্তু কিভাবে? এই
                কিভাবের উত্তরই হল এই প্রোগ্রামটি। আপনার এই “শেষ বয়সে বিশ্বজয়” এর
                রোডম্যাপ এঁকে দিব আমরা। কিংবা ৪-৫ মাস সময় দিয়ে একেবারে গোঁড়া
                থেকে এক-দুইটি দক্ষতা develop করে শুরু করতে পারেন নতুন এক চলার
                রাস্তা। অসম্ভব বলে কিছুই নেই। বাস্তব প্রতিবেদনঃ{" "}
                {/* <Link
              to="https://youtu.be/L7-Vhdj7gAw"
              target="blank"
              className="heroDetailsPage-link"
            >
              https://youtu.be/L7-Vhdj7gAw
            </Link> */}
              </p>
            </div>
          </div>

          <div className="heroDetailsPage-video-grid-container fifth-cart">
            <div>
              <div className="common-style-p">
                {" "}
                আপনি একজন শিক্ষিতা গৃহবধূ -{" "}
              </div>
              <p className="heroDetailsPage-p">
                পরিবারের সবাই আপনাকে ভালবাসলেও আপনার জন্য কিছু বেশি খরচ করাটা
                যেনো একটু বারা-বারিই মনে করে অনেকে অনেক সময়। আবার আপনার নিজেরও
                বাসার বাইরে গিয়ে কাজ করা হয়তো পছন্দ নয় বা সুযোগ নেই। যে পরিমাণ
                respect আপনার পাওনা, তা হয়তো আপনি পান না – home management যে
                কতটা কষ্টের সেটি অনেকেই হয়তো বুঝতে চায় না – মনে করে ঘরের কাজ কোন
                কাজ না। জিজ্ঞেস করলে অনেকের মুখেই শোনা যায় যে Wife কিছু করে না,
                বাসায় থাকে বা অমুকের মা কিছু করে না, বাসায় থাকে। আপনার সবসময় মনে
                হয় “ইশ ঘরে বসে যদি নিজের খরচের টাকা-টা আয় করতে পারতাম !” কোনরকম
                দ্বিধা না করে এই প্রোগ্রামে অংশগ্রহণ করুন। দেখুন মাত্র কয়েক মাসে
                জীবনে কেমন পরিবর্তন চলে আসে। বাস্তব প্রতিবেদনঃ
                {/* <Link
              to="https://youtu.be/7IeIBna5qMo"
              target="blank"
              className="heroDetailsPage-link"
            >
              https://youtu.be/7IeIBna5qMo
            </Link> */}
              </p>
            </div>

            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/7IeIBna5qMo?si=x9mRTOyRV4F9eI_u"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <p className="heroDetailsPage-last-p">
          এই Skills for Job Program টি তে যাত্রা শুরু করার আগে এই ৫ টি বিষয় দেখে
          শুরু করবেন। - আপনাকে প্রথমে জানতে হবে এই Program সম্পর্কে এবং তথ্য
          যাচাই বাছাই করতে হবে - আপনি আমার যোগ্যতা কতটুকু তা ঘেটে দেখবেন – এই
          ডকুমেন্টের শেষে আমার কিছু লিঙ্ক দেয়া আছে - ভালো করে বুঝবেন এই Program
          থেকে আপনি কি পাচ্ছেন - যাচাই করবেন অন্য কোথাও আমাদের মতো আপনাকে দক্ষ
          করে গড়ে তোলার পাশাপাশি আপনার ইনকাম সুনিশ্চিত এর পথ করে দিচ্ছে কি না -
          নেতিবাচক কথায় কান না দিয়ে আপনি নিজে বোঝেন যে আগামী ৫-৬ মাস আপনি এই
          Program টি তে যেভাবে বলা হয় সেভাবে কাজ করতে পারবেন কি না। এই বিষয়
          গুলো খেয়াল রেখে পদক্ষেপ নেবেন ইনশাআল্লাহ।
        </p>
      </div>
      <Link to="/home">
        <button className="backToHome">Back to Home</button>
      </Link>
    </div>
  );
};

export default HeroDetailsPage;
