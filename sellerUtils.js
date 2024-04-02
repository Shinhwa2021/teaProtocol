// seller/sellerUtils.js

// Generate a random seller name
function generateRandomName() {
    const names = ["Jack", "Lily", "Mike", "Nancy", "Oliver", "Pam", "Quinn"];
    return names[Math.floor(Math.random() * names.length)];
}

module.exports = {
    generateRandomName
};
