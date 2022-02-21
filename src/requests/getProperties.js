import axios from "axios";

const getProperties = (setListOfProperties) => {
  axios
    .get("http://localhost:4000/api/v1/PropertyListing/")
    .then((res) => {
      console.log(res.data);
      setListOfProperties(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getProperties;
