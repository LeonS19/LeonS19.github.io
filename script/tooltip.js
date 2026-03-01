document.addEventListener('DOMContentLoaded', function() {
    const tooltips = document.querySelectorAll('.info-tooltip');
    
    tooltips.forEach(tooltip => {
        const tooltipText = tooltip.querySelector('.tooltip-text');
        
        function positionTooltip() {
            const rect = tooltip.getBoundingClientRect();
            const tooltipHeight = tooltipText.offsetHeight;
            
            // Vertikale Mitte des Icons
            const iconCenterY = rect.top + rect.height / 2;
            
            // Prüfen ob Tooltip oben oder unten rausragen würde
            const tooltipTop = iconCenterY - tooltipHeight / 2;
            const tooltipBottom = iconCenterY + tooltipHeight / 2;
            
            let offsetY = 0;
            
            if (tooltipTop < 10) {
                // Tooltip würde oben rausragen
                offsetY = 10 - tooltipTop;
            } else if (tooltipBottom > window.innerHeight - 10) {
                // Tooltip würde unten rausragen
                offsetY = (window.innerHeight - 10) - tooltipBottom;
            }
            
            tooltipText.style.transform = `translateY(calc(-50% + ${offsetY}px))`;
        }
        
        tooltip.addEventListener('mouseenter', positionTooltip);
        tooltip.addEventListener('focus', positionTooltip);
    });
});