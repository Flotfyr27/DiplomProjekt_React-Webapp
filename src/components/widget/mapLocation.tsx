import { AspectRatio } from "@chakra-ui/react";
import { FC } from "react";

const MapLocation: FC = () => {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        width={"100%"}
        height={"100%"}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2246.9630270319994!2d9.616964616045495!3d55.72439470164987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c8408dd54a38d%3A0x3118f983e6aa6c9d!2sBjerreager%2082%2C%207120%20Vejle!5e0!3m2!1sda!2sdk!4v1655470734771!5m2!1sda!2sdk"
      />
    </AspectRatio>
  );
};
export default MapLocation;
