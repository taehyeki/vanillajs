const MY_KEY = "";
const a = new Date();
const year = String(a.getFullYear());
const month = String(a.getMonth() + 1).padStart(2, "0");
const day = String(a.getDate()).padStart(2, "0");

const today = year + month + day;

const url =
  "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson";
let queryParams = "?" + encodeURIComponent("serviceKey") + "=" + `${MY_KEY}`;
queryParams +=
  "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1");
queryParams +=
  "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("10");
queryParams +=
  "&" + encodeURIComponent("startCreateDt") + "=" + encodeURIComponent(today);
queryParams +=
  "&" +
  encodeURIComponent("endCreateDt") +
  "=" +
  encodeURIComponent(today); /**/

let CB_CNT;
let TOTAL_CNT;

const get_corona = async () => {
  const a = await fetch(url + queryParams);
  text = await a.text();
  xmlParser = new DOMParser();
  xmlDoc = xmlParser.parseFromString(text, "text/xml");
  items = xmlDoc.querySelectorAll("item");
  items.forEach((item) => {
    if (item.children[3].innerHTML == "충북") {
      CB_CNT = item.children[6].innerHTML;
    }
    if (item.children[3].innerHTML == "합계") {
      TOTAL_CNT = item.children[6].innerHTML;
    }
  });

  const my_city = document.querySelector(".corona #my_city_corona");
  const korea = document.querySelector(".corona #korea_corona");

  my_city.innerText = `충청북도 확진자 : ${parseInt(CB_CNT).toLocaleString(
    "ko-KR"
  )}명`;
  korea.innerText = `전국 확진자 : ${parseInt(TOTAL_CNT).toLocaleString(
    "ko-KR"
  )}명`;
};
get_corona();
