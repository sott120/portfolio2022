const express = require("express");
const cors = require("cors");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();
app.use(cors());
app.use(express.json());

app.listen("1234", () => {
  console.log(`
  Server listening on port: 1234
`);
});

app.post("/tistory", async (req, res) => {
  const html = await axios.get("https://sott120.tistory.com/");
  const $ = cheerio.load(html.data);
  //제목 불러오기
  const title = $(
    "#main > div > div > ul > li > div > div.box_contents > a.link_title > strong"
  );
  let titleList= [];
  title.each((idx, el) => {
      titleList[idx] = {
       title: $(el).text(),
    };
  });

  //작성일 불러오기
  const date = $(
      "#main > div > div:nth-child(2) > ul > li > div > div.box_contents > div > span"
  );
  let dateList=[];
  date.each((idx,el)=>{
    dateList[idx] = {
      date: $(el).text(),
    }
  })

  //링크 불러오기
  const link = $(
      "#main > div > div > ul > li > div > div.box_contents > a.link_title"
  );
  let linkList = [];
  link.each((idx, el) => {
      linkList[idx] = {
          link: "https://sott120.tistory.com" + $(el).attr("href"),
      };
  });

  //이미지주소 불러오기
  const img = $(
      "#main > div > div:nth-child(2) > ul > li > div > div.thumbnail_zone > a"
  );
  let imgList = [];
  img.each((idx, el) => {
      imgList[idx] = {
          img: $(el).attr("style")?.substring(22).split(`')`)[0],
      };
  });

  let allList = [];
  allList = titleList.map((item, i) => ({
    ...item,
    ...dateList[i],
    ...imgList[i],
    ...linkList[i],
  }));
  console.log(allList);
  let sliceList = allList.slice(0,6);
  res.send(sliceList);
});