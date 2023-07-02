import {FunctionalComponent, provide} from 'vue'
import {ChartBarIcon, ClockIcon, ListBulletIcon} from "@heroicons/vue/24/outline";
import {PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS} from "@/contants";

export const navItems: {
    [PAGE_ACTIVITIES]: FunctionalComponent
    [PAGE_TIMELINE]: FunctionalComponent
    [PAGE_PROGRESS]: FunctionalComponent
} = {
    timeline: ClockIcon,
    activities: ListBulletIcon,
    progress: ChartBarIcon
}

// Provide the global variable
export default function provideGlobals() {
    provide('navItems', navItems)
}