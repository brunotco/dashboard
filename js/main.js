Products.forEach(product => {
    const tr = document.createElement('tr');
    const trData = `
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.quantity}</td>
        <td>
            <div class="circle ${product.quantity > 5 ? 'full' : product.quantity > 0 ? 'half' : 'empty'}"></div>
        </td>
        <td class="primary">More</td>
    `;
    tr.innerHTML = trData;
    document.querySelector('table.products tbody').appendChild(tr);
});