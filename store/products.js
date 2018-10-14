
export const state = () => ({
products: [
    {
        id: '1',
        picture: "img1.jpg",
        title: "Điện Thoại Xiaomi Mi Mix 2s 128GB/6GB - Hàng Chính Hãng",
        price: '17.000',

    },
    {
        id: '2',
        picture: "img2.jpg",
        title: "Android Tivi Sony Full HD 43 inch KDL-43W800F",
        price: '15.000',

    },
    {
        id: '3',
        picture: "img5.jpg",
        title: "Tủ Lạnh Inverter Mitsubishi Electric MR-FV24EM (206L)",
        price: '40.000',

    },
    {
        id: '4',
        picture: "img4.jpg",
        title: "Quần Shorts Nam The Cosmo Garment-Dyed Shorts - Petrol",
        price: '25.000',

    },
    {
        id: '5',
        picture: "img1.jpg",
        title: "Ổ Cứng SSD Silicon Power S55 120GB (TLC) Up To 550MB/s /",
        price: '80.000',

    },
    {
        id: '6',
        picture: "img2.jpg",
        title: "Máy Ảnh Sony Alpha A7 Mark II + Lens 28-70mm",
        price: '30.000',

    },
    {
        id: '7',
        picture: "img6.jpg",
        title: "Máy Ảnh Sony Alpha A7 Mark II + Lens 28-70mm",
        price: '35.000',

    },
    {
        id: '8',
        picture: "img7.jpg",
        title: "Máy Ảnh Sony Alpha A7 Mark II + Lens 28-70mm",
        price: '83.000',

    }
],
carts: JSON.parse(window.sessionStorage.getItem("carts") || '[]')
})

export const mutations = {
    ADD_TO_CART (state, item) {
        
        const cartItem = state.carts.find(itemcart => itemcart.id == item.id)

        if(!cartItem) {
            state.carts.push({
                id: item.id,
                title: item.title,
                picture: item.picture,
                price: item.price,
                quantity: 1
            })
        }
        else {
            cartItem.quantity++
        }
        sessionStorage.setItem('carts', JSON.stringify(state.carts))
    },
    UP_QUANTITY(state, item) {
        const cartItem = state.carts.find(itemcart => itemcart.id == item.id)
        cartItem.quantity++
        sessionStorage.setItem('carts', JSON.stringify(state.carts))
    },
    DOWN_QUANTITY(state, item) {
        const cartItem = state.carts.find(itemcart => itemcart.id == item.id)
        cartItem.quantity--
        
        if(cartItem.quantity < 1)
        {
            alert("Sản phẩm " + item.title + " bị xóa!")
            state.carts.splice(state.carts.indexOf(item), 1)
        }
    },
    REMOVE_CART(state, item) {
        state.carts.splice(state.carts.indexOf(item), 1)
        alert("Đã xóa " + item.title)
    }
}

export const getters = {
    products: state => state.products,
    carts: state => state.carts,
    cartTotal: state => state.carts.reduce((total, product) => total + product.price * product.quantity, 0)
}

export const actions = {
    addtocart({ commit }, item) {
        commit('ADD_TO_CART', item)
    },
    upQuantity({ commit }, item) {
        commit('UP_QUANTITY', item)
    },
    downQuantity({ commit }, item) {
        commit('DOWN_QUANTITY', item)
    },
    removeCart({ commit }, item) {
        commit('REMOVE_CART', item)
    }

}