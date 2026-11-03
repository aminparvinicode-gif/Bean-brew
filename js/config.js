// تنظیمات ثابت پروژه Bean & Brew

const CONFIG = {
    
    brandName : "Bean & Brew",

    dbKeys : {
        products : "bb_products",
        cart : "bb_cart",
        orders : "bb_orders",
        isAdmin : "bb_isAdmin"
    },

    //قیمت های ثابت 
    shipping : {
        standard : 50000 , // هزینه ارسال عادی به تومان
        freeAbove : 3000000 , // بالای این مبلغ ارسال رایگان است
    },

    //تعداد حداقل برای فروش عمده 
    wholesaleMinQty : 6,

    whatsappNumber : "996xxxxxx12",

    telegramId : "@WhoIsAminIsComputer",

    contact : {
        phone : "021-12345678",
        email : "info@beanandbrew.ir",
        address : "تهران، خیابان ولیعصر، پلاک ۱۲۳"
    }

}

// ❄️
Object.freeze(CONFIG);

