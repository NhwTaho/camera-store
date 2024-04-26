const img01 = require("../images/products/01.jpg")
const img02 = require("../images/products/02.jpg")
const img03 = require("../images/products/04.jpg")
const img04 = require("../images/products/05.jpg")
const img05 = require("../images/products/06.jpg")
const img06 = require("../images/products/07.jpg")
const img07 = require("../images/products/11.jpg")
const img08 = require("../images/products/12.jpg")
const img09 = require("../images/products/13.jpg")
const img10 = require("../images/products/14.jpg")
const img11 = require("../images/products/15.jpg")
const img12 = require("../images/products/16.jpg")
const img13 = require("../images/products/17.jpg")
const img14 = require("../images/products/18.jpg")
const img15 = require("../images/products/19.jpg")
const img16 = require("../images/products/20.jpg")
const img17 = require("../images/products/21.jpg")
const img18 = require("../images/products/22.jpg")
const img19 = require("../images/products/23.jpg")
const img20 = require("../images/products/24.jpg")
const img21 = require("../images/products/25.jpg")
const img22 = require("../images/products/26.jpg")
const img23 = require("../images/products/27.jpg")
const img24 = require("../images/products/28.jpg")
const img25 = require("../images/products/29.jpg")
const img26 = require("../images/products/30.jpg")
const img27 = require("../images/products/31.jpg")
const img28 = require("../images/products/32.jpg")

