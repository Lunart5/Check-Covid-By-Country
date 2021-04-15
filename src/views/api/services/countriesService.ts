import ApiResource from "../apiResource";

const url = "https://restcountries.eu/rest/v2/all";

const countryService = {
  get: async () => {
    const response = await ApiResource.fetch("GET", url);
    return { success: true, data: response };
  },
};

export default countryService;
