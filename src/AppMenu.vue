<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';


import AppMenuItem from './AppMenuItem.vue';
const store = useStore();
const appVersion = computed(() => store.getters.appVersion);

menu: [
    {
        label: 'Home',
        items: [
            {
                label: 'Dashboard',
                icon: 'pi pi-fw pi-home',
                to: '/'
            }
        ]
    },
    {
        label: 'DCL Transactions',
        icon: 'pi pi-fw pi-sitemap',
        items: [
            { label: 'Accounts', icon: 'pi pi-fw pi-id-card', to: '/accounts' },
            { label: 'Vendor Info', icon: 'pi pi-fw pi-briefcase', to: '/vendors' },
            { label: 'Model', icon: 'pi pi-fw pi-database', to: '/models' },
            { label: 'Compliance', icon: 'pi pi-fw pi-check-circle', to: '/compliance' },
            { label: 'PKI', icon: 'pi pi-fw pi-lock', to: '/pki' },
            { label: 'Validators', icon: 'pi pi-fw pi-server', to: '/validators' },
            { label: 'Upgrades', icon: 'pi pi-fw pi-history', to: '/upgrades' },
            { label: 'Legacy Wallet', icon: 'pi pi-fw pi-wallet', to: '/legacy-wallet' },
            { label: 'Keplr Wallet - Guide', icon: 'pi pi-fw pi-book', to: '/keplr-wallet' }
        ]
    }
];

const model = ref([
    {
        label: 'Home',
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
    },
    {
        label: 'DCL Transactions',
        icon: 'pi pi-fw pi-sitemap',
        items: [
            { label: 'Accounts', icon: 'pi pi-fw pi-id-card', to: '/accounts' },
            { label: 'Vendor Info', icon: 'pi pi-fw pi-briefcase', to: '/vendors' },
            { label: 'Model', icon: 'pi pi-fw pi-database', to: '/models' },
            { label: 'Compliance', icon: 'pi pi-fw pi-check-circle', to: '/compliance' },
            { label: 'PKI', icon: 'pi pi-fw pi-lock', to: '/pki' },
            { label: 'Validators', icon: 'pi pi-fw pi-server', to: '/validators' },
            { label: 'Upgrades', icon: 'pi pi-fw pi-history', to: '/upgrades' }
        ]
    },
    {
        label: 'Tools and Documentation',
        icon: 'pi pi-fw pi-book',
        items: [
            { label: 'Transaction Blocks', icon: 'pi pi-fw pi-book', to: '/transactions/blocks' },
            { label: 'Legacy Wallet', icon: 'pi pi-fw pi-wallet', to: '/legacy-wallet' },
            { label: 'Keplr Wallet - Guide', icon: 'pi pi-fw pi-book', to: '/keplr-wallet' }
        ]
    }
])
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
    <div style="position: relative; padding-top: 2rem; font-size: 0.85rem">
			DCL UI Version {{ appVersion }}
	</div>
</template>

<style lang="scss" scoped></style>
