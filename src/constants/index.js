import { facebook, instagram, twitter } from "../assets/icons";
import { Capricciosa,Hawaian, Margherita,Marinara,QuattroFormaggi,QuattroStagioni,Seafood } from "../assets/images";


export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#menu", label: "Menu" },
    { href: "#reservation", label: "Reservation" },
    { href: "#contact-us", label: "Contact Us" },
];

export const menu = [
    {
        "id": 1,
        "image": Capricciosa,
        "name": "Capricciosa 🍕",
        "description": "A classic Italian pizza with artichokes, ham, mushrooms, and olives.",
        "price": 24.50
    },
    {
        "id": 2,
        "image": Hawaian,
        "name": "Hawaian 🍍",
        "description": "Spicy chicken chunks together with pineapple chunks and onions, baked on a sweet and smoky BBQ sauce.",
        "price": 23.80
    },
    {
        "id": 3,
        "image": Margherita,
        "name": "Margherita 🍕",
        "description": "A classic pizza topped with fresh mozzarella, tomatoes, and basil.",
        "price": 21.50
    },
    {
        "id": 4,
        "image": Marinara,
        "name": "Marinara 🍝",
        "description": "A simple yet flavorful pizza with a rich tomato sauce and fresh basil.",
        "price": 18.50
    },
    {
        "id": 5,
        "image": QuattroFormaggi,
        "name": "Quattro Formaggi 🧀",
        "description": "A delightful blend of four cheeses, creating a rich and creamy flavor.",
        "price": 20.00
    },
    {
        "id": 6,
        "image": QuattroStagioni,
        "name": "Quattro Stagioni 🍕",
        "description": "A pizza divided into four sections, each with different toppings.",
        "price": 22.00
    },
    {
        "id": 7,
        "image": Seafood,
        "name": "Seafood 🍕",
        "description": "A delicious seafood pizza topped with fresh ingredients.",
        "price": 25.00
    }
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