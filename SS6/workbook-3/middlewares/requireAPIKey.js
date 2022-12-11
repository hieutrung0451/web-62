const requireAPIKey = (query) => {
  if (!query) {
    throw new Error("API key is missing");
  }
};

module.exports = requireAPIKey;
