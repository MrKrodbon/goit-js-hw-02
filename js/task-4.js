function getShippingCost(country) {
  let currentCountyShippingPrice;
  switch (country) {
    case "China":
      currentCountyShippingPrice = `Shipping to ${country} will cost 100 credits`;
      break;
    case "Chile":
      currentCountyShippingPrice = `Shipping to ${country} will cost 250 credits`;
      break;
    case "Australia":
      currentCountyShippingPrice = `Shipping to ${country} will cost 170 credits`;
      break;
    case "Chile":
      currentCountyShippingPrice = `Shipping to ${country} will cost 250 credits`;
      break;
    default:
      break;
  }
}
