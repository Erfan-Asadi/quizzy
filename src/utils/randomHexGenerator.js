export default function randomHexGenerator(length = 7) {
    return Math.floor(Math.random() * (10 ** length) ).toString(16)
}