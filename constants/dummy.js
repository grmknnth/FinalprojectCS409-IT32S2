export const availableRewards = [
    {
        id: 1,
        title: "150 points - ₱50 off",
        eligible: true,
    },
    {
        id: 2,
        title: "340 points - any 20oz tea or coffee",
        eligible: false,
    },
    {
        id: 3,
        title: "400 points - any 2 x 20oz tea or coffee",
        eligible: false,
    },
    {
        id: 4,
        title: "500 points - any 3 x 20oz tea or coffee",
        eligible: false,
    },
]

export const locations = [
    {
        id: 1,
        title: "SM San Mateo Branch",
        address: "Gen. Luna Ave, Brgy. Ampid 1, San Mateo, Rizal",
        operation_hours: "Sunday - Thursday: 10AM - 11PM \nFriday - Saturday: 10AM - Midnight",
        bookmarked: true
    },
    {
        id: 2,
        title: "Ayala mall Feliz Branch",
        address: "Amang Rodriguez Brgy cor, J. P. Rizal St, Pasig, Metro Manila",
        operation_hours: "Sunday - Thursday: 10AM - 11PM \nFriday - Saturday: 10AM - Midnight",
        bookmarked: false
    },
    {
        id: 3,
        title: "Centris Station Mall Branch",
        address: "EDSA, Cor Quezon Ave, Diliman, Quezon City, Metro Manila",
        operation_hours: "Sunday - Thursday: 10AM - 11PM \nFriday - Saturday: 10AM - Midnight",
        bookmarked: true
    },
    {
        id: 4,
        title: "Star Mall Branch",
        address: "Epifanio de los Santos Ave, Balintawak, Caloocan, Metro Manila",
        operation_hours: "Sunday - Thursday: 10AM - 11PM \nFriday - Saturday: 10AM - Midnight",
        bookmarked: false
    },
]

export const menuList = [
    {
        id: 1,
        name: "Coco Melon Milk tea",
        description: "Coco Melon Flavored Milk tea",
        price: "₱80-₱120",
        thumbnail: require("../assets/images/bubble-tea.png"),
        category: "Milk Tea"
    },
    {
        id: 2,
        name: "Matcha Milk Tea",
        description: "Matcha flavored Milk Tea",
        price: "₱80-₱120",
        thumbnail: require("../assets/images/bubble-tea.png"),
        category: "Milk Tea"
    },
    {
        id: 3,
        name: "Strawberry Milk Tea",
        description: "Strawberry Milk Tea",
        price: "₱80-₱120",
        thumbnail: require("../assets/images/bubble-tea.png"),
        category: "Milk Tea"
    },
    {
        id: 4,
        name: "Ice Lemon Tea",
        description: "Lemon Tea with ice",
        price: "₱80-₱120",
        thumbnail: require("../assets/images/ice-tea.png"),
        category: "Specialtea"
    },
    {
        id: 5,
        name: "Berry Smoothie",
        description: "Strawberry and blueberry Smoothie",
        price: "₱80-₱120",
        thumbnail: require("../assets/images/smoothie.png"),
        category: "Smoothie"
    },
    {
        id: 6,
        name: "Immune Booster",
        description: "Boost your immune system with Citrus",
        price: "₱80-₱120",
        thumbnail: require("../assets/images/smoothie.png"),
        category: "Smoothie"
    },
    {
        id: 7,
        name: "Very Berry",
        description: "Straberry with blue berry shake",
        price: "₱80-₱120",
        thumbnail: require("../assets/images/smoothie.png"),
        category: "Smoothie"
    },
    {
        id: 8,
        name: "Watermelon Lychee Crush",
        description: "Crushed ice with Watermelon and Lychee ",
        price: "₱80-₱120",
        thumbnail: require("../assets/images/smoothie.png"),
        category: "Smoothie"
    },
    {
        id: 9,
        name: "Americano",
        description: "Brewed Americano coffee",
        price: "₱80-₱120",
        thumbnail: require("../assets/images/coffee.png"),
        category: "Coffee"
    },
    {
        id: 10,
        name: "Cappuccino",
        description: "Brewede Cappuccino",
        price: "₱80-₱120",
        thumbnail: require("../assets/images/coffee.png"),
        category: "Coffee"
    },
    {
        id: 11,
        name: "Mocha",
        description: "Mocha flavored coffee",
        price: "₱80-₱120",
        thumbnail: require("../assets/images/coffee.png"),
        category: "Coffee"
    },
    {
        id: 12,
        name: "Espresso",
        description: "Espresso shot",
        price: "₱80-₱120",
        thumbnail: require("../assets/images/coffee.png"),
        category: "Coffee"
    },
    {
        id: 13,
        name: "Long Black",
        description: "Long Black",
        price: "₱80-₱120",
        thumbnail: require("../assets/images/coffee.png"),
        category: "Coffee"
    },
    {
        id: 14,
        name: "Hash Brown",
        description: "Typical Hash Brown",
        price: "₱80-₱120",
        thumbnail: require("../assets/images/french-fries.png"),
        category: "Snack"
    },
    {
        id: 15,
        name: "French Fries",
        description: "Filipino French Fries",
        price: "₱80-₱120",
        thumbnail: require("../assets/images/french-fries.png"),
        category: "Snack"
    },
]

export const milkList = [
    {
        id: 1,
        name: "Almond Milk",
        image: require("../assets/icons/milk.png"),
    },
    {
        id: 2,
        name: "Oat Milk",
        image: require("../assets/icons/milk2.png"),
    },
    {
        id: 3,
        name: "Whole Milk",
        image: require("../assets/icons/milk3.png"),
    }
]

const promos = [
    {
        id: 1,
        name: "Strawberry Sensation",
        description: "Strawberry smoothie with strawberry bits",
        calories: "379 - 570",
        image: require("../assets/images/strawberry-background.png")
    },
    {
        id: 2,
        name: "Strawberry Sensation",
        description: "Strawberry smoothie with strawberry bits",
        calories: "400 - 570",
        image: require("../assets/images/strawberry-background.png")
    },
    {
        id: 3,
        name: "Strawberry Sensation",
        description: "Strawberry smoothie with strawberry bits",
        calories: "449 - 570",
        image: require("../assets/images/strawberry-background.png")
    },

]

const dummyData = {
    availableRewards,
    locations,
    menuList,
    milkList,
    promos,
};

export default dummyData;