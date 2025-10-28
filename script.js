// 1. Modal ko close karne ka function
// Yeh function pop-up window ko chhupata hai jab user button dabata hai ya background par click karta hai.
function closeModal(event, isBackgroundClick) {
    const modal = document.getElementById('popup-modal');
    
    // Agar background par click kiya gaya ho, lekin click modal ki content box par hua ho, 
    // toh function se bahar nikal jao (taaki accidental click se modal band na ho).
    if (isBackgroundClick && event.target !== modal) {
        return; 
    }

    // Modal ko screen se chhupa do.
    modal.classList.add('hidden');
}

// 2. 20 blank image placeholders banane ka function
function createPlaceholders() {
    const gallery = document.getElementById('image-gallery');
    const numImages = 20;

    for (let i = 1; i <= numImages; i++) {
        // Image container banane ke liye div
        const container = document.createElement('div');
        container.className = 'relative aspect-w-4 aspect-h-3 overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.02] transition duration-300 bg-gray-200';
        
        // Placeholder Image Tag
        const img = document.createElement('img');
        
        // Placeholder image URL. Yahi link aap apni actual image URLs se badalenge.
        img.src = `https://placehold.co/400x300/FEE2E2/B91C1C?text=Image+${i}`;
        
        // Styling classes
        img.className = 'w-full h-full object-cover transition duration-300';
        img.alt = `Blank Image Placeholder ${i}`;
        
        // Image Caption/Overlay text
        const overlay = document.createElement('div');
        overlay.className = 'absolute inset-0 bg-primary bg-opacity-10 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 text-white font-bold text-xl';
        overlay.textContent = `Photo Slot ${i}`;

        container.appendChild(img);
        container.appendChild(overlay);
        gallery.appendChild(container);
    }
}

// 3. window.onload - Jab poora HTML document load ho jaye, tab yeh chalao.
window.onload = function() {
    // 1. Modal ko turant dikhao
    const modal = document.getElementById('popup-modal');
    modal.classList.remove('hidden');

    // 2. Image placeholders gallery mein banao
    createPlaceholders();
};
