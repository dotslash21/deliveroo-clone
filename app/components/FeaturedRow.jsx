import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import sanityClient, { urlFor } from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "featured" && _id == $id] {
            ...,
            restaurants[] -> {
              ...,
              dishes[] -> ,
              category -> {
                name,
              }
            },
          }[0]
        `,
        { id }
      )
      .then((data) => setRestaurants(data.restaurants));
  }, [id]);

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
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={urlFor(restaurant.image).url()}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.category.name}
            address={restaurant.address}
            shortDescription={restaurant.short_description}
            dishes={restaurant.dishes.map((dish) => dish.name)}
            longitude={restaurant.longitude}
            latitude={restaurant.latitude}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
