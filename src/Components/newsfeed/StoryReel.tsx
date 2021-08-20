import React from "react";
import { Box } from "@material-ui/core";
import Story from "./Story";

const StoryReel = () => {
  return (
    <Box display="flex">
      {/*story >> img,pic,title */}

      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/4/4b/130_x_42.jpg"
        profileSrc="https://miro.medium.com/fit/c/262/262/0*Ce_syrF3UdQEh85R"
        title="John Doe"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/201906H.jpg/800px-201906H.jpg"
        profileSrc="https://miro.medium.com/fit/c/262/262/1*Oa7aZoW8TPZrQjlKYzH5dg.jpeg"
        title="Jack Smith"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Banki_Akos.jpg/1280px-Banki_Akos.jpg"
        profileSrc="https://miro.medium.com/fit/c/144/144/1*2wQRwUoN4iGLeaz_QtmdIQ.jpeg"
        title="Romy Carter"
      />
    </Box>
  );
};

export default StoryReel;
