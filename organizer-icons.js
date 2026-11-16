// Organizer icons for event cards (page v43, Nov 15, 2026).
// RULES (Paul, Nov 15, 2026): an organizer gets an icon ONLY when they submit
// their event through the Submit an Event form. One entry per organizer covers
// all of their events. Source order: the organizer's own website icon first,
// then Instagram, then Facebook (only when it is actually a logo).
// NO personal photos / faces, ever — anything unusable stays on the fallback.
// Cards with no matching entry use icons/ove-badge.png so every card keeps
// the same round 54px slot. `match` is a lowercase string looked up in the
// event's title + description.
window.ORGANIZER_ICONS = [
  { match: 'picks and giggles', name: 'Picks and Giggles', icon: 'icons/picks-and-giggles.png' }
];
