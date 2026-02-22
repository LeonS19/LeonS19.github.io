const headerPromise = fetch('components/header.html')
                .then(res => res.text())
                .then(data => {
                document.getElementById('header-placeholder').innerHTML = data;

                const currentPage = window.location.pathname.split("/").pop();
            
                let pageName = "Home";
                if(currentPage.includes('projekte')) pageName = 'Projekte';
                else if(currentPage.includes('ueber-mich')) pageName = 'Über Mich';
                else if(currentPage.includes('kontakt')) pageName = 'Kontakt';
                
                const element = document.getElementById('current-page');
                if(element) element.textContent = pageName;

                //Nav-Link Highlight
                const navLinks = document.querySelectorAll(".navbar a");
                navLinks.forEach(link =>{
                    const linkPage = link.getAttribute('href');
                    if(linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')){
                        link.classList.add('active');
                    }

                })
            });
            const footerPromise = fetch('components/footer.html')
                .then(res => res.text())
                .then(data => {
                document.getElementById('footer-placeholder').innerHTML = data});

            Promise.all([headerPromise, footerPromise]).then(() => {
                updateConnectors();
            });
            
                function updateConnectors() {
                document.querySelectorAll('.whiteDiv').forEach((whiteDiv) => {
                    const svg = whiteDiv.querySelector('svg');
                    if (!svg) return;

                    const path = svg.querySelector('path');
                    const prevColorDiv = whiteDiv.previousElementSibling;
                    let nextColorDiv = whiteDiv.nextElementSibling;

                    if (!prevColorDiv || !nextColorDiv) return;

                    // Unterer Circle des vorherigen Divs
                    const circleTop = prevColorDiv.querySelector('.circle-left-bottom, .circle-right-bottom');
                    // Oberer Circle des nächsten Divs
                    const circleBottom = nextColorDiv.querySelector('.circle-left-top, .circle-right-top');

                    if (!circleTop || !circleBottom) return;

                    const whiteDivRect = whiteDiv.getBoundingClientRect();
                    const topRect = circleTop.getBoundingClientRect();
                    const bottomRect = circleBottom.getBoundingClientRect();

                    const x1 = topRect.left + topRect.width / 2 - whiteDivRect.left;
                    const y1 = topRect.top + topRect.height / 2 - whiteDivRect.top;
                    const x2 = bottomRect.left + bottomRect.width / 2 - whiteDivRect.left;
                    const y2 = bottomRect.top + bottomRect.height / 2 - whiteDivRect.top;

                    svg.setAttribute('width', whiteDivRect.width);
                    svg.setAttribute('height', whiteDivRect.height);
                    svg.style.position = 'absolute';
                    svg.style.top = '0';
                    svg.style.left = '0';
                    svg.style.overflow = 'visible';

                    path.setAttribute('d', `M ${x1} ${y1} C ${x1} ${(y1 + y2) / 2}, ${x2} ${(y1 + y2) / 2}, ${x2} ${y2}`);
                });
            }

            window.addEventListener('resize', updateConnectors);
            window.addEventListener('load', updateConnectors);
            window.addEventListener('scroll', updateConnectors);