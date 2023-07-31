import http from "@/api";

export const test = () => {
  return http.request({
    url: "http://localhost:8080/test",
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  });
};
