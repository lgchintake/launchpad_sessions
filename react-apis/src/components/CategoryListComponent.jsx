import axios from "axios";
import { useEffect, useState } from "react";

export const CategoryListComponent = () => {
  const [categoryList, setCategoryList] = useState([]);

  const getCategoryList = async () => {
    // axios
    //   .get("http://127.0.0.1:8081/item-category/ui/")
    //   .then(function (response) {
    //     setCategoryList(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log("catch--> ", error);
    //   });
    try {
      const categories = await axios.get(
        "http://127.0.0.1:8081/item-category/ui"
      );
      setCategoryList(categories.data);
    } catch (error) {
      console.log("error occured....");
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <div>
      {categoryList.map((category) => (
        <div key={category._id}>
          <h4>{category.categoryName}</h4>
          <div>
            <b>ID:</b> {category._id}
          </div>
          <div>
            <b>Description:</b> {category.categoryDescription}
          </div>
        </div>
      ))}
    </div>
  );
};
