# iMerijn.github.io
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DNSSEC Scanner</title>
    <style>
        body {
            margin: 0;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: white;
        }

        .container {
            text-align: center;
        }

        h1 {
            font-size: 2.5rem;
            margin-bottom: 20px;
        }

        input[type="text"] {
            padding: 10px;
            font-size: 1.2rem;
            border: 2px solid #ddd;
            border-radius: 5px;
            width: 300px;
            margin-bottom: 10px;
        }

        button {
            padding: 10px 20px;
            font-size: 1.2rem;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover { background-color: #2980b9; }

        #status {
            font-size: 10rem;
            font-weight: bold;
            margin: 20px 0;
        }

        .ja { color: #2ecc71; }
        .nee { color: #e74c3c; }
        .laden { color: #bdc3c7; }
        
        #details { font-size: 1.2rem; color: #666; min-height: 1.5em; }
    </style>
</head>
<body>

    <div class="container">
        <h1>Kijk maar ff</h1>
        
        <input type="text" id="domainInput" placeholder="Vul domein in..." value="">
        <button onclick="checkDNSSEC()">Yusu</button>

        <p id="status" class="laden">?</p>
        <p id="details">Voer een domeinnaam in om te controleren.</p>
    </div>

    <script>
        async function checkDNSSEC() {
            const input = document.getElementById('domainInput').value.trim();
            const statusElement = document.getElementById('status');
            const detailsElement = document.getElementById('details');

            if (!input) {
                alert("Vul eerst een domeinnaam in.");
                return;
            }

            statusElement.textContent = "...";
            statusElement.className = "laden";
            detailsElement.textContent = "Bezig met controleren...";

            try {
                const response = await fetch(`https://dns.google/resolve?name=${input}&type=A&do=true`);
                const data = await response.json();

                if (data.AD === true) {
                    statusElement.textContent = 'Ja';
                    statusElement.className = 'ja';
                    detailsElement.textContent = 'Aha, oke.';
                } else {
                    statusElement.textContent = 'Nee';
                    statusElement.className = 'nee';
                    detailsElement.textContent = 'Aha, oke.';
                }
            } catch (error) {
                statusElement.textContent = '?';
                statusElement.className = 'laden';
                detailsElement.textContent = "Er ging iets mis.";
            }
        }

        // De regel "window.onload = checkDNSSEC;" is verwijderd, 
        // zodat hij niet meer automatisch start.
    </script>

</body>
</html>
