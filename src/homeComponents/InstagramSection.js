import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import "../homeCSS/InstagramSection.css";

const InstagramSection = () => {
  const [topInstagramPosts, setTopInstagramPosts] = useState([
    {
      id: 0,
      img:
        "https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 1,
      img:
        "https://images.pexels.com/photos/3683051/pexels-photo-3683051.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 2,
      img:
        "https://images.pexels.com/photos/3683080/pexels-photo-3683080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 3,
      img:
        "https://images.pexels.com/photos/4021816/pexels-photo-4021816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 4,
      img:
        "https://images.pexels.com/photos/5910953/pexels-photo-5910953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 5,
      img:
        "https://images.pexels.com/photos/4525370/pexels-photo-4525370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ]);
  const [topMobilePosts, setTopMobilePosts] = useState(
    topInstagramPosts.slice(4)
  );
  return (
    <div className="instagramSection">
      <div className="instagramSection__address text-center">
        <h3>
          INSTAGRAM{" "}
          <a href="https://instagram.com/asad0908_programmer">
            @Asad Memon
          </a>
        </h3>
      </div>
      <div className="instagramSection__top">
        <div className="row">
          <div className="instagramSectionMobile__imageContainer">
            {!isMobile
              ? topInstagramPosts.map((post) => (
                  <div key={post.id} className="col-md-2">
                    <img
                      className="instagramSection__images"
                      src={post.img}
                      alt={post.id}
                    />
                  </div>
                ))
              : topMobilePosts.map((post) => (
                  <img
                    key={post.id}
                    className="instagramSectionMobile__images"
                    src={post.img}
                    alt={post.id}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramSection;
