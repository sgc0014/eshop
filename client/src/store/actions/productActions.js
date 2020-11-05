export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });
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
    dispatch({ type: "PRODUCT_LIST_FAIL", payload: error });
  }
};

export const productDetail = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_DETAIL_REQUEST" });
    dispatch({
      type: "PRODUCT_DETAIL_SUCCESS",
      payload: {
        name: "short sleeve tshirt",
        price: 600,
        img: "mshirt2.jpg",
        category: "shirt",
        size: "m",
        description:
          " loremQui deserunt sit commodo dolor reprehenderit aute eiusmod. Mollit irure officia in sit mollit aliqua in ad laborum minim magna aute ea quis. Ullamco dolore ullamco et enim culpa officia velit eu aliqua laborum.",
      },
    });
  } catch (error) {
    dispatch({ type: "PRODUCT_DETAIL_FAIL", payload: error });
  }
};
