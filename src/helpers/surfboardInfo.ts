import {ShapeType} from "../types/types";

const getSurfboardImage = (shapeType: ShapeType) => {
    switch (shapeType) {
        case ShapeType.SHORTBOARD: return 'images/shortboard.jpg';
        case ShapeType.LONGBOARD: return 'images/longboard.png';
        case ShapeType.FUNBOARD_MALIBU: return 'images/funboard.png';
        case ShapeType.FISH: return 'images/fish.jpg';
        case ShapeType.EGG: return 'images/egg.webp';
        case ShapeType.GUN: return 'images/gun.png';
        case ShapeType.SUP: return 'images/sup.png';
    }
}

const getSurfboardDescription = (shapeType: ShapeType) => {
    switch (shapeType) {
        case ShapeType.GUN: return 'A gun surfboard is a much narrower surfboard. Big waves are going much faster than smaller waves and they have a lot more power so you must use less surface area on this board. If you are going so fast on a much wider board, you are going to skip out of the way.';
        case ShapeType.SUP: return 'Standup paddleboarding (SUP). Stand up paddleboarders stand on boards that are floating on the water, and use a paddle to propel themselves through the water.';
        case ShapeType.LONGBOARD: return 'Longboards are a type of surfboard that provides you with a very different experience than shortboards. Longboards usually range between 8-11 feet and have a rounded nose. Due to their large size, beginner longboards have particularly high buoyancy and stability.';
        case ShapeType.FUNBOARD_MALIBU: return 'A funboard is a surfboard that\'s 6 to 8 feet long and has a rounder/wider outline than shortboards (in-between a longboard and a fish). If you have ridden a soft top surfboard before, otherwise known as a foam board, a funboard is the fiberglass version of it.';
        case ShapeType.EGG: return 'Egg surfboards are best suited for beginners and intermediates who are looking to hone their surfing skills. Learning how to surf can be frustrating, as newcomers often find it difficult to balance on their boards.';
        case ShapeType.SHORTBOARD: return 'Shorter surfboards are relatively new compared to the long storied longboards. You\'ll recognize a shortboard by them being under 7 feet in length. Their shorter length makes them faster and perfect for tackling more powerful waves.';
        case ShapeType.FISH: return 'When most people think of or refer to a fish surfboard, they are likely referring to a short, wide, flat, and thicker-than-normal surfboard with a bit of volume and a fish-like swallow tail. These are some of the most common defining characteristics of a fish.';
    }
}

export {getSurfboardImage, getSurfboardDescription}