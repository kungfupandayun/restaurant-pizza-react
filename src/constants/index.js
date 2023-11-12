import { facebook, instagram, twitter } from "../assets/icons";


export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#menu", label: "Menu" },
    { href: "#reservation", label: "Reservation" },
    { href: "#contact-us", label: "Contact Us" },
];

export const menu = [
    { src: "./src/assets/images/menu-1.jpg", text: "menu-1"},
    { src: "./src/assets/images/menu-2.jpg", text: "menu-2"},
    { src: "./src/assets/images/menu-3.jpg", text: "menu-3"},
    { src: "./src/assets/images/menu-4.jpg", text: "menu-4"},
    { src: "./src/assets/images/menu-5.jpg", text: "menu-5"},
    { src: "./src/assets/images/menu-6.jpg", text: "menu-6"},
    { src: "./src/assets/images/menu-7.jpg", text: "menu-7"}
];



export const footerLinks = [
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@pizzatogo.com", link: "mailto:customer@pizzatogo.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo", link:"/" },
    { src: twitter, alt: "twitter logo", link:"/" },
    { src: instagram, alt: "instagram logo", link:"/" },
];