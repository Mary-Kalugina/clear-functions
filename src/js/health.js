export default function giveHealth(obj = {}) {
    let health;
    if (obj.health > 50) {
        health = 'healthy';
    }
    if (obj.health <= 50 && obj.health >= 15) {
        health = 'wounded';
    }
    if (obj.health < 15) {
        health = 'critical';
    }
    return health;
}