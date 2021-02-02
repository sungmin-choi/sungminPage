import express from "express";
import "core-js"

const app = express();
const router = express.Router();
app.use("/", router);
app.set('view engine', 'pug'); 
router.get("/", (req, res) => {
    res.render("main",{siteName:"sungMin_Site"});
  });


export default app;