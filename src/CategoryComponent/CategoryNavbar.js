import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../CategoryCSS/CategoryNavbar.css";
import CategoryCart from "./CategoryCart";

const CategoryNavbar = () => {
  const [categoryList, setCategoryList] = useState([
    {
      id: 1,
      title: "Vitamins & Supplements",
      icon: "/categories/vitamins.svg",
    },
    {
      id: 2,
      title: "Medicine",
      icon: "/categories/medicines.svg",
    },
    {
      id: 3,
      title: "Sexual Health",
      icon: "/categories/sexual_health.svg",
    },
    {
      id: 4,
      title: "Weight Loss & Fitness",
      icon: "/categories/weight_loss.svg",
    },
    {
      id: 5,
      title: "Baby Care",
      icon: "/categories/baby-boy.svg",
    },
    {
      id: 6,
      title: "First Aids",
      icon: "/categories/first_aids.svg",
    },
    {
      id: 7,
      title: "Personal Care and Beauty",
      icon: "/categories/beauty.svg",
    },
  ]);

  return (
    <OwlCarousel
      className="owl-theme row align-center"
      loop
      dots={false}
      margin={10}
      nav
      responsive={{
        0: {
          items: 1,
        },
        400: {
          items: 1,
        },
        600: {
          items: 2,
        },
        800: {
          items: 3,
        },
        1000: {
          items: 4,
        },
        1200: {
          items: 5,
        },
        1400: {
          items: 6,
        },
      }}
    >
    
    {categoryList.map(category => (
      <div key={category.id} className="item">
        <CategoryCart title={category.title} icon={category.icon} />
      </div>
    ))}

    </OwlCarousel>
  );
};

export default CategoryNavbar;
