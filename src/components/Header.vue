<template>
    <header>
        <div class="header">
            <span class="title">Factory</span> 
            <div class="menu-links">
                <router-link class="link" :to="{ name: 'Home' }" :class="{active: this.$route.path === '/'}">Home</router-link>
                <router-link class="link" :to="{ name: 'Statistics' }" :class="{active: this.$route.path === '/statistics'}">Statistics</router-link>
            </div>

            <div class="menu-bar">
                <div class="dropbtn">
                    <i class="fa fa-bars" aria-hidden="true" @click="dropdownMenu = !dropdownMenu"></i>
                </div>
            </div>
        </div>
        
        <div class="dropdown-content" :class="{ inactive: !dropdownMenu }">
            <ul class="menu-links-mobile">
                <li>
                    <router-link class="link" :to="{ name: 'Home' }" :class="{active: this.$route.path === '/'}">Home</router-link>
                </li>
                <li>
                    <router-link class="link" :to="{ name: 'Statistics' }" :class="{active: this.$route.path === '/statistics'}">Statistics</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            dropdownMenu: false
        }
    }
}
</script>

<style lang="scss">
@import 'src/scss/variables';
@import 'src/scss/mixins';

.header {
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-color: $main-color;
    margin-bottom: 20px;
    position: sticky;
    top: 0;
    z-index: 1;
}

.title {
    color: #ffffff;
    margin-left: 25px;
    text-transform: uppercase;

    &:after {
        content: 'World Wide';
        color: $link-color;
        margin-left: 6px;
        text-transform: uppercase
    }

}

.menu-bar {
    display: none;
    cursor: pointer;
}

.dropdown-content {
    display: none;
}

.link {
    margin-right: 25px;
    color: #ffffff;
    position: relative;
    text-decoration: none;
    cursor: pointer;
    text-transform: uppercase;
    @include transition(all 0.3s ease-in-out 0s);

    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        top: 20px;
        background-color: $link-color;
        visibility: hidden;
        @include transform(scaleX(0));
        @include transition(all 0.3s ease-in-out 0s);
    }

    &.active,
    &:hover {
        &:before {
            visibility: visible;
            @include transform(scaleX(1));
        }

    }

    &.active {
        color: $link-color;
    }

}

@media only screen and (max-width: 480px) {
    .title {
        margin-right: 25px;
    }

    .menu-links {
        display: none;
    }

    .menu-bar {
        display: block;
        margin-right: 25px;
        font-size: 19px;
        color: #ffffff;
    }

    .dropdown-content {
        display: block;
        margin-top: -19px;
        margin-bottom: 20px;

        &.inactive {
            display: none;
        }
    }
    
    .menu-links-mobile {
        display: flex;
        flex-direction: column;
        padding: 5px 0 5px 0;
        background-color: $main-color;
        align-items: center;

        li {
            padding: 10px;  
        }
    }

    .link {
        margin: 0;
    }
}
</style>
