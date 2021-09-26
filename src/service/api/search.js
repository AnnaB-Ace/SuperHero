import axios from "axios";

export const getHeroName = async (name) => {
  return await axios({
    method: "get",
    url: `https://superheroapi.com/api.php/10226767840599231/search/${name}`,
  });
};
