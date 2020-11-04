export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUES" });
    dispatch({
      type: "PRODUCT_LIST_SUCCESS",
      payload: [
        {
          name: "full sleeve tshirt",
          price: 500,
          img: "mtshirt.jpg",
          gender: "male",
          category: "tshirt",
          size: "xs",
        },
        {
          name: "short sleeve tshirt",
          price: 600,
          img: "mtshirt1.jpg",
          category: "tshirt",
          size: "s",
        },
        {
          name: " tshirt",
          price: 300,
          img: "mtshirt2.jpg",
          category: "tshirt",
          size: "m",
        },
        {
          name: "full sleeve tshirt",
          price: 500,
          img: "mjeans.jpg",
          category: "jeans",
          size: "l",
        },
        {
          name: "short sleeve tshirt",
          price: 600,
          img: "mjeans1.jpg",
          category: "jeans",
          size: "xl",
        },
        {
          name: " tshirt",
          price: 300,
          img: "mshirt.jpg",
          category: "shirt",
          size: "xs",
        },
        {
          name: "full sleeve tshirt",
          price: 500,
          img: "mshirt1.jpg",
          category: "shirt",
          size: "s",
        },
        {
          name: "short sleeve tshirt",
          price: 600,
          img: "mshirt2.jpg",
          category: "shirt",
          size: "m",
        },
      ],
    });
  } catch (error) {
      
  }
};
