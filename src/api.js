import * as axios from "axios";

const instance = axios.create({
  baseURL: "",
});

export const productsAPI = {
  getCategories() {
    return axios
      .get(
        "https://gist.githubusercontent.com/Naira777/20f8d724a14dc1951139d6b4109f65fc/raw/ae25d99126c8a40a786c63b92bf388219afade04/categories.json"
      )

      .then((response) => {
        return response.data.data;
      });
  },

  getBread() {
    return axios
      .get(
        `https://gist.githubusercontent.com/Naira777/20f8d724a14dc1951139d6b4109f65fc/raw/ae25d99126c8a40a786c63b92bf388219afade04/categories.json`
      )

      .then((response) => {
        return response.data.data;
      });
  },

  getBreadandCakesAll() {
    return axios
      .get(
        `https://gist.githubusercontent.com/Naira777/20f8d724a14dc1951139d6b4109f65fc/raw/ae25d99126c8a40a786c63b92bf388219afade04/categories.json`
      )

      .then((response) => {
        return response.data.data;
      });
  },
};

export const brandsAPI = {
  getBrands() {
    return axios
      .get(
        `https://gist.githubusercontent.com/Naira777/2e9508dbbf3dd46c86c3d40373deb7bc/raw/503a5d49cdb1bcea6f570aa1c3e91ef9584ce932/brands`
      )

      .then((response) => {
        return response.data.data;
      });
  },

  getProductsByBrand() {
    return axios
      .get(
        `https://gist.githubusercontent.com/Naira777/08e7f7544f5a901460f5399cc6bc242e/raw/1e8479d4b4fd1f7e54c66834704a67cead86c0a6/Brand%2520with%2520it's%2520products`
      )
      .then((response) => {
        return response.data.data;
      });
  },

};
