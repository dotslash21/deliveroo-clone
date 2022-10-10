import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      <CategoryCard
        imgUrl={
          "https://res.cloudinary.com/dotslash21/image/upload/v1665322770/deliveroo-clone/category/sushi.jpg"
        }
        title="Testing 1"
      />
      <CategoryCard
        imgUrl={
          "https://res.cloudinary.com/dotslash21/image/upload/v1665322770/deliveroo-clone/category/sushi.jpg"
        }
        title="Testing 2"
      />
      <CategoryCard
        imgUrl={
          "https://res.cloudinary.com/dotslash21/image/upload/v1665322770/deliveroo-clone/category/sushi.jpg"
        }
        title="Testing3"
      />
      <CategoryCard
        imgUrl={
          "https://res.cloudinary.com/dotslash21/image/upload/v1665322770/deliveroo-clone/category/sushi.jpg"
        }
        title="Testing 4"
      />
      <CategoryCard
        imgUrl={
          "https://res.cloudinary.com/dotslash21/image/upload/v1665322770/deliveroo-clone/category/sushi.jpg"
        }
        title="Testing 4"
      />
      <CategoryCard
        imgUrl={
          "https://res.cloudinary.com/dotslash21/image/upload/v1665322770/deliveroo-clone/category/sushi.jpg"
        }
        title="Testing 4"
      />
      <CategoryCard
        imgUrl={
          "https://res.cloudinary.com/dotslash21/image/upload/v1665322770/deliveroo-clone/category/sushi.jpg"
        }
        title="Testing 4"
      />
    </ScrollView>
  );
};

export default Categories;
