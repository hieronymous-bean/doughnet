<script>
export default {
    data() {
        return {
            languages: [{
                    flag: require("~/assets/images/flags/us.jpg"),
                    language: "en",
                    title: "English",
                },
                {
                    flag: require("~/assets/images/flags/french.jpg"),
                    language: "fr",
                    title: "French",
                },
                {
                    flag: require("~/assets/images/flags/spain.jpg"),
                    language: "es",
                    title: "Spanish",
                },
                {
                    flag: require("~/assets/images/flags/china.png"),
                    language: "zh",
                    title: "Chinese",
                },
                {
                    flag: require("~/assets/images/flags/arabic.png"),
                    language: "ar",
                    title: "Arabic",
                },
            ],
            current_language: this.$i18n.locale,
            text: null,
            flag: null,
            value: null,
        };
    },
    mounted() {
        this.value = this.languages.find((x) => x.language === this.$i18n.locale);
        this.text = this.value.title;
        this.flag = this.value.flag;
    },
    methods: {
        /**
         * Toggle menu
         */
        toggleMenu() {
            this.$parent.toggleMenu();
        },
        /**
         * Full screen
         */
        initFullScreen() {
            document.body.classList.toggle("fullscreen-enable");
            if (
                !document.fullscreenElement &&
                /* alternative standard method */
                !document.mozFullScreenElement &&
                !document.webkitFullscreenElement
            ) {
                // current working methods
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(
                        Element.ALLOW_KEYBOARD_INPUT
                    );
                }
            } else {
                if (document.cancelFullScreen) {
                    document.cancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                }
            }
        },
        /**
         * Toggle rightbar
         */
        toggleRightSidebar() {
            this.$parent.toggleRightSidebar();
        },
        /**
         * Set languages
         */
        setLanguage(locale, country, flag) {
            this.$i18n.locale = locale;
            this.current_language = locale;
            this.text = country;
            this.flag = flag;
        },
        /**
         * Horizontal-toggle menu
         */
        horizonalmenu() {
            let element = document.getElementById("topnav-menu-content");
            element.classList.toggle("show");
        },
        /**
         * Logout user
         */
        logoutUser() {
            if (process.env.auth === "firebase") {
                this.$store.dispatch("auth/logOut");
            }
            this.$router.push({
                path: "/account/login",
            });
        },
    },
};
</script>

