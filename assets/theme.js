// ── Gedeeld light/dark thema ─────────────────────────────────────────────────
// Wordt in de <head> van elke pagina geladen, zodat het thema meteen goed staat
// (geen flits) en een keuze op de ene pagina ook op alle andere geldt.
// Geen keuze gemaakt? Dan volgen alle pagina's de instelling van het apparaat.
(function () {
    var KEY = 'theme';

    function current() {
        try {
            var saved = localStorage.getItem(KEY);
            if (saved === 'dark' || saved === 'light') return saved;
        } catch (e) {}
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function apply(theme) {
        if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
        else document.documentElement.removeAttribute('data-theme');
        var btn = document.getElementById('theme-toggle');
        if (btn) btn.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
    }

    window.toggleTheme = function () {
        var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        try { localStorage.setItem(KEY, next); } catch (e) {}
        apply(next);
    };

    apply(current());
    document.addEventListener('DOMContentLoaded', function () { apply(current()); });
})();
