import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Select from "react-select";
import { useLoaderData } from "react-router-dom";

const AdminUpdateItems = () => {
  // const item = useLoaderData();
  // const {name, category, price, recipe, file} = item;
  // console.log(item);

  // const { name, category, price, recipe, file } = useLoaderData();
  const updateItems = useLoaderData();

  console.log(updateItems);

  const options = [
    { value: "Salad", label: "Salad" },
    { value: "Pizza", label: "Pizza" },
    { value: "Soup", label: "Soup" },
    { value: "Dessert", label: "Dessert" },
    { value: "Drink", label: "Drink" },
  ];

  const handleFormArea = async (e) => {
    e.preventDefault();
    console.log("this is from");
    const from = e.target;
    const name = from.name.value;
    const category = from.category.value;
    const price = from.price.value;
    const recipe = from.recipe.value;
    const file = from.file.files[0];

    const allFile = { name, category, price, file };
    console.log(allFile);

    // imgBB upload this image
    const imageFile = new FormData();
    imageFile.append("image", file);
    const res = await axiosPublic.post(IMAGE_HOSTING_API, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // new send the menu item data to the service with the image url
      const menuItem = {
        name: name,
        category: category,
        price: parseFloat(price),
        recipe: recipe,
        image: res.data.data.display_url,
      };

      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        // show success popup
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image url", res.data);
  };

  return (
    <div>
      <div className="">
        <div className="">
          <div className="">
            <SectionTitle
              title={"---Update Items!---"}
              subTitle={"Update Info Items"}
            />
          </div>
          <div className="">
            <div className="grid grid-cols-12">
              <div className="col-span-2"></div>
              <div className="col-span-8">
                <div className="px-10 py-10 bg-nu20">
                  <form onClick={handleFormArea}>
                    <div className="">
                      <label htmlFor="name" className="font-semibold">
                        Recipe name*
                      </label>
                      <input
                        type="text"
                        name="name"
                        defaultValue={name}
                        placeholder="Recipe name"
                        required
                        className="w-full px-3 py-3 mb-4 mt-2 placeholder:text-nu60 rounded-xl bg-nu10"
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="">
                        <label htmlFor="name" className="font-semibold">
                          Category*
                        </label>
                        <div className="w-88 mt-2">
                          <Select
                            options={options}
                            name="category"
                            placeholder="Category"
                            required
                            className="w-full px-3 py-2 mb-4 mt-2 placeholder:text-nu60 rounded-xl bg-nu10"
                          />
                        </div>
                      </div>
                      <div className="">
                        <label htmlFor="name" className="font-semibold">
                          Price*
                        </label>
                        <input
                          type="number"
                          name="price"
                          placeholder="Price"
                          required
                          className="w-full px-3 py-3 mb-4 mt-2 placeholder:text-nu60 rounded-xl bg-nu10"
                        />
                      </div>
                    </div>
                    <div className="">
                      <label htmlFor="name" className="font-semibold">
                        Recipe Details*
                      </label>
                      <textarea
                        className="w-full px-3 py-4 mt-2 rounded-lg bg-nu10"
                        rows="6"
                        placeholder="Recipe Details"
                        required
                        name="recipe"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 font-medium">
                        Upload File
                      </label>
                      <input
                        type="file"
                        name="file"
                        required
                        className="bg-nu10  px-4 py-3"
                      />
                    </div>
                    <div className="">
                      <button className="px-4 py-3 bg-nu100 text-nu10 font-semibold rounded-lg">
                        Add Item
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-span-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUpdateItems;
