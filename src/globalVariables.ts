import {FunctionalComponent, provide} from 'vue'
import {ChartBarIcon, ClockIcon, ListBulletIcon} from "@heroicons/vue/24/outline";

export const navItems: {
    activities: FunctionalComponent
    timeline: FunctionalComponent
    progress: FunctionalComponent
} = {
    timeline: ClockIcon,
    activities: ListBulletIcon,
    progress: ChartBarIcon
}

// Provide the global variable
export default function provideGlobals() {
    provide('navItems', navItems)
}