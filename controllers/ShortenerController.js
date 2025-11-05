
import crypto from "crypto";
import { getLinkByShortCode, insertShortlink, loadLink } from "../services/shortener.services.js";
// import { getLinkByShortCode, insertShortlink, loadLink } from "../models/shortener.model.js";






//! function for reading html and Css file
export const getSortenerPage = async (req, res) => {
    try {
        //! no need to read because of res.render();
        // const file = await readFile(path.join("views", "index.html"));
        const links = await loadLink()

        // const links = await urls.find(); //!mongoose

        return res.render("index", { links, hosts: req.host });


    } catch (error) {
        console.log(error)
        return res.status(500).send("internal server Error")
    }
};



//! POST methods/data store/duplicate check

export const postURLshortener = async (req, res) => {
    try {
        const { url, shortCode } = req.body;
        const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");

        // const links = await loadLink();
        // const links = await urls.find(); //!mongoose
        const link=await getLinkByShortCode(shortCode);

        if (link) {
            return res.status(400).send("Sort code already exist. Pleased choose another.")
        }

        //! if not present
        // links[finalShortCode] = url;
        // await saveLinks(links)

        //! Mongodb code
        // await saveLinks({url,shortCode})
        // await urls.create({ url, shortCode }) //!mongoose
        //! mysql 
        await insertShortlink({ url, shortCode: finalShortCode })


        return res.redirect("/");


    } catch (error) {
        console.log(error)
        return res.status(500).send("internal server Error file")
    }
};


//! shortcode redirect page 

export const redirectToShortLink = async (req, res) => {
    try {

        const { shortCode } = req.params;

        // const links = await loadLink();

        const link = await getLinkByShortCode(shortCode)
        // const link = await urls.findOne({shortCode:shortCode})

        if (!link) return res.status(404).send("404 Error Occurred");
        return res.redirect(link.url);

    } catch (error) {
        console.error(error)
        return res.status(500).send("Internal Server Error");
    }
};