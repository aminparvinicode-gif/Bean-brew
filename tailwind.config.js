/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.html", "./admin/*.html", "./js/**/*.js"],
  theme: {
    extend: {
      // پالت های رنگی
      colors: {
        coffee: {
          dark: "#3E2723", // قهوه‌ای تیره (برای متن‌ها و هدر)
          caramel: "#A47148", // // کاراملی (برای دکمه‌های اصلی و آیکون‌ها)
          cream: "#F5EBDD", // کرم (برای بک‌گراند سایت)
          accent: "#FFB74D", // نارنجی روشن (برای هشدارها و برچسب‌های تخفیف)
        },
      },
      fontFamily: {
        vazirmatn: ["vazirmatn", "sans-serif"], // فونت اصلی سایت
      },
      // انیمیشن اختصاصی
      animation: {
        'fade-in' : 'fadeIn 0.5s ease-in-out',
        'slide-up' : 'slideUp 0.4s ease-out',
        'bounce-slow' : 'bounce 2s infinite',
        'load-product' : 'loadProduct 0.5s ease'
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
        loadProduct:{ 
          '0%' : {
           opacity: "0",
          },
          '100%' : {
          opacity: "1" ,
         },
        },
         
      },
    },
  },
  plugins: [],
};
