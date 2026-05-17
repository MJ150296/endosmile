// Fix for TS2882: Cannot find module or type declarations for side-effect import
declare module '*.css' {}
declare module '*.css?*' {}
declare module '*/css' {}
declare module '*/css/*' {}

// Explicit fixes for Swiper CSS imports
declare module 'swiper/css' {}
declare module 'swiper/css/pagination' {}
declare module 'swiper/css/navigation' {}
declare module 'swiper/css/effect-fade' {}
