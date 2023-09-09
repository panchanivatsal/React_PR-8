import React, { useEffect, useState, useRef } from 'react';
const Home = () => {
    const [search, setSearch] = useState('');
    const [recoed, setRecord] = useState(JSON.parse(localStorage.getItem('Data')) || []);
    const resultsRef = useRef();
    // moive and series data 
    let data = [
        {
            id: 1,
            name: "Ms Dhoni",
            image: "assets/image/movie/Ms dhoni.webp",
            link: "https://www.hotstar.com/in/movies/ms-dhoni-the-untold-story/1770003314",
            rank: "⭐⭐⭐⭐⭐"
        },
        {
            id: 2,
            name: "Luka chuppi",
            image: "assets/image/movie/luka chuppi.avif",
            link: "https://www.jiocinema.com/movies/luka-chuppi/3494266",
            rank: "⭐⭐⭐⭐"
        },
        {
            id: 3,
            name: "Chhichhore",
            image: "assets/image/movie/Chhichhore.jpg",
            link: "https://www.hotstar.com/in/movies/chhichhore/1260012713",
            rank: "⭐⭐⭐⭐⭐"

        },
        {
            id: 4,
            name: "Bala",
            image: "assets/image/movie/bala.jpg",
            link: "https://www.hotstar.com/in/movies/bala/1260016419",
            rank: "⭐⭐"
        }, {
            id: 5,
            name: "Bhediya",
            image: "assets/image/movie/bhediya.jpg",
            link: "https://www.jiocinema.com/movies/bhediya/3754021",
            rank: "⭐⭐⭐"
        }, {
            id: 6,
            name: "Bloody_daddy",
            image: "assets/image/movie/bloody_daddy.jpg",
            link: "https://www.jiocinema.com/movies/bloody-daddy/3760812",
            rank: "⭐⭐⭐⭐⭐"
        }, {
            id: 7,
            name: "Brahmastra",
            image: "assets/image/movie/brahmastra.jpg",
            link: "https://www.hotstar.com/in/movies/brahmastra-part-one-shiva/1260110227",
            rank: "⭐⭐⭐⭐ "
        },
        {
            id: 8,
            name: "Cars",
            image: "assets/image/movie/cars.jpg",
            link: "https://www.hotstar.com/in/movies/cars/1260017229",
            rank: "⭐⭐⭐⭐⭐"
        },
        {
            id: 9,
            name: "Cuttputlli",
            image: "assets/image/movie/Cuttputlli.jpg",
            link: "https://www.hotstar.com/in/movies/cuttputlli/1260110758",
            rank: "⭐⭐⭐"
        },
        {
            id: 10,
            name: "Desi boyz",
            image: "assets/image/movie/desi boyz.avif",
            link: "https://www.jiocinema.com/movies/desi-boyz/3489698",
            rank: "⭐"
        },
        {
            id: 11,
            name: "Gulaam-chor",
            image: "assets/image/movie/gulaam-chor.webp",
            link: "https://www.jiocinema.com/movies/gulaam-chor-gujarati/3761356",
            rank: "⭐⭐⭐⭐⭐"
        },
        {
            id: 12,
            name: "Housefull-4",
            image: "assets/image/movie/housefull.jpg",
            link: "https://www.hotstar.com/in/movies/housefull-4/1260014263",
            rank: "⭐⭐⭐⭐⭐"
        },
        {
            id: 13,
            name: "IB71",
            image: "assets/image/movie/IB71.jpg",
            link: "https://www.hotstar.com/in/movies/ib71/1260143875",
            rank: "⭐⭐⭐⭐⭐"
        },
        {
            id: 14,
            name: "Joker",
            image: "assets/image/movie/joker.jpg",
            link: "https://www.jiocinema.com/movies/joker/3744591",
            rank: "⭐⭐⭐⭐⭐"
        }, {
            id: 15,
            name: "Jolly L.L.B 2",
            image: "assets/image/movie/jollyllb2.webp",
            link: "https://www.hotstar.com/in/movies/jolly-llb-2/1770015403",
            rank: "⭐⭐⭐⭐"
        }, {
            id: 16,
            name: "Lion King",
            image: "assets/image/movie/lionking.jpg",
            link: "https://www.hotstar.com/in/movies/the-lion-king/1260014782",
            rank: "⭐⭐⭐⭐⭐"
        }, {
            id: 17,
            name: "Oblivion",
            image: "assets/image/movie/oblivion.webp",
            link: "https://www.jiocinema.com/movies/oblivion/3762665",
            rank: "⭐⭐⭐⭐⭐"
        }, {
            id: 18,
            name: "Past",
            image: "assets/image/movie/past.webp",
            link: "https://www.hotstar.com/in/movies/the-past/1260012989",
            rank: "⭐⭐⭐"
        }, {
            id: 19,
            name: "Ramprasad ki Tehrvi",
            image: "assets/image/movie/ramprasad ki tehrvi.avif",
            link: "https://www.jiocinema.com/movies/ramprasad-ki-tehrvi/3487309",
            rank: "⭐⭐⭐⭐⭐"
        }, {
            id: 20,
            name: "Rocketry",
            image: "assets/image/movie/rocketry.avif",
            link: "https://www.jiocinema.com/movies/rocketry-the-nambi-effect/3502258",
            rank: "⭐⭐⭐⭐⭐"
        }, {
            id: 21,
            name: "Sita Raman",
            image: "assets/image/movie/sita ramm.jpg",
            link: "https://www.hotstar.com/in/movies/sita-ramam/1260123526",
            rank: "⭐⭐⭐⭐⭐"
        }, {
            id: 22,
            name: "Mission Mangal",
            image: "assets/image/movie/mission Mangal.jpg",
            link: "https://www.hotstar.com/in/movies/mission-mangal/1260011536?filters=content_type%3Dmovie",
            rank: "⭐⭐⭐⭐⭐"
        }, {
            id: 24,
            name: "Stree",
            image: "assets/image/movie/stree.webp",
            link: "https://www.hotstar.com/in/movies/stree/1000223587",
            rank: "⭐⭐"
        }, {
            id: 25,
            name: "Super-30",
            image: "assets/image/movie/Super-30.jpg",
            link: "https://www.hotstar.com/in/movies/super-30/1260009172",
            rank: "⭐⭐⭐⭐⭐"
        }, {
            id: 26,
            name: "Titanic",
            image: "assets/image/movie/Titanic.webp",
            link: "https://www.hotstar.com/in/movies/titanic/1770001166",
            rank: "⭐⭐⭐⭐⭐"
        }, {
            id: 27,
            name: "Veerappan",
            image: "assets/image/movie/Veerappan.webp",
            link: "https://www.hotstar.com/in/movies/veerappan/1770015477",
            rank: "⭐⭐⭐⭐⭐"
        }, {
            id: 28,
            name: "Vikram-vedha",
            image: "assets/image/movie/vikram_vedha.jpg",
            link: "https://www.jiocinema.com/movies/vikram-vedha/3744709",
            rank: "⭐"
        },
        {
            id: 29,
            name: "Tubelight",
            image: "assets/image/movie/tubelight.webp",
            link: "https://www.hotstar.com/in/movies/tubelight/1000194295",
            rank: "⭐⭐⭐⭐⭐"
        }, {
            id: 30,
            name: "Judwaa-2",
            image: "assets/image/movie/judwaa2.jpg",
            link: "https://www.hotstar.com/in/movies/judwaa-2/1770016732",
            rank: "⭐⭐⭐⭐⭐"
        }, {
            id: 31,
            name: "Avatar",
            image: "assets/image/movie/Avatar.jpg",
            link: "https://www.hotstar.com/in/movies/avatar-the-way-of-water/1260142021",
            rank: "⭐⭐⭐⭐⭐"
        }
    ]
    let session = [
        {
            id: 101,
            name: "Apaharan-2",
            image: "assets/image/Session/apaharan-2.webp",
            link: "https://www.jiocinema.com/tv-shows/apharan/3498603",
            rank: "⭐⭐⭐⭐"
        }, {
            id: 102,
            name: "Asur-2",
            image: "assets/image/Session/asur2.webp",
            link: "https://www.jiocinema.com/tv-shows/asur/3500240",
            rank: "⭐⭐⭐⭐⭐"
        }, {
            id: 103,
            name: "Big Boss",
            image: "assets/image/Session/bbott-grand-finale.webp",
            link: "https://www.jiocinema.com/tv-shows/bigg-boss-ott/3499624",
            rank: "⭐⭐⭐⭐"
        }, {
            id: 104,
            name: "Crackdown",
            image: "assets/image/Session/crackdown.webp",
            link: "https://www.jiocinema.com/tv-shows/crackdown/3500235",
            rank: "⭐⭐⭐⭐⭐"
        }, {
            id: 105,
            name: "Taali",
            image: "assets/image/Session/taali-3x4-imdb-1693813361112.webp",
            link: "https://www.jiocinema.com/tv-shows/taali/3813489",
            rank: "⭐⭐⭐⭐"
        }, {
            id: 106,
            name: "Khatron ke khiladi",
            image: "assets/image/Session/rohit.webp",
            link: "https://www.jiocinema.com/tv-shows/khatron-ke-khiladi/3499776",
            rank: "⭐⭐⭐"
        }, {
            id: 107,
            name: "Humble politiciann nograj",
            image: "assets/image/Session/Humble politiciann nograj.jpg",
            link: "https://www.jiocinema.com/tv-shows/humble-politiciann-nograj/3500325",
            rank: "⭐⭐⭐"
        }, {
            id: 108,
            name: "Kaalkoot",
            image: "assets/image/Session/kaalkoot.webp",
            link: "https://www.jiocinema.com/tv-shows/kaalkoot/3780287",
            rank: "⭐⭐⭐⭐⭐"
        }, {
            id: 109,
            name: "Rafuchakkar",
            image: "assets/image/Session/rafuchakkar.webp",
            link: "https://www.jiocinema.com/tv-shows/rafuchakkar/3761992",
            rank: "⭐⭐⭐⭐⭐"
        },
    ]
    // combine data [ session and movie data mix ]
    const combinedData = [...data, ...session];
    // search method 
    useEffect(() => {
        localStorage.setItem('Data', JSON.stringify(combinedData));
        let nameserch = combinedData.filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase());
        });
        setRecord(nameserch);

        if (resultsRef.current) {
            resultsRef.current.scrollIntoView({ behavior: 'smooth' });
            document.documentElement.style.scrollPaddingTop = '150px';
        }
    }, [search]);
    const handleInputChange = (e) => {
        setSearch(e.target.value);
    }
    // search data close

    // Botton to top button start
    document.addEventListener('DOMContentLoaded', function () {
        const goTopButton = document.querySelector('.go-top');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                goTopButton.classList.add('active');
            } else {
                goTopButton.classList.remove('active');
            }
        });

        goTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
    // end
    return (
        <>
            <header className="header-top header-sticky">
                <div className="header-top-container">
                    <div className="container">
                        <div className="header-t-content">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="assets/image/logo.svg" alt="Disnap" />
                                </a>
                            </div>
                            <div className="header-ct">
                                <div className="header-search-link-ct">
                                    <div className="header-category-box">
                                        <div className="category-select">
                                            <select id="category" className="sm-f">
                                                <option value="" disabled selected>Select a category</option>
                                                <option value="1">Hollwood Hindi Movie</option>
                                                <option value="2">Bangoly Movie</option>
                                                <option value="3">Telegu Movie</option>
                                                <option value="4">Koriyan Drama Series</option>
                                            </select>
                                        </div>
                                        <div className="header-search-box">
                                            <input
                                                type="text"
                                                value={search}
                                                onChange={handleInputChange}
                                                placeholder="Search..."
                                            />
                                        </div>
                                    </div>
                                    <div className="header-social-icons">
                                        <ul>
                                            <li><a href="#search" className="icon-hover"><i className="bi bi-search"
                                            ></i></a></li>
                                            <li><a href="login.html" className="icon-hover"><i className="bi bi-person-fill"></i></a>
                                            </li>
                                            <li><a href="#" className="icon-hover" id="menu-btn"><i className="bi bi-list"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- mobile menu area start --> */}

            <div class="mobile-menu " id="side-bar">
                <nav class="nav-main mainmenu-nav mt-30">
                    <button class="close-icon-menu"><i class="bi bi-x-octagon"></i></button>
                    <div class="mobile-menu-logo mt-25 mb-25">
                        <a href="index.html"><img src="assets/image/logo.svg" alt="Disnap" /></a>
                    </div>
                    <ul class="mainmenu" id="mobile-menu-active">
                        <li class="has-droupdown">
                            <a href="#" class="main">Home </a>

                            <ul class="submenu">
                                <li><a class="mobile-menu-link" href="index.html">Home - 01</a></li>
                                <li><a class="mobile-menu-link" href="index-two.html">Home - 02</a></li>
                                <li><a class="mobile-menu-link" href="index-three.html">Home - 03</a></li>
                            </ul>
                        </li>
                        <li class="has-droupdown">
                            <a href="#" class="main">Pages</a>
                            <ul class="submenu">
                                <li><a class="mobile-menu-link" href="about.html">About Us</a></li>
                                <li><a class="mobile-menu-link" href="price-table.html">Price</a></li>
                                <li><a class="mobile-menu-link" href="testmonial.html">Testmonial</a></li>
                                <li><a class="mobile-menu-link" href="faq.html">faq</a></li>
                                <li><a class="mobile-menu-link" href="booking-ticket.html">Ticket Book</a></li>
                                <li><a class="mobile-menu-link" href="login.html">Log In</a></li>
                                <li><a class="mobile-menu-link" href="signup.html">Create an Account</a></li>
                            </ul>
                        </li>
                        <li class="single-menu">
                            <a href="team.html">Team</a>
                        </li>
                        <li class="has-droupdown">
                            <a href="#" class="main">Movies</a>
                            <ul class="submenu">
                                <li><a class="mobile-menu-link" href="movie-details.html">Movie Details</a></li>
                                <li><a class="mobile-menu-link" href="movie-grid.html">Movie Grid</a></li>
                                <li><a class="mobile-menu-link" href="mv-grid-left-sitebar.html">Movie Grid Sitebar</a></li>
                                <li><a class="mobile-menu-link" href="mv-list-left-sitebar.html">Movie List Sitebar</a></li>
                            </ul>
                        </li>
                        <li class="has-droupdown">
                            <a href="#" class="main">Blog</a>
                            <ul class="submenu">
                                <li><a class="mobile-menu-link" href="blog.html">Blog Details</a></li>
                                <li><a class="mobile-menu-link" href="blog-details.html">Blog Details</a></li>
                                <li><a class="mobile-menu-link" href="blog-right-sitebar.html">Blog Right Sitebar</a></li>
                            </ul>
                        </li>
                        <li class="single-menu">
                            <a href="contact.html">Contact Us</a>
                        </li>
                    </ul>
                </nav>

                <div class="footer-social-media mobile-menu-social-icons mt-40">
                    <ul>
                        <li><a href="#" class="icon-hover"><i class="bi bi-facebook"></i></a></li>
                        <li><a href="#" class="icon-hover"><i class="bi bi-twitter"></i></a></li>
                        <li><a href="#" class="icon-hover"><i class="bi bi-instagram"></i></a></li>
                        <li><a href="#" class="icon-hover"><i class="bi bi-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
            {/* <!-- mobile menu area end --> */}

            <section class="hero-area">
                <video src="">

                </video>
                <div class="swiper mySwiper2">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="hero-area-content">
                                <div class="container">
                                    <div class="hero-wrapper">
                                        <div class="row d-flex">
                                            <div class="col-lg-6 order-md-2 order-sm-2 order-xs-2 order-lg-0 order-xl-0">
                                                <div class="hero-text-content">
                                                    <div class="hero-area-shep1">
                                                        vi
                                                    </div>
                                                    <div class="hero-title">
                                                        <h1 class="f-62">new release action Movie This week.</h1>
                                                    </div>
                                                    <div class="hero-sub-title">
                                                        <p class="lg-f">Pellentesque a arcu tincidunt, sollicitudin eros sed,
                                                            venenatis justo. Proin sed tellus massa. Nullam sodales est in
                                                            faucibus.</p>
                                                    </div>
                                                    {/* <!-- Start Common Style Booking Ar/\ea --> */}
                                                    <div class="hero-area-button">
                                                        <a href="#" class="primary-button">Buy Now Ticket <i
                                                            class="bi bi-arrow-right-short"></i></a>
                                                        <a href="movie-details.html" class="video-play-iconss">
                                                            <i class="bi bi-play-fill"></i>
                                                        </a>
                                                    </div>
                                                    {/* <!-- End Common Style Booking Area --> */}
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="hero-slider-banner-content">
                                                    <div class="hero-slider-img">
                                                        <img src="assets/image/hm-1-actors/hero-slider-shep-2.png" alt="Disnap" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="hero-area-content">
                                <div class="container">
                                    <div class="hero-wrapper">
                                        <div class="row">
                                            <div class="col-lg-6 order-md-2 order-sm-2 order-xs-2 order-lg-0 order-xl-0">
                                                <div class="hero-text-content">
                                                    <div class="hero-area-shep1">
                                                        <img src="assets/image/hm-1-actors/slider-shep1.png" alt="Disnap" />
                                                    </div>
                                                    <div class="hero-title">
                                                        <h1 class="f-62">new release action Movie This week.</h1>
                                                    </div>
                                                    <div class="hero-sub-title">
                                                        <p class="lg-f">Pellentesque a arcu tincidunt, sollicitudin eros sed,
                                                            venenatis justo. Proin sed tellus massa. Nullam sodales est in
                                                            faucibus.</p>
                                                    </div>
                                                    {/* <!-- Start Common Style Booking Area --> */}
                                                    <div class="hero-area-button">
                                                        <a href="#" class="primary-button">Buy Now Ticket</a>
                                                        <a href="movie-details.html" class="video-play-iconss bk-btn">
                                                            <i class="bi bi-play-fill"></i>
                                                        </a>
                                                    </div>
                                                    {/* <!-- End Common Style Booking Area --> */}
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="hero-slider-banner-content">
                                                    <div class="hero-slider-img">
                                                        <img src="assets/image/hm-1-actors/hero-slider-shep-3.png" alt="Disnap" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="hero-area-content">
                                <div class="container">
                                    <div class="hero-wrapper">
                                        <div class="row">
                                            <div class="col-lg-6 order-md-2 order-sm-2 order-xs-2 order-lg-0 order-xl-0">
                                                <div class="hero-text-content">
                                                    <div class="hero-area-shep1">
                                                        <img src="assets/image/hm-1-actors/slider-shep1.png" alt="Disnap" />
                                                    </div>
                                                    <div class="hero-title">
                                                        <h1 class="f-62">new release action Movie This week.</h1>
                                                    </div>
                                                    <div class="hero-sub-title">
                                                        <p class="lg-f">Pellentesque a arcu tincidunt, sollicitudin eros sed,
                                                            venenatis justo. Proin sed tellus massa. Nullam sodales est in
                                                            faucibus.</p>
                                                    </div>
                                                    {/* <!-- Start Common Style Booking Area --> */}
                                                    <div class="hero-area-button">
                                                        <a href="#" class="primary-button">Buy Now Ticket</a>
                                                        <a href="movie-details.html" class="video-play-iconss bk-btn">
                                                            <i class="bi bi-play-fill"></i>
                                                        </a>
                                                    </div>
                                                    {/* <!-- End Common Style Booking Area --> */}
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="hero-slider-banner-content">
                                                    <div class="hero-slider-img">
                                                        <img src="assets/image/hm-1-actors/hero-slider-shep-4.png" alt="Disnap" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="hero-area-content">
                                <div class="container">
                                    <div class="hero-wrapper">
                                        <div class="row">
                                            <div class="col-lg-6 order-md-2 order-sm-2 order-xs-2 order-lg-0 order-xl-0">
                                                <div class="hero-text-content">
                                                    <div class="hero-area-shep1">
                                                        <img src="assets/image/hm-1-actors/slider-shep1.png" alt="Disnap" />
                                                    </div>
                                                    <div class="hero-title">
                                                        <h1 class="f-62">new release action Movie This week.</h1>
                                                    </div>
                                                    <div class="hero-sub-title">
                                                        <p class="lg-f">Pellentesque a arcu tincidunt, sollicitudin eros sed,
                                                            venenatis justo. Proin sed tellus massa. Nullam sodales est in
                                                            faucibus.</p>
                                                    </div>
                                                    {/* <!-- Start Common Style Booking Area --> */}
                                                    <div class="hero-area-button">
                                                        <a href="#" class="primary-button">Buy Now Ticket</a>
                                                        <a href="movie-details.html" class="video-play-iconss bk-btn">
                                                            <i class="bi bi-play-fill"></i>
                                                        </a>
                                                    </div>
                                                    {/* <!-- End Common Style Booking Area --> */}
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="hero-slider-banner-content">
                                                    <div class="hero-slider-img">
                                                        <img src="assets/image/hm-1-actors/hero-slider-shep-5.png" alt="Disnap" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="slider-vr-buttel-point">
                        <div class="swiper-paginations"></div>
                    </div>
                </div>
                <div class="hero-bottom-slide-thumb">
                    <div class="container">
                        <div class="swiper-tham">
                            <div class="swiper mySwiper">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="hero-slider-rn-img">
                                            <img src="assets/image/hm-1-actors/swiper-tham1.png" alt="Disnap" />
                                            <a href="javascript:void(0)" class="slider-dg-arrow">
                                                <span><img src="assets/image/slider-sp-icons.svg" alt="Disnap" /></span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="hero-slider-rn-img">
                                            <img src="assets/image/hm-1-actors/swiper-tham2.png" alt="Disnap" />
                                            <a href="javascript:void(0)" class="slider-dg-arrow">
                                                <span><img src="assets/image/slider-sp-icons.svg" alt="Disnap" /></span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="hero-slider-rn-img">
                                            <img src="assets/image/hm-1-actors/swiper-tham3.png" alt="Disnap" />
                                            <a href="javascript:void(0)" class="slider-dg-arrow">
                                                <span><img src="assets/image/slider-sp-icons.svg" alt="Disnap" /></span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="hero-slider-rn-img">
                                            <img src="assets/image/hm-1-actors/swiper-tham4.png" alt="Disnap" />
                                            <a href="javascript:void(0)" class="slider-dg-arrow">
                                                <span><img src="assets/image/slider-sp-icons.svg" alt="Disnap" /></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Start Bron Today Area --> fist movie setup */}

            <section class="br-td-area">
                <div class="br-td-container">
                    <div class="container">
                        <div class="main-title">
                            <div class="title">
                                <h3 class="site-title">Movie</h3>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="br-td-content content-row row  justify-content-center mx-auto align-items-center">
                                {data.map(({ id, link, image, name, rank }) => (
                                    <div className="br-td-content col-4 text-center  position-relative" key={id}>
                                        <div className='my-3'>
                                            <div className="br-td-img">
                                                <a href={link} target="_blank" rel="noopener noreferrer">
                                                    <img src={image} className='' alt={name} />
                                                </a>
                                                <div className="overlay">
                                                    <div className="text">{name}</div>
                                                </div>
                                            </div>
                                            <div className="actors-name-date">
                                                <h5 className="lg-f">{name}</h5>
                                                <span className="total-movie md-f ">{rank}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="overlay">
                <div class="text">Hello World</div>
            </div>
            {/* <!-- Start New Movie Area --> */}
            <section class="new-mv-area">
                <div class="new-mv-container">
                    <div class="container">
                        <div class="main-title">
                            <div class="title">
                                <h3 class="site-title">new movies</h3>
                            </div>
                            <div class="cm-slider-btn slider-btn2">
                                <div class="swiper-button-prev2"><span><i class="fa-regular fa-chevron-left"></i></span></div>
                                <div class="swiper-button-next2"><span><i class="fa-regular fa-chevron-right"></i></span></div>
                            </div>
                        </div>
                        <div class="new-mv-content content-row">
                            <div class="swiper new-movie-slider">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="new-mv-items">
                                            <div class="new-mv-thamb">
                                                <img src="assets/image/hm-1-actors/item-11.jpg" alt="Disnap" />
                                                <a href="movie-details.html" class="video-play-icons">
                                                    <i class="bi bi-play-fill"></i>
                                                </a>
                                            </div>
                                            <div class="vr-content-meta-lab">
                                                <div class="vr-content-meta-box">
                                                    <span class="mv-year md-f">Action, animation, 2017</span>
                                                    <a href="movie-details.html">
                                                        <h3 class="mv-name">Nocturnal Animals Movie</h3>
                                                    </a>
                                                    <span class="meta-lgb-border"></span>
                                                    <div class="up-time-content">
                                                        <div class="new-mv-time-box">
                                                            <span class="sm-f">Time: 1 hr 40 min</span>
                                                        </div>
                                                        <div class="meta-box">
                                                            <span class="mp-meta">MP4</span>
                                                            <span class="hd-meta">HD</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="new-mv-items">
                                            <div class="new-mv-thamb">
                                                <img src="assets/image/hm-1-actors/item-22.jpg" alt="Disnap" />
                                                <a href="movie-details.html" class="video-play-icons">
                                                    <i class="bi bi-play-fill"></i>
                                                </a>
                                            </div>
                                            <div class="vr-content-meta-lab">
                                                <div class="vr-content-meta-box">
                                                    <span class="mv-year md-f">Drama, 2013</span>
                                                    <a href="movie-details.html">
                                                        <h3 class="mv-name">Phata bahar Movie</h3>
                                                    </a>
                                                    <span class="meta-lgb-border"></span>
                                                    <div class="up-time-content">
                                                        <div class="new-mv-time-box">
                                                            <span class="sm-f">Time: 2 hr 40 min</span>
                                                        </div>
                                                        <div class="meta-box">
                                                            <span class="mp-meta">MP4</span>
                                                            <span class="hd-meta">HD</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="new-mv-items">
                                            <div class="new-mv-thamb">
                                                <img src="assets/image/hm-1-actors/item-33.jpg" alt="Disnap" />
                                                <a href="movie-details.html" class="video-play-icons">
                                                    <i class="bi bi-play-fill"></i>
                                                </a>
                                            </div>
                                            <div class="vr-content-meta-lab">
                                                <div class="vr-content-meta-box">
                                                    <span class="mv-year md-f">Romantic, 2022</span>
                                                    <a href="movie-details.html">
                                                        <h3 class="mv-name">Never Let Me Go</h3>
                                                    </a>
                                                    <span class="meta-lgb-border"></span>
                                                    <div class="up-time-content">
                                                        <div class="new-mv-time-box">
                                                            <span class="sm-f">Time: 1 hr 40 min</span>
                                                        </div>
                                                        <div class="meta-box">
                                                            <span class="mp-meta">MP4</span>
                                                            <span class="hd-meta">HD</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="new-mv-items">
                                            <div class="new-mv-thamb">
                                                <img src="assets/image/hm-1-actors/item-44.jpg" alt="Disnap" />
                                                <a href="movie-details.html" class="video-play-icons">
                                                    <i class="bi bi-play-fill"></i>
                                                </a>
                                            </div>
                                            <div class="vr-content-meta-lab">
                                                <div class="vr-content-meta-box">
                                                    <span class="mv-year md-f">Action, animation, 2017</span>
                                                    <a href="movie-details.html">
                                                        <h3 class="mv-name">Coralcin -DX Animation</h3>
                                                    </a>
                                                    <span class="meta-lgb-border"></span>
                                                    <div class="up-time-content">
                                                        <div class="new-mv-time-box">
                                                            <span class="sm-f">Time: 1 hr 40 min</span>
                                                        </div>
                                                        <div class="meta-box">
                                                            <span class="mp-meta">MP4</span>
                                                            <span class="hd-meta">HD</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="new-mv-items">
                                            <div class="new-mv-thamb">
                                                <img src="assets/image/hm-1-actors/item-11.jpg" alt="Disnap" />
                                                <a href="movie-details.html" class="video-play-icons">
                                                    <i class="bi bi-play-fill"></i>
                                                </a>
                                            </div>
                                            <div class="vr-content-meta-lab">
                                                <div class="vr-content-meta-box">
                                                    <span class="mv-year md-f">Action, animation, 2017</span>
                                                    <a href="movie-details.html">
                                                        <h3 class="mv-name">Nocturnal Animals Movie</h3>
                                                    </a>
                                                    <span class="meta-lgb-border"></span>
                                                    <div class="up-time-content">
                                                        <div class="new-mv-time-box">
                                                            <span class="sm-f">Time: 1 hr 40 min</span>
                                                        </div>
                                                        <div class="meta-box">
                                                            <span class="mp-meta">MP4</span>
                                                            <span class="hd-meta">HD</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="new-mv-items">
                                            <div class="new-mv-thamb">
                                                <img src="assets/image/hm-1-actors/item-22.jpg" alt="Disnap" />
                                                <a href="movie-details.html" class="video-play-icons">
                                                    <i class="bi bi-play-fill"></i>
                                                </a>
                                            </div>
                                            <div class="vr-content-meta-lab">
                                                <div class="vr-content-meta-box">
                                                    <span class="mv-year md-f">Drama, 2013</span>
                                                    <a href="movie-details.html">
                                                        <h3 class="mv-name">Phata bahar Movie</h3>
                                                    </a>
                                                    <span class="meta-lgb-border"></span>
                                                    <div class="up-time-content">
                                                        <div class="new-mv-time-box">
                                                            <span class="sm-f">Time: 2 hr 40 min</span>
                                                        </div>
                                                        <div class="meta-box">
                                                            <span class="mp-meta">MP4</span>
                                                            <span class="hd-meta">HD</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="new-mv-items">
                                            <div class="new-mv-thamb">
                                                <img src="assets/image/hm-1-actors/item-33.jpg" alt="Disnap" />
                                                <a href="movie-details.html" class="video-play-icons">
                                                    <i class="bi bi-play-fill"></i>
                                                </a>
                                            </div>
                                            <div class="vr-content-meta-lab">
                                                <div class="vr-content-meta-box">
                                                    <span class="mv-year md-f">Romantic, 2022</span>
                                                    <a href="movie-details.html">
                                                        <h3 class="mv-name">Never Let Me Go</h3>
                                                    </a>
                                                    <span class="meta-lgb-border"></span>
                                                    <div class="up-time-content">
                                                        <div class="new-mv-time-box">
                                                            <span class="sm-f">Time: 1 hr 40 min</span>
                                                        </div>
                                                        <div class="meta-box">
                                                            <span class="mp-meta">MP4</span>
                                                            <span class="hd-meta">HD</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="new-mv-items">
                                        <div class="new-mv-thamb">
                                            <img src="assets/image/hm-1-actors/item-44.jpg" alt="Disnap" />
                                            <a href="movie-details.html" class="video-play-icons">
                                                <i class="bi bi-play-fill"></i>
                                            </a>
                                        </div>
                                        <div class="vr-content-meta-lab">
                                            <div class="vr-content-meta-box">
                                                <span class="mv-year md-f">Action, animation, 2017</span>
                                                <a href="movie-details.html">
                                                    <h3 class="mv-name">Coralcin -DX Animation</h3>
                                                </a>
                                                <span class="meta-lgb-border"></span>
                                                <div class="up-time-content">
                                                    <div class="new-mv-time-box">
                                                        <span class="sm-f">Time: 1 hr 40 min</span>
                                                    </div>
                                                    <div class="meta-box">
                                                        <span class="mp-meta">MP4</span>
                                                        <span class="hd-meta">HD</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End New Movie Area --> second Series setup  done*/}
            <section class="br-td-area">
                <div class="br-td-container">
                    <div class="container">
                        <div class="main-title">
                            <div class="title">
                                <h3 class="site-title"> Premium Series</h3>
                            </div>
                        </div>
                        <div ref={resultsRef}></div>
                        <div className="col-12">
                            <div className="br-td-content content-row mx-aut row justify-content-between">
                                {recoed.map(val => {
                                    const { link, image, name, rank } = val;
                                    return (
                                        <div className="br-td-content col-4 align-items-center justify-content-between position-relative" key={val.id}>
                                            <div className='my-3'>
                                                <div className="br-td-img">
                                                    <a href={link} target="_blank">
                                                        <img src={image} className='' alt={name} />
                                                    </a>
                                                    <div className="overlay">
                                                        <div className="text">{name}</div>
                                                    </div>
                                                </div>
                                                <div className="actors-name-date text-center">
                                                    <h5 className="lg-f">{name}</h5>
                                                    <span className="total-movie md-f ">{rank}</span>

                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Start Booking Area --> */}
            <section class="booking-area">
                <div class="bk-area-container area-bg">
                    <div class="container">
                        <div class="bk-full-content">
                            <div class="row align-items-center gx-5">
                                <div class="col-lg-6">
                                    <div class="bk-banner">
                                        <img src="assets/image/hm-1-actors/booking-hm-1.png" alt="Disnap" />
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="booking-from-title">
                                        <div class="bk-title">
                                            <h2 class="f-42">Book Now Ticket Our Box-office.</h2>
                                            <p class="lg-f">Pellentesque a arcu tincidunt, sollicitudin eros sed, venenatis
                                                justo. Proin sed tellus massa. Nullam sodales est in faucibus.</p>
                                        </div>
                                        <div class="bk-from-box">
                                            <form action="POST">
                                                <div class="col-2-bk-box">
                                                    <div class="frist-bk-box">
                                                        <span class="md-f">Select Movie Name</span>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Action Movie</option>
                                                            <option value="1">Romantic Movie</option>
                                                            <option value="2">Horro Misteriyas Movie</option>
                                                            <option value="3">Soljers War Movie</option>
                                                        </select>
                                                    </div>
                                                    <div class="second-bk-box">
                                                        <span class="md-f">Select Date</span>
                                                        <input placeholder="Date" type="text" name="checkIn" id="datepicker"
                                                            value="" class="calendar" required />
                                                    </div>
                                                </div>
                                                <div class="col-12-full-w-box">
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected>Select Hall Name</option>
                                                        <option value="1">Sinaplex</option>
                                                        <option value="2">Block Buster</option>
                                                        <option value="3">Modhumita</option>
                                                    </select>
                                                </div>
                                                <div class="bk-btn-video">
                                                    <a href="https://in.bookmyshow.com/explore/movies-ahmedabad?languages=hindi" target="_blank" class="primary-button">Buy Now Ticket</a>
                                                    <a href="movie-details.html" class="video-play-iconss bk-btn">
                                                        <i class="bi bi-play-fill"></i>
                                                    </a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Booking Area --> */}

            {/* <!-- Start All Movie Area --> */}
            <section class="new-mv-area cp-2-hm-1">
                <div class="new-mv-container">
                    <div class="container">
                        <div class="main-title">
                            <div class="title">
                                <h3 class="site-title">All Movies</h3>
                            </div>
                            <div class="tabing-system">
                                <ul class="tabing-button list-unstyled nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item sm-f"><button class="text-capitalize sm-f active" data-bs-target="#one"
                                        data-bs-toggle="tab" type="button" role="tab" aria-controls="one"
                                        aria-selected="true">Latest Movies </button></li>
                                    <li class="nav-item sm-f"><button class="text-capitalize sm-f" data-bs-target="#two"
                                        data-bs-toggle="tab" type="button" role="tab" aria-controls="one"
                                        aria-selected="true">Top Ratting</button></li>
                                    <li class="nav-item sm-f"><button class="text-capitalize sm-f" data-bs-target="#three"
                                        data-bs-toggle="tab" type="button" role="tab" aria-controls="one"
                                        aria-selected="true">Coming Soon</button></li>
                                </ul>
                            </div>
                        </div>
                        <div class="new-mv-content content-row">
                            <div class="tab-content">
                                <div class="tab-pane fade show active tabing-animation" id="one" role="tabpanel"
                                    aria-labelledby="one" tabindex="0">
                                    <div class="row">
                                        <div class="col-lg-3 col-md-6">
                                            <div class="new-mv-items">
                                                <div class="new-mv-thamb">
                                                    <img src="assets/image/hm-1-actors/bajarangi.webp" alt="Disnap" />
                                                    <a href="https://www.hotstar.com/in/movies/bajrangi-bhaijaan/1000071777?filters=content_type%3Dmovie" target="_blank" class="video-play-icons">
                                                        <i class="bi bi-play-fill"></i>
                                                    </a>
                                                </div>
                                                <div class="vr-content-meta-lab">
                                                    <div class="vr-content-meta-box">
                                                        <span class="mv-year md-f">Action 2015</span>
                                                        <a href="movie-details.html">
                                                            <h3 class="mv-name">Bajarangi Bhaijaan Movie</h3>
                                                        </a>
                                                        <span class="meta-lgb-border"></span>
                                                        <div class="up-time-content">
                                                            <div class="new-mv-time-box">
                                                                <span class="sm-f">Time: 1 hr 40 min</span>
                                                            </div>
                                                            <div class="meta-box">
                                                                <span class="mp-meta">MP4</span>
                                                                <span class="hd-meta">HD</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6">
                                            <div class="new-mv-items">
                                                <div class="new-mv-thamb">
                                                    <img src="assets/image/hm-1-actors/babli.jpg" alt="Disnap" />
                                                    <a href="https://www.hotstar.com/in/movies/babli-bouncer/1260115905" class="video-play-icons" target="_blank">
                                                        <i class="bi bi-play-fill"></i>
                                                    </a>
                                                </div>
                                                <div class="vr-content-meta-lab">
                                                    <div class="vr-content-meta-box">
                                                        <span class="mv-year md-f">Drama, 2013</span>
                                                        <a href="movie-details.html">
                                                            <h3 class="mv-name">Babli-Bouncer Movie</h3>
                                                        </a>
                                                        <span class="meta-lgb-border"></span>
                                                        <div class="up-time-content">
                                                            <div class="new-mv-time-box">
                                                                <span class="sm-f">Time: 2 hr 40 min</span>
                                                            </div>
                                                            <div class="meta-box">
                                                                <span class="mp-meta">MP4</span>
                                                                <span class="hd-meta">HD</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6">
                                            <div class="new-mv-items">
                                                <div class="new-mv-thamb">
                                                    <img src="assets/image/hm-1-actors/ha.jpg" alt="Disnap" />
                                                    <a href="https://www.hotstar.com/in/movies/badhaai-ho/1000120365" class="video-play-icons" target="_blank">
                                                        <i class="bi bi-play-fill"></i>
                                                    </a>
                                                </div>
                                                <div class="vr-content-meta-lab">
                                                    <div class="vr-content-meta-box">
                                                        <span class="mv-year md-f">Romantic, 2018</span>
                                                        <a href="movie-details.html">
                                                            <h3 class="mv-name">badhaai ho Movie</h3>
                                                        </a>
                                                        <span class="meta-lgb-border"></span>
                                                        <div class="up-time-content">
                                                            <div class="new-mv-time-box">
                                                                <span class="sm-f">Time: 1 hr 40 min</span>
                                                            </div>
                                                            <div class="meta-box">
                                                                <span class="mp-meta">MP4</span>
                                                                <span class="hd-meta">HD</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6">
                                            <div class="new-mv-items">
                                                <div class="new-mv-thamb">
                                                    <img src="assets/image/hm-1-actors/Bhoot police.jpg" alt="Disnap" />
                                                    <a href="https://www.hotstar.com/in/movies/bhoot-police/1260067821" class="video-play-icons" target="_blank">
                                                        <i class="bi bi-play-fill"></i>
                                                    </a>
                                                </div>
                                                <div class="vr-content-meta-lab">
                                                    <div class="vr-content-meta-box">
                                                        <span class="mv-year md-f">Action, 2021</span>
                                                        <a href="movie-details.html">
                                                            <h3 class="mv-name">Bhoot Police Movie</h3>
                                                        </a>
                                                        <span class="meta-lgb-border"></span>
                                                        <div class="up-time-content">
                                                            <div class="new-mv-time-box">
                                                                <span class="sm-f">Time: 1 hr 40 min</span>
                                                            </div>
                                                            <div class="meta-box">
                                                                <span class="mp-meta">MP4</span>
                                                                <span class="hd-meta">HD</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 mt-30">
                                            <div class="new-mv-items">
                                                <div class="new-mv-thamb">
                                                    <img src="assets/image/hm-1-actors/Free Lancer.jpg" alt="Disnap" />
                                                    <a href="https://www.hotstar.com/in/shows/the-freelancer/1260147428" class="video-play-icons" target="_blank">
                                                        <i class="bi bi-play-fill"></i>
                                                    </a>
                                                </div>
                                                <div class="vr-content-meta-lab">
                                                    <div class="vr-content-meta-box">
                                                        <span class="mv-year md-f">Action, 2023</span>
                                                        <a href="movie-details.html">
                                                            <h3 class="mv-name">Free Lancer series</h3>
                                                        </a>
                                                        <span class="meta-lgb-border"></span>
                                                        <div class="up-time-content">
                                                            <div class="new-mv-time-box">
                                                                <span class="sm-f">Time: 1 hr 40 min</span>
                                                            </div>
                                                            <div class="meta-box">
                                                                <span class="mp-meta">MP4</span>
                                                                <span class="hd-meta">HD</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 mt-30">
                                            <div class="new-mv-items">
                                                <div class="new-mv-thamb">
                                                    <img src="assets/image/hm-1-actors/vr.jpg" alt="Disnap" />
                                                    <a href="https://www.hotstar.com/in/movies/vikrant-rona/1260113148?filters=content_type%3Dmovie" class="video-play-icons" target="_blank">
                                                        <i class="bi bi-play-fill"></i>
                                                    </a>
                                                </div>
                                                <div class="vr-content-meta-lab">
                                                    <div class="vr-content-meta-box">
                                                        <span class="mv-year md-f">Drama, Action, 2022</span>
                                                        <a href="movie-details.html">
                                                            <h3 class="mv-name">vikrant-rona Movie</h3>
                                                        </a>
                                                        <span class="meta-lgb-border"></span>
                                                        <div class="up-time-content">
                                                            <div class="new-mv-time-box">
                                                                <span class="sm-f">Time: 2 hr 40 min</span>
                                                            </div>
                                                            <div class="meta-box">
                                                                <span class="mp-meta">MP4</span>
                                                                <span class="hd-meta">HD</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 mt-30">
                                            <div class="new-mv-items">
                                                <div class="new-mv-thamb">
                                                    <img src="assets/image/hm-1-actors/VIP-2.webp" alt="Disnap" />
                                                    <a href="https://www.hotstar.com/in/movies/vip-2-lalkar/1000213911l" class="video-play-icons" target="_blank">
                                                        <i class="bi bi-play-fill"></i>
                                                    </a>
                                                </div>
                                                <div class="vr-content-meta-lab">
                                                    <div class="vr-content-meta-box">
                                                        <span class="mv-year md-f">Romantic, 2017</span>
                                                        <a href="movie-details.html">
                                                            <h3 class="mv-name">vip-2-lalkar</h3>
                                                        </a>
                                                        <span class="meta-lgb-border"></span>
                                                        <div class="up-time-content">
                                                            <div class="new-mv-time-box">
                                                                <span class="sm-f">Time: 1 hr 40 min</span>
                                                            </div>
                                                            <div class="meta-box">
                                                                <span class="mp-meta">MP4</span>
                                                                <span class="hd-meta">HD</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 mt-30">
                                            <div class="new-mv-items">
                                                <div class="new-mv-thamb">
                                                    <img src="assets/image/hm-1-actors/Tanahaji.jpg" alt="Disnap" />
                                                    <a href="https://www.hotstar.com/in/movies/tanhaji/1260022117" class="video-play-icons" target="_blank">
                                                        <i class="bi bi-play-fill"></i>
                                                    </a>
                                                </div>
                                                <div class="vr-content-meta-lab">
                                                    <div class="vr-content-meta-box">
                                                        <span class="mv-year md-f">Action, 2017</span>
                                                        <a href="movie-details.html">
                                                            <h3 class="mv-name">Tanhaji</h3>
                                                        </a>
                                                        <span class="meta-lgb-border"></span>
                                                        <div class="up-time-content">
                                                            <div class="new-mv-time-box">
                                                                <span class="sm-f">Time: 1 hr 40 min</span>
                                                            </div>
                                                            <div class="meta-box">
                                                                <span class="mp-meta">MP4</span>
                                                                <span class="hd-meta">HD</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade show tabing-animation" id="two" role="tabpanel" aria-labelledby="one"
                                    tabindex="0">
                                    <div class="row">
                                        <div class="col-lg-3 col-md-6 mt-30">
                                            <div class="new-mv-items">
                                                <div class="new-mv-thamb">
                                                    <img src="assets/image/hm-1-actors/avengers-endgame.jpg" alt="Disnap" />
                                                    <a href="https://www.hotstar.com/in/movies/avengers-endgame/1260013556" class="video-play-icons" target="_blank">
                                                        <i class="bi bi-play-fill"></i>
                                                    </a>
                                                </div>
                                                <div class="vr-content-meta-lab">
                                                    <div class="vr-content-meta-box">
                                                        <span class="mv-year md-f">Drama, 2019</span>
                                                        <a href="movie-details.html">
                                                            <h3 class="mv-name">avengers-endgame</h3>
                                                        </a>
                                                        <span class="meta-lgb-border"></span>
                                                        <div class="up-time-content">
                                                            <div class="new-mv-time-box">
                                                                <span class="sm-f">Time: 2 hr 40 min</span>
                                                            </div>
                                                            <div class="meta-box">
                                                                <span class="mp-meta">MP4</span>
                                                                <span class="hd-meta">HD</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 mt-30">
                                            <div class="new-mv-items">
                                                <div class="new-mv-thamb">
                                                    <img src="assets/image/hm-1-actors/spider-man-homecoming.jpg" alt="Disnap" />
                                                    <a href="https://www.hotstar.com/in/movies/spider-man-homecoming/1260104626" class="video-play-icons" target="_blank">
                                                        <i class="bi bi-play-fill"></i>
                                                    </a>
                                                </div>
                                                <div class="vr-content-meta-lab">
                                                    <div class="vr-content-meta-box">
                                                        <span class="mv-year md-f">Super Hero, 2017</span>
                                                        <a href="movie-details.html">
                                                            <h3 class="mv-name">spider-man-homecoming</h3>
                                                        </a>
                                                        <span class="meta-lgb-border"></span>
                                                        <div class="up-time-content">
                                                            <div class="new-mv-time-box">
                                                                <span class="sm-f">Time: 1 hr 40 min</span>
                                                            </div>
                                                            <div class="meta-box">
                                                                <span class="mp-meta">MP4</span>
                                                                <span class="hd-meta">HD</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 mt-30">
                                            <div class="new-mv-items">
                                                <div class="new-mv-thamb">
                                                    <img src="assets/image/hm-1-actors/the-little-mermaid.jpg" alt="Disnap" />
                                                    <a href="https://www.hotstar.com/in/movies/the-little-mermaid/1260142766" class="video-play-icons" target="_blank">
                                                        <i class="bi bi-play-fill"></i>
                                                    </a>
                                                </div>
                                                <div class="vr-content-meta-lab">
                                                    <div class="vr-content-meta-box">
                                                        <span class="mv-year md-f">Action, animation, 2023</span>
                                                        <a href="movie-details.html">
                                                            <h3 class="mv-name">the-little-mermaid</h3>
                                                        </a>
                                                        <span class="meta-lgb-border"></span>
                                                        <div class="up-time-content">
                                                            <div class="new-mv-time-box">
                                                                <span class="sm-f">Time: 1 hr 40 min</span>
                                                            </div>
                                                            <div class="meta-box">
                                                                <span class="mp-meta">MP4</span>
                                                                <span class="hd-meta">HD</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade show tabing-animation" id="three" role="tabpanel"
                                    aria-labelledby="one" tabindex="0">
                                    <div class="row">
                                        <div class="col-lg-3 col-md-6">
                                            <div class="new-mv-items">
                                                <div class="new-mv-thamb">
                                                    <img src="assets/image/hm2/ahsoka.jpg" alt="Disnap" />
                                                    <a href="https://www.hotstar.com/in/shows/ahsoka/1260145567" class="video-play-icons" target="_blank">
                                                        <i class="bi bi-play-fill"></i>
                                                    </a>
                                                </div>
                                                <div class="vr-content-meta-lab">
                                                    <div class="vr-content-meta-box">
                                                        <span class="mv-year md-f">Action, animation, 2017</span>
                                                        <a href="movie-details.html">
                                                            <h3 class="mv-name">Ashoka</h3>
                                                        </a>
                                                        <span class="meta-lgb-border"></span>
                                                        <div class="up-time-content">
                                                            <div class="new-mv-time-box">
                                                                <span class="sm-f">Time: 1 hr 40 min</span>
                                                            </div>
                                                            <div class="meta-box">
                                                                <span class="mp-meta">MP4</span>
                                                                <span class="hd-meta">HD</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="lts-nw">
                <div class="lts-nw-container">
                    <div class="container">
                        <div class="lts-f-nw">
                            <div class="main-title">
                                <div class="title">
                                    <h3 class="site-title">latest news</h3>
                                </div>
                                <div class="cm-slider-btn slider-btn3">
                                    <div class="swiper-button-prev3"><span><i class="fa-regular fa-chevron-left"></i></span>
                                    </div>
                                    <div class="swiper-button-next3"><span><i class="fa-regular fa-chevron-right"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div class="lts-row content-row">
                                <div class="swiper latest-news">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="lts-nw-content trns-content">
                                                <div class="lts-nw-img ig-sg-hr">
                                                    <a href="https://www.jiocinema.com/sports/the-grind-finals-day-1-highlights/3819156" target="_blank"><img src="assets/image/hm-1-actors/lk-6.webp"
                                                        alt="Disnap" /></a>
                                                </div>
                                                <div class="lts-meta-content mt-20">
                                                    <div class="cm-sh-us mb-10">
                                                        <ul>
                                                            <li><a href="#" class="sm-f pe-none"><i
                                                                class="fa-regular fa-user"></i><span>By</span> Sazol
                                                                Aliur</a></li>
                                                            <li><a href="#" class="sm-f pe-none"><i
                                                                class="fa-regular fa-message-dots"></i> 23</a></li>
                                                            <li><a href="#" class="sm-f pe-none"><i
                                                                class="fa-regular fa-eye"></i> 503</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="lts-nw-heading mt-15">
                                                        <a href="https://www.jiocinema.com/sports/the-grind-finals-day-1-highlights/38191565">
                                                            <h3 class="f-24 .lts-nw-title">The Grind - Finals, Day 1 - Highlights</h3>
                                                        </a>
                                                    </div>
                                                    <div class="lts-nw-dis mt-20">
                                                        <p class="md-f">Watch the highlights of Day 2 from Round 2 of Battlegrounds Mobile India Series.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="lts-nw-content trns-content">
                                                <div class="lts-nw-img ig-sg-hr">
                                                    <a href="https://www.jiocinema.com/sports/bgis-round-1-day-2/3821205" target="_blank"><img src="assets/image/hm-1-actors/R1-3.webp"
                                                        alt="Disnap" /></a>
                                                </div>
                                                <div class="lts-meta-content mt-20">
                                                    <div class="cm-sh-us mb-10">
                                                        <ul>
                                                            <li><a href="#" class="sm-f pe-none"><i
                                                                class="fa-regular fa-user"></i><span>By</span> Sazol
                                                                Aliur</a></li>
                                                            <li><a href="#" class="sm-f pe-none"><i
                                                                class="fa-regular fa-message-dots"></i> 23</a></li>
                                                            <li><a href="#" class="sm-f pe-none"><i
                                                                class="fa-regular fa-eye"></i> 503</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="lts-nw-heading mt-15">
                                                        <a href="https://www.jiocinema.com/sports/bgis-round-1-day-2/3821205">
                                                            <h3 class="f-24 .lts-nw-title">bgis-round-1-day-2.</h3>
                                                        </a>
                                                    </div>
                                                    <div class="lts-nw-dis mt-20">
                                                        <p class="md-f">Watch the highlights of Day 2 from Round 2 of Battlegrounds Mobile India Series.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="lts-nw-content trns-content">
                                                <div class="lts-nw-img ig-sg-hr">
                                                    <a href="https://www.jiocinema.com/sports/the-grind-finals-day-3-highlights/3819158" target="_blank"><img src="assets/image/hm-1-actors/fl-3.webp"
                                                        alt="Disnap" /></a>
                                                </div>
                                                <div class="lts-meta-content mt-20">
                                                    <div class="cm-sh-us mb-10">
                                                        <ul>
                                                            <li><a href="#" class="sm-f pe-none"><i
                                                                class="fa-regular fa-user"></i><span>By</span> Sazol
                                                                Aliur</a></li>
                                                            <li><a href="#" class="sm-f pe-none"><i
                                                                class="fa-regular fa-message-dots"></i> 23</a></li>
                                                            <li><a href="#" class="sm-f pe-none"><i
                                                                class="fa-regular fa-eye"></i> 503</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="lts-nw-heading mt-15">
                                                        <a href="https://www.jiocinema.com/sports/the-grind-finals-day-3-highlights/3819158">
                                                            <h3 class="f-24 .lts-nw-title">the-grind-finals-day-3-highlights .</h3>
                                                        </a>
                                                    </div>
                                                    <div class="lts-nw-dis mt-20">
                                                        <p class="md-f">Watch the highlights of Day 2 from Round 2 of Battlegrounds Mobile India Series.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="lts-nw-content trns-content">
                                                <div class="lts-nw-img ig-sg-hr">
                                                    <a href="https://www.jiocinema.com/sports/bgis-round-2-day-2/3823375" target="_blank"><img src="assets/image/hm-1-actors/as.webp"
                                                        alt="Disnap" /></a>
                                                </div>
                                                <div class="lts-meta-content mt-20">
                                                    <div class="cm-sh-us mb-10">
                                                        <ul>
                                                            <li><a href="#" class="sm-f pe-none"><i
                                                                class="fa-regular fa-user"></i><span>By</span> Sazol
                                                                Aliur</a></li>
                                                            <li><a href="#" class="sm-f pe-none"><i
                                                                class="fa-regular fa-message-dots"></i> 23</a></li>
                                                            <li><a href="#" class="sm-f pe-none"><i
                                                                class="fa-regular fa-eye"></i> 503</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="lts-nw-heading mt-15">
                                                        <a href="https://www.jiocinema.com/sports/bgis-round-2-day-2/3823375" target="_blank">
                                                            <h3 class="f-24 .lts-nw-title">ebgis-round-2-day-1.</h3>
                                                        </a>
                                                    </div>
                                                    <div class="lts-nw-dis mt-20">
                                                        <p class="md-f">Watch the highlights of Day 2 from Round 2 of Battlegrounds Mobile India Series.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="lts-nw-content trns-content">
                                                <div class="lts-nw-img ig-sg-hr">
                                                    <a href="https://www.jiocinema.com/sports/bgis-round-1-day-4/3821803" target="_blank"><img src="assets/image/hm-1-actors/jk.webp"
                                                        alt="Disnap" /></a>
                                                </div>
                                                <div class="lts-meta-content mt-20">
                                                    <div class="cm-sh-us mb-10">
                                                        <ul>
                                                            <li><a href="#" class="sm-f pe-none"><i
                                                                class="fa-regular fa-user"></i><span>By</span> Sazol
                                                                Aliur</a></li>
                                                            <li><a href="#" class="sm-f pe-none"><i
                                                                class="fa-regular fa-message-dots"></i> 23</a></li>
                                                            <li><a href="#" class="sm-f pe-none"><i
                                                                class="fa-regular fa-eye"></i> 503</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="lts-nw-heading mt-15">
                                                        <a href="https://www.jiocinema.com/sports/bgis-round-1-day-4/3821803" target="_blank">
                                                            <h3 class="f-24 .lts-nw-title">bgis-round-1-day-4 .</h3>
                                                        </a>
                                                    </div>
                                                    <div class="lts-nw-dis mt-20">
                                                        <p class="md-f">Watch the highlights of Day 2 from Round 2 of Battlegrounds Mobile India Series.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="lts-nw-content trns-content">
                                                <div class="lts-nw-img ig-sg-hr">
                                                    <a href="https://www.jiocinema.com/sports/the-grind-finals-day-4-highlights/3819159" target="_blank"><img src="assets/image/hm-1-actors/fg.webp"
                                                        alt="Disnap" /></a>
                                                </div>
                                                <div class="lts-meta-content mt-20">
                                                    <div class="cm-sh-us mb-10">
                                                        <ul>
                                                            <li><a href="#" class="sm-f pe-none"><i
                                                                class="fa-regular fa-user"></i><span>By</span> Sazol
                                                                Aliur</a></li>
                                                            <li><a href="#" class="sm-f pe-none"><i
                                                                class="fa-regular fa-message-dots"></i> 23</a></li>
                                                            <li><a href="#" class="sm-f pe-none"><i
                                                                class="fa-regular fa-eye"></i> 503</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="lts-nw-heading mt-15">
                                                        <a href="https://www.jiocinema.com/sports/the-grind-finals-day-4-highlights/3819159" target="_blank">
                                                            <h3 class="f-24 .lts-nw-title">the-grind-finals-day-4-highlights .</h3>
                                                        </a>
                                                    </div>
                                                    <div class="lts-nw-dis mt-20">
                                                        <p class="md-f">Watch the highlights of Day 2 from Round 2 of Battlegrounds Mobile India Series.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Start Footer Area --> */}
            <footer class="footer-area">
                <div class="footer-container">
                    <div class="container">
                        <div class="footer-step1">
                            <div class="footer-logo">
                                <a href="index.html">
                                    <img src="assets/image/logo.svg" alt="Disnap" />
                                </a>
                            </div>
                            <div class="footer-social-media">
                                <ul>
                                    <li><a href="#" class="icon-hover"><i class="bi bi-facebook"></i></a></li>
                                    <li><a href="#" class="icon-hover"><i class="bi bi-twitter"></i></a></li>
                                    <li><a href="#" class="icon-hover"><i class="bi bi-instagram"></i></a></li>
                                    <li><a href="#" class="icon-hover"><i class="bi bi-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer-step2">
                            <div class="footer-step-2-item-flexing">
                                <div class="ft-item1">
                                    <div class="footer-item-title">
                                        <h3 class="f-24">Service</h3>
                                    </div>
                                    <div class="footer-cuntry-list">
                                        <ul>
                                            <li class="lg-f mb-15"><a href="#">Albania</a></li>
                                            <li class="lg-f mb-15"><a href="#">Austria</a></li>
                                            <li class="lg-f mb-15"><a href="#">Czech Republic</a></li>
                                            <li class="lg-f mb-15"><a href="#">Bulgaria</a></li>
                                            <li class="lg-f mb-15"><a href="#">Croatia</a></li>
                                            <li class="lg-f mb-15"><a href="#">Beljium</a></li>
                                            <li class="lg-f mb-15"><a href="#">Denmark</a></li>
                                            <li class="lg-f mb-15"><a href="#">Estonia</a></li>
                                            <li class="lg-f mb-15"><a href="#">Finland</a></li>
                                            <li class="lg-f mb-15"><a href="#">France</a></li>
                                            <li class="lg-f mb-15"><a href="#">Germany</a></li>
                                            <li class="lg-f mb-15"><a href="#">Gibraltar</a></li>
                                            <li class="lg-f mb-15"><a href="#">Greece</a></li>
                                            <li class="lg-f"><a href="#">Hungary</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="ft-item2">
                                    <div class="footer-item-title">
                                        <h3 class="f-24">about</h3>
                                    </div>
                                    <div class="footer-main-menu-list">
                                        <ul>
                                            <li class="lg-f mb-15"><a href="#">home</a></li>
                                            <li class="lg-f mb-15"><a href="#">about us </a></li>
                                            <li class="lg-f mb-15"><a href="#">services </a></li>
                                            <li class="lg-f mb-15"><a href="#">portfolios </a></li>
                                            <li class="lg-f mb-15"><a href="#">blogs </a></li>
                                            <li class="lg-f mb-15"><a href="#">contact us</a></li>
                                            <li class="lg-f"><a href="#">Reviews</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="ft-item3">
                                    <div class="footer-item-title">
                                        <h3 class="f-24">quick links</h3>
                                    </div>
                                    <div class="footer-q-link-list">
                                        <ul>
                                            <li class="lg-f mb-15"><a href="#">Product Design</a></li>
                                            <li class="lg-f mb-15"><a href="#">Business Consulting</a></li>
                                            <li class="lg-f mb-15"><a href="#">Terms of Use</a></li>
                                            <li class="lg-f mb-15"><a href="#">Privacy Prrolicy</a></li>
                                            <li class="lg-f mb-15"><a href="#">Security</a></li>
                                            <li class="lg-f mb-15"><a href="#">SEO Optimization</a></li>
                                            <li class="lg-f"><a href="#">Cyber Security</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="ft-item4">
                                    <div class="footer-item-title">
                                        <h3 class="f-24">Subscribe us</h3>
                                    </div>
                                    <div class="footer-subscribe-box">
                                        <p class="md-f">Join us to our newsletter submit.</p>
                                        <div class="footer-subscribe-input">
                                            <div class="footer-input">
                                                <input type="email" placeholder="Inter Your Email" required />
                                            </div>
                                            <div class="footer-input-btn">
                                                <a href="#" class="icon-hover"><i class="bi bi-search"
                                                ></i></a>
                                            </div>
                                        </div>
                                        <div class="footer-trams-condition-check">
                                            <span class="footer-subscribe-pera-icons"><i
                                                class="fa-sharp fa-solid fa-circle-check"></i></span>
                                            <span class="md-f footer-subscribe-pera-text">Our Privacy Policy and provide
                                                updates from our company.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="footer-step3">
                            <div class="copyright">
                                <p class="lg-f"><span>Disnap</span> © Copyright-2023 All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- End Footer Area --> */}

            <div class="go-top">
                <i class="bi bi-chevron-double-up"></i>
                <i class="bi bi-chevron-double-up"></i>
            </div>
        </>
    )
}
export default Home;