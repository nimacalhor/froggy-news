import { FooterLinks } from "@modules/general/libraries/generalTypes";

function GetFooterLinks(): FooterLinks[] {
  return [
    { id: 1, title: "main page", url: "/" },
    { id: 2, title: "news", url: "/news" },
    { id: 3, title: "pictorial articles", url: "/pictorial-articles" },
    { id: 4, title: "about us", url: "/about-us" },
    { id: 5, title: "rules", url: "/rules" },
    { id: 6, title: "members", url: "/members" },
    { id: 7, title: "contact us", url: "/contact-us" },
  ].reverse();
}

export { GetFooterLinks };
