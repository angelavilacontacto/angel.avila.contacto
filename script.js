// Funcionalidad para los desplegables con hover automático
const collapsibles = document.querySelectorAll('.collapsible');

collapsibles.forEach(button => {
    // Click manual (opcional)
    button.addEventListener('click', function() {
        toggleCollapsible(this);
    });
    
    // Hover automático - abrir al pasar el mouse
    button.addEventListener('mouseenter', function() {
        openCollapsible(this);
    });
    
    // Cerrar al salir el mouse del área completa (botón + contenido)
    const content = button.nextElementSibling;
    const wrapper = document.createElement('div');
    wrapper.className = 'collapsible-wrapper';
    button.parentNode.insertBefore(wrapper, button);
    wrapper.appendChild(button);
    wrapper.appendChild(content);
    
    wrapper.addEventListener('mouseleave', function() {
        closeCollapsible(button);
    });
});

function openCollapsible(button) {
    button.classList.add('active');
    const content = button.nextElementSibling;
    content.style.maxHeight = content.scrollHeight + "px";
}

function closeCollapsible(button) {
    button.classList.remove('active');
    const content = button.nextElementSibling;
    content.style.maxHeight = null;
}

function toggleCollapsible(button) {
    button.classList.toggle('active');
    const content = button.nextElementSibling;
    
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}
