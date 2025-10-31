
import { Router } from "express";
import { postURLshortener,getSortenerPage, redirectToShortLink } from "../controllers/ShortenerController.js"; 

const router = Router();



//todo report 
/*
router.get("/report", (req, res) => {
    const student = [
        {
            name: "Arnev",
            grade: "10th",
            favSub: "maths",
        },
        {
            name: "Arnevs",
            grade: "10t2h",
            favSub: "matahs",
        },
        {
            name: "Arnevsw",
            grade: "10wt2h",
            favSub: "matfffahs",
        },
    ]
    res.render("report", { student })
})
*/


//! function for reading html and Css file
router.get("/",getSortenerPage);


//! POST methods/data store/duplicate check
router.post("/",postURLshortener);




//! shortcode redirect page 
router.get("/:shortCode", redirectToShortLink)


// export default router;
export const shortenedRoutes = router;
