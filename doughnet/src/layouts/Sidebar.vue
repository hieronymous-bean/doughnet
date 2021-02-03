<script>
import { menuItems } from "../static/menu";

export default {
    data() {
        return {
            menuItems: menuItems,
        };
    },
    methods: {

    },
};
</script>

<template>
<!-- ========== Left Sidebar Start ========== -->
<div class="left-side-menu">
    <div class="logo-box">
        <nuxt-link to="/" class="logo logo-dark text-center">
            <span class="logo-sm">
                <img src="../assets/images/logo.png" alt height="34" />
            </span>
            <span class="logo-lg">
                <img src="../assets/images/logo.png" alt height="40" />
            </span>
        </nuxt-link>

        <nuxt-link to="/" class="logo logo-light text-center">
            <span class="logo-sm">
                <img src="../assets/images/logo.png" alt height="34" />
            </span>
            <span class="logo-lg">
                <img src="../assets/images/logo.png" alt height="40" />
            </span>
        </nuxt-link>
    </div>

    <simplebar class="h-100" data-simplebar>
        <!-- User box -->
        <div class="user-box text-center">
            <img src="../assets/images/users/user.png" alt="user-img" title="Mat Helme" class="rounded-circle avatar-md" />
            <div class="dropdown">
                <a href="javascript: void(0);" class="text-reset dropdown-toggle h5 mt-2 mb-1 d-block" data-toggle="dropdown">Jeffrey Brown</a>
                <div class="dropdown-menu user-pro-dropdown">
                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="fe-user mr-1"></i>
                        <span>My Account</span>
                    </a>

                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="fe-log-out mr-1"></i>
                        <span>Logout</span>
                    </a>
                </div>
            </div>
            <p class="text-reset">Admin Head</p>
        </div>

        <!--- Sidemenu -->
        <div id="sidebar-menu">
            <!-- Left Menu Start -->
            <ul class="list-unstyled" id="side-menu">
                <template v-for="item in menuItems">
                    <li class="menu-title" v-if="item.isTitle" :key="item.id">
                        {{ $t(item.label) }}
                    </li>
                    
                    <li v-if="!item.isTitle && !item.isLayout" :key="item.id">
                        <a v-if="hasItems(item)" href="javascript:void(0);" @click="item.isMenuCollapsed = !item.isMenuCollapsed" :class="{
                                    'has-arrow': !item.badge,
                                    'has-dropdown': item.badge
                                    }">
                            <i :class="`${item.icon}`" v-if="item.icon"></i>
                            <span>{{ $t(item.label) }}</span>
                            <span class="menu-arrow" v-if="!item.badge"></span>
                            <span :class="`badge badge-pill badge-${item.badge.variant} float-right`" v-if="item.badge">{{ $t(item.badge.text) }}</span>
                        </a>

                        <nuxt-link :to="item.link" v-if="!hasItems(item)" class="side-nav-link-ref">
                            <i :class="`${item.icon}`" v-if="item.icon"></i>
                            <span>{{ $t(item.label) }}</span>
                            <span :class=" `badge badge-pill badge-${item.badge.variant} float-right`" v-if="item.badge">{{ $t(item.badge.text) }}</span>
                        </nuxt-link>
                        <div class="collapse" :class="{'show': item.isMenuCollapsed}" id="sidebarTasks">
                            <ul v-if="hasItems(item)" class="sub-menu nav-second-level" aria-expanded="false">
                                <li v-for="(subitem, index) of item.subItems" :key="index">
                                    <nuxt-link :to="subitem.link" v-if="!hasItems(subitem)" class="side-nav-link-ref">{{ $t(subitem.label) }}</nuxt-link>
                                    <a v-if="hasItems(subitem)" class="side-nav-link-a-ref has-arrow" @click="subitem.isMenuCollapsed = !subitem.isMenuCollapsed" href="javascript:void(0);">{{ $t(subitem.label) }}
                                        <span class="menu-arrow"></span>
                                    </a>

                                    <div class="collapse" :class="{'show': subitem.isMenuCollapsed}">
                                        <ul v-if="hasItems(subitem)" class="sub-menu" aria-expanded="false">
                                            <li v-for="(subSubitem, index) of subitem.subItems" :key="index">
                                                <nuxt-link :to="subSubitem.link" class="side-nav-link-ref">{{ $t(subSubitem.label) }}</nuxt-link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                </template>
            </ul>
        </div>
        <!-- End Sidebar -->

        <div class="clearfix"></div>
    </simplebar>
    <!-- Sidebar -left -->
</div>
<!-- Left Sidebar End -->
</template>
