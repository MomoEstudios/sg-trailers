# SG Trailers Web - Project Context

## 📋 Project Overview
**Client:** SG Trailers LLC
**Industry:** Car Hauler Trailer Manufacturing
**Location:** Yuma, Arizona
**Started:** March 16, 2026
**Current Phase:** Sesión 5 — Nav Owner's Guide fix, footer mobile final, owners_guide quick nav + side nav

## 🎯 Project Goal
Build a professional, high-converting website for a direct-to-consumer trailer manufacturer. Focus on premium quality, American manufacturing, and dealer program.

---

## 📊 Current Status (March 21, 2026 — Sesión 5)

### ✅ Completed Pages (10/10)
1. **index.html** — Home: hero slider, model showcase, "Why Choose SG"
2. **catalog.html** — Product catalog with expandable panels for 4 models
3. **contact.html** — Contact form, FAQ accordion, business hours
4. **dealer_program.html** — Dealer benefits, pricing tiers, application form
5. **dealer_locations.html** — Dealer directory by region (US + Mexico)
6. **about.html** — Company story, values, manufacturing process, Why Yuma
7. **community.html** — Success stories, partners/finance, media gallery, CTA
8. **owners_guide.html** — Pre-trip checklist, tutorials, safety, maintenance schedule, downloads
9. **financing.html** — NEW (sesión 4): How it works, financing programs, dealer disclaimer, CTA
10. **parts_accessories.html** — NEW (sesión 4): Coming Soon page — 6 category previews, email notify form

### ✅ Nav Status — FULLY PROPAGATED (all 10 pages)
- Dynamic Island nav (floating pill, floating logo, theme bubble, Liquid Glass mobile menu) live on all 10 pages
- Shop dropdown: Financing → `financing.html`, Parts & Accessories → `parts_accessories.html`, Dealers → `dealer_locations.html`
- All nav links across all 10 pages updated (no more `#` or `catalog.html#financing` dead links)
- `body.scrolled` state active on all 10 pages
- **Owner's Guide**: link directo en desktop (sin dropdown) y en mobile (sin accordion) — igual que Contact
- **Community mobile**: accordion con mob-group-btn (consistente con Company/Shop)

### 📈 Time Tracking
| Fecha  | Horas  | Actividad Principal                                        |
|--------|--------|------------------------------------------------------------|
| 16 Mar | ~6 h   | index.html, estructura base                                |
| 17 Mar | ~7 h   | catalog.html con panels expandibles                        |
| 18 Mar | ~4 h   | Contact + Dealer Program                                   |
| 19 Mar | ~8 h   | Dealer Locations + refinamientos                           |
| 20 Mar | ~2 h   | About Us page (reporte 9:52 AM = 27h acumuladas)           |
| 20 Mar | ~2.5 h | Community.html + owners_guide.html (9:52 → 12:23)         |
| 20 Mar | ~2 h   | Bug fixes + tipografía global (12:23 → 16:43)             |
| 20 Mar | ~1.5 h | financing.html + parts_accessories.html + nav links update |
| 20 Mar | ~2 h   | Light mode completo (10 páginas): theme persist, gold, textos, catalog dropdown/cards, Apolo fix, dealer_locations logo, financing mobile |
| 20 Mar | ~0.5 h | Footer mobile rediseño final (logo+texto centrados, social abajo centrado — 10 páginas) |
| 21 Mar | ~2.5 h | Nav Owner's Guide → link directo desktop+mobile (10 páginas), Community accordion revertido, owners_guide quick nav bar (4 secciones) + side nav flotante (dots indicator) |
| **Total** | **~38 h** | **~47.5% del presupuesto** |

- **Budget:** 80 hours total
- **Remaining:** ~42 hours

