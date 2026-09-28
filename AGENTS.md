<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

<!-- PROJECT -->
- Auto-rotating carousels use `embla-carousel-autoplay` with `playOnInit` gated on
  `prefers-reduced-motion`, `stopOnMouseEnter`/`stopOnFocusIn`, `stopOnInteraction: false`,
  and an IntersectionObserver that plays only while the slider is on screen. Why: motion stays
  opt-out friendly and no timers run off-screen. Note: embla v8 has no `autoplay` option —
  `playOnInit`/`active` are the real option names, a wrong key is silently ignored.
