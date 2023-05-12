export const getSongs = async (params) => {
  try {
    const data = await fetch(
      `https://itunes.apple.com/search?term=${params.term}` +
        `&entity=song` +
        `${params.explicit ? `&explicit=${params.explicit}` : ""}`
      // `${params.minPrice ? `&price>=${params.minPrice}` : ""}` +
      // `${params.maxPrice ? `&price<=${params.maxPrice}` : ""}`
    ).then((res) => res.json());
    return data;
  } catch (err) {
    console.error(err);
  }
};
