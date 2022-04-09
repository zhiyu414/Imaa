import React from "react";
import { Box } from "native-base";
import HomeList from "../components/HomeList";
import albumData from "../json/albums.json";

const AlbumScreen = ({ navigation }) => {
  return (
    <Box>
      <HomeList 
        list={albumData.albumList}
        navigation={navigation}
      />
    </Box>
  );
};

export default AlbumScreen;
