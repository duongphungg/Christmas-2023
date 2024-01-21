//DOM
const productContainer = document.querySelector(".product-container")
const searchInput = document.querySelector("#search-input")

//ProductList
const productList = [
    {
        id: 1,
        name: 'Italian Summer',
        price: '£25.00',
        image: 'https://papier.imgix.net/https%3A%2F%2Fpapier.imgix.net%2Fhttps%253A%252F%252Fwww.papier.com%252Fproduct_image%252F162535%252F169%252Fitalian-summer-44202_front_1704393891.png%3Fixlib%3Drb-3.2.1%26auto%3Dformat%252Ccompress%26s%3D7038083b39b783cb1b59ec83ee5444d4?ixlib=rb-3.2.1&w=352&h=352&auto=format%2Ccompress&s=f18cf90aec09f3eb27a9b80494feb894'
    },
    {
        id: 2,
        name: 'Joy',
        price: '£25.00',
        image: 'https://papier.imgix.net/https%3A%2F%2Fpapier.imgix.net%2Fhttps%253A%252F%252Fwww.papier.com%252Fproduct_image%252F165767%252F204%252Fjoy-45192_front_1698076621.png%3Fixlib%3Drb-3.2.1%26auto%3Dformat%252Ccompress%26s%3Deb5aeb93484e087fe20715a3e0a6d5d6?ixlib=rb-3.2.1&w=352&h=352&auto=format%2Ccompress&s=7f0111d0ae02a51f584a447b123e5f8b'
    },
    {
        id: 3,
        name: 'Wonder',
        price: '£25.00',
        image: 'https://papier.imgix.net/https%3A%2F%2Fpapier.imgix.net%2Fhttps%253A%252F%252Fwww.papier.com%252Fproduct_image%252F165787%252F204%252Fwonder-45196_front_1698076621.png%3Fixlib%3Drb-3.2.1%26auto%3Dformat%252Ccompress%26s%3Dde721a49d7141761764709071fb96c90?ixlib=rb-3.2.1&w=352&h=352&auto=format%2Ccompress&s=2f5c1bf0d8e701fc078a2da22c1199f0'
    },
    {
        id: 4,
        name: 'Time to bloom',
        price: '£25.00',
        image: 'https://papier.imgix.net/https%3A%2F%2Fpapier.imgix.net%2Fhttps%253A%252F%252Fwww.papier.com%252Fproduct_image%252F156966%252F169%252Ftime-to-bloom-42781_front_1701278163.png%3Fixlib%3Drb-3.2.1%26auto%3Dformat%252Ccompress%26s%3D16e5e92698d162a54ef8a3889fe6a1f7?ixlib=rb-3.2.1&w=352&h=352&auto=format%2Ccompress&s=01db36a3e996f38b1589786ccf7b6a4a'
    },
    {
        id: 5,
        name: 'Jazz',
        price: '£25.00',
        image: 'https://papier.imgix.net/https%3A%2F%2Fpapier.imgix.net%2Fhttps%253A%252F%252Fwww.papier.com%252Fproduct_image%252F161813%252F169%252Fjazz-43964_front_1701278206.png%3Fixlib%3Drb-3.2.1%26auto%3Dformat%252Ccompress%26s%3D2c64e4345d4ff8ab68d26d1567eb6c2a?ixlib=rb-3.2.1&w=352&h=352&auto=format%2Ccompress&s=92594a7abb79af712eef99bca30406ed'
    },
    {
        id: 6,
        name: 'EnJoy',
        price: '£25.00',
        image: 'https://papier.imgix.net/https%3A%2F%2Fpapier.imgix.net%2Fhttps%253A%252F%252Fwww.papier.com%252Fproduct_image%252F127694%252F169%252Fjoy-34176_front_1701277888.png%3Fixlib%3Drb-3.2.1%26auto%3Dformat%252Ccompress%26s%3D57d02fa042edf9294879cab003d3fe6c?ixlib=rb-3.2.1&w=352&h=352&auto=format%2Ccompress&s=505fbaccfddeb64fc2c4b0a1d0c47480'
    },
    {
        id: 7,
        name: 'Le Moderne',
        price: '£25.50',
        image: 'https://papier.imgix.net/https%3A%2F%2Fpapier.imgix.net%2Fhttps%253A%252F%252Fwww.papier.com%252Fbundle_image%252F961%252F162%252Fle-moderne-961_le-moderne_1704472190.png%3Fixlib%3Drb-3.2.1%26auto%3Dformat%252Ccompress%26s%3D6b9c887f2d6603318389242d77e58b64?ixlib=rb-3.2.1&w=352&h=352&auto=format%2Ccompress&s=b101d8e57b5258206a061a38d7b82188'
    },
    {
        id: 8,
        name: 'Pressed Flowers',
        price: '£25.50',
        image: 'https://papier.imgix.net/https%3A%2F%2Fpapier.imgix.net%2Fhttps%253A%252F%252Fwww.papier.com%252Fbundle_image%252F973%252F162%252Fpressed-flowers-973_pressed-flowers_1704472208.png%3Fixlib%3Drb-3.2.1%26auto%3Dformat%252Ccompress%26s%3D17d1a11174a80189985b9e88dc044431?ixlib=rb-3.2.1&w=352&h=352&auto=format%2Ccompress&s=4a98c018185c3166788462481eccf87b'
    },
    {
        id: 9,
        name: 'Thank You Sparkle',
        price: '£35.00',
        image: 'https://papier.imgix.net/https%3A%2F%2Fpapier.imgix.net%2Fhttps%253A%252F%252Fwww.papier.com%252Fproduct_image%252F128960%252F2%252Fthank-you-sparkle-34523_front_1704898382.png%3Fixlib%3Drb-3.2.1%26auto%3Dformat%252Ccompress%26s%3Df79ff6d380e0cae90626cfeef8c18300?ixlib=rb-3.2.1&w=352&h=352&auto=format%2Ccompress&s=897920f0adc8bfcefc9eb0660df10521'
    },
    {
        id: 10,
        name: 'Photo Arch',
        price: '£35.00',
        image: 'https://papier.imgix.net/https%3A%2F%2Fpapier.imgix.net%2Fhttps%253A%252F%252Fwww.papier.com%252Fproduct_image%252F173017%252F2%252Fphoto-arch-47256_front_1704898454.png%3Fixlib%3Drb-3.2.1%26auto%3Dformat%252Ccompress%26s%3Db4ab3f7161284632a0b458481dd4b50e?ixlib=rb-3.2.1&w=352&h=352&auto=format%2Ccompress&s=d4adf19908e31b966f43de2631ac0e51'
    },
    {
        id: 11,
        name: 'Wedding Thank You Border',
        price: '£35.00',
        image: 'https://papier.imgix.net/https%3A%2F%2Fpapier.imgix.net%2Fhttps%253A%252F%252Fwww.papier.com%252Fproduct_image%252F168859%252F4%252Fwedding-thank-you-border-46002_front_1704995272.png%3Fixlib%3Drb-3.2.1%26auto%3Dformat%252Ccompress%26s%3Daa722e5a1c536f09fad9198453e2b864?ixlib=rb-3.2.1&w=352&h=352&auto=format%2Ccompress&s=3e36a0ca391b372d84f64bd69c9ef066'
    },
    {
        id: 12,
        name: 'Photo Stars',
        price: '£35.00',
        image: 'https://papier.imgix.net/https%3A%2F%2Fpapier.imgix.net%2Fhttps%253A%252F%252Fwww.papier.com%252Fproduct_image%252F173037%252F2%252Fphoto-stars-47262_front_1704898454.png%3Fixlib%3Drb-3.2.1%26auto%3Dformat%252Ccompress%26s%3D3123d95ee29db8835c98e228e3798464?ixlib=rb-3.2.1&w=352&h=352&auto=format%2Ccompress&s=d03b08bf2c4123ce93166ca96580f428'
    },
    {
        id: 13,
        name: 'Tulip Vase',
        price: '£40.00',
        image: 'https://papier.imgix.net/https%3A%2F%2Fpapier.imgix.net%2Fhttps%253A%252F%252Fwww.papier.com%252Fproduct_image%252F157002%252F169%252Ftulip-vase-42793_front_1701278164.png%3Fixlib%3Drb-3.2.1%26auto%3Dformat%252Ccompress%26s%3D7d62b2198abb8b38f5c169628e2f1800?ixlib=rb-3.2.1&w=352&h=352&auto=format%2Ccompress&s=a8ca83e0ee9ab0c6d292129676e8eab3'
    },
    {
        id: 14,
        name: 'Over The Hills',
        price: '£40.00',
        image: 'https://papier.imgix.net/https%3A%2F%2Fpapier.imgix.net%2Fhttps%253A%252F%252Fwww.papier.com%252Fproduct_image%252F158646%252F169%252Fover-the-hills-43202_front_1701278176.png%3Fixlib%3Drb-3.2.1%26auto%3Dformat%252Ccompress%26s%3Df499dd49ec05bece76fb8ed75e5b0cf6?ixlib=rb-3.2.1&w=352&h=352&auto=format%2Ccompress&s=5a2dfa80bc0d9007d714c8704f56b59c'
    },
    {
        id: 15,
        name: 'The Midnight Hour',
        price: '£40.00',
        image: 'https://papier.imgix.net/https%3A%2F%2Fpapier.imgix.net%2Fhttps%253A%252F%252Fwww.papier.com%252Fproduct_image%252F157877%252F169%252Fthe-midnight-hour-43016_front_1701278168.png%3Fixlib%3Drb-3.2.1%26auto%3Dformat%252Ccompress%26s%3D39ad34e284a27440ca963bcd2dc5d7c6?ixlib=rb-3.2.1&w=352&h=352&auto=format%2Ccompress&s=4dd06a6a8854bcdbba1763201f7db64d'
    },
    {
        id: 16,
        name: 'Happy Stripes',
        price: '£40.00',
        image: 'https://papier.imgix.net/https%3A%2F%2Fpapier.imgix.net%2Fhttps%253A%252F%252Fwww.papier.com%252Fproduct_image%252F144149%252F169%252Fhappy-stripes-39077_front_1701278052.png%3Fixlib%3Drb-3.2.1%26auto%3Dformat%252Ccompress%26s%3D12cab36b62e2ad0624b39c9b58546dd1?ixlib=rb-3.2.1&w=352&h=352&auto=format%2Ccompress&s=e2be5a3138861ce9bb50f2a9f9c07bcc'
    },
    {
        id: 17,
        name: 'Goblin Mode',
        price: '£42.25',
        image: 'https://papier.imgix.net/https%3A%2F%2Fpapier.imgix.net%2Fhttps%253A%252F%252Fwww.papier.com%252Fproduct_image%252F167625%252F169%252Fgoblin-mode-45659_front_1701278280.png%3Fixlib%3Drb-3.2.1%26auto%3Dformat%252Ccompress%26s%3D249dede1529e80a9014b935e69d84439?ixlib=rb-3.2.1&w=352&h=352&auto=format%2Ccompress&s=02fae3b4c51cc33cb58b9dc25e89b21a'
    },
    {
        id: 18,
        name: 'Little Daily Thanks',
        price: '£42.25',
        image: 'https://papier.imgix.net/https%3A%2F%2Fpapier.imgix.net%2Fhttps%253A%252F%252Fwww.papier.com%252Fproduct_image%252F137482%252F36%252Flittle-daily-thanks-37010_front_1701278010.png%3Fixlib%3Drb-3.2.1%26auto%3Dformat%252Ccompress%26s%3D6a179ade8b54a912bb447e09356d47e4?ixlib=rb-3.2.1&w=352&h=352&auto=format%2Ccompress&s=5d5c94a53507676c0ec68345759950b2'
    },
    {
        id: 19,
        name: 'Full Of Heart',
        price: '£42.25',
        image: 'https://papier.imgix.net/https%3A%2F%2Fpapier.imgix.net%2Fhttps%253A%252F%252Fwww.papier.com%252Fproduct_image%252F127258%252F169%252Ffull-of-heart-34050_front_1701277881.png%3Fixlib%3Drb-3.2.1%26auto%3Dformat%252Ccompress%26s%3Db521e8163f7bf37984cd0d71e25cbad1?ixlib=rb-3.2.1&w=352&h=352&auto=format%2Ccompress&s=f1cc3b61df934dbc39843cc63d95eb4a'
    },
    {
        id: 20,
        name: 'Taking My Time',
        price: '£42.25',
        image: 'https://papier.imgix.net/https%3A%2F%2Fpapier.imgix.net%2Fhttps%253A%252F%252Fwww.papier.com%252Fproduct_image%252F158640%252F169%252Ftaking-my-time-43200_front_1701278176.png%3Fixlib%3Drb-3.2.1%26auto%3Dformat%252Ccompress%26s%3D519dbc37f3385668abdb7354ab2de9ee?ixlib=rb-3.2.1&w=352&h=352&auto=format%2Ccompress&s=435ac59cbf3ba0212238e1e7bbd71f01'
    },



]

function renderProductList(listProduct) {
    let htmls = "";
    for (let i = 0; i < listProduct.length; i++) {

        htmls += `
      <div class = "product-item">  
        <img src=${listProduct[i].image}> </img>
        <h3>${listProduct[i].name}</h3>
        <h3>${listProduct[i].price}</h3>
      </div>
      `
    }
    productContainer.innerHTML = htmls

}

renderProductList(productList)


function searchProducts(searchString) {


    let foundProduct = productList.filter(function (product) {

        return product.name.toLowerCase().includes(searchString.toLowerCase());
    })

    renderProductList(foundProduct)
}

searchInput.addEventListener("input", function (event) {

    searchProducts(event.target.value)
})
