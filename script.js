function toggleAccordion(index) {
    const headers = document.querySelectorAll('.accordion-header');
    const contents = document.querySelectorAll('.accordion-content');

    headers.forEach((header, i) => {
        if (i === index) {
            header.classList.add('hidden');
            contents[i].classList.add('visible');
        } else {
            header.classList.remove('hidden');
            contents[i].classList.remove('visible');
        }
    });
}

// function toggleAccordion(index) {
//     const headers = document.querySelectorAll('.accordion-header');
//     const contents = document.querySelectorAll('.accordion-content');

//     headers.forEach((header, i) => {
//         const content = contents[i];
        
//         if (i === index) {
//             // Hide the header and show the content with the specific background color
//             header.classList.add('hidden');
//             content.classList.add('visible');
//             content.style.backgroundColor = lightenColor('#FF6B82', 0.2); // Adjust the lightness as needed
//         } else {
//             // Show the header and hide the content
//             header.classList.remove('hidden');
//             content.classList.remove('visible');
//             content.style.backgroundColor = ''; // Reset to default
//         }
//     });
// }

// function lightenColor(color, percent) {
//     const num = parseInt(color.slice(1), 16),
//         amt = Math.round(2.55 * percent * 100),
//         R = (num >> 16) + amt,
//         G = (num >> 8 & 0x00FF) + amt,
//         B = (num & 0x0000FF) + amt;
    
//     return `#${(0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255))
//         .toString(16)
//         .slice(1)
//         .toUpperCase()}`;
// }