### ✅ Sesión 4 Bug Fixes (March 20, 2026)
- community.html: SyntaxError `if(x) const` → fixed braces → JS fully functional, hamburger + sections load
- owners_guide.html: Same SyntaxError fix → tutorials, safety, maintenance sections now render
- catalog.html: nav-logo img height fixed (height:36px) → logo no longer grows/centers on scroll
- community.html + owners_guide.html: CSS transition cascade fixed on cards (merged opacity/transform into card transitions)

### ✅ Light Mode — Sistema Completo (March 20, 2026 — Sesión 4)
- Theme persistence IIFE: `<script>` inline después de `<body>` en los 10 archivos → elimina flash al navegar
- `--gold: #A67C00` override en `body.light {}` (todos los archivos) → contraste en Apple devices (#E8B800 era invisible en fondo claro)
- Hero texto: `body.light .hero-desc / .hero-btn-ghost` → gris oscuro
- catalog.html dropdown: selector específico `body.light .nav-links li .dropdown` (fix de CSS specificity)
- catalog.html cards: `body.light .model-card / .expand-row / .card-spec` → warm tones (no blanco puro)
- Textos hardcoded `rgba(255,255,255,X)` → `rgba(50,46,42,X)` en about, financing, community, owners_guide
- About Us fix en index.html nav: "  Us" → "About Us"
- Apolo nombre: eliminados `<em>` tags del JS `nameHtml` (2 colores → 1 color consistente)
- dealer_locations.html footer: texto logo → `<img src="img/logo.webp">` (igual que todos los demás)
- financing.html mobile: partners grid 1 col, CTA actions en columna, media query vacía removida

### ✅ Sesión 5 — owners_guide.html Mejoras (March 21, 2026)
- **Quick nav bar**: 4 botones debajo del hero → Pre-Trip ✓ / Tutorials ▶ / Safety ⚠ / Maintenance 🔧. Grid 4-col desktop, 2×2 mobile. Íconos gold, hover ilumina label+arrow.
- **Side nav flotante (desktop only)**: 4 dots posición fixed derecha, centrados verticalmente. Aparece al hacer scroll pasado el hero. Dot activo se agranda en gold. Hover muestra label con slide-in. JS IntersectionObserver rastrea secciones activas. Oculto en mobile.
- **Fix `<nav>` → `<div>`**: etiqueta `<nav>` heredaba CSS del nav principal y aparecía como barra arriba — corregido a `<div class="guide-sidenav">`.

### ✅ Guide Cards Mobile Fix (March 20, 2026 — Sesión 4)
- catalog.html `.guide-card`: sin override mobile → `padding:48px 60px` hacía cada card gigante
- Fix: `@media(max-width:768px)` → `padding:20px 24px; flex-direction:column; gap:6px`
- Resultado: stack limpio — icono → título → descripción → link

### ✅ Footer Mobile — Diseño Final (March 20, 2026 — Sesión 4)
- Layout: grid 2 filas → Fila 1: Logo (izq) + Tagline (der, centrado vertical) | Fila 2: Social links centrados
- `grid-template-areas:"logo tag" "soc soc"` con `row-gap:16px`
- Social links: `46×46px` (desde 36px base) + `justify-content:center`
- Aplicado en los 10 archivos

### ✅ Typography Update — All 8 Pages (March 20, 2026)
- `font-weight:300` → `font-weight:400` globally (more readable, less "premium thin")
- `font-size:13px` → `font-size:14px` globally (better for older clients/glasses wearers)
- `--gray-md: #737870` → `--gray-md: #8A8884` (improved contrast on dark backgrounds)

---

## 🎨 Design System

### Color Palette
```css
--gold:    #E8B800  /* Primary accent */
--red:     #B52200  /* CTA buttons */
--gray-dk: #4A4744  /* Secondary text */
--gray-md: #737870  /* Tertiary text */
--black:   #141312  /* Main background */
--black-s: #1C1B19  /* Section alt background */
--black-c: #232120  /* Card background */
--black-d: #0D0C0B  /* Deep black */
--white:   #FFFFFF  /* Text */
```

### Typography
- **Display:** Oswald (700, 600, 500, 400, 300)
- **Body:** Barlow (600, 500, 400, 300)
- **UI/Labels:** Barlow Condensed (700, 600, 500, 400)

### Key UI Features (actualizados marzo 20 — sesión 3)
- Custom cursor (gold dot + ring, velocity 0.700) — solo desktop

#### NAV DESKTOP — Dynamic Island
- **Isla flotante:** `position:fixed; top:20px; left:50%; transform:translateX(-50%); max-width:870px; height:52px; border-radius:100px; backdrop-filter:blur(28px)`
- **Layout interior:** Flexbox en desktop. Nav-links centrados con `position:absolute;left:50%;transform:translateX(-50%)`. Nav-right a la derecha.
- **Nav-right:** `margin-left:auto; padding-right:14px`
- **Botón "Get a Quote":** pill `border-radius:100px` (sin clip-path)
- **Logo flotante (SEPARADO de la isla):** `.nav-floating-logo` — `position:fixed; top:10px; left:max(20px, calc(50% - 470px)); z-index:9999` — img height:82px. Se oculta al scroll. Oculto en ≤960px
- **Theme bubble (SEPARADO de la isla):** `.nav-theme-bubble` — `position:fixed; top:22px; right:max(24px, calc(50% - 490px)); z-index:9999` — círculo 46×46px glassmorphism. Oculto en ≤960px
- **Logo interno `.nav-logo`:** oculto en desktop por defecto (`display:none` a ≥769px). Aparece cuando `body.scrolled` está activo.

#### SCROLLED STATE (body.scrolled) — IMPORTANTE
Cuando `scrollY > 60`, JS agrega `body.scrolled` + `floatingLogo.classList.add('hidden')`.

CSS necesario en cada página (agregar antes de `</style>`):
```css
/* ── SCROLLED: logo en isla (reemplaza floating logo) ── */
@media (min-width:769px) {
  body.scrolled nav { justify-content:space-between; }
  body.scrolled .nav-logo { display:flex !important; }
  body.scrolled .nav-links { position:absolute !important;left:50% !important;transform:translateX(-50%) !important; }
}
```

JS scroll handler (reemplaza el listener del floating logo):
```javascript
const _sc=window.scrollY>60;floatingLogo.classList.toggle('hidden',_sc);document.body.classList.toggle('scrolled',_sc);
```

Init en load (agregar después del scroll listener):
```javascript
(function(){ if(window.scrollY>60){document.body.classList.add('scrolled');const fl=document.querySelector('.nav-floating-logo');if(fl)fl.classList.add('hidden');} })();
```

#### NAV MOBILE
- Barra simple `top:0; border-radius:0` con glassmorphism + línea dorada inferior
- **Hamburger:** Circular `46×46px border-radius:50%` — `background:rgba(255,255,255,.07); border:1px solid rgba(255,255,255,.18); padding:0`
- Logo `.nav-logo` img 36px visible en mobile (el flotante está oculto)
- Theme bubble y logo flotante: `display:none` en ≤960px

#### MOBILE MENU — Liquid Glass
- `backdrop-filter:blur(48px)` + `rgba(10,9,8,.68)`
- Items full-width, font-size:16px, padding:15px 20px
- Al expandir accordion: otros ítems se dimean `.mob-dimmed { opacity:0.22 }` (no se ocultan)
- Toggle tema 🌙/☀️ circular en el header del menú (junto al botón X)
- Breakpoint iPhone SE ≤375px: font-size:14px, padding reducido

#### OTROS
- Mega menu para Trailers (pantalla completa)
- Dropdowns en desktop: Company, Shop, Community, Owner's Guide
- Reveal animations on scroll (IntersectionObserver, threshold 0.08)
- **Day/Night mode:** `toggleTheme()` → `body.light` class + `localStorage`. Sincroniza 2 íconos: `#themeToggle` (nav-theme-bubble desktop) + `#themeToggleMobile` (mobile menu header). Light mode override de variables CSS a tonos warm-white

---

## 🏗️ File Structure

```
/
├── index.html
├── catalog.html
├── contact.html
├── dealer_program.html
├── dealer_locations.html
├── about.html
├── community.html        ← NEW (sesión 3)
├── owners_guide.html     ← NEW (sesión 3)
├── img/
│   ├── logo.webp
│   ├── apolo-1.webp, apolo-2.webp, apolo-3.webp
│   ├── anubis-1.webp, anubis-2.webp, anubis-3.webp
│   ├── nemesis-1.webp, nemesis-2.webp, nemesis-3.webp
│   ├── apocalypse-1.webp, apocalypse-2.webp, apocalypse-3.webp
│   ├── hero-1.webp, hero-2.webp
│   └── (placeholders for factory, yuma photos)
└── CLAUDE.md (this file)
```

---

## 🚛 Product Line (4 Models)

### 1. Apolo - Entry Level
- **MSRP:** $6,999
- **Colors:** Blue accent (#5BB8F5)
- **Specs:** 18ft, 7000 lbs GVWR, Single Axle
- **Target:** First-time buyers, budget conscious

### 2. Anubis - Mid Range
- **MSRP:** $9,499
- **Colors:** Gold standard
- **Specs:** 20ft, 10000 lbs GVWR, Tandem Axle
- **Target:** Professional haulers

### 3. Nemesis - Upper Mid
- **MSRP:** $12,999
- **Colors:** Gold standard
- **Specs:** 22ft, 14000 lbs GVWR, Heavy Duty Tandem
- **Target:** Fleet operators

### 4. Apocalypse - Top of Line
- **MSRP:** $17,999
- **Colors:** Gold standard
- **Specs:** 24ft, 16000 lbs GVWR, Triple Axle
- **Target:** High-value cargo haulers

---

## 📝 Sesión 3 — Changes (March 20, 2026)

### Nav propagation (all 5 secondary pages)
- ✅ Dynamic Island nav propagated to: catalog, contact, dealer_program, dealer_locations, about
- ✅ Hamburger circular 46×46px — correct values: `background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.18);padding:0`
- ✅ Liquid Glass mobile menu propagated to all pages
- ✅ `body.scrolled` state on all 8 pages — floating logo fades, nav-logo appears in island for home nav
- ✅ Community + Owner's Guide nav dropdown links updated to real hrefs (community.html, owners_guide.html) across all pages
- ✅ Partners & Finance link updated to `dealer_program.html#financing` (required `&amp;` encoding fix)

### New pages built
- ✅ **community.html** — Hero, social proof bar, featured story + 6-card grid, 6 partner cards, finance banner, tabbed media gallery, CTA
- ✅ **owners_guide.html** — Hero with model filter pills, pre-trip checklist (sticky image layout), 6 video tutorials, 4 safety cards, maintenance table (DIY/Pro badges), 4 download cards, CTA

### Bug fixes
- ✅ Hamburger visibility on catalog.html mobile: was `.06`/`.12` opacity → fixed to `.07`/`.18`
- ✅ Home navigation on scroll: when floating logo hidden, `body.scrolled` shows nav-logo inside island

### Breakpoints CSS
- `1024px` — Tablet
- `768px` — Mobile (nav cambia a barra simple + hamburger)
- `480px` — Small mobile
- `375px` — iPhone SE (ajuste de font-size en mobile menu)

---

## 🔧 Technical Details

### JavaScript Features (common to all pages)
- Custom cursor con easing (rx += (mx - rx) * 0.700)
- Mobile menu: `openMenu()`, `closeMenu()`, `closeAccordion()`
- Accordion con dimming: `toggleAccordion(btn)` — dimea `.mob-dimmed` en hermanos
- `toggleTheme()` — toggle body.light + guarda localStorage + sincroniza 2 íconos
- Mega menu: `openMega()`, `closeMega()` (index.html / catalog.html)
- Reveal on scroll (IntersectionObserver, threshold 0.08)
- Floating logo scroll handler → `body.scrolled` toggle
- Theme restore IIFE (runs before DOMContentLoaded to avoid flash)

### CSS Architecture
- All styles inline (no external CSS files)
- CSS custom properties (variables)
- Botones CTA: `border-radius:100px` pill (NO clip-path)
- Nav desktop: `border-radius:100px` floating island
- Mobile menu: `backdrop-filter:blur(48px)`
- `.mob-dimmed { opacity:0.22 }` para accordion dimming
- `body.scrolled` state for in-island logo on scroll

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- backdrop-filter con -webkit- prefix
- IntersectionObserver API

---

## 📌 Pending Tasks (Para Sesión 4+)

### Content Needs
- [ ] Real photos of all 4 trailer models (3:2 aspect ratio)
- [ ] Factory/facility photos for About page
- [ ] Yuma, Arizona location photo
- [ ] Real dealer data (dealer_locations.html currently has placeholders)

### Functionality
- [ ] Connect contact forms to real email/backend
- [ ] Add WhatsApp floating button with real phone number
- [ ] Verify all internal links and anchor IDs work correctly across all pages

### Final Polish
- [ ] Client review and adjustments
- [ ] Cross-browser testing (especially Safari backdrop-filter)
- [ ] Performance optimization (image compression, lazy loading)
- [ ] SEO meta tags (title, description, OG tags) for all 8 pages
- [ ] Analytics setup (Google Analytics or similar)

### Optional
- [ ] Technical Support page

---

## 💡 Design Patterns to Follow

### Nav structure (copiar de about.html — referencia más reciente):
- Desktop: Dynamic Island flotante, logo flotante separado, theme bubble separado
- On scroll: `body.scrolled` → nav-logo inside island, nav-links stay centered via `position:absolute`
- Mobile: barra simple top:0, hamburger circular 46×46px
- Mobile menu: Liquid Glass backdrop-filter:blur(48px), accordion con dimming

### Cuando crear nuevas páginas:
1. Copiar nav completo de about.html (más reciente, sin mega menu)
2. Incluir #cur y #ring (custom cursor)
3. Aplicar .reveal class para animaciones
4. Seguir color scheme (gold accents, black backgrounds)
5. Oswald para headings, Barlow para body
6. Footer: 4-column grid con logo, links, social
7. Incluir `body.scrolled` CSS + JS init block

### Code Style:
- CSS inline (sin archivos externos)
- Descriptive class names
- Comentar secciones mayores (/* NAV */, /* HERO */, /* FOOTER */)
- Botones CTA: border-radius:100px pill
- NO usar clip-path en botones nuevos

---

## 🎯 Brand Voice
- **Tone:** Professional, confident, no-nonsense
- **Style:** Direct manufacturing, American-made pride
- **Values:** Quality, transparency, durability
- **Target:** Professional haulers, dealers, fleet operators
- **NOT:** Cheap, discount, basic, entry-level focused

---

## 📞 Client Preferences
- Compress sections when possible (avoid excessive whitespace)
- Remove unnecessary animations on hover
- Keep mobile menu clean con Liquid Glass
- Professional appearance over flashy design
- Direct communication (no dealer markups messaging)
- Hamburger y botón X deben ser circulares (sistema visual unificado)

---

## 🚀 Next Session Goals (Sesión 4)
1. Source and replace placeholder images with real product/facility photos
2. Connect contact form to real email backend (Formspree or similar)
3. Add WhatsApp floating button with real phone number
4. Update dealer_locations.html with real dealer data
5. SEO meta tags for all 8 pages
6. Cross-browser testing pass
7. Client review + polish

---

**Last Updated:** March 20, 2026 — Sesión 4 completa
**Project Manager:** Alan (rojomurillo)
**Developer:** Claude (Anthropic)
