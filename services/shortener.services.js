


import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()


//todo load all data
export const loadLink = async () => {
    const allShortLinks = await prisma.shortlink.findMany();
    return allShortLinks;
}

//todo  short-code checking
export const getLinkByShortCode = async (shortcode) => {
    const shortLinks = await prisma.shortlink.findUnique({
        where: { shortCode: shortcode },
    })
    return shortLinks;
};

//todo file save to json
export const insertShortlink = async ({url,shortCode}) => {
   const newShortLink=await prisma.shortlink.create({
    data:{shortCode,url},
   })
   return newShortLink
}
