// Modal ko close karne ka function
function closeModal(event, isBackgroundClick) {
    const modal = document.getElementById('popup-modal');
    
    if (isBackgroundClick && event.target !== modal) {
        return;
    }

    modal.classList.add('hidden');
}

// 25 image placeholders banane ka function
function createPlaceholders() {
    const gallery = document.getElementById('image-gallery');
    const numImages = 25; 

    // Images ki list - Aapki 25 images ke naam yahan hain
    const imageSources = [
        'Screenshot_20251028-154226.png', 
        'Screenshot_20251028-154931.png', 
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
        'Screenshot_20251028-155331.png' 
    ];
    
    // Loop chala kar 25 containers banayenge
    for (let i = 0; i < numImages; i++) {
        // Image container
        const container = document.createElement('div');
        container.className = 'relative aspect-w-4 aspect-h-3 overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.02] transition duration-300 bg-gray-200 cursor-pointer group';
        
        // Placeholder Image Tag
        const img = document.createElement('img');
        
        // Real Image Source ka use
        img.src = imageSources[i]; 
        
        img.alt = `Birthday Image ${i + 1}`;
        img.className = 'w-full h-full object-cover transition duration-300'; 

        // Image par hover karne par Photo number dikhane ke liye overlay
        const textOverlay = document.createElement('div');
        textOverlay.className = 'absolute inset-0 flex items-center justify-center text-lg font-bold text-white bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300';
        textOverlay.textContent = `Moment ${i + 1}`; 

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

