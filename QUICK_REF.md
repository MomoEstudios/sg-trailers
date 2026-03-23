# Quick Reference - SG Trailers

## 🎨 Design Decisions Made

### Navigation
- ✅ Mega menu for Trailers (full-screen grid)
- ✅ Desktop dropdowns: Company, Shop, Community, Owner's Guide
- ✅ Mobile accordion with › symbol (NOT →)
- ✅ Active state: gold color (#E8B800)

### Typography Scale
```
Hero H1: clamp(56px, 8vw, 110px)
Section H2: clamp(34px, 4vw, 52px)
Card Title: 38px
Body: 15-16px
Labels: 9-11px (uppercase, wide tracking)
```

### Spacing Compression Rules
- CTA sections: 50px vertical padding (not 90px)
- Value cards: 32px padding (not 48px)
- Feature boxes: 14-16px padding
- Keep breathing room but avoid excessive whitespace

### Animation Rules
- ✅ Reveal on scroll (fade up)
- ✅ Cursor follow (smooth easing)
- ❌ Card hover background changes (removed per client)
- ❌ Excessive hover animations (client prefers minimal)

## 🔧 Technical Stack

### All Pages Include:
1. Custom cursor divs (#cur, #ring)
2. Fixed nav with glassmorphism
3. Mega menu structure
4. Mobile menu with accordion
5. Footer (4-column grid + logo)
6. Reveal animation observers
7. Toggle functions for menus

### Common CSS Variables:
```css
--gold:#E8B800
--red:#B52200
--gray-dk:#4A4744
--gray-md:#737870
--black:#141312
```

## 📋 File Checklist

Before marking a page "complete":
- [ ] Logo in nav (height: 80px desktop, 60px mobile)
- [ ] Mega menu implemented
- [ ] Mobile hamburger works
- [ ] Footer with all 4 columns
- [ ] Responsive at 768px and 1024px
- [ ] Cursor hidden on mobile
- [ ] Reveal animations active
- [ ] All links point to correct pages

## 🚨 Common Fixes

### Menu Issues
**Problem:** Mobile menu doesn't close  
**Fix:** Add `onclick="closeMenu()"` to all mobile links

**Problem:** Accordion arrow wrong  
**Fix:** Use `›` not `→` in mob-group-arrow

### Responsive Issues
**Problem:** Logo too big on mobile  
**Fix:** `.nav-logo img{height:60px;}` in @media(max-width:768px)

**Problem:** Cursor shows on mobile  
**Fix:** `#cur,#ring{display:none;}` in mobile breakpoint

## 🎯 Current Sprint

**Focus:** Content refinement & new pages  
**Status:** about.html complete, ready for Community or Owner's Guide  
**Blockers:** Need real photos for models, dealer data  
**Next:** Client approval on about.html, then proceed to next page

---

**Quick Start Command for Claude Code:**
```
I'm working on SG Trailers website. Read CLAUDE.md for full context.
Current task: [describe what you need]
```
