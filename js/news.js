
    // JOUW SPECIFIEKE API KEY EN INSTELLINGEN
    const apiKey = 'pub_c707d15098ba4366a73404670b372448'; 
    const query = 'belgium';
    
    // Selecteer elementen
    const container = document.getElementById('news-container');
    const spinner = document.getElementById('news-spinner');

    async function loadNews() {
        try {
            // Data ophalen
            const response = await fetch(`https://newsdata.io/api/1/latest?apikey=${apiKey}&q=${query}`);
            
            if (!response.ok) throw new Error("Fout bij laden");

            const data = await response.json();
            const articles = data.results.slice(0, 5); // Pak de eerste 5

            // Container leegmaken
            container.innerHTML = '';
            spinner.style.display = 'none'; // Spinner weg

            // Loop door artikelen
            articles.forEach(article => {
                // Check voor plaatje, anders placeholder of logo
                const imgCheck = article.image_url ? article.image_url : 'assets/logoLHL.png';
                
                // HTML maken
                const item = `
                    <a href="${article.link}" target="_blank" class="list-group-item list-group-item-action p-3">
                        <div class="d-flex align-items-start">
                            <img src="${imgCheck}" alt="news" class="rounded me-3" style="width: 60px; height: 60px; object-fit: cover; background: #eee;">
                            
                            <div>
                                <h6 class="mb-1 text-dark fw-bold" style="font-size: 0.9rem; line-height: 1.2;">
                                    ${article.title}
                                </h6>
                                <small class="text-muted" style="font-size: 0.75rem;">
                                    ${article.source_id}
                                </small>
                            </div>
                        </div>
                    </a>
                `;
                container.innerHTML += item;
            });

        } catch (error) {
            console.error(error);
            spinner.style.display = 'none';
            container.innerHTML = `
                <div class="p-3 text-center text-muted small">
                    Kan nieuws even niet laden.<br>(Mogelijk API limiet bereikt)
                </div>`;
        }
    }

    // Start direct
    loadNews();
