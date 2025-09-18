function updateTimestamps() {
                        const now = new Date();
                        const timeString = now.toLocaleTimeString('pt-BR');
                        for (let i = 1; i <= 9; i++) {
                                document.getElementById('time-' + i).textContent = timeString;
                        }
                }
                function refreshFeeds() {
                        document.querySelectorAll('iframe').forEach(iframe => {
                                const src = iframe.src;
                                iframe.src = '';
                                setTimeout(() => { iframe.src = src; }, 100);
                        });
                }
                updateTimestamps();
                setInterval(updateTimestamps, 1000);
                setInterval(refreshFeeds, 30000);