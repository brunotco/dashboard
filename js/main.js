// Sidebar mobile controller
const sideBar = document.querySelector('aside');
const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');

menuBtn.addEventListener('click', () => {
    sideBar.classList.toggle('show');
});

closeBtn.addEventListener('click', () => {
    sideBar.classList.toggle('show');
});

// Theme changer
const theme = document.querySelector('.theme');
theme.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    for (const child of theme.children) {
        child.classList.toggle('active');
    }
});

// Populate products table
Products.forEach(product => {
    const tr = document.createElement('tr');
    const trData = `
        <td>${product.name}</td>
        <td class="mobile-hide">${product.number}</td>
        <td>${product.price}</td>
        <td class="mobile-hide">${product.quantity}</td>
        <td>
            <div class="circle ${product.quantity > 5 ? 'full' : product.quantity > 0 ? 'half' : 'empty'}"></div>
        </td>
        <td class="primary">More</td>
    `;
    tr.innerHTML = trData;
    document.querySelector('table.products tbody').appendChild(tr);
});