import ApiResource from "../apiResource";

const url = "https://covid-api.mmediagroup.fr/v1/";

const covidService = {
  get: async (countryAB: string) => {
    const response = await ApiResource.fetch(
      "GET",
      `${url + "cases?ab=" + countryAB}`
    );
    return { success: true, data: response };
  },
  getVac: async (countryName: string) => {
    const response = await ApiResource.fetch(
      "GET",
      `${url + "vaccines?country=" + countryName}`
    );
    return { success: true, data: response };
  },
};

export default covidService;