<template>
<!-- Topbar Start -->
<div class="navbar-custom">
    <div class="container-fluid">
        <ul class="list-unstyled topnav-menu float-right mb-0">
            <li class="d-none d-lg-block">
                <form class="app-search">
                    <div class="app-search-box">
                        <div class="input-group">
                            <input type="search" class="form-control" :placeholder="$t('navbar.search.text')" id="top-search" />
                            <div class="input-group-append">
                                <button class="btn" type="submit">
                                    <i class="fe-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </li>

            <li class="dropdown d-inline-block d-lg-none">
                <a class="nav-link dropdown-toggle arrow-none waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                    <i class="fe-search noti-icon"></i>
                </a>
                <div class="dropdown-menu dropdown-lg dropdown-menu-right p-0">
                    <form class="p-3">
                        <input type="text" class="form-control" :placeholder="$t('navbar.search.text')" aria-label="Recipient's username" />
                    </form>
                </div>
            </li>

            <li class="dropdown d-none d-lg-inline-block">
                <a class="nav-link dropdown-toggle arrow-none waves-effect waves-light" @click="initFullScreen" data-toggle="fullscreen" href="#">
                    <i class="fe-maximize noti-icon"></i>
                </a>
            </li>
            <b-nav-item-dropdown variant="white" class="d-none d-lg-inline-block topbar-dropdown" toggle-class="nav-link" right menu-class="dropdown-lg p-0">
                <template v-slot:button-content>
                    <i class="fe-grid noti-icon"></i>
                </template>
                <div class="px-lg-2">
                    <div class="row no-gutters">
                        
                    </div>

                    <div class="row no-gutters">
                        
                    </div>
                </div>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right class="notification-list" menu-class="dropdown-lg">
                <template slot="button-content" class="nav-link dropdown-toggle">
                    <i class="fe-bell noti-icon"></i>
                </template>

                <a href="#" class="dropdown-item noti-title">
                    <h5 class="m-0">
                        <span class="float-right">
                            <a href class="text-dark">
                                <small>{{ $t('navbar.dropdown.notification.subtext')}}</small>
                            </a>
                        </span>
                        {{ $t('navbar.dropdown.notification.text')}}
                    </h5>
                </a>



                <a href="javascript:void(0);" class="dropdown-item text-center text-primary notify-item notify-all">
                    {{ $t('navbar.dropdown.notification.button')}}
                    <i class="fi-arrow-right"></i>
                </a>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right class="notification-list topbar-dropdown" menu-class="profile-dropdown" toggle-class="p-0">
                <template slot="button-content" class="nav-link dropdown-toggle">
                    <div class="nav-user mr-0">
                        <img src="~/assets/images/users/avatar-1.jpg" alt="user-image" class="rounded-circle" />
                        <span class="pro-user-name ml-1">
                            {{ $t('navbar.dropdown.name.text') }}
                            <i class="mdi mdi-chevron-down"></i>
                        </span>
                    </div>
                </template>

                <b-dropdown-header>
                    <h6 class="text-overflow m-0 py-2">{{ $t('navbar.dropdown.name.text') }}</h6>
                </b-dropdown-header>

                <b-dropdown-item href="#">
                    <i class="remixicon-account-circle-line"></i>
                    <span>{{ $t('navbar.dropdown.name.list.account') }}</span>
                </b-dropdown-item>
                <b-dropdown-item href="#">
                    <i class="remixicon-account-circle-line"></i>
                    <span>{{ $t('navbar.dropdown.name.list.settings') }}</span>
                </b-dropdown-item>

                <b-dropdown-divider></b-dropdown-divider>
                <a class="dropdown-item" @click="logoutUser" href="jvascript: void(0);">
                    <i class="fe-log-out mr-1"></i>
                    <span>{{ $t('navbar.dropdown.name.list.logout') }}</span>
                </a>
            </b-nav-item-dropdown>

            <li class="dropdown notification-list">
                <a href="javascript:void(0);" @click="toggleRightSidebar" class="nav-link right-bar-toggle toggle-right">
                    <i class="fe-settings noti-icon toggle-right"></i>
                </a>
            </li>
        </ul>

        <!-- LOGO -->
        <div class="logo-box">
            <nuxt-link to="/" class="logo logo-dark text-center">
                <span class="logo-sm">
                    <img src="~/assets/images/logo.png" alt height="24" />
                    <!-- <span class="logo-lg-text-light">Minton</span> -->
                </span>
                <span class="logo-lg">
                    <img src="~/assets/images/logo.png" alt height="20" />
                    <!-- <span class="logo-lg-text-light">M</span> -->
                </span>
            </nuxt-link>

            <nuxt-link to="/" class="logo logo-light text-center">
                <span class="logo-sm">
                    <img src="~/assets/images/logo.png" alt height="24" />
                </span>
                <span class="logo-lg">
                    <img src="~/assets/images/logo.png" alt height="20" />
                </span>
            </nuxt-link>
        </div>

        <ul class="list-unstyled topnav-menu topnav-menu-left m-0">
            <li>
                <button class="button-menu-mobile waves-effect waves-light" @click="toggleMenu">
                    <i class="fe-menu"></i>
                </button>
            </li>

            <li>
                <!-- Mobile menu toggle (Horizontal Layout)-->
                <a class="navbar-toggle nav-link" data-toggle="collapse" @click="horizonalmenu()" data-target="#topnav-menu-content">
                    <div class="lines">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </a>
                <!-- End mobile menu toggle-->
            </li>
            <b-nav-item-dropdown class="d-none d-lg-block">
                <template slot="button-content">
                    {{ $t('navbar.dropdown.createnew.text') }}
                    <i class="mdi mdi-chevron-down"></i>
                </template>
                <b-dropdown-item href="#">
                    <i class="fe-briefcase mr-1"></i>
                    <span>{{ $t('navbar.dropdown.createnew.list.budget') }}</span>
                </b-dropdown-item>
                <b-dropdown-item href="#">
                    <i class="fe-user mr-1"></i>
                    <span>{{ $t('navbar.dropdown.createnew.list.plan') }}</span>
                </b-dropdown-item>
            </b-nav-item-dropdown>
        </ul>
        <div class="clearfix"></div>
    </div>
</div>
<!-- end Topbar -->
</template>
