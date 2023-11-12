"use server";

export const getProducts = async ({ pageParam = 1 }) => {
  const URL =
    process.env.NEXT_APP_API_URL +
    `/api/products?populate=*&pagination[page]=${pageParam}&pagination[pageSize]=25&sort[1]=id:desc`;

  const res = await fetch(URL, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_APP_API_TOKEN}`,
    },
  });

  return res.json();
};
