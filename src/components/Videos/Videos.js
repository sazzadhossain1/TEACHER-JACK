import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

// Custom CSS file //
import "./Videos.css";

const Videos = () => {
  let data = [
    {
      id: 1,
      videoUrl:
        "https://bd.teacherjackonline.com/videos/Video_1%20_%20Final_Unemplyed_candidates_at_DU.mp4",
    },
    {
      id: 2,
      videoUrl:
        "https://bd.teacherjackonline.com/videos/in.Video%202-Final.mp4",
    },
    {
      id: 3,
      videoUrl: "https://bd.teacherjackonline.com/videos/Video_3_Final.mp4",
    },
    {
      id: 4,
      videoUrl:
        "https://bd.teacherjackonline.com/videos/Video_4_Keep_Ahmuduls_part_where_it_says_how_big_is_BPO_sector.mp4",
    },
    {
      id: 5,
      videoUrl:
        "https://bd.teacherjackonline.com/videos/Video_5_%20Final_What_is_Out_sourcing_Freelancing.mp4",
    },
    {
      id: 6,
      videoUrl: "https://bd.teacherjackonline.com/videos/Video_6_Final.mp4",
    },
    {
      id: 7,
      videoUrl: "https://bd.teacherjackonline.com/videos/Video_7%20_Final.mp4",
    },
    {
      id: 8,
      videoUrl: "https://bd.teacherjackonline.com/videos/Video_8_Final.mp4",
    },
    {
      id: 9,
      videoUrl: "https://bd.teacherjackonline.com/videos/Video_9_Final.mp4",
    },
    {
      id: 10,
      videoUrl: "https://bd.teacherjackonline.com/videos/Video_10_Final.mp4",
    },
    {
      id: 11,
      videoUrl:
        "https://bd.teacherjackonline.com/videos/Video_11_Final_Freelancing_it_is_not_what_is_looks_like.mp4",
    },
    {
      id: 12,
      videoUrl: "https://bd.teacherjackonline.com/videos/Video_12_Final.mp4",
    },
    {
      id: 13,
      videoUrl:
        "https://bd.teacherjackonline.com/videos/Video_13_Final_cheating_Fraud.mp4",
    },
    {
      id: 14,
      videoUrl:
        "https://bd.teacherjackonline.com/videos/Video_14_Final_School_kid_making_money.mp4",
    },
    {
      id: 15,
      videoUrl:
        "https://bd.teacherjackonline.com/videos/Video_15_Final_Freelancers.mp4",
    },
    {
      id: 16,
      videoUrl:
        "https://bd.teacherjackonline.com/videos/Video_16_Final_success_of_a_freelancer_Mehedi.mp4",
    },
    {
      id: 17,
      videoUrl:
        "https://bd.teacherjackonline.com/videos/Video_17_Final_68yrAbedSiraj.mp4",
    },
    {
      id: 18,
      videoUrl:
        "https://bd.teacherjackonline.com/videos/Video_18_Final_Farzana_Drawing.mp4",
    },
  ];

  return (
    <div>
      <div className="gallery">
        {data.map((items) => {
          console.log(items);
          return (
            <div key={items.id}>
              <div>
                <Video
                  className="video"
                  style={{ width: "100%" }}
                  controls={[
                    "playPause",
                    "Seek",
                    "Time",
                    "Volume",
                    "Fullscreen",
                  ]}
                  poster={items.poster}
                >
                  <source src={items.videoUrl} type="video/webm"></source>
                </Video>
                <p className="video-index">Video - {items.id}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Videos;
