import { BsHome, BsCart, BsBag, BsHeart, BsPersonCircle } from 'react-icons/bs'
import { Shirt1, Shirt2, Shirt3, Shirt4, Shirt5, Shirt6, Shirt7, Shirt8, Shirt9, Shirt10, Shirt11, Shirt12, Shirt13, Shirt14, Shirt15, shirt16, Shirt17, Shirt18, Shirt19, Woman1, Woman2, Woman3, Obi } from '../assets'

export const homeNav = [
    { 
        image: Obi,
        name: "Men's Hat"
    },
    {
        image: Woman1,
        name: "New Collection"
    },
    { 
        image: Woman2,
        name: "Summer Sales"
    },
    {
        image: Woman3,
        name: "Black"
    },
]

export const footers = [
    {
        id: "1",
        name: "Home",
        // icon: <BsHome />,
        link: "/"
    },
    {
        id: "2",
        name: "Shop",
        // icon: <BsCart />,
        link: "shop"
    },
    {
        id: "3",
        name: "Bag",
        // icon: <BsBag />,
        link: "bag"
    },
    {
        id: "4",
        name: "Favorites",
        // icon: <BsHeart />,
        link: "favorites"
    },
    {
        id: "5",
        name: "Profile",
        // icon: <BsPersonCircle />,
        link: "profile"
    },
]