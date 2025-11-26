gsap.registerPlugin(ScrollTrigger);
/* sec05 */
const sec05       = document.querySelector('.sec05_newarrivals');
const sec05Viewport = sec05?.querySelector('.new_product-viewport');
const sec05Track    = sec05Viewport?.querySelector('.new_product');
/* sec07 */
const sec07         = document.querySelector('.sec07_best');
const sec07Inner    = sec07?.querySelector('.best_inner');
const sec07Viewport = sec07Inner?.querySelector('.best_viewport');
const sec07List     = sec07Viewport?.querySelector('.best_list');

if (sec05 && sec05Viewport && sec05Track) {
    const getDistance05 = () =>
        sec05Track.scrollWidth - sec05Viewport.clientWidth;
    gsap.to(sec05Track, {
        x: () => -getDistance05(),
        ease: "none",
        scrollTrigger: {
            trigger: sec05,
            start: "top top",
            end: () => "+=" + getDistance05(),
            scrub: true,
            pin: true,
            anticipatePin: 1
        }
    });
}

if (sec07 && sec07Inner && sec07Viewport && sec07List) {
    const getDistance07 = () =>
    sec07List.scrollHeight - sec07Viewport.clientHeight;

    gsap.to(sec07List, {
    y: () => -getDistance07(),
    ease: "none",
    scrollTrigger: {
        trigger: sec07,
        start: "top top",
        end: () => "+=" + getDistance07(),
        scrub: true,
        pin: sec07Inner,
        anticipatePin: 1
    }
    });
}

/* 
const newProductsSwiper =new Swiper('.new_products-swiper', {
    slidesPerView: 4;
    spaceBetween: 40,
    loop: true,
}) */