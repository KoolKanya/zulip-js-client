const api = require("../api");

function queues(config) {
  return {
    register: initialParams => {
      const url = `${config.apiURL}/register`;
      const params = { ...initialParams };
      if (params.event_types) {
        params.event_types = JSON.stringify(params.event_types);
      }
      if (params.narrow) {
        params.narrow = JSON.stringify(params.narrow);
      }
      return api(url, config, "POST", params);
    },
    deregister: params => {
      const url = `${config.apiURL}/events`;
      return api(url, config, "DELETE", params);
    }
  };
}

module.exports = queues;
