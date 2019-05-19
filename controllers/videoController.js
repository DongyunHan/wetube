import { videos } from "../db";

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos: videos });
};

export const search = (req, res) => {
  console.log("search");
  const searchingBy = req.query.term;

  // const {
  //   query: { term: searchingBy }
  // } = req;
  // console.log(req.query);

  res.render("search", {
    pageTitle: "Search",
    searchingBy: searchingBy,
    videos: videos
  });
};

// export const videos = (req, res) =>
//   res.render("videos", { pageTitle: "Videos" });

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

export const uploadVideo = (req, res) =>
  res.render("uploadVideo", { pageTitle: "Upload Video" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
