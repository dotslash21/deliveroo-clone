import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between mx-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 mx-4">{description}</Text>

      <ScrollView
        className="pt-4"
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {/* RestaurantCard */}
        <RestaurantCard
          id="1"
          imgUrl="https://res.cloudinary.com/dotslash21/image/upload/v1665330929/deliveroo-clone/category/burger.jpg"
          title="The Burger Joint"
          rating={4.5}
          genre="Burgers"
          address="1234 Main Street"
          shortDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          dishes={["Burger", "Fries", "Shake"]}
          longitude={-122.084}
          latitude={37.422}
        />

        <RestaurantCard
          id="1"
          imgUrl="https://res.cloudinary.com/dotslash21/image/upload/v1665330929/deliveroo-clone/category/burger.jpg"
          title="The Burger Joint"
          rating={4.5}
          genre="Burgers"
          address="1234 Main Street"
          shortDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          dishes={["Burger", "Fries", "Shake"]}
          longitude={-122.084}
          latitude={37.422}
        />

        <RestaurantCard
          id="1"
          imgUrl="https://res.cloudinary.com/dotslash21/image/upload/v1665330929/deliveroo-clone/category/burger.jpg"
          title="The Burger Joint"
          rating={4.5}
          genre="Burgers"
          address="1234 Main Street"
          shortDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          dishes={["Burger", "Fries", "Shake"]}
          longitude={-122.084}
          latitude={37.422}
        />

        <RestaurantCard
          id="1"
          imgUrl="https://res.cloudinary.com/dotslash21/image/upload/v1665330929/deliveroo-clone/category/burger.jpg"
          title="The Burger Joint"
          rating={4.5}
          genre="Burgers"
          address="1234 Main Street"
          shortDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          dishes={["Burger", "Fries", "Shake"]}
          longitude={-122.084}
          latitude={37.422}
        />

        <RestaurantCard
          id="1"
          imgUrl="https://res.cloudinary.com/dotslash21/image/upload/v1665330929/deliveroo-clone/category/burger.jpg"
          title="The Burger Joint"
          rating={4.5}
          genre="Burgers"
          address="1234 Main Street"
          shortDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          dishes={["Burger", "Fries", "Shake"]}
          longitude={-122.084}
          latitude={37.422}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
