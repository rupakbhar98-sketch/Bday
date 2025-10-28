// Modal ko close karne ka function
function closeModal(event, isBackgroundClick) {
    const modal = document.getElementById('popup-modal');
    
    if (isBackgroundClick && event.target !== modal) {
        return;
    }

    modal.classList.add('hidden');
}

// 25 blank image placeholders banane ka function
function createPlaceholders() {
    const gallery = document.getElementById('image-gallery');
    // *** Yahan badlav kiya gaya hai: 25 placeholders ***
    const numImages = 25; 

    // Images ki list - Yahi woh jagah hai jahan aap apni 25 photos ke link/naam dalenge
    const imageSources = [
        // 1. Apni pehli image ka naam/link yahan dalen
        'Screenshot_20251028-154226.png', 
        // 2. Doosri image ka naam/link
        'Screenshot_20251028-154931.png', 
        // 3. Teesari image ka naam/link
        'Screenshot_20251028-154949.png', 
        'Screenshot_20251028-154954.png', 
        'Screenshot_20251028-155020.png', 
        'Screenshot_20251028-155031.png', 
        'Screenshot_20251028-155107.png', 
        'Screenshot_20251028-155115.png', 
        'Screenshot_20251028-155125.png', 
        'Screenshot_20251028-155133.png',
        'Screenshot_20251028-155140.png',
        'Screenshot_20251028-155145.png',
        'Screenshot_20251028-155154.png',
        'Screenshot_20251028-155201.png',
        'Screenshot_20251028-155208.png',
        'Screenshot_20251028-155216.png',
        'Screenshot_20251028-155222.png',
        'Screenshot_20251028-155234.png',
        'Screenshot_20251028-155242.png',
        'Screenshot_20251028-155253.png',
        'Screenshot_20251028-155301.png',
        'Screenshot_20251028-155308.png',
        'Screenshot_20251028-155316.png',
        'Screenshot_20251028-155323.png',
        // 25. Aakhiri image ka naam/link
        'Screenshot_20251028-155331.png' 
    ];
    
    // Loop chala kar 25 containers banayenge
    for (let i = 0; i < numImages; i++) {
        // Image container
        const container = document.createElement('div');
        container.className = 'relative aspect-w-4 aspect-h-3 overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.02] transition duration-300 bg-gray-200 cursor-pointer group';
        
        // Placeholder Image Tag
        const img = document.createElement('img');
        
        // Image Source Set Karna:
        // Agar aap imageSources array ka use kar rahe hain, to niche wali line ka use karein:
        // img.src = imageSources[i];
        
        // Agar aap testing ke liye blank placeholder hi chahte hain to is line ka use karein:
        img.src = `https://via.placeholder.com/300x225?text=Photo+${i + 1}`;
        
        img.alt = `Birthday Image Placeholder ${i + 1}`;
        img.className = 'w-full h-full object-cover opacity-20 group-hover:opacity-30 transition duration-300'; 

        // Center text for better visual
        const textOverlay = document.createElement('div');
        textOverlay.className = 'absolute inset-0 flex items-center justify-center text-sm sm:text-base font-semibold text-gray-500 pointer-events-none';
        textOverlay.textContent = `Photo ${i + 1}`; // Photo number display

        container.appendChild(img);
        container.appendChild(textOverlay);
        gallery.appendChild(container);
    }
}

// Page load hote hi placeholders bana dein aur modal dikha dein
document.addEventListener('DOMContentLoaded', () => {
    createPlaceholders();
    document.getElementById('popup-modal').classList.remove('hidden');
});