const products = [
    {
        title: "Camera Tapo C125",
        price: '890000',
        img: img01,
        categorySlug: "camera-dome",
        colors: ["white", "black"],
        slug: "Camera Tapo C125",
        size: ["850", "940", "256", "512", "1000"],
        description: "Camera AI Wi-Fi An Ninh Thông Minh Dành Cho Gia Đình. Đây là một sản phẩm mang tính ứng dụng công nghệ vào đời sống của AI kết hợp với TP Link",
    },
    {
        title: "Camera Floodlight Thông Minh",
        price: '5900000',
        img: img02,
        categorySlug: "camera-zoom",
        colors: ["white", "blue"],
        slug: "Camera Tapo C720",
        size: ["64", "128", "256", "512", "1000"],
        description: "Camera Floodlight Thông Minh.",
    },
    {
        title: "Camera Tapo C428 KIT",
        price: '19700000',
        img: img03,
        categorySlug: "hồng-ngoại",
        colors: ["white", "blue"],
        slug: "camera Tapo C428",
        size: ["64", "128"],
        description: "Camera An Ninh Không Dây Thông Minh và Tấm Pin Năng Lượng Mặt Trời.",
    },
    {
        title: "Camera Tapo C620 KIT",
        price: '27490000',
        img: img04,
        categorySlug: "camera-thân",
        colors: ["white", "green"],
        slug: "camera Tapo C620 KIT",
        size: ["64", "128", "256"],
        description: "Smart Wire-Free Pan/Tilt Security Camera and Solar Panel.",
    },
    {
        title: "Camera Tapo C621 KIT",
        price: '19700000',
        img: img05,
        categorySlug: "camera-thân",
        colors: ["white", "black"],
        slug: "camera tapo C621 KIT",
        size: ["64", "128", "256"],
        description: "Smart Wire-Free Pan/Tilt Security Camera and Solar Panel.",
    },
    {
        title: "Camera Tapo C425 KIT",
        price: '15490000',
        img: img06,
        categorySlug: "camera-thân",
        colors: ["white", "black"],
        slug: "camera Tapo C425 KIT",
        size: ["64", "128"],
        description: "Camera An Ninh Không Dây Thông Minh và Tấm Pin Năng Lượng Mặt Trời.",
    },
    {
        title: "Camera Tapo C212",
        price: '18900000',
        img: img07,
        categorySlug: "camera-zoom",
        colors: ["back", "white"],
        slug: "camera Tapo C212",
        size: ["64", "128"],
        description: "Camera Wi-Fi An Ninh Cho Gia Đình Quay/ Quét.",
    },
    {
        title: "Camera AI TC73",
        price: '21900000',
        img: img08,
        categorySlug: "camera-dome",
        colors: ["white", "blue"],
        slug: "camera AI TC73",
        size: ["64", "128", "256"],
        description: "Camera Wi-Fi AI Quay Quét Dành Cho Gia Đình. ",
    },
    {
        title: "Camera Tapo C840",
        price: '7920000',
        img: img09,
        categorySlug: "hồng-ngoại",
        colors: ["white", "black"],
        slug: "camera Tapo C840",
        size: ["64", "128"],
        description: "Giám Sát Trẻ AI Thông Minh Quay/ Quét.",
    },
    {
        title: "Camera TC40",
        price: '3920000',
        img: img10,
        categorySlug: "camera-dome",
        colors: ["white", "black"],
        slug: "camera TC40",
        size: ["64", "128", "256", "512"],
        description: "Camera An Ninh Wi-Fi Ngoài Trời Quay/Quét.",
    },
    {
        title: "Camera C221 V2",
        price: '21920000',
        img: img11,
        categorySlug: "camera-dome",
        colors: ["white", "black"],
        slug: "camera C221 V2",
        size: ["64", "128", "256", "512", "1000"],
        description: "Camera Wi-Fi An Ninh Gia Đình Quay/Quét.",
    },
    {
        title: "Camera Tapo C120",
        price: '16200000',
        img: img12,
        categorySlug: "camera-thân",
        colors: ["white", "black"],
        slug: "camera Tapo C120",
        size: ["64", "128", "256", "512"],
        description: "Camera An Ninh Gia Đình Wi-Fi Trong Nhà/Ngoài Trời Tapo.",
    },
    {
        title: "Camera Tapo C520WS",
        price: '16200000',
        img: img13,
        categorySlug: "camera-zoom",
        colors: ["white", "black"],
        slug: "camera Tapo C520WS",
        size: ["64", "128", "256"],
        description: "Camera Wi-Fi An Ninh Quay Quét Ngoài trời.",
    },
    {
        title: "Camera TC65",
        price: '15000000',
        img: img14,
        categorySlug: "camera-zoom",
        colors: ["white", "black"],
        slug: "camera TC65",
        size: ["64", "128", "256"],
        description: "Camera Wi-Fi An Ninh Ngoài Trời",
    },
    {
        title: "Camera C100 V1",
        price: '999000',
        img: img15,
        categorySlug: "camera-thân",
        colors: ["white", "black"],
        slug: "Camera C100 V1",
        size: ["64", "128", "256", "512"],
        description: "Camera Wi-Fi An Ninh cho Gia Đình.",
    },
    {
        title: "Camera Tapo C510W",
        price: '16000000',
        img: img16,
        categorySlug: "camera-dome",
        colors: ["white", "black"],
        slug: "camera Tapo C510W",
        size: ["64", "128"],
        description: "Camera WiFi Quay Quét Ngoài Trời.",
    },
    {
        title: "Camera Tapo C110",
        price: '13900000',
        img: img17,
        categorySlug: "camera-thân",
        colors: ["white", "black", "green"],
        slug: "camera Tapo C110",
        size: ["64", "128"],
        description: "Camera Wi-Fi An Ninh cho Gia Đình.",
    },
    {
        title: "Tapo DL130",
        price: '8700000',
        img: img18,
        categorySlug: "hồng-ngoại",
        colors: ["white", "black"],
        slug: "tapo DL130",
        size: ["64", "128"],
        description: "Smart Video Door Lock.",
    },
    {
        title: "Camera Tapo HCL09",
        price: '6700000',
        img: img19,
        categorySlug: "camera-dome",
        colors: ["white", "black", "green"],
        slug: "camera Tapo HCL09",
        size: ["64", "128"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aspernatur doloremque esse laboriosam, ipsa quis dolorem aut labore magni consequuntur cum temporibus soluta quisquam a nemo error natus beatae sequi.",
    },
    {
        title: "Camera Tapo C210P2",
        price: '3790000',
        img: img20,
        categorySlug: "camera-zoom",
        colors: ["white", "black"],
        slug: "camera Tapo C210P2",
        size: ["64", "128"],
        description: "Camera WI-Fi An Ninh Cho Gia Đình Quay Quét.",
    },
    {
        title: "Camera Tapo CMD06",
        price: '500000',
        img: img21,
        categorySlug: "camera-dome",
        colors: ["white", "black"],
        slug: "Camera Tapo CMD06",
        size: ["64", "128"],
        description: "Camera An Ninh Wi-Fi Ngoài Trời Quay/Quét.",
    },
    

    // 18 products
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const getProductBySlug = (slug) => products.find(e => e.slug === slug)

const getCartItemsInfo = (cartItems) => {
    let res = []
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            let product = getProductBySlug(e.slug)
            res.push({
                ...e,
                product: product
            })
        })
    }
    // console.log(res)
    // console.log('sorted')
    // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
    return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
}

const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug,
    getCartItemsInfo
}

export default productData